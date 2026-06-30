import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cookieConsent')) return;
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = (value: 'accepted' | 'declined') => {
    setHiding(true);
    setTimeout(() => {
      localStorage.setItem('cookieConsent', value);
      setVisible(false);
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'clamp(12px, 3vw, 24px)',
        left: 'clamp(12px, 3vw, 24px)',
        right: 'auto',
        maxWidth: 380,
        width: 'calc(100vw - clamp(24px, 6vw, 48px))',
        zIndex: 9999,
        background: '#1A1A2E',
        border: '1px solid rgba(227, 30, 36, 0.3)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        borderRadius: 16,
        padding: 24,
        animation: hiding
          ? 'cookieFadeOut 0.3s ease forwards'
          : 'cookieFadeIn 0.5s ease forwards',
      }}
    >
      <style>{`
        @keyframes cookieFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cookieFadeOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(20px); }
        }
        @media (max-width: 440px) {
          .cookie-banner-inner {
            left: 12px !important;
            right: 12px !important;
            max-width: 100% !important;
          }
        }
      `}</style>

      <div style={{ fontSize: 28, marginBottom: 8 }}>🍪</div>

      <div style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>
        Sütiket használunk
      </div>

      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: '8px 0 16px 0', lineHeight: 1.6 }}>
        Weboldalunk sütiket (cookie) használ a jobb felhasználói élmény érdekében.
        Az oldal használatával elfogadod az{' '}
        <a
          href="#"
          style={{ color: '#E31E24', textDecoration: 'underline', fontSize: 13 }}
          onClick={(e) => e.preventDefault()}
        >
          adatvédelmi tájékoztatónkat
        </a>
        .
      </p>

      <div style={{ display: 'flex', gap: 10 }}>
        <button
          onClick={() => dismiss('accepted')}
          style={{
            flex: 1,
            background: '#E31E24',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 20px',
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          ✓ Elfogadom
        </button>
        <button
          onClick={() => dismiss('declined')}
          style={{
            flex: 1,
            background: 'transparent',
            color: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 8,
            padding: '10px 20px',
            fontWeight: 400,
            fontSize: 14,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Elutasítom
        </button>
      </div>
    </div>
  );
}
