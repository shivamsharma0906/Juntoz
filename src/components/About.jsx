export default function About() {
  const values = [
    'UNAPOLOGETIC GROWTH',
    'DATA-BACKED CREATIVE',
    'ZERO EXCUSES',
  ];

  return (
    <section id="about" className="relative py-32 bg-accent-2 overflow-hidden z-10 border-y-8 border-background">
      {/* Pattern Layer */}
      <div className="absolute inset-0 pattern-mesh opacity-30 mix-blend-multiply z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left — Visual Chaos */}
          <div className="relative z-10">
            <div className="absolute -inset-10 bg-accent-3/40 blur-3xl rounded-full z-0 pointer-events-none"></div>
            
            <div className="relative z-10 w-full aspect-square bg-background border-8 border-accent-1 rounded-[40px] shadow-hard-2 rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 pattern-stripes opacity-20 pointer-events-none"></div>
              
              <div className="text-center p-8 relative z-10">
                <div className="font-heading font-black text-3xl text-accent-2 uppercase tracking-widest mb-2 bg-muted inline-block px-4 py-1 border-4 border-accent-2 rotate-[-5deg]">EST. 2023</div>
                <h3 className="font-heading font-black text-[5rem] md:text-[7rem] leading-none text-white text-shadow-mega -rotate-2">
                  15+
                </h3>
                <p className="font-heading font-bold text-2xl uppercase tracking-widest text-accent-3 bg-background inline-block px-4 py-2 border-4 border-accent-3 shadow-[4px_4px_0_#FFF] rotate-2 mt-4">
                  Growth Obsessed Specialists
                </p>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 right-4 text-5xl animate-spin-slow">🔥</div>
              <div className="absolute bottom-4 left-4 text-5xl animate-bounce-subtle">💻</div>
            </div>
          </div>

          {/* Right — Text Content */}
          <div className="space-y-6 md:space-y-8 relative z-20">
            <div className="inline-block px-4 md:px-6 py-1 md:py-2 border-4 border-background bg-accent-1 text-background font-heading font-black tracking-widest text-sm md:text-base uppercase rotate-2 shadow-[4px_4px_0_#0D0D1A] md:shadow-[6px_6px_0_#0D0D1A]">
              WHO WE ARE
            </div>

            <div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl uppercase text-background leading-[0.9] tracking-tighter text-shadow-1 mb-2">
                YOUR CREATIVE
              </h2>
              <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl uppercase text-white leading-[0.9] tracking-tighter text-shadow-3 bg-background inline-block px-3 md:px-4 py-1 -rotate-1 max-w-full overflow-hidden text-ellipsis">
                GROWTH PARTNER.
              </h2>
            </div>

            <p className="font-body text-lg md:text-2xl text-background font-bold leading-relaxed bg-white/50 p-4 md:p-6 rounded-2xl border-4 border-dashed border-background">
              We are a growth-focused agency built explicitly for makeup artists and beauty brands. We don't just make things look pretty; we build aggressive systems that turn attention into real paying clients.
            </p>

            {/* Core Values */}
            <div className="flex flex-col gap-4 pt-4">
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-4 bg-background p-4 border-4 border-accent-3 shadow-[4px_4px_0_#FF3AF2] hover:-translate-y-1 hover:shadow-[6px_6px_0_#00F5D4] transition-all">
                  <div className="w-8 h-8 shrink-0 bg-accent-1 rounded-full flex items-center justify-center font-black text-background text-sm">
                    {i + 1}
                  </div>
                  <span className="font-heading font-black text-xl md:text-2xl text-white uppercase tracking-wider">{v}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
