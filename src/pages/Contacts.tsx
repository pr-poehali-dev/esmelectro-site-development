import Icon from '@/components/ui/icon';
import PageHeader from '@/components/PageHeader';
import LeadForm from '@/components/LeadForm';

const Contacts = () => {
  const contacts = [
    { icon: 'Phone', title: 'Телефон', value: '+7 (800) 201-40-36', href: 'tel:+78002014036' },
    { icon: 'Phone', title: 'Телефон', value: '(863) 294-42-81', href: 'tel:+78632944281' },
    { icon: 'Smartphone', title: 'Мобильный', value: '(918) 55-44-281', href: 'tel:+79185544281' },
    { icon: 'Mail', title: 'E-mail', value: 'energomontag@internet.ru', href: 'mailto:energomontag@internet.ru' },
    { icon: 'MapPin', title: 'Адрес', value: 'Ростовская обл., г. Батайск, ул. Заводская, 266' },
    { icon: 'Clock', title: 'Режим работы', value: 'Пн-Пт: 9:00–18:00 · Поддержка 24/7' },
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
                  <a href="mailto:energomontag@internet.ru" className="font-semibold hover:text-accent">energomontag@internet.ru</a>
                </div>
                <div>
                  <div className="opacity-70 text-xs font-mono uppercase">Проектный отдел</div>
                  <a href="mailto:energomontag@internet.ru" className="font-semibold hover:text-accent">energomontag@internet.ru</a>
                </div>
                <div>
                  <div className="opacity-70 text-xs font-mono uppercase">Сервис 24/7</div>
                  <a href="tel:+78002014036" className="font-semibold hover:text-accent">+7 (800) 201-40-36</a>
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
              title="Карта · г. Батайск, ул. Заводская, 266"
              src="https://yandex.ru/map-widget/v1/?text=Ростовская%20область%2C%20Батайск%2C%20Заводская%20улица%2C%20266&z=16"
              width="100%"
              height="400"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">// Маршрут</div>
        <h2 className="text-3xl font-bold text-primary mb-10">Как до нас добраться</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6 hover:border-accent transition-colors">
            <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4">
              <Icon name="Car" size={24} className="text-accent" />
            </div>
            <h3 className="font-bold text-lg text-primary mb-3">На автомобиле</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Из Ростова-на-Дону по трассе М-4 «Дон» — около 20 минут в сторону Батайска.
              Съезд на ул. Заводская, ориентир — промзона.
            </p>
            <p className="text-xs font-mono text-muted-foreground">Парковка для клиентов на территории.</p>
          </div>

          <div className="border border-border rounded-lg p-6 hover:border-accent transition-colors">
            <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4">
              <Icon name="Bus" size={24} className="text-accent" />
            </div>
            <h3 className="font-bold text-lg text-primary mb-3">Общественным транспортом</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Из Ростова — маршрутки и автобусы до Батайска (Автовокзал).
              Далее — городским транспортом или такси до ул. Заводской.
            </p>
            <p className="text-xs font-mono text-muted-foreground">Дорога занимает ~40 минут.</p>
          </div>

          <div className="border border-border rounded-lg p-6 hover:border-accent transition-colors">
            <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4">
              <Icon name="Train" size={24} className="text-accent" />
            </div>
            <h3 className="font-bold text-lg text-primary mb-3">На электричке</h3>
            <p className="text-sm text-muted-foreground mb-3">
              От Главного железнодорожного вокзала Ростова — пригородные электропоезда до станции «Батайск».
              Далее — такси до производства (~10 минут).
            </p>
            <p className="text-xs font-mono text-muted-foreground">В пути 25–30 минут.</p>
          </div>
        </div>

        <div className="mt-8 bg-primary text-white rounded-lg p-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={22} className="text-accent shrink-0 mt-0.5" />
            <p className="text-sm">
              Планируете визит? Позвоните заранее — мы организуем встречу
              и проведём по производству.
            </p>
          </div>
          <a
            href="tel:+78002014036"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded font-semibold whitespace-nowrap"
          >
            <Icon name="Phone" size={16} />
            +7 (800) 201-40-36
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contacts;