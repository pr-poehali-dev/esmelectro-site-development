import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    '''
    Бизнес-логика: принимает заявки клиентов с сайта Энергоспецмонтаж и сохраняет в БД
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

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({'success': True, 'id': lead_id, 'message': 'Заявка принята'})
        }

    return {
        'statusCode': 405,
        'headers': headers,
        'body': json.dumps({'error': 'Method not allowed'})
    }
