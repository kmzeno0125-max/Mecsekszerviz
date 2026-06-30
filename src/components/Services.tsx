import { useState, useEffect, useRef, type ReactNode } from 'react';
import wrenchImg from '../assets/files_8595244-2026-04-16T10-15-41-000Z-image.png';
import {
  CircleDot,
  Wrench,
  Settings,
  Gauge,
  Car,
  Zap,
  Thermometer,
  Battery,
  FileSearch,
  ClipboardCheck,
  Wind,
  Phone,
  Shield,
  ArrowRight,
  Package,
} from 'lucide-react';

const gumiServices = [
  {
    icon: <CircleDot size={24} />,
    title: 'Gumiszerelés & centrírozás',
    desc: '12"-tól 28"-ig minden méretben, professzionális berendezésekkel',
  },
  {
    icon: <Settings size={24} />,
    title: 'Gumiabroncs javítás',
    desc: 'Gumiabroncsok szakszerű javítása',
  },
  {
    icon: <CircleDot size={24} />,
    title: 'Alufelni javítás',
    desc: 'Alufelnik szerkezeti javítása (görgőzés)',
  },
  {
    icon: <Shield size={24} />,
    title: 'Gumi Hotel',
    desc: 'Szezonok közötti gumi-kerék szakszerű tárolása',
  },
  {
    icon: <Gauge size={24} />,
    title: 'TPMS szenzor',
    desc: 'Forgalmazás – diagnosztika – programmozás',
  },
  {
    icon: <Package size={24} />,
    title: 'Kiegészítők',
    desc: 'Kerékcsavarok – tehermentesítő gyűrűk',
  },
];

const autoServices = [
  {
    icon: <Gauge size={24} />,
    title: 'Lézeres futómű beállítás',
    desc: '',
  },
  {
    icon: <Wrench size={24} />,
    title: 'Futómű & fékrendszer teljeskörű javítása',
    desc: '',
  },
  {
    icon: <Settings size={24} />,
    title: 'Időszakos szerviz',
    desc: 'Motorolaj-egyéb folyadékok (fékfolyadék, sebességváltó, stb) cseréje – gyártói ajánlás szerint',
  },
  {
    icon: <Zap size={24} />,
    title: 'Motorjavítás-karbantartás',
    desc: 'Vezérlés – generátor – önindító stb.',
  },
  {
    icon: <Car size={24} />,
    title: 'Műszaki vizsgára felkészítés',
    desc: 'Vizsgáró való felkészítés és ügyintézés',
  },
  {
    icon: <FileSearch size={24} />,
    title: 'Állapotfelmérés',
    desc: '',
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: 'Diagnosztika',
    desc: 'Hibakód kiolvasás és törlés',
  },
  {
    icon: <Wind size={24} />,
    title: 'Klímarendszer ózonos tisztítása',
    desc: 'Klímarendszer és belső tér fertőtlenítése',
  },
  {
    icon: <Battery size={24} />,
    title: 'Akkumulátor szerviz',
    desc: 'Akkumulátor tesztelés, csere és töltési rendszer ellenőrzés',
  },
  {
    icon: <Thermometer size={24} />,
    title: 'Flottaszerviz',
    desc: 'Cégek számára teljeskörű járműflotta kezelés',
  },
];

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
  animDir: 'svc-left' | 'svc-right' | 'svc-up';
  animDelay: string;
};

function ServiceCard({ icon, title, desc, animDir, animDelay }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`svc-anim ${animDir} svc-card-hover group bg-white border border-gray-100 rounded-lg p-5 cursor-default relative overflow-hidden`}
      style={{ animationDelay: animDelay }}
    >
      <div className="flex items-start gap-3">
        <div className="text-primary flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">{icon}</div>
        <div>
          <h3 className={`font-headline font-bold text-text-dark text-lg uppercase tracking-wide ${desc ? 'mb-1' : ''}`}>{title}</h3>
          {desc && <p className="font-body text-secondary text-sm leading-relaxed">{desc}</p>}
        </div>
      </div>
    </div>
  );
}

