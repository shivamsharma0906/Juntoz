import { useEffect, useState, lazy, Suspense } from 'react';
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
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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
        <div className="fixed inset-0 pattern-hex pointer-events-none" style={{ zIndex: -2 }} />
        <div className="fixed inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-[#050508]/80 pointer-events-none" style={{ zIndex: -2 }} />

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
