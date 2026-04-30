const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20grow%20my%20makeup%20business.';

export default function CTASection() {
  return (
    <section id="cta" className="relative py-40 bg-accent-4 overflow-hidden z-10 border-y-8 border-background">
      {/* Pattern Layer */}
      <div className="absolute inset-0 pattern-stripes opacity-20 mix-blend-overlay z-0 pointer-events-none"></div>
      
      {/* Giant Typography Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none mix-blend-multiply opacity-20 overflow-hidden flex justify-center">
        <h2 className="text-[10rem] md:text-[25rem] font-heading font-black leading-none text-accent-1 md:animate-pulse select-none">
          LFG
        </h2>
      </div>

      {/* Mobile Ambient Glows */}
      <div className="absolute top-[20%] left-[-10%] w-40 h-40 bg-accent-1 rounded-full mix-blend-screen opacity-50 blur-lg md:blur-[50px] md:opacity-0 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-40 h-40 bg-accent-2 rounded-full mix-blend-screen opacity-50 blur-lg md:blur-[50px] md:opacity-0 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-20 text-center">
        
        {/* Urgency Badge */}
        <div className="inline-block bg-background border-4 border-accent-3 px-6 md:px-8 py-2 md:py-3 rounded-full mb-8 md:mb-12 shadow-[8px_8px_0_#FFE600] -rotate-3 hover:rotate-0 transition-transform mx-2">
          <span className="font-heading font-black text-white text-base sm:text-xl md:text-2xl uppercase tracking-widest flex items-center gap-2 md:gap-3">
            <span className="md:animate-pulse">🔥</span> LIMITED CLIENT SLOTS
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] uppercase text-background leading-[0.9] tracking-tighter mb-4 -rotate-1 text-shadow-1">
          READY TO BE
        </h2>
        <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] uppercase text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-10 md:mb-12 rotate-2 text-shadow-mega bg-accent-1 inline-block px-4 max-w-full overflow-hidden text-ellipsis">
          CONSISTENTLY BOOKED?
        </h2>

        {/* Action Button */}
        <div className="flex justify-center mt-4 md:mt-8 px-2">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center h-16 sm:h-20 md:h-24 px-6 sm:px-12 md:px-16 rounded-[40px] bg-gradient-to-r from-accent-2 via-accent-3 to-accent-1 border-4 md:border-8 border-background font-heading font-black text-lg sm:text-2xl md:text-4xl uppercase tracking-widest text-background shadow-hard-2 hover:scale-105 hover:shadow-hard-3 transition-all duration-300 ease-out active:scale-95 z-30 overflow-hidden w-full sm:w-auto text-center"
          >
            <span className="absolute inset-0 pattern-dots opacity-20 mix-blend-overlay"></span>
            <span className="relative z-10 flex items-center gap-2 md:gap-4 justify-center">
              <span className="text-2xl sm:text-4xl md:text-5xl md:animate-wiggle">💬</span>
              DM US ON WHATSAPP
            </span>
          </a>
        </div>

        <p className="font-heading font-bold uppercase tracking-widest text-background mt-8 text-base md:text-xl">
          NO FLUFF. JUST RESULTS.
        </p>

      </div>
    </section>
  );
}