const colDirections: ('svc-left' | 'svc-up' | 'svc-right')[] = ['svc-left', 'svc-up', 'svc-right'];
const colDelays = ['0.1s', '0.3s', '0.5s'];
const midDelays = ['0.2s', '0.4s', '0.6s'];

function getCardAnim(index: number): { animDir: 'svc-left' | 'svc-up' | 'svc-right'; animDelay: string } {
  const col = index % 3;
  const row = Math.floor(index / 3);
  const delays = col === 1 ? midDelays : colDelays;
  return {
    animDir: colDirections[col],
    animDelay: delays[row] ?? '0.1s',
  };
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<'gumi' | 'auto'>('auto');

  const headerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const elements = [
      { el: headerRef.current, dir: 'svc-left', delay: '0s' },
      { el: imgRef.current, dir: 'svc-right', delay: '0.2s' },
      { el: ctaRef.current, dir: 'svc-up', delay: '0.4s' },
    ];

    const observers: IntersectionObserver[] = [];

    elements.forEach(({ el, dir, delay }) => {
      if (!el) return;
      el.classList.add('svc-anim', dir);
      el.style.animationDelay = delay;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('animate');
            obs.unobserve(el);
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const currentServices = activeTab === 'gumi' ? gumiServices : autoServices;

  return (
    <section id="szolgaltatasok" className="bg-bg-light py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 mb-12">
          <div ref={headerRef} className="lg:w-[60%] text-center lg:text-left">
            <img
              src={wrenchImg}
              alt="Csavarkulcs"
              className="block lg:hidden mx-auto mb-4"
              style={{
                width: 120,
                filter: 'drop-shadow(0px 4px 24px rgba(227,30,36,0.25))',
                mixBlendMode: 'multiply',
              }}
            />
            <h2 className="font-headline font-bold text-text-dark uppercase tracking-wide mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Szolgáltatásaink
            </h2>
            <p className="font-body text-secondary text-base sm:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
              Teljeskörű autójavítás és gumiszerviz – személyautótól kisteherautóig
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setActiveTab('auto')}
                  className={`flex items-center gap-2 px-5 py-3 rounded-md font-headline font-bold text-base uppercase tracking-wide transition-all duration-200 ${
                    activeTab === 'auto'
                      ? 'bg-primary text-white shadow-sm scale-[1.02]'
                      : 'text-secondary hover:text-text-dark'
                  }`}
                  aria-pressed={activeTab === 'auto'}
                >
                  <Wrench size={18} />
                  Autójavítás
                </button>
                <button
                  onClick={() => setActiveTab('gumi')}
                  className={`flex items-center gap-2 px-5 py-3 rounded-md font-headline font-bold text-base uppercase tracking-wide transition-all duration-200 ${
                    activeTab === 'gumi'
                      ? 'bg-primary text-white shadow-sm scale-[1.02]'
                      : 'text-secondary hover:text-text-dark'
                  }`}
                  aria-pressed={activeTab === 'gumi'}
                >
                  <CircleDot size={18} />
                  Gumiszerviz
                </button>
              </div>
            </div>
          </div>

          <div ref={imgRef} className="hidden lg:flex lg:w-[40%] justify-center items-center">
            <img
              src={wrenchImg}
              alt="Csavarkulcs"
              style={{
                maxWidth: 320,
                width: '100%',
                filter: 'drop-shadow(0px 4px 24px rgba(227,30,36,0.25))',
                mixBlendMode: 'multiply',
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentServices.map((service, i) => {
            const { animDir, animDelay } = getCardAnim(i);
            return (
              <ServiceCard
                key={`${activeTab}-${i}`}
                animDir={animDir}
                animDelay={animDelay}
                {...service}
              />
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            ref={ctaRef}
            onClick={() => document.getElementById('kapcsolat')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-press inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-headline font-bold text-lg uppercase tracking-wide px-8 py-4 rounded transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
            aria-label="Hívj minket"
          >
            <Phone size={20} />
            Hívj minket!
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
