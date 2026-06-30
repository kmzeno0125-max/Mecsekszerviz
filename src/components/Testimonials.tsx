import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dóra Zelenyánszki',
    date: '2026',
    text: 'Másodszor fordultam meg Náluk. Gyorsan, azonnal fogadtak és meg is oldották a problémát. (defekt) és nem utolsósorban korrekt áron. Csak ajánlani tudom Őket.',
    stars: 5,
  },
  {
    name: 'Ákos Hoffmann',
    date: '2025',
    text: 'Gyors és udvarias kiszolgálás a gumiszerelésnél, futómű beállításnál érzékelhető a magas fokú hozzáértés. Tetszenek a körülmények váróhelység, toalett. Korrekt áron dolgoznak. Nagyon meg vagyok elégedve. Köszönöm.',
    stars: 5,
  },
  {
    name: 'Détári D.',
    date: '2021. október',
    text: 'Korrekt szervíz, szakszerű és megfizethető árakkal. Többször voltam már náluk, teljes mértékben meg vagyok velük elégedve!',
    stars: 5,
  },
  {
    name: 'Jánosné V.',
    date: '2021. június',
    text: 'Segítőkész, udvarias szakemberek. Csak ajánlani tudom a szervizt mindenkinek!',
    stars: 5,
  },
  {
    name: 'Tamás P.',
    date: '2021. július',
    text: 'Soron kívül érkeztem, kb. 10 perc várakozás után már foglalkoztak is a defekttel és elnézést kértek amiért megvárakoztattak. Gyorsan, korrekt áron.',
    stars: 5,
  },
  {
    name: 'Zsolt H.',
    date: '2024. december',
    text: 'Komoly gépparkkal, tapasztalt dolgozók végzik a kerékcseréket. Kényelmes, tiszta az ügyfél-váró. És gyorsan adnak időpontot!',
    stars: 5,
  },
  {
    name: 'Bence K.',
    date: '2024. december',
    text: 'Futómű bemérésre, állításra vittem az autóm. A szerelő hozzáállása, szakértelme kifogástalan volt. Precíz, gyors és korrekt az ár.',
    stars: 5,
  },
  {
    name: 'Teréz E.',
    date: '2024. július',
    text: 'Kedves kiszolgálás, kedves emberek, nagyon elégedettek vagyunk a munkájukkal és hozzáállásukkal.',
    stars: 5,
  },
];

const CARD_CLASSES = ['test-card-left', 'test-card-center', 'test-card-right'];

function TestimonialCard({
  testimonial,
  extraClass = '',
  animated = false,
  pageAnim = false,
}: {
  testimonial: typeof testimonials[0];
  extraClass?: string;
  animated?: boolean;
  pageAnim?: boolean;
}) {
  return (
    <div
      className={`test-card-hover rounded-xl p-6 sm:p-8 h-full flex flex-col test-card ${extraClass} ${animated ? 'animate' : ''} ${pageAnim ? 'test-card-pagein' : ''}`}
      style={{
        background: '#E31E24',
        border: 'none',
        boxShadow: '0 8px 24px rgba(227,30,36,0.2)',
      }}
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400" style={{ color: '#FFD700' }} />
        ))}
      </div>
      <p className="font-body text-sm leading-relaxed flex-1 mb-6 italic" style={{ color: '#FFFFFF' }}>
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-headline font-bold text-lg transition-transform duration-200 hover:scale-110" style={{ background: '#FFFFFF', color: '#E31E24' }}>
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-headline font-bold uppercase tracking-wide text-base" style={{ color: '#FFFFFF' }}>
            {testimonial.name}
          </div>
          <div className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{testimonial.date}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [pageAnim, setPageAnim] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const total = testimonials.length;
  const visibleCount = 3;
  const pages = total - visibleCount + 1;

  const goTo = useCallback(
    (index: number) => {
      setPageAnim(false);
      setCurrent(index);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPageAnim(true));
      });
    },
    []
  );

  const next = useCallback(() => {
    goTo((current + 1) % pages);
  }, [current, pages, goTo]);

  const prev = () => {
    goTo((current - 1 + pages) % pages);
  };

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          obs.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="velemenyek" className="py-16 sm:py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`test-heading font-headline font-bold uppercase tracking-wide mb-3 ${sectionVisible ? 'animate' : ''}`}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#1A1A2E' }}
          >
            Mit mondanak ügyfeleink
          </h2>
          <p className={`test-subtitle font-body text-base sm:text-lg ${sectionVisible ? 'animate' : ''}`} style={{ color: '#555555' }}>
            Valódi vélemények, valódi emberektől
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.slice(current, current + visibleCount).map((t, i) => (
            <TestimonialCard
              key={`${current}-${i}`}
              testimonial={t}
              extraClass={CARD_CLASSES[i]}
              animated={sectionVisible && !pageAnim}
              pageAnim={pageAnim}
            />
          ))}
        </div>

        <div className="md:hidden">
          <TestimonialCard
            testimonial={testimonials[current]}
            extraClass="test-card-center"
            animated={sectionVisible}
          />
        </div>

        <div className={`test-nav flex items-center justify-center gap-4 mt-8 ${sectionVisible ? 'animate' : ''}`}>
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: '#E31E24', color: '#FFFFFF', border: 'none' }}
            aria-label="Előző vélemény"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === current ? '#E31E24' : 'rgba(227,30,36,0.3)',
                  width: i === current ? '1.5rem' : '0.5rem',
                }}
                aria-label={`${i + 1}. oldal`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: '#E31E24', color: '#FFFFFF', border: 'none' }}
            aria-label="Következő vélemény"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
