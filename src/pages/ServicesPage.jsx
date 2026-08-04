import Services from '../components/Services';
import Qualification from '../components/Qualification';
import EcosystemSection from '../components/EcosystemSection';
import PageMeta from '../components/PageMeta';

export default function ServicesPage() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-20 min-h-screen bg-background">
      <PageMeta
        title="Services & Capabilities — Scale Your Beauty Brand | Juntoz"
        description="From bridal booking funnels and Instagram Reels production to high-ROAS Meta Ads and local SEO. See how our full-stack growth team scales beauty brands."
        path="/services"
      />

      <Services compactTop={true} />
      <EcosystemSection />
      <Qualification />
    </div>
  );
}
