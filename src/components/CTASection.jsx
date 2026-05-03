const WA_HARD = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

export default function CTASection() {
  return (
    <section id="cta" className="relative py-40 bg-accent-4 overflow-hidden z-10 border-y-8 border-background">
      <div className="absolute inset-0 pattern-stripes opacity-20 mix-blend-overlay z-0 pointer-events-none" />

      {/* Giant Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none overflow-hidden flex justify-center">
        <div className="text-[6rem] md:text-[22rem] font-heading font-black leading-none text-accent-1 opacity-10 select-none">NOW</div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-20 text-center">

        {/* Scarcity Badge */}
        <div className="inline-block bg-background border-4 border-accent-3 px-6 md:px-8 py-3 rounded-full mb-10 shadow-[8px_8px_0_#FFE600] -rotate-2 hover:rotate-0 transition-transform">
          <span className="font-heading font-black text-white text-base sm:text-xl md:text-2xl uppercase tracking-widest flex items-center gap-3">
            <span className="animate-pulse">🔥</span>
            ONLY 3 SLOTS LEFT FOR JUNE ONBOARDING
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] uppercase text-background leading-[0.9] tracking-tighter mb-4 -rotate-1 text-shadow-1">
          READY TO BE
        </h2>
        <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] uppercase text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-4 rotate-2 text-shadow-mega bg-accent-1 inline-block px-4">
          CONSISTENTLY
        </h2>
        <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] uppercase text-background leading-[0.9] tracking-tighter mb-12 -rotate-1">
          BOOKED?
        </h2>

        <p className="font-body text-background/80 font-bold text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
          We only onboard <strong>10 new clients per month</strong>. This keeps our results consistent. Don't wait until the slots are gone.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="text-center">
            <a
              href={WA_HARD}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center h-16 sm:h-20 md:h-24 px-8 sm:px-14 md:px-16 rounded-[40px] bg-gradient-to-r from-accent-2 via-accent-3 to-accent-1 border-4 md:border-8 border-background font-heading font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-widest text-background shadow-[8px_8px_0_#0D0D1A] hover:scale-105 hover:shadow-[12px_12px_0_#0D0D1A] transition-all duration-300 ease-out active:scale-95 overflow-hidden"
            >
              <span className="absolute inset-0 pattern-dots opacity-20 mix-blend-overlay" />
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-3xl md:text-4xl">📞</span>
                Book a Strategy Call
              </span>
            </a>
            <p className="font-heading font-bold uppercase tracking-widest text-background/70 mt-3 text-sm">Limited slots available each month.</p>
          </div>
        </div>

        <p className="font-body text-background/50 font-bold uppercase tracking-widest text-sm mt-10">
          No fluff. No long-term contracts. Just results.
        </p>

      </div>
    </section>
  );
}
