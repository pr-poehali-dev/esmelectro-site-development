import Icon from '@/components/ui/icon';
import PageHeader from '@/components/PageHeader';
import LeadForm from '@/components/LeadForm';
import { services } from '@/data/site';

const Services = () => {
  return (
    <div>
      <PageHeader
        badge="Услуги"
        title="Полный цикл инжиниринга"
        subtitle="От разработки проекта до пусконаладки и сервисного обслуживания. Все работы выполняем собственными силами."
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-primary rounded flex items-center justify-center shrink-0">
                  <Icon name={s.icon as never} size={28} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={14} className="text-accent" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="container mx-auto px-4 py-16">
          <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2 text-center">// Этапы работы</div>
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Как мы работаем</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '01', t: 'Заявка', d: 'Уточняем задачу, сроки и бюджет' },
              { n: '02', t: 'Проект', d: 'Готовим ТКП и проектную документацию' },
              { n: '03', t: 'Реализация', d: 'Поставка, монтаж, пусконаладка' },
              { n: '04', t: 'Сервис', d: 'Гарантия 5 лет и обслуживание' },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-lg p-6 border border-border">
                <div className="font-mono text-3xl font-bold text-accent mb-3">{step.n}</div>
                <h3 className="font-bold text-primary mb-2">{step.t}</h3>
                <p className="text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <LeadForm
            title="Заказать услугу"
            subtitle="Подготовим предложение под вашу задачу"
            leadType="service"
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
