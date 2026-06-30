import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import mecsekLogo from '../assets/files_8595244-2026-05-20T10-39-02-736Z-image.png';
import castrolLogo from '../assets/files_8595244-2026-05-20T10-39-06-067Z-image.png';

const navLinks = [
  { label: 'Főoldal', href: '/', type: 'home' },
  { label: 'Rólunk', href: '#rolunk', type: 'anchor' },
  { label: 'Szolgáltatások', href: '#szolgaltatasok', type: 'anchor' },
  { label: 'Termékek', href: '#termekek', type: 'anchor' },
  { label: 'Galéria', href: '/galeria', type: 'page' },
  { label: 'Kapcsolat', href: '#kapcsolat', type: 'anchor' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const isHome = window.location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string, type: string) => {
    setMenuOpen(false);
    if (type === 'home' || type === 'page') {
      window.location.href = href;
    } else {
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {bannerVisible && (
        <div className="bg-primary text-white text-sm font-body py-2 px-4 flex items-center justify-between relative" style={{ zIndex: 9999 }}>
          <span className="flex items-center gap-2">
            <span className="text-base">🕐</span>
            <span>Nyitvatartás: <strong>H–P 8:00–17:00</strong> | <strong>Szo 8:00–12:00</strong></span>
          </span>
          <button
            onClick={() => setBannerVisible(false)}
            className="ml-4 text-white/80 hover:text-white transition-colors"
            aria-label="Sáv bezárása"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <header
        className="sticky top-0 z-[9999] transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(26,26,26,0.98)' : 'rgba(26,26,26,0.95)',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.6)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <a
              href="/"
              aria-label="Mecsek Gyorsszerviz – Főoldal"
              className="flex-shrink-0"
            >
              <img
                src={mecsekLogo}
                alt="Mecsek Gyorsszerviz"
                className="h-12 sm:h-16 w-auto object-contain transition-opacity duration-200 hover:opacity-85"
              />
            </a>
            <div className="h-8 w-px bg-white/15 hidden sm:block" />
            <img
              src={castrolLogo}
              alt="Castrol Service"
              className="h-7 sm:h-9 w-auto object-contain flex-shrink-0 translate-y-[2px]"
            />
          </div>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = link.type === 'home' && isHome;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href, link.type)}
                    className={`relative font-body text-sm font-medium transition-colors duration-200 group ${isActive ? 'text-primary' : 'text-white/85 hover:text-white'}`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-primary rounded transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="tel:+36203573771"
              className="btn-press hidden sm:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-headline font-bold text-sm uppercase tracking-wide px-4 py-2 rounded transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_4px_20px_rgba(214,40,40,0.45)]"
              aria-label="Hívj most: +36 20 357 3771"
            >
              <Phone size={15} />
              +36 20 357 3771
            </a>
            <button
              className="md:hidden text-white p-1 transition-transform duration-200 hover:scale-110"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className="fixed inset-0 flex flex-col pt-20 px-6 transition-all duration-300"
        style={{
          zIndex: 9998,
          backgroundColor: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(20px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'opacity 0.3s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <ul className="flex flex-col gap-6 mt-6">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                transition: `opacity 0.35s ease ${i * 0.05 + 0.1}s, transform 0.35s cubic-bezier(0.22,1,0.36,1) ${i * 0.05 + 0.1}s`,
              }}
            >
              <button
                onClick={() => handleNavClick(link.href, link.type)}
                className="font-headline font-bold text-3xl uppercase tracking-wide text-white hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div
          className="mt-10"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.4s ease 0.4s, transform 0.4s ease 0.4s',
          }}
        >
          <a
            href="tel:+36203573771"
            className="btn-press flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-headline font-bold text-xl uppercase tracking-wide px-6 py-4 rounded w-full transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            <Phone size={20} />
            +36 20 357 3771
          </a>
        </div>
      </div>
    </>
  );
}
