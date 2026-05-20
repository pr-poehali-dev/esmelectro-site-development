import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4 bg-white rounded-lg p-3 inline-flex">
              <img
                src="https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/1df36da3-4bca-4a09-8b4f-3253bcefb13b.png"
                alt="Энергоспецмонтаж"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm opacity-80 mb-4">
              Производство систем управления, автоматизации и распределения энергии.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded px-2.5 py-1 text-xs font-mono uppercase tracking-wider">
                <Icon name="BadgeCheck" size={12} className="text-accent" />
                ТМ ESM
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded px-2.5 py-1 text-xs font-mono uppercase tracking-wider">
                <Icon name="BadgeCheck" size={12} className="text-accent" />
                ТМ HYDRO
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Разделы</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:text-accent">О компании</Link></li>
              <li><Link to="/catalog" className="hover:text-accent">Каталог</Link></li>
              <li><Link to="/services" className="hover:text-accent">Услуги</Link></li>
              <li><Link to="/projects" className="hover:text-accent">Проекты</Link></li>
              <li><Link to="/blog" className="hover:text-accent">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={14} className="mt-1" />
                <a href="tel:+78002014036">+7 (800) 201-40-36</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={14} className="mt-1" />
                <a href="tel:+78632944281">(863) 294-42-81</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Smartphone" size={14} className="mt-1" />
                <a href="tel:+79185544281">(918) 55-44-281</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={14} className="mt-1" />
                <a href="mailto:energomontag@internet.ru">energomontag@internet.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={14} className="mt-1" />
                <span>Ростовская обл., г. Батайск, ул. Заводская, 266</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Режим работы</h4>
            <p className="text-sm opacity-80">
              Пн-Пт: 9:00 — 18:00<br />
              Сб-Вс: выходной
            </p>
            <p className="text-sm opacity-80 mt-3">
              Аварийная служба:<br />
              <span className="font-semibold text-accent">24/7</span>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs opacity-60">
          <div>© 2023–2026 ООО «Энергоспецмонтаж». Все права защищены.</div>
          <div className="font-mono">energomontag.ru</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;