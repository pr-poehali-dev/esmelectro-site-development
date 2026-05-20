import Icon from '@/components/ui/icon';
import PageHeader from '@/components/PageHeader';

const About = () => {
  const values = [
    { icon: 'ShieldCheck', title: 'Надёжность', desc: 'Допуски СРО, аккредитованная электролаборатория, гарантия 5 лет на все работы.' },
    { icon: 'Cpu', title: 'Технологичность', desc: 'BIM-проектирование, цифровые подстанции, удалённый мониторинг объектов.' },
    { icon: 'Clock', title: 'Сроки', desc: 'Чёткое соблюдение графика. Аварийная служба с реагированием за 2 часа.' },
    { icon: 'Users', title: 'Команда', desc: '120 аттестованных специалистов: проектировщики, монтажники, наладчики.' },
  ];

  const timeline = [
    { year: '2008', text: 'Основание компании. Первые объекты — РУ-0,4 кВ для торговых центров.' },
    { year: '2012', text: 'Получение СРО проектирования и строительства. Первая подстанция 35 кВ.' },
    { year: '2016', text: 'Открытие собственной электролаборатории. Допуск Ростехнадзора.' },
    { year: '2020', text: 'Внедрение BIM-проектирования. Контракты с федеральными ритейлерами.' },
    { year: '2024', text: 'Первая цифровая подстанция 110 кВ с шиной процесса МЭК 61850.' },
  ];

  return (
    <div>
      <PageHeader
        badge="О компании"
        title="Энергоспецмонтаж"
        subtitle="Инжиниринговая компания полного цикла. С 2008 года проектируем, поставляем и монтируем электрооборудование для промышленных и гражданских объектов."
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
              Мы строим энергетическую инфраструктуру, на которой работают заводы,
              склады, дата-центры и жилые кварталы. Наша работа — это надёжность электроснабжения
              для тысяч компаний и десятков тысяч людей.
            </p>
            <p className="text-muted-foreground">
              За 17 лет мы выросли из небольшой монтажной бригады в инжиниринговую компанию
              полного цикла со своей электролабораторией, проектным бюро и складом оборудования.
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