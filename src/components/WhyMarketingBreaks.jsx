import ScrollReveal from './ScrollReveal.jsx';

export default function WhyMarketingBreaks() {
  return (
    <section id="why-marketing-breaks" className="py-12 sm:py-16 md:py-24 relative z-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <ScrollReveal data-reveal="flip-3d">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-heading font-bold tracking-widest text-[#FF3AF2] uppercase text-sm mb-4 block">
              The Agency Problem
            </span>
            <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
              Why Most Marketing <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3AF2] to-[#9855FF]">Breaks Down</span>.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          
          {/* Traditional Agency */}
          <ScrollReveal data-reveal="flip-3d" delay={100}>
            <div className="group relative rounded-[2rem] overflow-hidden p-[1px] transition-all duration-500 hover:-translate-y-1.5 h-full flex flex-col">
              {/* Outer Border Shimmer */}
              <div className="absolute inset-0 bg-white/5 border border-white/10 group-hover:bg-red-500/20 transition-colors duration-500" />
              
              <div className="relative h-full bg-[#0E0E1C]/25 backdrop-blur-xl rounded-[31px] p-6 sm:p-12 flex flex-col justify-between z-10 overflow-hidden">
                {/* Red light pool on hover */}
                <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ background: '#EF4444' }} />
                
                <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-20 group-hover:opacity-10 transition-opacity">
                  <svg className="w-16 h-16 sm:w-24 sm:h-24 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white/40 uppercase tracking-widest mb-6 sm:mb-10 relative z-10">
                    Traditional Agency
                  </h3>
                  
                  <ul className="space-y-4 sm:space-y-6 relative z-10">
                    {[
                      "Different freelancers for different tasks",
                      "No cross-channel communication",
                      "Generic campaigns without business context",
                      "Slow revisions that kill momentum",
                      "Reports that show clicks, not revenue"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 sm:gap-4">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500/50" />
                        </span>
                        <span className="font-body text-white/60 text-sm sm:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Juntoz */}
          <ScrollReveal data-reveal="flip-3d" delay={200}>
            <div className="group relative rounded-[2rem] overflow-hidden p-[1px] transition-all duration-500 hover:-translate-y-1.5 h-full flex flex-col">
              {/* Outer Border Shimmer */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br" style={{ background: 'linear-gradient(135deg, #00F5D480, transparent 65%, #FF3AF280)' }} />
              
              <div className="relative h-full bg-[#0E0E1C]/45 backdrop-blur-xl rounded-[31px] p-6 sm:p-12 flex flex-col justify-between z-10 overflow-hidden">
                {/* Dynamic light pools on hover */}
                <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[90px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ background: '#00F5D4' }} />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-[90px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" style={{ background: '#FF3AF2' }} />
                
                <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg className="w-16 h-16 sm:w-24 sm:h-24 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-widest mb-6 sm:mb-10 drop-shadow-md">
                    Juntoz Growth System
                  </h3>
                  
                  <ul className="space-y-4 sm:space-y-6">
                    {[
                      "One integrated team under one roof",
                      "Strategy, Creative, and Ads working in sync",
                      "Fast iteration based on real data",
                      "Continuous optimization for scaling",
                      "A complete growth engine focused on ROI"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 sm:gap-4">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00F5D4]/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(0,245,212,0.3)]">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#00F5D4]" />
                        </span>
                        <span className="font-body text-white text-sm sm:text-lg font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
