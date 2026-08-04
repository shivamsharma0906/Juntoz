import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';

// Lazy load below-the-fold components
const WhyMarketingBreaks = lazy(() => import('../components/WhyMarketingBreaks'));
const WorkGallery        = lazy(() => import('../components/WorkGallery'));
const Services           = lazy(() => import('../components/Services')); // What We Build
const BehindTheWork      = lazy(() => import('../components/BehindTheWork'));
const Testimonials       = lazy(() => import('../components/Testimonials'));
const FAQSection         = lazy(() => import('../components/FAQSection'));
const CTASection         = lazy(() => import('../components/CTASection'));

export default function Home() {
  return (
    <>
      <PageMeta
        title="Juntoz Digital Marketing Agency — Turn Your Art Into a Booked-Out Business"
        description="Juntoz helps makeup artists attract clients and scale consistently. Social media growth, performance ads, branding, content creation and website design for MUAs across India."
        path="/"
      />
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
