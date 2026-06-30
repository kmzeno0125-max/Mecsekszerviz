import { useEffect, useRef, useState } from 'react';
import bgImage from '../assets/files_8595244-2026-04-16T10-44-07-397Z-files_8595244-2026-04-16T10-00-21-954Z-image.webp';

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

const paragraphs = [
  <>
    <strong className="text-white">Üdvözöljük szervizünkben!</strong>
  </>,
  <>
    Cégünk 2009 óta áll ügyfeleink rendelkezésére megbízható és professzionális autószerviz szolgáltatásokkal. Több mint egy évtizedes tapasztalattal vállaljuk személyautók, valamint 3,5 tonna össztömegig kishaszonjárművek teljes körű javítását és karbantartását, akár egyedi ügyfelek, akár flottakezelők számára.
  </>,
  <>
    Szolgáltatásaink között megtalálható a teljes körű műszaki szervizelés, időszakos karbantartás, hibafeltárás és javítás, valamint külön gumiszerviz részlegünk is, ahol gumiszerelést, javítást és gumiabroncs értékesítést biztosítunk ügyfeleink számára.
  </>,
  <>
    Fontos számunkra, hogy a járműipar fejlődésével mindig felvegyük az iramot, így folyamatosan fejlesztjük a tudásunkat és a technikai hátterünket egyaránt.
  </>,
  <>
    Büszkék vagyunk arra, hogy tagjai vagyunk a <strong className="text-white">Castrol Service hálózatnak</strong>, szolgáltatásaink magas színvonalát pedig a <strong className="text-white">TÜV Rheinland minősítés</strong> is igazolja.
  </>,
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  const year = useCountUp(2009, 1200, visible);
  const exp = useCountUp(15, 1000, visible);
  const partner = useCountUp(2022, 1200, visible);

  const stats = [
    { value: visible ? year : 0, label: 'Az alapítás éve', sub: 'Pécs szívében', isText: false },
    { value: visible ? `${exp}+` : '0+', label: 'Év tapasztalat', sub: 'autójavítás területén', isText: true },
    { value: visible ? partner : 0, label: 'Castrol Service', sub: 'partner lett', isText: false },
    { value: 'TÜV', label: 'Rheinland', sub: 'minősítés', isText: true },
  ];

  return (
    <section
      ref={sectionRef}
      id="rolunk"
      className="relative py-16 sm:py-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className={`about-heading font-headline font-bold uppercase tracking-wide mb-6 ${visible ? 'animate' : ''}`}
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#E31E24' }}
            >
              Kik vagyunk?
            </h2>
            <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: '#FFFFFF', textShadow: '0px 1px 4px rgba(0,0,0,0.8)' }}>
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`about-para about-para-${i + 1} ${visible ? 'animate' : ''}`}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="p-2 sm:p-4">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className={`about-stat about-stat-${i} text-center p-4 border border-white/10 rounded-lg transition-all duration-300 hover:border-primary/30 ${visible ? 'animate' : ''}`}
                  style={{ backgroundColor: 'rgba(20,20,35,0.85)' }}
                >
                  <div
                    className="font-headline font-extrabold text-primary leading-none mb-1"
                    style={{ fontSize: '2.5rem', textShadow: '0 0 20px rgba(214,40,40,0.25)' }}
                  >
                    {item.value}
                  </div>
                  <div className="font-headline font-bold text-white text-sm uppercase tracking-wide">
                    {item.label}
                  </div>
                  <div className="font-body text-white/40 text-xs mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
