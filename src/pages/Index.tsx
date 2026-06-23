import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';
import { services, projects, catalogCategories } from '@/data/site';

const heroSlides = [
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/db456e7f-f567-4386-bece-8e44d9816e05.jpg',
    title: 'Шкаф автоматики на ПЛК ОВЕН ПЛК200',
    caption: 'Модули ввода-вывода и релейная группа',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/275932a9-bc58-4eef-ada3-40f4f280e365.jpg',
    title: 'Системы релейной автоматики',
    caption: 'Маркировка и раскладка проводов',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/b8ca329b-2172-4dd9-8cf2-58dda46393f8.png',
    title: 'Конструктив шкафа автоматизации',
    caption: 'Компоновка оборудования ТМ ESM',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/f28b6ffe-6ae5-4857-a82e-b08c7f7498f9.jpg',
    title: 'Шкаф управления котельной',
    caption: 'Полная заводская сборка с разводкой',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/530193ea-7007-4dc4-8909-d89289f34475.jpg',
    title: 'Шкаф с частотными преобразователями VEDA VFD',
    caption: 'Готовое изделие на объекте',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/5f587532-c940-4790-a428-3438e3718481.jpg',
    title: 'Два шкафа управления приводами',
    caption: 'Полная сборка с автоматикой VEDA VFD',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/ad88726c-7197-4652-8e5c-f9170da921d0.jpg',
    title: 'Монтаж силовой и слаботочной части',
    caption: 'Сборка релейной автоматики CHNT',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/80d14b34-8ef5-4447-9941-b2000ff9e665.jpg',
    title: 'Шкафы противопожарной автоматики',
    caption: 'Управление системой дымоудаления',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/b480b9a0-409b-44b7-92e8-b8662de6761d.jpg',
    title: 'Производство и пусконаладка',
    caption: 'Проверка шкафа управления на стенде',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/3ac7250f-2bd7-4827-ad17-eb0e4573cef0.jpg',
    title: 'Проектирование в AutoCAD',
    caption: 'Разработка электрических схем',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/3df4b51f-637c-46ba-86fe-c2c53502991b.jpg',
    title: 'Шкаф управления конденсата на ПЛК ОВЕН',
    caption: 'С приводами Sinvel и документацией',
  },
  {
    src: 'https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/85cdb363-9d5c-4970-a595-eb724167a33d.jpg',
    title: 'Разработка ПО и наладка',
    caption: 'Программирование контроллеров ESM HYDRO',
  },
];

const Index = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <section className="relative gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 tech-grid grid-animate opacity-30"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="energy-line" style={{ top: '22%', animationDelay: '0s' }} />
          <div className="energy-line" style={{ top: '48%', animationDelay: '1.2s' }} />
          <div className="energy-line" style={{ top: '70%', animationDelay: '2.1s' }} />
          <div className="energy-line" style={{ top: '88%', animationDelay: '0.6s' }} />
        </div>
        <div className="container mx-auto px-4 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider mb-6 animate-float-up" style={{ animationDelay: '0s' }}>
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Работаем по всей России
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 animate-float-up" style={{ animationDelay: '0.15s' }}>
                Инжиниринг и производство<br />
                <span className="text-accent">шкафов управления</span>,<br />
                автоматики и распределения
              </h1>
              <p className="text-lg opacity-90 mb-8 max-w-xl animate-float-up" style={{ animationDelay: '0.3s' }}>
                Производство систем управления, автоматизации, диспетчеризации, распределения энергии.
                Проектирование, монтаж, ПНР. tm ESM, HYDRO
              </p>
              <div className="flex flex-wrap gap-4 animate-float-up" style={{ animationDelay: '0.45s' }}>
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
              <div className="relative aspect-[4/3] lg:aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10">
                {heroSlides.map((s, i) => (
                  <img
                    key={s.src}
                    src={s.src}
                    alt={s.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-accent mb-1">// Производство</div>
                  <div className="text-white text-lg lg:text-xl font-bold transition-all duration-500" key={heroSlides[slide].title}>
                    {heroSlides[slide].title}
                  </div>
                  <div className="text-white/70 text-sm mt-1">{heroSlides[slide].caption}</div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSlide(i)}
                      aria-label={`Слайд ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${i === slide ? 'bg-accent w-8' : 'bg-white/40 w-4 hover:bg-white/70'}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-primary p-4 rounded-lg shadow-xl hidden md:block">
                <div className="text-3xl font-bold">100+</div>
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
              { v: '24/7', l: 'сервисная служба' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl lg:text-5xl font-bold text-primary">{s.v}</div>
                <div className="text-xs lg:text-sm text-muted-foreground font-mono uppercase tracking-wider mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-3">
              <Icon name="BadgeCheck" size={16} />
              Официальный дистрибьютор
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary">
              «Энергоспецмонтаж» — официальный дистрибьютор
              <span className="text-accent"> Ридан</span>,
              <span className="text-accent"> VEDA</span> и
              <span className="text-accent"> ДЕВИ</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-stretch gap-4 mt-8">
            {['Ридан', 'VEDA', 'ДЕВИ'].map((brand) => (
              <div
                key={brand}
                className="flex items-center gap-2 bg-white border border-border rounded-lg px-6 py-4 min-w-[160px] justify-center shadow-sm"
              >
                <Icon name="ShieldCheck" size={20} className="text-accent" />
                <span className="text-lg font-bold text-primary">{brand}</span>
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