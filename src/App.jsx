import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load heavy desktop-only modules (Three.js/3D Scene and spring cursors)
const FloatingShapes = lazy(() => import('./components/FloatingShapes'));
const MagneticCursor = lazy(() => import('./components/MagneticCursor'));

// Lazy load non-critical pages to reduce initial JavaScript bundle size (Fixes high FCP/LCP)
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ForMakeupArtistsPage = lazy(() => import('./pages/ForMakeupArtistsPage'));
const ForSalonsPage = lazy(() => import('./pages/ForSalonsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Re-run reveal scan on every route change (catches freshly mounted [data-reveal] elements)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    // Small delay so React finishes rendering the new page's components
    const t = setTimeout(() => {
      if (typeof window.observeForReveal === 'function') {
        document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
          window.observeForReveal(el);
        });
      }
    }, 80);

    return () => clearTimeout(t);
  }, [pathname]);
  return null;
}

// Global mouse-tracking ambient glow — desktop only, zero re-renders via rAF
function GlobalMouseGlow() {
  const glowRef = useRef(null);
  const rafRef  = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Start centred so there's no "jump" on first mouse move
    let currentX = window.innerWidth  / 2;
    let currentY = window.innerHeight / 2;
    let targetX  = currentX;
    let targetY  = currentY;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      // Smooth lerp — follows cursor with a 10% lag per frame
      currentX += (targetX - currentX) * 0.10;
      currentY += (targetY - currentY) * 0.10;

      el.style.transform = `translate(${currentX - 350}px, ${currentY - 350}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
      style={{
        zIndex: -1,
        background: 'radial-gradient(circle, rgba(0,245,212,0.07) 0%, rgba(123,47,255,0.05) 40%, transparent 70%)',
        filter: 'blur(60px)',
        willChange: 'transform',
      }}
    />
  );
}

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const handlePreloadError = () => {
      window.location.reload();
    };
    window.addEventListener('vite:preloadError', handlePreloadError);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('vite:preloadError', handlePreloadError);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        {/* Single fixed full-page grid texture — consistent across ALL sections */}
        <div className="fixed inset-0 pattern-grid pointer-events-none" style={{ zIndex: -2, opacity: 0.35 }} />
        {/* Subtle vignette: darkens very top and bottom edges only */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -2, background: 'linear-gradient(to bottom, rgba(5,5,8,0.6) 0%, transparent 12%, transparent 88%, rgba(5,5,8,0.6) 100%)' }} />

        {/* GLOBAL MOUSE AMBIENT GLOW — desktop only, follows cursor across entire site */}
        {isDesktop && <GlobalMouseGlow />}

        {/* GLOBAL 3D SCROLLING SHAPES — desktop only and loaded lazily */}
        {isDesktop && (
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        )}

        {/* PREMIUM MAGNETIC CURSOR — desktop only and loaded lazily */}
        {isDesktop && (
          <Suspense fallback={null}>
            <MagneticCursor />
          </Suspense>
        )}

        <ScrollToTop />
        <Navbar />

        <main>
          <ErrorBoundary message="A section of the page failed to load due to a recent update. Please reload the page to get the latest version.">
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#00F5D4] border-t-transparent rounded-full animate-spin"></div></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/work/:slug" element={<CaseStudyPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/for-makeup-artists" element={<ForMakeupArtistsPage />} />
                <Route path="/for-salons" element={<ForSalonsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
