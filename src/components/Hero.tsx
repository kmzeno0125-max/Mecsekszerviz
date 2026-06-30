import { useState, useEffect, useRef } from 'react';
import { Phone, Wrench, Star, Shield } from 'lucide-react';

import slide1 from '../assets/files_8595244-2026-04-15T17-10-49-851Z-image.webp';
import slide2 from '../assets/files_8595244-2026-04-15T17-11-05-262Z-image.webp';
import slide3 from '../assets/files_8595244-2026-04-15T17-11-27-813Z-image.webp';
import slide4 from '../assets/files_8595244-2026-04-15T17-11-46-883Z-image.webp';
import slide5 from '../assets/files_8595244-2026-04-15T17-12-36-775Z-image.webp';
import slide6 from '../assets/files_8595244-2026-04-15T17-21-53-103Z-image.webp';
import slide7 from '../assets/files_8595244-2026-04-15T17-22-38-105Z-image.webp';
import slide8 from '../assets/files_8595244-2026-04-15T17-24-57-413Z-image.webp';

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];
const SLIDE_DURATION = 3000;
const FADE_DURATION = 800;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, FADE_DURATION);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  const scrollToContact = () => {
    const el = document.querySelector('#kapcsolat');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="fooldal"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ marginTop: '-5rem', background: '#0a0a0a' }}
    >
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{
            opacity: i === current ? (fading ? 0 : 1) : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            zIndex: 0,
            ...(i === 3 ? { objectPosition: 'center 30%' } : i === 4 ? { objectPosition: 'center 85%' } : {}),
          }}
        />
      ))}

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.52) 60%, rgba(0,0,0,0.68) 100%)',
          zIndex: 1,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 55%, rgba(214,40,40,0.07) 0%, transparent 70%)',
          zIndex: 2,
        }}
      />

      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 text-center pt-36 pb-24" style={{ zIndex: 10 }}>

        <div
          className="hero-badge-anim inline-flex items-center gap-2 border border-white/20 bg-black/30 text-white/80 text-xs font-body px-5 py-2.5 rounded-full mb-10 backdrop-blur-sm"
          style={{ boxShadow: '0 0 16px rgba(214,40,40,0.15)' }}
        >
          <Star size={13} className="text-primary flex-shrink-0" />
          <span>Castrol Service Partner&nbsp;&bull;&nbsp;TÜV Rheinland minősített szerviz</span>
        </div>

        <h1 className="hero-h1-anim font-headline font-extrabold uppercase leading-none mb-6 tracking-tight">
          <span
            className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 6rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}
          >
            PÉCS <span className="text-primary">#1</span>
          </span>
          <span
            className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontSize: 'clamp(3.2rem, 12vw, 7.5rem)', lineHeight: 0.92, letterSpacing: '-0.025em', marginTop: '0.1em' }}
          >
            Auto &amp; Gumi
          </span>
          <span
            className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontSize: 'clamp(3.2rem, 12vw, 7.5rem)', lineHeight: 0.92, letterSpacing: '-0.025em', marginTop: '0.1em' }}
          >
            Szerviz
          </span>
        </h1>

        <div
          className="hero-subtitle-anim font-headline font-extrabold uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] mb-10"
          style={{
            fontSize: 'clamp(1.1rem, 3.2vw, 2.2rem)',
            lineHeight: 1.25,
            letterSpacing: '0.04em',
            color: '#e8e8e8',
            textShadow: '0 1px 8px rgba(0,0,0,0.9)',
          }}
        >
          20+ ÉV TAPASZTALAT
        </div>

        <div className="hero-cta-anim flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={scrollToContact}
            className="btn-press flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-headline font-bold text-lg uppercase tracking-widest px-9 py-4 rounded-lg transition-all duration-200 w-full sm:w-auto hover:scale-[1.04] hover:shadow-[0_8px_32px_rgba(214,40,40,0.55)]"
            style={{ boxShadow: '0 4px 28px rgba(214,40,40,0.45)' }}
            aria-label="Kapcsolatfelvétel"
          >
            <Wrench size={19} />
            Kapcsolatfelvétel
          </button>
          <a
            href="tel:+36203573771"
            className="btn-press flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-headline font-bold text-lg uppercase tracking-widest px-9 py-4 rounded-lg transition-all duration-200 w-full sm:w-auto hover:scale-[1.04] hover:shadow-[0_8px_32px_rgba(214,40,40,0.55)]"
            style={{ boxShadow: '0 4px 28px rgba(214,40,40,0.45)' }}
            aria-label="Telefon: +36 20 357 3771"
          >
            <Phone size={19} />
            +36 20 357 3771
          </a>
        </div>

        <div className="hero-trust-anim flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2">
            <Star size={14} className="text-primary flex-shrink-0" />
            <span className="font-body text-white/90 text-sm" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}>Castrol Service hálózat tagja</span>
          </div>
          <span className="text-white/40 hidden sm:block">•</span>
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-primary flex-shrink-0" />
            <span className="font-body text-white/90 text-sm" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}>TÜV Rheinland minősítés</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block" style={{ zIndex: 10 }}>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
