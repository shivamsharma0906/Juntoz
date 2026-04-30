export default function BusinessCard() {
  return (
    <section className="relative py-24 bg-accent-1 overflow-hidden z-10">
      {/* Pattern Layer */}
      <div className="absolute inset-0 pattern-mesh opacity-40 mix-blend-multiply pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="max-w-4xl mx-auto">

          <div className="bg-background border-8 border-accent-3 p-8 md:p-16 rounded-[40px] shadow-[16px_16px_0_#FFE600,32px_32px_0_#00F5D4] rotate-1 relative overflow-hidden group">

            {/* Background elements inside card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-5 blur-3xl opacity-30 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

            {/* Verification Sticker */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-accent-2 border-2 md:border-4 border-background text-background font-heading font-black px-2 py-1 md:px-4 md:py-2 rotate-12 shadow-[2px_2px_0_#FFF] md:shadow-[4px_4px_0_#FFF] md:animate-bounce-subtle z-10 text-xs sm:text-sm md:text-xl uppercase">
              100% VERIFIED
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 relative z-10 text-center md:text-left">

              {/* Profile Image Avatar (Abstract) */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 shrink-0 bg-accent-4 rounded-full border-4 md:border-8 border-accent-3 flex items-center justify-center overflow-hidden shadow-hard-1 -rotate-6">
                <div className="text-[3rem] md:text-[5rem] md:animate-wiggle">⚡</div>
              </div>

              {/* Text Info */}
              <div className="flex-1 space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
                <h3 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-none text-shadow-1">
                  Juntoz Agency
                </h3>

                <div className="flex flex-wrap gap-3">
                  <span className="font-heading font-bold text-sm bg-accent-5 px-4 py-1 border-2 border-white text-white uppercase tracking-widest rounded-full">Marketing Experts</span>
                  <span className="font-heading font-bold text-sm bg-accent-1 px-4 py-1 border-2 border-white text-white uppercase tracking-widest rounded-full">Beauty Niche</span>
                </div>

                <div className="flex items-center gap-2 text-2xl pt-2">
                  <span className="font-heading font-black text-accent-3">5.0</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-3 text-2xl md:animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>★</span>
                    ))}
                  </div>
                  <span className="font-body text-white/50 text-sm font-bold uppercase underline">(100+ Reviews)</span>
                </div>

                <p className="font-body text-lg text-white/80 max-w-lg font-medium leading-relaxed">
                  We don't do boring. We build bold, aggressive growth systems for makeup artists who want to dominate their local market.
                </p>

                {/* Google Button */}
                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-background font-heading font-black uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-[8px_8px_0_#FF3AF2] hover:shadow-[0_0_20px_#FF3AF2] border-4 border-background overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-accent-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10"></span>
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                      Read Google Reviews <span className="text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
