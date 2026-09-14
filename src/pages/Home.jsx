import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';

// Lazy load below-the-fold curiosity-driven trailer sections
const HomeServicesTeaser  = lazy(() => import('../components/HomeServicesTeaser'));
const HomeGMBTeaser       = lazy(() => import('../components/HomeGMBTeaser'));
const HomeWorkTeaser      = lazy(() => import('../components/HomeWorkTeaser'));
const HomeSpecialtyTeaser = lazy(() => import('../components/HomeSpecialtyTeaser'));
const CTASection          = lazy(() => import('../components/CTASection'));

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
        <HomeServicesTeaser />
        <HomeGMBTeaser />
        <HomeWorkTeaser />
        <HomeSpecialtyTeaser />
        <CTASection />
      </Suspense>
    </>
  );
}
