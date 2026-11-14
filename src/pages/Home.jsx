import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';

// Core Capabilities & Services Spine Accordion
const ServicesGrid          = lazy(() => import('../components/ServicesGrid'));

// Business and conversion growth systems
const HowWeGrowBusinesses   = lazy(() => import('../components/HowWeGrowBusinesses'));
const ComparisonMatrix      = lazy(() => import('../components/ComparisonMatrix'));
const LeadRoutingSection    = lazy(() => import('../components/sections/LeadRoutingSection'));
const HomeGMBTeaser         = lazy(() => import('../components/HomeGMBTeaser'));
const TrustExecutionSection = lazy(() => import('../components/TrustExecutionSection'));
const CTASection            = lazy(() => import('../components/CTASection'));

export default function Home() {
  return (
    <>
      <PageMeta
        title="Juntoz Digital Marketing Agency — We Turn Digital Presence Into Business Growth"
        description="Juntoz is a full-service digital growth agency. We help ambitious businesses build their brand, capture high-intent demand, and scale revenue through performance ads, SEO, GMB management, and web conversion engines."
        path="/"
      />
      <Hero />
      <Suspense fallback={null}>
        {/* Core Capabilities: Interactive Spine Accordion */}
        <ServicesGrid />

        {/* Growth & Conversion Systems */}
        <HowWeGrowBusinesses />
        <ComparisonMatrix />
        <LeadRoutingSection />
        <HomeGMBTeaser />
        <TrustExecutionSection />
        <CTASection />
      </Suspense>
    </>
  );
}
