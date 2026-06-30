import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import CastrolBanner from './components/CastrolBanner';
import CastrolStrip from './components/CastrolStrip';
import Services from './components/Services';
import FleetSection from './components/FleetSection';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <CastrolStrip />
        <CastrolBanner />
        <About />
        <Services />
        <FleetSection />
        <Products />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <a
        href="tel:+36203573771"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/40 transition-all duration-200 hover:scale-110"
        aria-label="Hívj most: +36 20 357 3771"
      >
        <Phone size={24} />
      </a>
    </>
  );
}

function GalleryPage() {
  return (
    <>
      <main>
        <Gallery />
      </main>
      <Footer />
      <a
        href="tel:+36203573771"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/40 transition-all duration-200 hover:scale-110"
        aria-label="Hívj most: +36 20 357 3771"
      >
        <Phone size={24} />
      </a>
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
      <a
        href="tel:+36203573771"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/40 transition-all duration-200 hover:scale-110"
        aria-label="Hívj most: +36 20 357 3771"
      >
        <Phone size={24} />
      </a>
    </>
  );
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      {path === '/galeria' ? <GalleryPage /> : path === '/adatvedelmi-tajekoztato' ? <PrivacyPage /> : <HomePage />}
      <CookieBanner />
    </div>
  );
}
