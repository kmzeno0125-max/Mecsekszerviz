import { Car, Disc, Settings, Wrench, Droplets, Package } from 'lucide-react';
import { useRef, useEffect, useCallback } from 'react';

import logoCastrol from '../assets/files_8595244-2026-04-15T17-39-33-242Z-image.png';
import logoBridgestone from '../assets/files_8595244-2026-04-15T17-39-36-853Z-image.png';
import logoContinental from '../assets/files_8595244-2026-04-15T17-39-41-202Z-image.png';
import logoFalken from '../assets/files_8595244-2026-04-15T17-39-43-215Z-image.png';
import logoGoodyear from '../assets/files_8595244-2026-04-15T17-39-47-779Z-image.png';
import logoMichelin from '../assets/files_8595244-2026-04-15T17-56-35-655Z-image.png';
import logoPirelli from '../assets/files_8595244-2026-04-15T17-56-41-659Z-image.png';
import logoToyoTires from '../assets/files_8595244-2026-04-15T17-56-46-927Z-image.png';
import logoYokohama from '../assets/files_8595244-2026-04-15T17-56-54-772Z-image.png';
import logoFag from '../assets/files_8595244-2026-04-15T17-56-58-489Z-image.png';
import logoHankook from '../assets/files_8595244-2026-04-15T18-04-32-359Z-image.png';
import logoKumho from '../assets/files_8595244-2026-04-15T18-04-34-519Z-image.png';
import logoLaufenn from '../assets/files_8595244-2026-04-15T18-04-40-742Z-image.png';
import logoMahle from '../assets/files_8595244-2026-04-15T18-04-44-609Z-image.png';
import logoMannFilter from '../assets/files_8595244-2026-04-15T18-04-50-958Z-image.png';
import logoMonroe from '../assets/files_8595244-2026-04-15T18-07-34-120Z-image.png';
import logoNexen from '../assets/files_8595244-2026-04-15T18-07-51-949Z-image.png';
import logoSachs from '../assets/files_8595244-2026-04-15T18-07-54-972Z-image.png';
import logoSkf from '../assets/files_8595244-2026-04-15T18-07-58-379Z-image.png';
import logoThule from '../assets/files_8595244-2026-04-15T18-08-01-109Z-image.png';
import logoUniroyal from '../assets/files_8595244-2026-04-15T18-11-35-122Z-image.png';
import logoAlcar from '../assets/files_8595244-2026-04-15T18-11-40-799Z-image.png';
import logoAte from '../assets/files_8595244-2026-04-15T18-11-42-969Z-image.png';
import logoBarum from '../assets/files_8595244-2026-04-15T18-11-46-618Z-image.png';
import logoBosch from '../assets/files_8595244-2026-04-15T18-11-50-460Z-image.png';

type AnimDir = 'svc-left' | 'svc-right' | 'svc-up';

const categories: { icon: React.ReactNode; label: string; animDir: AnimDir; animDelay: string }[] = [
  { icon: <Car size={28} />,      label: 'Gumiabroncsok',        animDir: 'svc-left',  animDelay: '0.1s' },
  { icon: <Disc size={28} />,     label: 'Alufelnik & lemezfelnik', animDir: 'svc-up',  animDelay: '0.2s' },
  { icon: <Settings size={28} />, label: 'Szelepek',              animDir: 'svc-right', animDelay: '0.3s' },
  { icon: <Wrench size={28} />,   label: 'Alkatrészek',           animDir: 'svc-left',  animDelay: '0.2s' },
  { icon: <Droplets size={28} />, label: 'Castrol kenőolajok',    animDir: 'svc-up',    animDelay: '0.3s' },
  { icon: <Package size={28} />,  label: 'Kiegészítők',           animDir: 'svc-right', animDelay: '0.4s' },
];

const logos = [
  { src: logoCastrol, alt: 'Castrol' },
  { src: logoBridgestone, alt: 'Bridgestone' },
  { src: logoContinental, alt: 'Continental' },
  { src: logoFalken, alt: 'Falken' },
  { src: logoGoodyear, alt: 'Goodyear' },
  { src: logoMichelin, alt: 'Michelin' },
  { src: logoPirelli, alt: 'Pirelli' },
  { src: logoToyoTires, alt: 'Toyo Tires' },
  { src: logoYokohama, alt: 'Yokohama' },
  { src: logoFag, alt: 'FAG' },
  { src: logoHankook, alt: 'Hankook' },
  { src: logoKumho, alt: 'Kumho Tire' },
  { src: logoLaufenn, alt: 'Laufenn' },
  { src: logoMahle, alt: 'MAHLE' },
  { src: logoMannFilter, alt: 'MANN-FILTER' },
  { src: logoMonroe, alt: 'Monroe' },
  { src: logoNexen, alt: 'Nexen Tire' },
  { src: logoSachs, alt: 'Sachs' },
  { src: logoSkf, alt: 'SKF' },
  { src: logoThule, alt: 'Thule' },
  { src: logoUniroyal, alt: 'Uniroyal' },
  { src: logoAlcar, alt: 'Alcar Sensor' },
  { src: logoAte, alt: 'ATE' },
  { src: logoBarum, alt: 'Barum' },
  { src: logoBosch, alt: 'Bosch Automotive' },
];

