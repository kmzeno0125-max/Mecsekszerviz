import castrolStripImg from '../assets/files_8595244-2026-05-05T06-21-32-447Z-image.png';

export default function CastrolStrip() {
  const repeats = 8;
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#1A1A1A',
        height: 'clamp(50px, 9vw, 110px)',
      }}
      aria-label="Castrol Service"
    >
      <div className="castrol-marquee-track h-full flex items-center">
        {Array.from({ length: repeats * 2 }).map((_, i) => (
          <img
            key={i}
            src={castrolStripImg}
            alt=""
            aria-hidden="true"
            className="h-full w-auto block flex-shrink-0 select-none"
            draggable={false}
          />
        ))}
      </div>
      <div
        className="absolute left-0 top-0 h-full pointer-events-none z-10 castrol-strip-fade-left"
        style={{
          background: 'linear-gradient(to right, #1A1A1A 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute right-0 top-0 h-full pointer-events-none z-10 castrol-strip-fade-right"
        style={{
          background: 'linear-gradient(to left, #1A1A1A 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
