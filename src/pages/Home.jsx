import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

// Lazy load below-the-fold components to reduce initial page bundle weight
const Results         = lazy(() => import('../components/Results'));
const WhyJuntoz       = lazy(() => import('../components/WhyJuntoz'));
const Services        = lazy(() => import('../components/Services'));
const HowItWorks      = lazy(() => import('../components/HowItWorks'));
const Testimonials    = lazy(() => import('../components/Testimonials'));
const FAQSection      = lazy(() => import('../components/FAQSection'));
const CTASection      = lazy(() => import('../components/CTASection'));

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <Results />
        <WhyJuntoz />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </Suspense>
    </>
  );
}
