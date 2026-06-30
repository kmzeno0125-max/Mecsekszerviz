import { Check, ClipboardList } from 'lucide-react';
import fleetImage from '../assets/files_8595244-2026-04-15T18-37-03-874Z-image.webp';

const bullets = [
  'Egyéni szerződéses feltételek',
  'Gyors, sorban állás nélküli fogadás',
  'Dokumentált szerviznapló',
  'Castrol minőségi garancia',
];

export default function FleetSection() {
  const scrollToContact = () => {
    const el = document.querySelector('#kapcsolat');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-0">
      <div className="max-w-none grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-dark-section px-8 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="max-w-lg">
            <div className="inline-block bg-primary/20 border border-primary/40 text-primary font-headline font-bold text-sm uppercase tracking-widest px-3 py-1 rounded mb-6">
              Vállalati megoldás
            </div>
            <h3
              className="font-headline font-bold text-white uppercase tracking-wide mb-2 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Flottakezelés cégeknek
            </h3>
            <p className="font-headline font-bold text-primary text-lg mb-8">
              (5db gépjárműtől)
            </p>
            <ul className="space-y-3 mb-10">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="font-body text-white/85 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-headline font-bold text-lg uppercase tracking-wide px-8 py-4 rounded transition-colors duration-200"
              aria-label="Ajánlatot kérek"
            >
              <ClipboardList size={20} />
              Ajánlatot kérek
            </button>
          </div>
        </div>

        <div className="relative min-h-72 lg:min-h-0 overflow-hidden group">
          <img
            src={fleetImage}
            alt="Vállalati flottaszerviz"
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
