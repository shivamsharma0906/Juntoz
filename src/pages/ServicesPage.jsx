import Services from '../components/Services';
import Qualification from '../components/Qualification';
import EcosystemSection from '../components/EcosystemSection';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <PageMeta
        title="Services & Capabilities — Full-Stack Growth Team"
        description="From Brand Strategy & Creative to Performance Ads, Web Engineering, and WhatsApp Automation. Explore Juntoz's full-stack marketing capabilities."
        path="/services"
      />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal data-reveal="up" className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">Full-Stack Capabilities</span>
          </div>
          <h1 className="font-heading font-black text-white text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tighter mb-6">
            Engineering Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#7B2FFF] to-[#FF3AF2]">Growth Machine</span>
          </h1>
          <p className="font-body text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We replace fragmented agencies with one integrated growth unit. Strategy, creative, web development, and performance advertising operating in sync.
          </p>
        </ScrollReveal>
      </div>

      <Services />
      <EcosystemSection />
      <Qualification />
    </div>
  );
}
