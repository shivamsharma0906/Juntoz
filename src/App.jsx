import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load non-critical pages to reduce initial JavaScript bundle size (Fixes high FCP/LCP)
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FounderPage = lazy(() => import('./pages/FounderPage'));
const CoFounderPage = lazy(() => import('./pages/CoFounderPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ForMakeupArtistsPage = lazy(() => import('./pages/ForMakeupArtistsPage'));
const ForSalonsPage = lazy(() => import('./pages/ForSalonsPage'));
const GoogleBusinessProfilePage = lazy(() => import('./pages/GoogleBusinessProfilePage'));
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

function App() {
  useEffect(() => {
    const handlePreloadError = () => {
      window.location.reload();
    };
    window.addEventListener('vite:preloadError', handlePreloadError);

    return () => {
      window.removeEventListener('vite:preloadError', handlePreloadError);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#F7F6F2] text-[#111111]">
        <ScrollToTop />
        <Navbar />

        <main>
          <ErrorBoundary message="A section of the page failed to load due to a recent update. Please reload the page to get the latest version.">
            <Suspense fallback={
              <div className="h-screen w-full flex items-center justify-center bg-[#F7F6F2]">
                <div className="w-8 h-8 border-2 border-[#111111] border-t-[#5D2E85] rounded-full animate-spin"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/work/:slug" element={<CaseStudyPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/founder" element={<FounderPage />} />
                <Route path="/co-founder" element={<CoFounderPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/for-makeup-artists" element={<ForMakeupArtistsPage />} />
                <Route path="/for-salons" element={<ForSalonsPage />} />
                <Route path="/google-business-profile" element={<GoogleBusinessProfilePage />} />
                <Route path="/gmb" element={<GoogleBusinessProfilePage />} />
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
