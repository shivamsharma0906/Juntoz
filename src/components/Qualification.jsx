import { useEffect, useRef, useState } from 'react';

const WA_SOFT = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20a%20custom%20growth%20plan%20for%20my%20business.';

const forItems = [
  { 
    text: 'Makeup artists wanting consistent bridal bookings', 
    icon: (
      <svg className="w-5 h-5 text-accent-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    text: 'Salons ready to invest in real, data-driven growth', 
    icon: (
      <svg className="w-5 h-5 text-accent-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ) 
  },
  { 
    text: 'Beauty brands who want to scale their online presence', 
    icon: (
      <svg className="w-5 h-5 text-accent-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ) 
  },
  { 
    text: 'Freelancers tired of chasing clients — ready to attract them', 
    icon: (
      <svg className="w-5 h-5 text-accent-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ) 
  },
];

const notForItems = [
  { text: 'People looking for the cheapest option in the market' },
  { text: 'Businesses not ready to implement strategy consistently' },
  { text: 'Anyone expecting overnight results without effort' },
  { text: 'Those not ready to invest seriously in their growth' },
];

export default function Qualification() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="qualification" className="relative py-32 bg-background overflow-hidden">
      
      {/* ── Ambient Backgrounds ── */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-1/10 rounded-full blur-[120px] pointer-events-none z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

      <div className="container mx-auto px-5 sm:px-6 max-w-[1200px] relative z-10">

        {/* ── Header ── */}
        <div className={`text-center mb-16 sm:mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-ping" />
            <p className="font-body text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
              Be Honest With Yourself
            </p>
          </div>
          <h2 className="font-heading font-black text-white text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.95] tracking-tighter max-w-4xl mx-auto">
            Is Juntoz <br className="sm:hidden" />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-2 to-[#00ff9d] relative z-10">
                Right for You?
              </span>
              <span className="absolute inset-0 bg-accent-2/20 blur-[30px] z-[-1] animate-pulse"></span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── FOR (Dominant, Glowing, Cyan) ── */}
          <div 
            className={`group relative p-6 sm:p-10 rounded-[2rem] border border-accent-2/30 bg-[#0a0f12] overflow-hidden transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Sweep Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-2/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/10 to-transparent -translate-x-[150%] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-accent-2/10 border border-accent-2/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,212,0.3)] group-hover:scale-110 group-hover:bg-accent-2 group-hover:text-background transition-all duration-500 text-accent-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-black text-white text-2xl uppercase tracking-wider">
                  This is for you
                </h3>
              </div>

              <div className="space-y-4">
                {forItems.map((item, i) => (
                  <div key={i} className="group/item flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-2/40 hover:bg-accent-2/5 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#050508] border border-white/10 flex items-center justify-center group-hover/item:border-accent-2/50 group-hover/item:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                    <p className="font-body text-white/90 text-lg font-bold leading-snug pt-1.5 group-hover/item:text-white transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-2xl bg-accent-2/10 border border-accent-2/20 text-center relative overflow-hidden group-hover:border-accent-2/40 transition-colors duration-500">
                <p className="font-heading font-black text-accent-2 text-sm sm:text-base uppercase tracking-widest relative z-10">
                  Nodding your head? Let's talk. 👇
                </p>
              </div>
            </div>
          </div>

          {/* ── NOT FOR (Muted, Subordinate) ── */}
          <div 
            className={`group relative p-6 sm:p-10 rounded-[2rem] border border-white/5 bg-[#050508]/50 overflow-hidden transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {/* Subtle glitch noise effect on hover */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-heading font-black text-white text-xl uppercase tracking-wider">
                  This is not for you
                </h3>
              </div>

              <div className="space-y-4">
                {notForItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-5 p-5 rounded-2xl border border-transparent hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="w-5 h-5 rounded-full border-2 border-white/10 shrink-0 mt-1 opacity-50" />
                    <p className="font-body text-white/30 text-base leading-relaxed line-through decoration-white/20 group-hover:text-white/40 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <p className="font-body text-white text-xs sm:text-sm uppercase tracking-[0.2em] leading-loose max-w-xs mx-auto">
                  We'd rather work with fewer clients who are all-in.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom CTA Button ── */}
        <div className={`mt-20 flex flex-col items-center gap-4 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group/btn">
            {/* Massive pulse glow */}
            <div className="absolute -inset-2 bg-accent-1 opacity-40 blur-2xl rounded-full group-hover/btn:opacity-70 group-hover/btn:blur-3xl transition-all duration-500 animate-pulse" />
            
            <a
              href={WA_SOFT}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-accent-1 text-white font-heading font-black text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(255,58,242,0.4)] group-hover/btn:brightness-110 group-hover/btn:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              {/* Highlight sweep on button */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:animate-[sweep_1s_ease-in-out_infinite]" />
              Get Your Growth Plan
            </a>
          </div>
          <span className="font-body text-white/30 text-[10px] sm:text-xs uppercase font-bold tracking-[0.3em]">
            No commitment · Takes 30 sec
          </span>
        </div>

      </div>
    </section>
  );
}
