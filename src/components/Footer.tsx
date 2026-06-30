import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Főoldal', href: '#fooldal' },
  { label: 'Rólunk', href: '#rolunk' },
  { label: 'Szolgáltatások', href: '#szolgaltatasok' },
  { label: 'Termékek', href: '#termekek' },
  { label: 'Galéria', href: '#galeria' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-3">
              <img
                src="/image.png"
                alt="Castrol Service Mecsek Gyorsszerviz logó"
                style={{ minWidth: '180px', maxWidth: '240px', width: '100%' }}
              />
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-4">
              Pécs megbízható autószervizcége 2009 óta.
            </p>
            <div className="flex items-center gap-4">
              <div className="inline-block border border-white/20 rounded px-3 py-1.5">
                <div className="font-headline font-bold text-white text-xs tracking-widest uppercase">
                  CASTROL <span className="text-primary">SERVICE</span>
                </div>
                <div className="font-body text-white/40 text-xs">Hivatalos Partner</div>
              </div>
              <a
                href="https://www.facebook.com/p/Mecsek-Gyorsszerviz-Castrol-Service-100051401996514/?locale=hu_HU"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mecsek Gyorsszerviz Facebook oldala"
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                style={{ width: 40, height: 40, background: '#1877F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s ease' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-white uppercase tracking-widest text-sm mb-5">Gyorslinkek</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-white uppercase tracking-widest text-sm mb-5">Elérhetőség</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-white/60 text-sm">7633 Pécs, Páfrány u. 8.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-primary flex-shrink-0" />
                <a href="tel:+36203573771" className="font-body text-white/60 hover:text-primary text-sm transition-colors">
                  +36 20 357 3771
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-primary flex-shrink-0" />
                <a href="mailto:info@mecsekszerviz.hu" className="font-body text-white/60 hover:text-primary text-sm transition-colors">
                  info@mecsekszerviz.hu
                </a>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <Clock size={15} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="font-body text-white/60 text-sm space-y-0.5">
                  <div>H–P: 8:00–17:00</div>
                  <div>Szo: 8:00–12:00</div>
                  <div className="text-primary">Vas: ZÁRVA</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/40 text-xs">
            © 2025 Mecsek Gyorsszerviz | Minden jog fenntartva
          </p>
          <a
            href="/adatvedelmi-tajekoztato"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/adatvedelmi-tajekoztato');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="font-body text-white/40 hover:text-white/70 text-xs transition-colors"
          >
            Adatvédelmi tájékoztató
          </a>
        </div>
      </div>
    </footer>
  );
}
