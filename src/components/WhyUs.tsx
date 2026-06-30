import { Trophy, Zap, MessageSquare } from 'lucide-react';
import { useRef, useEffect } from 'react';
import whyBg from '../assets/files_8595244-2026-04-16T13-15-12-187Z-image.png';

const cardConfig = [
  {
    icon: <Trophy size={36} />,
    title: 'Minősített szakértelem',
    text: '2022 óta Castrol Service partner és TÜV Rheinland minősített szerviz vagyunk. Nem véletlenül – minőségünket független audit igazolja.',
    cardClass: 'why-card-left',
    iconClass: 'why-icon-left',
  },
  {
    icon: <Zap size={36} />,
    title: 'Rugalmas kiszolgálás',
    text: 'Rövid határidő',
    cardClass: 'why-card-center',
    iconClass: 'why-icon-center',
  },
  {
    icon: <MessageSquare size={36} />,
    title: 'Átlátható árazás',
    text: 'Nincs rejtett díj, minden munkafolyamat előtt árajánlatot küldünk. A munkafolyamatok során felmerülő egyéb költségek minden esetben egyeztetésre kerülnek az Ügyféllel.',
    cardClass: 'why-card-right',
    iconClass: 'why-icon-right',
  },
];

function useWhyObserver(threshold = 0.2) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll<HTMLElement>(
      '.why-heading, .why-line, .why-card, .why-icon'
    );

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          targets.forEach((el) => el.classList.add('animate'));
          obs.unobserve(section);
        }
      },
      { threshold }
    );

    obs.observe(section);
    return () => obs.disconnect();
  }, [threshold]);

  return sectionRef;
}

export default function WhyUs() {
  const sectionRef = useWhyObserver(0.2);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24"
      style={{
        backgroundImage: `url(${whyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="why-heading font-headline font-bold text-white uppercase tracking-wide mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Miért a Mecsek Gyorsszerviz?
          </h2>
          <div className="why-line h-1 bg-primary mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardConfig.map((card, i) => (
            <div
              key={i}
              className={`why-card why-card-hover ${card.cardClass} rounded-xl p-8 text-center group cursor-default`}
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                className={`why-icon ${card.iconClass} inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_24px_rgba(214,40,40,0.35)]`}
              >
                {card.icon}
              </div>
              <h3 className="font-headline font-bold text-white text-2xl uppercase tracking-wide mb-4">
                {card.title}
              </h3>
              <p className={`font-body leading-relaxed ${card.title === 'Rugalmas kiszolgálás' ? 'text-lg font-bold' : 'text-sm'}`} style={{ color: 'rgba(255,255,255,0.8)' }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
