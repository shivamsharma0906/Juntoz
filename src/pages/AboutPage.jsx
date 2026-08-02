import About from '../components/About';
import AboutUs from '../components/AboutUs';
import Founder from '../components/Founder';
import BusinessCard from '../components/BusinessCard';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12 bg-background min-h-screen">
      <PageMeta
        title="About Juntoz — Your Integrated Digital Growth Team"
        description="Learn about Juntoz, our mission, leadership, and how we help businesses scale with data-driven marketing systems."
        path="/about"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <ScrollReveal data-reveal="up" className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">The Integrated Team</span>
          </div>
          <h1 className="font-heading font-black text-white text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tighter mb-6">
            We Engineer <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#7B2FFF] to-[#FF3AF2]">Predictable Growth</span>
          </h1>
          <p className="font-body text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Juntoz replaces fragmented freelancers and traditional agencies with one unified growth partner. Strategy, creative, web engineering, and performance marketing operating in perfect sync.
          </p>
        </ScrollReveal>
      </div>

      <AboutUs />
      <About />
      <Founder />
      <BusinessCard />
    </div>
  );
}
