import ScrollReveal from './ScrollReveal.jsx';

const WA_SOFT = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20a%20custom%20growth%20plan%20for%20my%20business.';

const forItems = [
  {
    text: 'Ambitious businesses looking to scale revenue predictably',
    icon: (
      <svg className="w-5 h-5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    text: 'Founders ready for a full-stack growth team under one roof',
    icon: (
      <svg className="w-5 h-5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    text: 'Brands seeking data-driven customer acquisition funnels',
    icon: (
      <svg className="w-5 h-5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    text: 'Companies valuing long-term partner relationships over cheap tactics',
    icon: (
      <svg className="w-5 h-5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

const notForItems = [
  { text: 'Businesses looking for quick superficial hacks without a real strategy' },
  { text: 'Teams expecting overnight ROI without giving campaigns room to optimize' },
  { text: 'Companies unwilling to collaborate or invest in creative assets' },
  { text: 'Anyone seeking fragmented transactional freelancing services' },
];

export default function Qualification() {
  return (
    <section id="qualification" className="relative py-12 sm:py-16 md:py-24 bg-background overflow-hidden">
      {/* Ambient Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00F5D4]/10 rounded-full blur-[150px] pointer-events-none z-0 opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-8 sm:mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">Be Honest With Yourself</span>
          </div>
          <h2 className="font-heading font-black text-white text-2xl sm:text-4xl md:text-6xl uppercase leading-[0.95] tracking-tighter">
            Is Juntoz <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF]">Right for You?</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-12">

          {/* ── FOR (Dominant, Glowing, Cyan) ── */}
          <ScrollReveal data-reveal="left" delay={100} className="group relative h-full bg-[#05050C] rounded-2xl sm:rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_4s_ease-in-out_infinite]"
              style={{ background: `linear-gradient(135deg, #00F5D460, transparent, #00F5D460)` }} />

            <div className="relative h-full bg-[#080810]/95 backdrop-blur-2xl rounded-[15px] sm:rounded-[31px] p-4 sm:p-8 md:p-10 flex flex-col z-10 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none bg-[#00F5D4]" />
              
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundColor: `#00F5D415`, border: `1px solid #00F5D435`, color: '#00F5D4', boxShadow: `0 0 20px #00F5D420` }}>
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-black text-white text-lg sm:text-2xl uppercase tracking-wider text-glow-cyan">
                  This is for you
                </h3>
              </div>

              <div className="space-y-2.5 sm:space-y-4 flex-1">
                {forItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2.5 sm:p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-[#00F5D4]/30 transition-colors duration-300">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 shrink-0 rounded-full bg-black/50 border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-[#00F5D4]/50 shadow-inner mt-0.5">
                      {item.icon}
                    </div>
                    <p className="font-body text-white/90 text-xs sm:text-sm md:text-base font-bold leading-relaxed pt-0.5">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── NOT FOR (Muted, Subordinate) ── */}
          <ScrollReveal data-reveal="right" delay={200} className="group relative h-full bg-[#05050C] rounded-2xl sm:rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative h-full bg-[#080810]/95 backdrop-blur-2xl rounded-[15px] sm:rounded-[31px] p-4 sm:p-8 md:p-10 flex flex-col z-10 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-heading font-black text-white text-base sm:text-xl uppercase tracking-wider">
                  This is not for you
                </h3>
              </div>

              <div className="space-y-2 sm:space-y-4 flex-1">
                {notForItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 sm:p-4 rounded-xl border border-transparent hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20 shrink-0 mt-2" />
                    <p className="font-body text-white/40 text-xs sm:text-sm leading-relaxed line-through decoration-white/20 group-hover:text-white/60 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-5 sm:mt-8 pt-4 sm:pt-8 border-t border-white/5 text-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <p className="font-body text-white text-[10px] sm:text-xs uppercase tracking-widest leading-relaxed max-w-xs mx-auto font-bold">
                  We'd rather work with fewer clients who are all-in.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ── Bottom CTA Button ── */}
        <ScrollReveal data-reveal="up" delay={300} className="mt-8 sm:mt-16 flex flex-col items-center gap-4">
          <div className="relative group/cta inline-block w-full sm:w-auto text-center">
             <div className="absolute -inset-2 bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF] rounded-full blur-xl opacity-30 group-hover/cta:opacity-60 transition duration-500 animate-pulse" />
             <a
              href={WA_SOFT}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-10 sm:py-5 w-full sm:w-auto rounded-full font-heading font-black text-xs sm:text-sm md:text-base uppercase tracking-wider sm:tracking-widest text-background transition-transform duration-300 hover:scale-[1.02] active:scale-95"
              style={{ background: '#00F5D4' }}
             >
               Get Your Custom Growth Plan
             </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
