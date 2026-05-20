import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import LeadForm from '@/components/LeadForm';
import { catalogCategories, serialProducts } from '@/data/site';

const Catalog = () => {
  const [active, setActive] = useState(catalogCategories[0].id);
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const current = catalogCategories.find((c) => c.id === active)!;

  const handleRequest = (item: string) => {
    setSelectedItem(item);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('catalog-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div>
      <PageHeader
        badge="Каталог"
        title="Электрооборудование"
        subtitle="Распределительные устройства, трансформаторы, кабельная продукция, автоматика и РЗА. Прямые поставки от российских и зарубежных производителей."
      />

      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="text-xs font-mono uppercase tracking-wider text-accent mb-3">// Категории</div>
              <div className="space-y-2">
                {catalogCategories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      active === c.id
                        ? 'bg-primary text-white'
                        : 'bg-secondary/50 hover:bg-secondary text-primary'
                    }`}
                  >
                    <Icon name={c.icon as never} size={20} />
                    <span className="font-medium text-sm">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-primary mb-6">{current.name}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {current.items.map((item) => (
                <div key={item.name} className="border border-border rounded-lg p-5 hover:border-accent transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-primary">{item.name}</h3>
                    <span className="text-xs font-mono bg-accent/10 text-accent px-2 py-1 rounded">В НАЛИЧИИ</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <Button
                    onClick={() => handleRequest(item.name)}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white w-full"
                  >
                    Запросить КП
                    <Icon name="ArrowRight" size={14} className="ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="serial" className="bg-secondary/30 border-y border-border scroll-mt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">// Серийная продукция</div>
              <h2 className="text-3xl font-bold text-primary">Готовые шкафы HYDRO и дымоудаления</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Собственные серийные разработки ESM с типовыми характеристиками и пожарным сертификатом. Срок поставки от 2-3 недель.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serialProducts.map((p) => (
              <article key={p.name} className="bg-white border border-border rounded-lg overflow-hidden flex flex-col hover:border-accent transition-colors">
                <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-primary text-lg leading-tight">{p.name}</h3>
                    {p.badge && (
                      <span className="text-[10px] font-mono bg-accent text-white px-2 py-1 rounded uppercase whitespace-nowrap">{p.badge}</span>
                    )}
                  </div>
                  <p className="text-sm font-mono text-muted-foreground mb-3">{p.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.specs.map((s) => (
                      <span key={s} className="text-xs font-mono bg-secondary text-primary px-2 py-1 rounded">{s}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs text-muted-foreground">· {s}</span>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleRequest(p.name)}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white w-full mt-auto"
                  >
                    Запросить КП
                    <Icon name="ArrowRight" size={14} className="ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showForm && (
        <section id="catalog-form" className="bg-secondary/40">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
              <LeadForm
                title="Запрос коммерческого предложения"
                subtitle={`По позиции: ${selectedItem}`}
                leadType="kp"
                defaultSubject={`КП на ${selectedItem}`}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Catalog;