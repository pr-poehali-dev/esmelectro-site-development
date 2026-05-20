import { useState, useMemo } from 'react';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/data/site';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Все');

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.category && set.add(p.category));
    return ['Все', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === 'Все') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <PageHeader
        badge="Проекты"
        title="Реализованные объекты"
        subtitle="Шкафы управления, автоматики и распределения для аэропортов, гостиниц, театров, водоканалов, очистных сооружений и промышленных предприятий по всей России."
      />

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const count = cat === 'Все' ? projects.length : projects.filter((p) => p.category === cat).length;
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  isActive
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-primary border-border hover:border-accent hover:text-accent'
                }`}
              >
                {cat} <span className="opacity-60 font-mono">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filtered.map((p) => (
            <article key={p.title} className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors group">
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono bg-secondary text-primary px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <h3 className="font-bold text-xl text-primary mb-2">{p.title}</h3>
                <p className="text-sm font-mono text-muted-foreground mb-3">{p.client} · {p.year}</p>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            В этой категории пока нет проектов.
          </div>
        )}
      </section>

      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Вы можете стать следующим</h2>
          <p className="opacity-80 mb-8 max-w-xl mx-auto">
            Обсудим вашу задачу и предложим оптимальное техническое и коммерческое решение.
          </p>
          <a
            href="/contacts"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded font-semibold"
          >
            Обсудить проект
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;