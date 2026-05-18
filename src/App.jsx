import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingShapes from './components/FloatingShapes';
import MagneticCursor from './components/MagneticCursor';
import Home from './pages/Home';

// Lazy load non-critical pages to reduce initial JavaScript bundle size (Fixes high FCP/LCP)
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Re-run reveal scan on every route change (catches freshly mounted [data-reveal] elements)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    // Small delay so React finishes rendering the new page's components
    const t = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('revealed');
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );
      document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => obs.observe(el));
    }, 80);

    return () => clearTimeout(t);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 pattern-hex pointer-events-none" style={{ zIndex: -2 }} />
        <div className="fixed inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-[#050508]/80 pointer-events-none" style={{ zIndex: -2 }} />
        
        {/* GLOBAL 3D SCROLLING SHAPES */}
        <FloatingShapes />

        {/* PREMIUM MAGNETIC CURSOR — desktop only */}
        <MagneticCursor />
        
        <ScrollToTop />
        <Navbar />
        
        <main>
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#00F5D4] border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/work" element={<PortfolioPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
