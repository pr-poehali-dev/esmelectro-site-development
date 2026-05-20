import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/about', label: 'О компании' },
  { to: '/catalog', label: 'Каталог' },
  { to: '/catalog#serial', label: 'Серийные шкафы', accent: true },
  { to: '/services', label: 'Услуги' },
  { to: '/projects', label: 'Проекты' },
  { to: '/blog', label: 'Блог' },
  { to: '/contacts', label: 'Контакты' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/fc1a918b-d3b4-4990-93d6-d9f61d79771e/bucket/1df36da3-4bca-4a09-8b4f-3253bcefb13b.png"
              alt="Энергоспецмонтаж"
              className="h-10 lg:h-12 w-auto"
            />
            <div className="leading-tight hidden sm:block">
              <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">ТМ ESM · HYDRO</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.to.includes('#')) {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`px-3 py-2 text-sm font-semibold transition-colors rounded ${
                      item.accent ? 'text-accent hover:text-accent/80' : 'text-foreground hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors rounded ${
                      isActive
                        ? 'text-accent'
                        : 'text-foreground hover:text-accent'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+78002014036" className="text-sm font-semibold text-primary flex items-center gap-2">
              <Icon name="Phone" size={16} />
              +7 (800) 201-40-36
            </a>
            <a href="tel:+78632944281" className="text-sm font-semibold text-primary flex items-center gap-2">
              <Icon name="Phone" size={16} />
              (863) 294-42-81
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <Icon name={open ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t pt-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                if (item.to.includes('#')) {
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`px-3 py-2 text-sm font-semibold rounded ${
                        item.accent ? 'text-accent' : 'text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium rounded ${
                        isActive ? 'bg-secondary text-accent' : 'text-foreground'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
              <a href="tel:+78002014036" className="px-3 py-2 text-sm font-semibold text-primary flex items-center gap-2 mt-2">
                <Icon name="Phone" size={16} />
                +7 (800) 201-40-36
              </a>
              <a href="tel:+78632944281" className="px-3 py-2 text-sm font-semibold text-primary flex items-center gap-2">
                <Icon name="Phone" size={16} />
                (863) 294-42-81
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;