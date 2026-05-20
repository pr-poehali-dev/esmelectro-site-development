import Icon from '@/components/ui/icon';
import PageHeader from '@/components/PageHeader';

const About = () => {
  const values = [
    { icon: 'ShieldCheck', title: 'Надёжность', desc: 'Собственное производство, контроль качества на каждом этапе, гарантия на изделия.' },
    { icon: 'Cpu', title: 'Технологичность', desc: 'Современные решения автоматизации, диспетчеризации и распределения энергии.' },
    { icon: 'Clock', title: 'Сроки', desc: 'Чёткое соблюдение графика производства и монтажа. Поддержка 24/7.' },
    { icon: 'Users', title: 'Команда', desc: 'Опытные инженеры-проектировщики, монтажники и наладчики систем автоматики.' },
  ];

  const timeline = [
    { year: '2023', text: 'Основание компании. Запуск производства шкафов управления, автоматики и распределения.' },
    { year: '2024', text: 'Расширение производственной площадки в Батайске. Первые крупные объекты по югу России.' },
    { year: '2025', text: 'Запуск собственных торговых марок ESM и HYDRO. Работа по всей России.' },
    { year: '2026', text: 'Развитие направления диспетчеризации и систем удалённого мониторинга объектов.' },
  ];

  return (
    <div>
      <PageHeader
        badge="О компании"
        title="Энергоспецмонтаж"
        subtitle="Производственная и инжиниринговая компания. С 2023 года выпускаем шкафы управления, автоматики и распределения под собственными торговыми марками ESM и HYDRO."
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/files/6b88877d-8433-4e86-8720-e20080cfeb56.jpg"
            alt="Производство шкафов автоматики"
            className="rounded-lg shadow-lg w-full"
          />
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">// Миссия</div>
            <h2 className="text-3xl font-bold text-primary mb-6">Энергия, которой можно доверять</h2>
            <p className="text-muted-foreground mb-4">
              Мы производим шкафы управления и автоматики для промышленных объектов:
              заводов, насосных станций, котельных, складов и коммерческой недвижимости
              по всей России.
            </p>
            <p className="text-muted-foreground">
              Собственное производство в Батайске, проектный отдел и пусконаладка — полный цикл
              от технического задания до сдачи объекта под ключ. Работаем под собственными
              торговыми марками ESM и HYDRO.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="container mx-auto px-4 py-16">
          <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">// Принципы</div>
          <h2 className="text-3xl font-bold text-primary mb-10">Ценности компании</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4">
                  <Icon name={v.icon as never} size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">// История</div>
        <h2 className="text-3xl font-bold text-primary mb-10">Путь компании</h2>
        <div className="space-y-6">
          {timeline.map((t) => (
            <div key={t.year} className="flex gap-6 items-start border-l-2 border-accent pl-6 pb-6">
              <div className="font-mono text-2xl font-bold text-accent min-w-[80px]">{t.year}</div>
              <div className="text-muted-foreground pt-1">{t.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Award" size={40} className="text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">СРО</div>
              <div className="text-sm opacity-70">Проектирование и строительство</div>
            </div>
            <div>
              <Icon name="FileCheck" size={40} className="text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">ISO 9001</div>
              <div className="text-sm opacity-70">Система менеджмента качества</div>
            </div>
            <div>
              <Icon name="Zap" size={40} className="text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">Электролаборатория</div>
              <div className="text-sm opacity-70">Свидетельство Ростехнадзора</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;