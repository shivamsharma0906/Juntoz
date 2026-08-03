import Services from '../components/Services';
import Qualification from '../components/Qualification';
import EcosystemSection from '../components/EcosystemSection';
import PageMeta from '../components/PageMeta';

export default function ServicesPage() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-20 min-h-screen bg-background">
      <PageMeta
        title="Services & Capabilities — Full-Stack Growth Team"
        description="From Brand Strategy & Creative to Performance Ads, Web Engineering, and WhatsApp Automation. Explore Juntoz's full-stack marketing capabilities."
        path="/services"
      />

      <Services compactTop={true} />
      <EcosystemSection />
      <Qualification />
    </div>
  );
}
