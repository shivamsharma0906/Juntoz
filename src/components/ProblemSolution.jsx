import ScrollReveal from './ScrollReveal.jsx';

const pains = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Posting consistently but getting zero bookings?',
    sub: "You're creating content — but it's not turning into clients.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    text: 'Thousands of followers, but no paying clients?',
    sub: "Vanity metrics don't pay rent. You need a conversion system.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Spent money on ads that brought nothing back?',
    sub: 'Random boosting isn\'t advertising. Targeted campaigns are.',
  },
];

const fixes = [
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ), 
    text: 'Targeted ads that bring real bridal enquiries' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ), 
    text: 'Instagram strategy that converts followers to clients' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ), 
    text: 'Google SEO so clients find you first' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ), 
    text: 'WhatsApp funnels that turn DMs into confirmed bookings' 
  },
];

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="relative py-10 md:py-14 bg-background overflow-hidden">
      
      {/* Dynamic Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF3AF2]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00F5D4]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Central Divider Line (Desktop) */}
      <div className="hidden lg:block absolute top-24 bottom-24 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-white/50 to-transparent opacity-50 blur-[2px] animate-slide-down" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">

          {/* ── LEFT COLUMN (THE PROBLEM) ── */}
          <ScrollReveal data-reveal="right" className="space-y-10 relative">
            <div className="absolute -inset-x-6 -inset-y-6 bg-gradient-to-br from-[#FF3AF2]/5 to-transparent rounded-[3rem] blur-xl -z-10 opacity-50" />
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF3AF2]/20 bg-[#FF3AF2]/5 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF3AF2] animate-pulse" />
                <span className="font-body font-semibold text-[#FF3AF2] text-[10px] tracking-widest uppercase">Sound Familiar?</span>
              </div>
              <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tighter">
                You're Working Hard.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3AF2] to-[#ff7eb3]">
                  But Not Smart.
                </span>
              </h2>
            </div>

            {/* Pain Cards */}
            <div className="space-y-4">
              {pains.map((p, i) => (
                <div 
                  key={i} 
                  className="group relative p-5 rounded-2xl bg-[#05050C] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF3AF2]/30 hover:shadow-[0_10px_30px_rgba(255,58,242,0.1)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF3AF2]/0 to-[#FF3AF2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FF3AF2]/10 flex items-center justify-center border border-[#FF3AF2]/20 text-[#FF3AF2] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                      {p.icon}
                    </div>
                    <div>
                      <p className="font-body font-bold text-white/90 text-sm sm:text-base group-hover:text-white transition-colors duration-300">{p.text}</p>
                      <p className="font-body text-xs sm:text-sm text-white/50 mt-1 leading-relaxed group-hover:text-white/70 transition-colors duration-300">{p.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pink Callout Block */}
            <div className="relative overflow-hidden rounded-2xl p-6 bg-[#FF3AF2]/5 border border-[#FF3AF2]/20 group hover:border-[#FF3AF2]/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3AF2]/0 via-[#FF3AF2]/10 to-[#FF3AF2]/0 -translate-x-[100%] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] pointer-events-none" />
              <div className="flex gap-5 items-center relative z-10">
                <div className="w-1.5 h-12 bg-[#FF3AF2] rounded-full shrink-0 shadow-[0_0_15px_rgba(255,58,242,0.6)]" />
                <p className="font-heading font-black text-white/90 text-lg uppercase leading-snug tracking-wide">
                  The problem isn't your talent.<br />
                  <span className="text-[#FF3AF2] text-glow-pink">It's your system.</span>
                </p>
              </div>
            </div>

          </ScrollReveal>


          {/* ── RIGHT COLUMN (THE SOLUTION) ── */}
          <ScrollReveal data-reveal="left" delay={200} className="space-y-8 lg:pt-14 relative">
            <div className="absolute -inset-x-6 -inset-y-6 bg-gradient-to-br from-[#00F5D4]/5 to-transparent rounded-[3rem] blur-xl -z-10 opacity-50" />
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F5D4]/20 bg-[#00F5D4]/5 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
                <span className="font-body font-semibold text-[#00F5D4] text-[10px] tracking-widest uppercase">The Juntoz System</span>
              </div>
              <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tighter">
                We Build You a<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF]">
                  Growth Machine.
                </span>
              </h2>
            </div>

            <p className="font-body text-white/60 text-base md:text-lg leading-relaxed max-w-lg border-l-2 border-[#00F5D4]/30 pl-5 py-1">
              Not random posts. Not boosted reels. A complete, end-to-end system that attracts, captures, and converts the right clients — every single month.
            </p>

            {/* Solution Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fixes.map((f, i) => (
                <div 
                  key={i} 
                  className="group relative p-5 rounded-2xl bg-[#05050C] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00F5D4]/40 hover:shadow-[0_10px_30px_rgba(0,245,212,0.15)] overflow-hidden flex flex-col justify-center min-h-[110px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 flex items-center justify-center text-[#00F5D4] group-hover:scale-110 group-hover:bg-[#00F5D4] group-hover:text-background transition-all duration-500 shadow-inner">
                      {f.icon}
                    </div>
                    <span className="font-body text-white/80 text-sm font-bold leading-snug group-hover:text-white transition-colors duration-300">
                      {f.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cyan Callout Block */}
            <div className="relative overflow-hidden rounded-2xl p-6 bg-[#00F5D4]/5 border border-[#00F5D4]/20 group hover:border-[#00F5D4]/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F5D4]/0 via-[#00F5D4]/10 to-[#00F5D4]/0 -translate-x-[100%] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] pointer-events-none" />
              <div className="flex gap-5 items-center relative z-10">
                <div className="w-1.5 h-12 bg-[#00F5D4] rounded-full shrink-0 shadow-[0_0_15px_rgba(0,245,212,0.6)]" />
                <p className="font-heading font-black text-white/90 text-lg uppercase leading-snug tracking-wide">
                  We don't sell services.<br />
                  <span className="text-[#00F5D4] text-glow-cyan">We sell a booked-out calendar.</span>
                </p>
              </div>
            </div>

          </ScrollReveal>

        </div>
      </div>

      <style>{`
        @keyframes slide-down {
          0% { transform: translate(-50%, -100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-50%, 1000px); opacity: 0; }
        }
        .animate-slide-down {
          animation: slide-down 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
