import { useState, useEffect, useRef, useCallback } from 'react';
import { Images, Calendar, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/files_8595244-2026-04-16T11-44-26-031Z-image.webp';
import img2 from '../assets/files_8595244-2026-04-16T11-44-32-880Z-image.webp';
import img3 from '../assets/files_8595244-2026-05-05T12-41-47-172Z-image.webp';
import img4 from '../assets/files_8595244-2026-05-05T12-41-59-240Z-image.webp';
import img5 from '../assets/files_8595244-2026-05-05T12-42-06-023Z-image.webp';
import img6 from '../assets/files_8595244-2026-05-05T12-42-10-177Z-image.webp';
import img7 from '../assets/files_8595244-2026-05-05T12-42-18-948Z-image.png';
import img8 from '../assets/files_8595244-2026-05-05T13-04-24-188Z-image.webp';
import img9 from '../assets/files_8595244-2026-05-05T13-04-27-635Z-image.webp';
import img10 from '../assets/files_8595244-2026-05-05T13-04-32-928Z-image.webp';
import img11 from '../assets/files_8595244-2026-05-05T13-04-36-314Z-image.webp';
import img12 from '../assets/files_8595244-2026-05-05T13-08-37-351Z-image.webp';
import img13 from '../assets/files_8595244-2026-05-05T13-08-39-838Z-image.webp';
import img14 from '../assets/files_8595244-2026-05-05T13-08-42-807Z-image.webp';
import img15 from '../assets/files_8595244-2026-05-05T13-08-46-086Z-image.webp';
import img16 from '../assets/files_8595244-2026-05-05T13-08-48-425Z-image.webp';
import img17 from '../assets/files_8595244-2026-05-05T13-12-27-264Z-image.png';
import img18 from '../assets/files_8595244-2026-05-05T13-12-31-246Z-image.png';
import img19 from '../assets/files_8595244-2026-05-05T13-12-33-835Z-image.png';
import img20 from '../assets/files_8595244-2026-05-05T13-12-36-536Z-image.png';
import img21 from '../assets/files_8595244-2026-05-05T13-12-39-776Z-image.png';
import img22 from '../assets/files_8595244-2026-05-05T13-20-05-454Z-image.webp';
import img23 from '../assets/files_8595244-2026-05-05T13-20-10-876Z-image.png';
import img24 from '../assets/files_8595244-2026-05-05T13-20-13-571Z-image.png';
import img25 from '../assets/files_8595244-2026-05-05T13-20-16-785Z-image.webp';
import img26 from '../assets/files_8595244-2026-05-05T13-20-19-809Z-image.webp';
import img27 from '../assets/files_8595244-2026-05-05T13-27-40-087Z-image.webp';
import img28 from '../assets/files_8595244-2026-05-05T13-27-41-891Z-image.webp';
import img29 from '../assets/files_8595244-2026-05-05T13-27-44-314Z-image.png';
import img30 from '../assets/files_8595244-2026-05-05T13-27-47-693Z-image.png';
import img31 from '../assets/files_8595244-2026-05-05T13-27-50-395Z-image.png';
import img32 from '../assets/files_8595244-2026-05-05T13-38-50-315Z-image.webp';
import img33 from '../assets/files_8595244-2026-05-05T13-38-53-046Z-image.webp';
import img34 from '../assets/files_8595244-2026-05-05T13-38-56-844Z-image.webp';

const images: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34];

function useImagesPerPage() {
  const [ipp, setIpp] = useState(12);
  useEffect(() => {
    function update() {
      if (window.innerWidth < 480) setIpp(6);
      else if (window.innerWidth < 768) setIpp(8);
      else setIpp(12);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return ipp;
}

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  const src = images[idx];

  return (
    <div
      className="gallery-lightbox"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button className="gallery-lb-close" onClick={onClose} aria-label="Bezárás">
        <X size={28} />
      </button>

      <button
        className="gallery-lb-arrow gallery-lb-arrow--left"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Előző kép"
      >
        <ChevronLeft size={32} />
      </button>

      <div
        className="gallery-lb-img-wrap"
        onClick={(e) => e.stopPropagation()}
      >
        {src ? (
          <img src={src} alt={`Mecsek Gyorsszerviz – galéria kép ${idx + 1}`} className="gallery-lb-img" />
        ) : (
          <div className="gallery-lb-placeholder">
            <Images size={64} className="text-white/20" strokeWidth={1} />
            <span className="text-white/30 text-sm mt-3 font-body">{idx + 1} / {images.length}</span>
          </div>
        )}
      </div>

      <button
        className="gallery-lb-arrow gallery-lb-arrow--right"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Következő kép"
      >
        <ChevronRight size={32} />
      </button>

      <div className="gallery-lb-counter">
        {idx + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Gallery() {
  const imagesPerPage = useImagesPerPage();
  const [page, setPage] = useState(0);
  const [fading, setFading] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const visibleImages = images.slice(page * imagesPerPage, (page + 1) * imagesPerPage);

  const goToPage = (next: number) => {
    if (next === page) return;
    setFading(true);
    setTimeout(() => {
      setPage(next);
      setFading(false);
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 280);
  };

  const openLightbox = (localIdx: number) => {
    setLightboxIndex(page * imagesPerPage + localIdx);
  };

  const scrollToContact = () => {
    window.location.href = '/#kapcsolat';
  };

  return (
    <div id="galeria" className="min-h-screen bg-dark-bg">
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(214,40,40,0.13) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary font-headline font-bold text-sm uppercase tracking-widest px-4 py-1.5 rounded mb-6">
            <Images size={14} />
            Szervizünk képekben
          </div>
          <h1
            className="font-headline font-bold text-white uppercase tracking-wide leading-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            Galéria
          </h1>
          <p className="font-body text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
            Tekintse meg szervizünkről, munkáinkról és műhelyünkről készült képeinket.
          </p>
        </div>
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className={`gallery-grid ${fading ? 'gallery-grid--fading' : ''}`}>
          {visibleImages.map((src, i) => (
            <div
              key={`${page}-${i}`}
              className="gallery-card"
              style={{ animationDelay: `${Math.min(i * 0.05, 0.6)}s` }}
              onClick={() => openLightbox(i)}
            >
              {src ? (
                <img
                  src={src}
                  alt="Mecsek Gyorsszerviz – galéria kép"
                  className="gallery-img"
                />
              ) : (
                <div className="gallery-placeholder">
                  <Images size={36} strokeWidth={1.2} className="text-white/15" />
                </div>
              )}
              <div className="gallery-overlay">
                <ZoomIn size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="gallery-pager">
            <button
              className="gallery-pager-btn"
              onClick={() => goToPage(page - 1)}
              disabled={page === 0}
              aria-label="Előző oldal"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="gallery-pager-label">
              {page + 1} / {totalPages}
            </span>
            <button
              className="gallery-pager-btn"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages - 1}
              aria-label="Következő oldal"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      <div
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a0a0a 0%, #1a1a1a 50%, #2a0a0a 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(214,40,40,0.18) 0%, transparent 65%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2
            className="font-headline font-bold text-white uppercase tracking-wide leading-tight mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
          >
            Kérd ajánlatunkat vagy foglalj időpontot még ma
          </h2>
          <p className="font-body text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Csapatunk készen áll, hogy segítsen. Vegye fel velünk a kapcsolatot, és mi gondoskodunk a többiről.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-headline font-bold text-base uppercase tracking-wide px-8 py-4 rounded transition-colors duration-200"
          >
            <Calendar size={18} />
            Időpontot kérek
          </button>
        </div>
      </div>
    </div>
  );
}
