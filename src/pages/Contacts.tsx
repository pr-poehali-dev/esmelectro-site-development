import Icon from '@/components/ui/icon';
import PageHeader from '@/components/PageHeader';
import LeadForm from '@/components/LeadForm';

const Contacts = () => {
  const contacts = [
    { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67', href: 'tel:+74951234567' },
    { icon: 'Mail', title: 'E-mail', value: 'info@esmelectro.ru', href: 'mailto:info@esmelectro.ru' },
    { icon: 'MapPin', title: 'Адрес', value: 'Москва, ул. Промышленная, 15' },
    { icon: 'Clock', title: 'Режим работы', value: 'Пн-Пт: 9:00–18:00 · Авария 24/7' },
  ];

  return (
    <div>
      <PageHeader
        badge="Контакты"
        title="Свяжитесь с нами"
        subtitle="Готовы обсудить проект, подготовить КП или ответить на технические вопросы."
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8">Контактные данные</h2>
            <div className="space-y-5 mb-10">
              {contacts.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center shrink-0">
                    <Icon name={c.icon as never} size={22} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                      {c.title}
                    </div>
                    {c.href ? (
                      <a href={c.href} className="text-lg font-semibold text-primary hover:text-accent">
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-lg font-semibold text-primary">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Отделы</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="opacity-70 text-xs font-mono uppercase">Продажи</div>
                  <a href="mailto:sales@esmelectro.ru" className="font-semibold hover:text-accent">sales@esmelectro.ru</a>
                </div>
                <div>
                  <div className="opacity-70 text-xs font-mono uppercase">Проектный отдел</div>
                  <a href="mailto:project@esmelectro.ru" className="font-semibold hover:text-accent">project@esmelectro.ru</a>
                </div>
                <div>
                  <div className="opacity-70 text-xs font-mono uppercase">Сервис 24/7</div>
                  <a href="tel:+74951234500" className="font-semibold hover:text-accent">+7 (495) 123-45-00</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <LeadForm
              title="Написать нам"
              subtitle="Ответим в течение рабочего дня"
              leadType="contact"
              compact
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="container mx-auto px-4 py-12">
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              title="Карта"
              src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755814&z=12"
              width="100%"
              height="400"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
