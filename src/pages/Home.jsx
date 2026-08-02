import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

// Lazy load below-the-fold components
const WhyMarketingBreaks = lazy(() => import('../components/WhyMarketingBreaks'));
const WorkGallery        = lazy(() => import('../components/WorkGallery'));
const EcosystemSection   = lazy(() => import('../components/EcosystemSection'));
const Services           = lazy(() => import('../components/Services')); // What We Build
const BehindTheWork      = lazy(() => import('../components/BehindTheWork'));
const Testimonials       = lazy(() => import('../components/Testimonials'));
const FAQSection         = lazy(() => import('../components/FAQSection'));
const CTASection         = lazy(() => import('../components/CTASection'));

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <WhyMarketingBreaks />
        <WorkGallery />
        <Services />
        <BehindTheWork />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </Suspense>
    </>
  );
}
