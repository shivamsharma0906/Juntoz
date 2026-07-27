import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

// Lazy load below-the-fold components to reduce initial page bundle weight
const BenefitsSection   = lazy(() => import('../components/BenefitsSection'));
const AboutUs           = lazy(() => import('../components/AboutUs'));
const AboutImpact       = lazy(() => import('../components/AboutImpact'));
const InnovationSection = lazy(() => import('../components/InnovationSection'));
const Testimonials      = lazy(() => import('../components/Testimonials'));
const ProblemSolution   = lazy(() => import('../components/ProblemSolution'));
const NumbersSection    = lazy(() => import('../components/NumbersSection'));
const HowItWorks        = lazy(() => import('../components/HowItWorks'));
const FAQSection        = lazy(() => import('../components/FAQSection'));
const MapSection        = lazy(() => import('../components/MapSection'));

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <BenefitsSection />
        <AboutUs />
        <AboutImpact />
        <InnovationSection />
        <Testimonials />
        <ProblemSolution />
        <NumbersSection />
        <HowItWorks />
        <FAQSection />
        <MapSection />
      </Suspense>
    </>
  );
}
