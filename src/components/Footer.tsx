import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent flex items-center justify-center rounded">
                <Icon name="Zap" size={22} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">ЭСМ</div>
                <div className="text-[10px] font-mono uppercase tracking-wider opacity-70">Энергоспецмонтаж</div>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Электромонтажные работы и поставка электрооборудования с 2008 года.
            </p>
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
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={14} className="mt-1" />
                <a href="mailto:info@esmelectro.ru">info@esmelectro.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={14} className="mt-1" />
                <span>Москва, ул. Промышленная, 15</span>
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
          <div>© 2008–2026 ООО «Энергоспецмонтаж». Все права защищены.</div>
          <div className="font-mono">esmelectro.ru</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
