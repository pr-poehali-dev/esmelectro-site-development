import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';
import { services, projects, catalogCategories } from '@/data/site';

const Index = () => {
  return (
    <div>
      <section className="relative gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30"></div>
        <div className="container mx-auto px-4 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Энергетика · С 2008 года
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Инжиниринг и производство<br />
                <span className="text-accent">шкафов управления</span>,<br />
                автоматики и распределения
              </h1>
              <p className="text-lg opacity-90 mb-8 max-w-xl">
                Проектируем, поставляем и монтируем электрооборудование 0,4–110 кВ.
                СРО, электролаборатория, гарантия 5 лет.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/catalog">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    Каталог оборудования
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20">
                    Запросить КП
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/files/b2d733b6-fc2f-4b9b-b0e8-c4882400d1cc.jpg"
                alt="Энергооборудование"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-primary p-4 rounded-lg shadow-xl hidden md:block">
                <div className="text-3xl font-bold">450+</div>
                <div className="text-xs font-mono uppercase text-muted-foreground">объектов сдано</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center max-w-3xl mx-auto">
            {[
              { v: '100+', l: 'реализованных проектов' },
              { v: '24/7', l: 'аварийная служба' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl lg:text-5xl font-bold text-primary">{s.v}</div>
                <div className="text-xs lg:text-sm text-muted-foreground font-mono uppercase tracking-wider mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">// Услуги</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Полный цикл работ</h2>
          </div>
          <Link to="/services" className="text-accent font-semibold flex items-center gap-1">
            Все услуги <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s) => (
            <div key={s.title} className="border border-border rounded-lg p-6 hover:border-accent transition-colors group">
              <div className="w-12 h-12 bg-secondary group-hover:bg-accent transition-colors rounded flex items-center justify-center mb-4">
                <Icon name={s.icon as never} size={24} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 tech-grid-dark">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">// Каталог</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Электрооборудование</h2>
            </div>
            <Link to="/catalog" className="text-accent font-semibold flex items-center gap-1">
              Весь каталог <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogCategories.map((c) => (
              <Link to="/catalog" key={c.id} className="bg-white rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary rounded flex items-center justify-center mb-4">
                  <Icon name={c.icon as never} size={28} className="text-accent" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{c.name}</h3>
                <div className="text-xs font-mono text-muted-foreground">{c.items.length} ПОЗИЦИЙ</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">// Проекты</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Реализованные объекты</h2>
          </div>
          <Link to="/projects" className="text-accent font-semibold flex items-center gap-1">
            Все проекты <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((p) => (
            <div key={p.title} className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
              <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono bg-secondary px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.client} · {p.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">// Запрос</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Подготовим коммерческое предложение
              </h2>
              <p className="opacity-80 mb-8">
                Расскажите о задаче — наш инженер подготовит расчёт стоимости оборудования и работ в течение одного рабочего дня.
              </p>
              <div className="space-y-3">
                {['Бесплатный выезд специалиста', 'Прозрачное ценообразование', 'Поставка от 1 дня', 'Гарантия 5 лет'].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-accent" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <LeadForm
              title="Заявка на КП"
              subtitle="Расчёт стоимости за 1 рабочий день"
              leadType="kp"
              defaultSubject="Запрос коммерческого предложения"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;