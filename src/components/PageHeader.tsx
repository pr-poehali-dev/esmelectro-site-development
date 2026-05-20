interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
}

const PageHeader = ({ badge, title, subtitle }: PageHeaderProps) => {
  return (
    <section className="gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="container mx-auto px-4 py-16 lg:py-20 relative">
        <div className="text-xs font-mono uppercase tracking-wider text-accent mb-3">// {badge}</div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg opacity-80 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
