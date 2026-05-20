import json
import os
import smtplib
import psycopg2
from email.mime.text import MIMEText
from email.header import Header
from email.utils import formataddr

NOTIFICATION_EMAIL = 'energomontag@internet.ru'


def send_notification_email(name, phone, email, company, subject, message, lead_type, lead_id):
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')

    if not smtp_host or not smtp_user or not smtp_password:
        return False, 'SMTP not configured'

    type_labels = {
        'contact': 'Форма обратной связи',
        'quote': 'Запрос коммерческого предложения',
        'callback': 'Заказ обратного звонка',
    }
    type_label = type_labels.get(lead_type, lead_type)

    text_body = f"""Новая заявка с сайта Энергоспецмонтаж

Тип: {type_label}
ID заявки: #{lead_id}

Имя: {name}
Телефон: {phone}
E-mail: {email or '—'}
Компания: {company or '—'}
Тема: {subject or '—'}

Сообщение:
{message or '—'}
"""

    msg = MIMEText(text_body, 'plain', 'utf-8')
    msg['Subject'] = Header(f'Заявка с сайта #{lead_id} — {name}', 'utf-8')
    msg['From'] = formataddr((str(Header('Сайт Энергоспецмонтаж', 'utf-8')), smtp_user))
    msg['To'] = NOTIFICATION_EMAIL
    msg['Reply-To'] = email if email else smtp_user

    try:
        if '465' in smtp_host or smtp_host.startswith('ssl://'):
            host = smtp_host.replace('ssl://', '')
            server = smtplib.SMTP_SSL(host, 465, timeout=15)
        else:
            server = smtplib.SMTP_SSL(smtp_host, 465, timeout=15)
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, [NOTIFICATION_EMAIL], msg.as_string())
        server.quit()
        return True, 'ok'
    except Exception as e:
        return False, str(e)


def handler(event: dict, context) -> dict:
    '''
    Бизнес-логика: принимает заявки клиентов с сайта Энергоспецмонтаж,
    сохраняет в БД и отправляет уведомление на energomontag@internet.ru
    Args: event - dict с httpMethod, body, headers; context - объект с request_id
    Returns: HTTP response dict с подтверждением
    '''
    method = event.get('httpMethod', 'GET')

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    if method == 'POST':
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '').strip()
        phone = body.get('phone', '').strip()
        email = body.get('email', '').strip()
        company = body.get('company', '').strip()
        subject = body.get('subject', '').strip()
        message = body.get('message', '').strip()
        lead_type = body.get('lead_type', 'contact').strip()

        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'Имя и телефон обязательны'})
            }

        dsn = os.environ.get('DATABASE_URL')
        conn = psycopg2.connect(dsn)
        cur = conn.cursor()
        name_e = name.replace("'", "''")
        phone_e = phone.replace("'", "''")
        email_e = email.replace("'", "''")
        company_e = company.replace("'", "''")
        subject_e = subject.replace("'", "''")
        message_e = message.replace("'", "''")
        lead_type_e = lead_type.replace("'", "''")
        cur.execute(
            f"INSERT INTO leads (name, phone, email, company, subject, message, lead_type) "
            f"VALUES ('{name_e}', '{phone_e}', '{email_e}', '{company_e}', '{subject_e}', '{message_e}', '{lead_type_e}') RETURNING id"
        )
        lead_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        email_sent, email_status = send_notification_email(
            name, phone, email, company, subject, message, lead_type, lead_id
        )

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'success': True,
                'id': lead_id,
                'email_sent': email_sent,
                'message': 'Заявка принята'
            })
        }

    return {
        'statusCode': 405,
        'headers': headers,
        'body': json.dumps({'error': 'Method not allowed'})
    }
