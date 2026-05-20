import Icon from '@/components/ui/icon';
import PageHeader from '@/components/PageHeader';
import { blogPosts } from '@/data/site';

const Blog = () => {
  return (
    <div>
      <PageHeader
        badge="Блог"
        title="Экспертиза в энергетике"
        subtitle="Статьи наших инженеров: разбираем оборудование, нормативы, технологии и реальные кейсы из практики."
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs font-mono text-muted-foreground">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded uppercase">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="text-accent font-semibold text-sm flex items-center gap-1">
                  Читать статью <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="container mx-auto px-4 py-16 text-center">
          <Icon name="Mail" size={40} className="text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary mb-3">Подпишитесь на новости</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Раз в месяц присылаем подборку статей и обзоров новых проектов.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-border rounded focus:outline-none focus:border-accent"
            />
            <button className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary/90">
              Подписаться
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
