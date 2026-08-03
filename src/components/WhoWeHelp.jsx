import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal.jsx';

export default function WhoWeHelp() {
  return (
    <section className="py-16 md:py-24 relative z-10 bg-background overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B2FFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        <ScrollReveal className="mb-12 text-center">
          <span className="font-heading font-bold tracking-widest text-[#00F5D4] uppercase text-xs mb-3 block">
            Who We Partner With
          </span>
          <h2 className="font-heading font-black text-white text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            Select Your Niche
          </h2>
          <p className="font-body text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            Choose your business type to explore tailored growth funnels, case studies, and services engineered for your audience.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Makeup Artists */}
          <ScrollReveal delay={100}>
            <Link
              to="/for-makeup-artists"
              className="group block p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#FF3AF2]/40 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(255,58,242,0.1)] transition-all duration-500 h-full relative overflow-hidden"
            >
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FF3AF2]/10 border border-[#FF3AF2]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">✨</span>
                  </div>
                  <h3 className="font-heading font-black text-white text-2xl uppercase tracking-tight mb-3">
                    I'm a Makeup Artist
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    Bridal-season booking funnels, Reels organic growth strategy, and high-ticket portfolio positioning designed to fill your masterclasses and calendar.
                  </p>
                </div>
                <div className="font-heading font-bold text-xs uppercase tracking-widest text-[#FF3AF2] flex items-center gap-2 pt-4">
                  View MUA Growth Systems 
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Card 2: Salons & Clinics */}
          <ScrollReveal delay={200}>
            <Link
              to="/for-salons"
              className="group block p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#00F5D4]/40 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(0,245,212,0.1)] transition-all duration-500 h-full relative overflow-hidden"
            >
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">💈</span>
                  </div>
                  <h3 className="font-heading font-black text-white text-2xl uppercase tracking-tight mb-3">
                    I Run a Salon or Clinic
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    Hyper-local Google Maps SEO, mid-week attraction ads to fill dead chairs, and WhatsApp-automated retention systems that secure repeat bookings.
                  </p>
                </div>
                <div className="font-heading font-bold text-xs uppercase tracking-widest text-[#00F5D4] flex items-center gap-2 pt-4">
                  View Salon Growth Systems 
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
