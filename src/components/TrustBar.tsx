import { useEffect, useRef, useState } from 'react';

type Stat = {
  end: number;
  decimals?: number;
  suffix: string;
  label: string;
  sub: string;
  format?: (n: number) => string;
};

const stats: Stat[] = [
  {
    end: 20,
    suffix: '+',
    label: 'Év tapasztalat',
    sub: '',
  },
  {
    end: 5000,
    suffix: '+',
    label: 'Elégedett ügyfél',
    sub: 'Pécsett és Baranyában',
    format: (n) => n >= 1000 ? `${Math.floor(n / 1000)} ${String(n % 1000).padStart(3, '0')}` : String(n),
  },
  {
    end: 1000,
    suffix: '+',
    label: 'Forgalmazott termék',
    sub: '',
  },
  {
    end: 3.5,
    decimals: 1,
    suffix: ' t',
    label: 'Max. jármű össztömeg',
    sub: 'személyautótól kisteherautóig',
    format: (n) => n.toFixed(1).replace('.', ','),
  },
];

function useCountUp(end: number, duration: number, started: boolean, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration, decimals]);

  return value;
}

function CountUpStat({ stat, started }: { stat: Stat; started: boolean }) {
  const raw = useCountUp(stat.end, 1800, started, stat.decimals ?? 0);
  const display = stat.format ? stat.format(raw) : String(Math.floor(raw));

  return (
    <div
      className="font-headline font-extrabold text-primary leading-none mb-1"
      style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', textShadow: '0 0 32px rgba(214,40,40,0.3)' }}
    >
      {display}{stat.suffix}
    </div>
  );
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-dark-bg pt-12 sm:pt-16 pb-0 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(214,40,40,0.06) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center ${i < 3 ? 'lg:border-r lg:border-white/10' : ''}`}
            >
              <CountUpStat stat={stat} started={started} />
              <div className="font-headline font-bold text-white text-lg sm:text-xl uppercase tracking-wide mb-1">
                {stat.label}
              </div>
              {stat.sub && <div className="font-body text-white/50 text-xs sm:text-sm">{stat.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
