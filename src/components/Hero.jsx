import { useEffect, useState } from 'react';

const WA_SOFT = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20a%20custom%20growth%20plan%20for%20my%20business.';
const WA_HARD = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-background pt-24 pb-32"
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 pattern-grid opacity-100 z-0 pointer-events-none" />
      
      {/* Elegant, subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-2/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-accent-1/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* ── Content Container ── */}
      <div className={`container mx-auto px-5 sm:px-6 relative z-10 flex flex-col items-center text-center transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 sm:mb-8">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-2 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-2"></span>
          </span>
          <span className="font-body font-bold text-white/80 text-[10px] tracking-[0.2em] uppercase">
            India's Premier Beauty Growth Agency
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-[2.5rem] leading-[1] sm:text-6xl md:text-7xl lg:text-[6.5rem] uppercase tracking-tighter text-white max-w-5xl mb-4 sm:mb-6 lg:leading-[0.9]">
          We Don't Run Ads. <br className="hidden sm:block" />
          We Fill Your{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-2 to-accent-1 relative z-10">
              Calendar.
            </span>
            {/* Subtle glow pulse on CALENDAR */}
            <span className="absolute inset-0 bg-accent-2/20 blur-[20px] rounded-full animate-glow-pulse z-0 pointer-events-none" />
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-body text-white/80 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed mb-6">
          Turn your Instagram into a consistent booking machine that brings paying clients every month.
        </p>

        {/* Trust / Proof Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-body text-white/40 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-10 sm:mb-12">
          <span className="flex items-center gap-1.5 text-white/60">
            <svg className="w-3.5 h-3.5 text-accent-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            200+ beauty clients
          </span>
          <span className="hidden sm:block opacity-30">|</span>
          <span className="text-white/60">5.0 rating</span>
          <span className="hidden sm:block opacity-30">|</span>
          <span className="text-white/60">100+ active monthly</span>
        </div>

        {/* CTAs & Urgency */}
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none mb-5">
            {/* Primary CTA with subtle heartbeat pulse */}
            <a
              href={WA_SOFT}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-cta-pulse w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 bg-accent-2 text-background rounded-full font-heading font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,245,212,0.25)]"
            >
              Get 15–30 Leads in 30 Days
            </a>
            
            {/* Secondary CTA Ghost */}
            <a
              href={WA_HARD}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 bg-transparent border border-white/20 text-white rounded-full font-heading font-black text-sm sm:text-base uppercase tracking-widest opacity-60 hover:opacity-100 hover:bg-white/5 transition-all duration-300"
            >
              Book Strategy Call
            </a>
          </div>

          {/* Micro Urgency & Live Proof */}
          <div className="flex flex-col items-center gap-2 mt-4 pb-8">
            <p className="font-body text-white/30 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
              ⚡ Only 5 strategy slots left this week
            </p>
            <p className="font-body text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-bold flex items-center gap-2 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
              </span>
              12 bookings generated this week
            </p>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <span className="font-heading font-black text-white/20 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/10 relative overflow-hidden">
          <div className="w-full h-1/2 bg-white/40 absolute top-0 animate-scroll-down" />
        </div>
      </div>

      {/* Global CSS for Hero Animations */}
      <style>{`
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-cta-pulse {
          animation: subtle-pulse 2.5s ease-in-out infinite;
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.1; transform: scale(0.9); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes scroll-down {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