const ITEM_WIDTH = 260;
const AUTO_SPEED = 0.5;
const RESUME_DELAY = 1800;

function useScrollAnim(dir: AnimDir, delay: string) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
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
    return () => obs.disconnect();
  }, [dir, delay]);
  return ref;
}

function CategoryCard({ icon, label, animDir, animDelay }: { icon: React.ReactNode; label: string; animDir: AnimDir; animDelay: string }) {
  const ref = useScrollAnim(animDir, animDelay);
  return (
    <div
      ref={ref}
      className="svc-card-hover flex flex-col items-center gap-3 bg-bg-light rounded-lg py-6 px-3 text-center group"
    >
      <div className="text-primary group-hover:scale-110 transition-transform duration-200">{icon}</div>
      <span className="font-headline font-bold text-text-dark text-sm uppercase tracking-wide leading-tight">{label}</span>
    </div>
  );
}

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const totalWidthRef = useRef(0);

  const headingRef = useScrollAnim('svc-left', '0s');
  const subtitleRef = useScrollAnim('svc-right', '0.2s');
  const carouselRef = useScrollAnim('svc-up', '0.3s');

  const setTrackPos = useCallback((pos: number) => {
    const track = trackRef.current;
    if (!track) return;
    const total = totalWidthRef.current;
    if (total === 0) return;
    pos = ((pos % total) + total) % total;
    posRef.current = pos;
    track.style.transform = `translateX(${-pos}px)`;
  }, []);

  const tick = useCallback(() => {
    if (!pausedRef.current) {
      setTrackPos(posRef.current + AUTO_SPEED);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [setTrackPos]);

  const pauseAutoScroll = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    totalWidthRef.current = ITEM_WIDTH * logos.length;
    rafRef.current = requestAnimationFrame(tick);

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < 2 && Math.abs(e.deltaY) < 2) return;
      e.preventDefault();
      pauseAutoScroll();
      setTrackPos(posRef.current + (e.deltaX || e.deltaY) * 0.6);
      scheduleResume();
    };

    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartPosRef.current = posRef.current;
      pauseAutoScroll();
      track.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const delta = dragStartXRef.current - e.clientX;
      setTrackPos(dragStartPosRef.current + delta);
    };

    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      track.style.cursor = 'grab';
      scheduleResume();
    };

    let touchStartX = 0;
    let touchStartPos = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartPos = posRef.current;
      pauseAutoScroll();
    };

    const onTouchMove = (e: TouchEvent) => {
      const delta = touchStartX - e.touches[0].clientX;
      setTrackPos(touchStartPos + delta);
    };

    const onTouchEnd = () => {
      scheduleResume();
    };

    const container = track.parentElement!;
    container.addEventListener('wheel', onWheel, { passive: false });
    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    track.addEventListener('touchstart', onTouchStart, { passive: true });
    track.addEventListener('touchmove', onTouchMove, { passive: true });
    track.addEventListener('touchend', onTouchEnd);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      container.removeEventListener('wheel', onWheel);
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('touchstart', onTouchStart);
      track.removeEventListener('touchmove', onTouchMove);
      track.removeEventListener('touchend', onTouchEnd);
    };
  }, [tick, setTrackPos, pauseAutoScroll, scheduleResume]);

  const tripled = [...logos, ...logos, ...logos];

  return (
    <section id="termekek" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            ref={headingRef}
            className="font-headline font-bold text-text-dark uppercase tracking-wide mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Általunk forgalmazott termékek
          </h2>
          <p ref={subtitleRef} className="font-body text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Kizárólag a gyári minőségű és az előírásoknak megfelelő alkatrészeket használunk fel
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((cat, i) => (
            <CategoryCard key={i} {...cat} />
          ))}
        </div>

        <div className="border-t border-gray-100 pt-12">
          <h3 className="font-headline font-bold text-secondary text-center text-xl uppercase tracking-widest mb-8">
            Forgalmazott márkáink
          </h3>

          <div ref={carouselRef} className="relative overflow-hidden select-none">
            <div
              className="absolute inset-y-0 left-0 w-24 sm:w-32 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #ffffff, transparent)', zIndex: 1 }}
            />
            <div
              className="absolute inset-y-0 right-0 w-24 sm:w-32 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #ffffff, transparent)', zIndex: 1 }}
            />

            <div
              ref={trackRef}
              className="flex"
              style={{ width: 'max-content', cursor: 'grab', willChange: 'transform' }}
            >
              {tripled.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-105"
                  style={{ width: `${ITEM_WIDTH}px`, padding: '0 3rem' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 sm:h-28 w-auto object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
