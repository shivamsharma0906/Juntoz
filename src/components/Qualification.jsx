import ScrollReveal from './ScrollReveal.jsx';

const WA_SOFT = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20a%20custom%20growth%20plan%20for%20my%20business.';

const forItems = [
  {
    text: 'Makeup artists wanting consistent bridal bookings',
    icon: (
      <svg className="w-5 h-5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    text: 'Salons ready to invest in data-driven growth',
    icon: (
      <svg className="w-5 h-5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    text: 'Beauty brands scaling their online presence',
    icon: (
      <svg className="w-5 h-5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    text: 'Freelancers ready to attract clients, not chase them',
    icon: (
      <svg className="w-5 h-5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
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
  return (
    <section id="qualification" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Ambient Backgrounds */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00F5D4]/10 rounded-full blur-[150px] pointer-events-none z-0 opacity-20" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">Be Honest With Yourself</span>
          </div>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95] tracking-tighter">
            Is Juntoz <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF] drop-shadow-[0_0_20px_rgba(0,245,212,0.3)]">Right for You?</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── FOR (Dominant, Glowing, Cyan) ── */}
          <ScrollReveal data-reveal="left" delay={100} className="group relative h-full bg-[#05050C] rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_4s_ease-in-out_infinite]"
              style={{ background: `linear-gradient(135deg, #00F5D460, transparent, #00F5D460)` }} />

            <div className="relative h-full bg-[#080810]/95 backdrop-blur-2xl rounded-[31px] p-8 md:p-10 flex flex-col z-10 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none bg-[#00F5D4]" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ backgroundColor: `#00F5D415`, border: `1px solid #00F5D435`, color: '#00F5D4', boxShadow: `0 0 20px #00F5D420` }}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-black text-white text-2xl uppercase tracking-wider text-glow-cyan">
                  This is for you
                </h3>
              </div>

              <div className="space-y-4 flex-1">
                {forItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-[#00F5D4]/30 transition-colors duration-300">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-black/50 border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-[#00F5D4]/50 shadow-inner">
                      {item.icon}
                    </div>
                    <p className="font-body text-white/90 text-sm md:text-base font-bold leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── NOT FOR (Muted, Subordinate) ── */}
          <ScrollReveal data-reveal="right" delay={200} className="group relative h-full bg-[#05050C] rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative h-full bg-[#080810]/95 backdrop-blur-2xl rounded-[31px] p-8 md:p-10 flex flex-col z-10 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

              <div className="flex items-center gap-4 mb-8 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-heading font-black text-white text-xl uppercase tracking-wider">
                  This is not for you
                </h3>
              </div>

              <div className="space-y-4 flex-1">
                {notForItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-white/20 shrink-0 mt-2" />
                    <p className="font-body text-white/40 text-sm leading-relaxed line-through decoration-white/20 group-hover:text-white/60 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5 text-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <p className="font-body text-white text-[10px] sm:text-xs uppercase tracking-widest leading-loose max-w-xs mx-auto font-bold">
                  We'd rather work with fewer clients who are all-in.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ── Bottom CTA Button ── */}
        <ScrollReveal data-reveal="up" delay={300} className="mt-16 flex flex-col items-center gap-4">
          <div className="relative group/cta inline-block">
             <div className="absolute -inset-2 bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF] rounded-full blur-xl opacity-30 group-hover/cta:opacity-60 transition duration-500 animate-pulse" />
             <a
              href={WA_SOFT}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-heading font-black text-sm md:text-base uppercase tracking-widest text-background transition-transform duration-300 hover:scale-[1.02]"
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
