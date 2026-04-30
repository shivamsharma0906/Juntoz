import { useEffect } from 'react';

const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20grow%20my%20makeup%20business.';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden bg-background pt-40 pb-32 z-0">
      
      {/* Pattern Layering (z-0) */}
      <div className="absolute inset-0 pattern-mesh opacity-30 z-0"></div>
      <div className="absolute inset-0 pattern-dots opacity-20 z-0 md:animate-spin-slow origin-center scale-150"></div>

      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none mix-blend-overlay overflow-hidden flex justify-center">
        <h1 className="text-[5rem] sm:text-[10rem] md:text-[25rem] font-heading font-black leading-none text-accent-1/20 select-none md:animate-pulse">
          GROWTH
        </h1>
      </div>

      {/* Floating Decorative Shapes (z-10) - Disabled on mobile for performance */}
      <div className="absolute top-[18%] left-[5%] md:left-[10%] text-3xl md:text-6xl md:animate-float z-10 select-none">✨</div>
      <div className="absolute bottom-[18%] right-[5%] md:right-[15%] text-4xl md:text-7xl md:animate-float-reverse z-10 select-none">🚀</div>
      <div className="absolute top-[35%] right-[5%] md:right-[10%] text-2xl md:text-5xl md:animate-bounce-subtle z-10 select-none">💸</div>
      <div className="absolute bottom-[25%] left-[2%] md:left-[5%] text-3xl md:text-6xl md:animate-wiggle z-10 select-none">🎯</div>

      {/* Geometric Floaties (Mobile Glow Orbs) - Reduced blur & animations on mobile */}
      <div className="absolute top-[12%] right-[0%] md:right-[25%] w-24 h-24 md:w-16 md:h-16 bg-accent-2 rounded-full mix-blend-screen opacity-60 md:opacity-50 md:animate-float blur-md md:blur-xl z-10 pointer-events-none"></div>
      <div className="absolute bottom-[15%] left-[-10%] md:left-[25%] w-32 h-32 md:w-24 md:h-24 bg-accent-1 rounded-full mix-blend-screen opacity-60 md:opacity-50 md:animate-float-reverse blur-md md:blur-xl z-10 pointer-events-none"></div>

      {/* Content Container (z-20) */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 border-4 border-accent-3 bg-muted/50 rounded-full backdrop-blur-md shadow-[4px_4px_0_#00F5D4] -rotate-2 hover:rotate-0 transition-transform cursor-default mx-2 relative z-30">
            <span className="text-lg md:text-xl md:animate-wiggle inline-block">💎</span>
            <span className="font-heading font-bold uppercase tracking-widest text-accent-2 text-[10px] sm:text-sm md:text-base whitespace-normal text-center">
              THE BEAUTY INDUSTRY'S SECRET WEAPON
            </span>
          </div>

          {/* Headlines */}
          <div className="space-y-2 relative px-2 z-20">
            <h1 className="font-heading font-black uppercase text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-shadow-3 -rotate-1 drop-shadow-lg">
              TURN YOUR ART
            </h1>
            <h1 className="font-heading font-black uppercase text-[1.8rem] sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-none bg-gradient-text transform rotate-1 md:scale-105 inline-block text-shadow-2 relative z-20 drop-shadow-2xl">
              INTO A BOOKED-OUT
            </h1>
            <h1 className="font-heading font-black uppercase text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-shadow-mega text-accent-3 mt-1 md:mt-2 -rotate-2 drop-shadow-lg">
              BUSINESS.
            </h1>
          </div>

          {/* Subtext */}
          <p className="font-body text-base md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed bg-muted/40 p-4 md:p-5 rounded-xl border-2 border-dashed border-accent-2/50 backdrop-blur-sm shadow-md">
            We don't sell promises. We build unapologetic, high-converting growth systems that <span className="text-accent-3 font-bold">fill your calendar</span> and <span className="text-accent-2 font-bold">scale your income</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4 md:pt-8 w-full max-w-sm sm:max-w-none mx-auto">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center min-h-[56px] md:min-h-[64px] py-4 px-6 sm:px-12 rounded-full bg-gradient-to-r from-accent-1 via-accent-5 to-accent-2 border-4 border-accent-3 font-heading font-black text-sm sm:text-lg md:text-xl uppercase tracking-widest text-white shadow-hard-1 hover:scale-105 hover:shadow-hard-2 transition-all duration-300 ease-out active:scale-95 z-30 w-full sm:w-auto"
            >
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <span className="mr-2 md:mr-3 text-xl md:text-2xl md:animate-wiggle">💬</span>
              Start on WhatsApp
            </a>
            
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center h-14 md:h-16 px-6 sm:px-10 rounded-full bg-transparent border-4 border-dashed border-accent-2 font-heading font-black text-sm sm:text-base md:text-lg uppercase tracking-widest text-white hover:bg-accent-2 hover:border-solid hover:text-background hover:scale-105 transition-all duration-300 ease-out active:scale-95 shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:shadow-[0_0_40px_rgba(0,245,212,0.6)] z-30 w-full sm:w-auto"
            >
              View Our Work
            </a>
          </div>

          {/* Trust Badge */}
          <div className="pt-12 inline-flex flex-col items-center gap-3">
            <div className="flex gap-1 bg-accent-5/30 p-2 rounded-xl border-2 border-accent-1 rotate-1 hover:-rotate-1 transition-transform">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-accent-3 drop-shadow-[0_0_8px_rgba(255,230,0,0.8)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-heading font-bold text-accent-2 tracking-widest uppercase text-sm">
              Loved by 200+ Beauty Brands
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
