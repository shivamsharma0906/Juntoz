import ScrollReveal from './ScrollReveal.jsx';

const WA_SOFT = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20a%20custom%20growth%20plan%20for%20my%20business.';

export default function Founder() {
  return (
    <section id="founder" className="relative py-28 md:py-36 bg-background overflow-hidden">
      {/* Premium Ambient Backgrounds */}
      <div className="absolute inset-0 pattern-grid opacity-50 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-5/10 rounded-full blur-[150px] pointer-events-none z-0 opacity-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-2/10 rounded-full blur-[120px] pointer-events-none z-0 opacity-40" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Founder Visual */}
          <ScrollReveal data-reveal="fade" className="relative flex justify-center order-2 lg:order-1">
            {/* Cinematic Glow Behind Image */}
            <div className="absolute inset-0 bg-accent-2/20 rounded-[3rem] blur-[80px] pointer-events-none opacity-60 animate-pulse" />

            <div className="relative z-10 group transition-transform duration-700 hover:scale-[1.02]">
              {/* Outer Border Frame */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-accent-2/50 to-transparent p-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-[2.5rem] bg-background" />
              </div>
              
              {/* Inner Glass Card */}
              <div className="relative bg-[#05050C]/80 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center p-12 md:p-16 border border-white/5 shadow-2xl">
                
                {/* Subtle Inner Highlight */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-2/50 to-transparent opacity-50" />
                
                <div className="text-[5rem] md:text-[6rem] mb-6 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">👨‍💼</div>
                <div className="font-heading font-black text-2xl md:text-3xl text-white uppercase tracking-widest">Juntoz</div>
                <div className="font-body text-xs md:text-sm text-accent-2 uppercase tracking-[0.3em] font-bold mt-2">Founder & Strategist</div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:-right-8 px-6 py-3 rounded-full bg-accent-5/20 border border-accent-5/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-float-orb">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-5 animate-pulse" />
                  <span className="font-heading font-black text-white text-xs md:text-sm uppercase tracking-widest">200+ Clients Scaled</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Copy */}
          <div className="space-y-8 order-1 lg:order-2">
            <ScrollReveal data-reveal="up">
              <p className="inline-flex items-center gap-2 font-body text-accent-2 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 px-3 py-1 rounded-full border border-accent-2/20 bg-accent-2/5">
                The person behind Juntoz
              </p>
              <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95] tracking-tighter">
                Built by a Marketer<br />
                Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF] drop-shadow-[0_0_20px_rgba(0,245,212,0.3)]">Gets</span> the<br />
                Beauty Business.
              </h2>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={100}>
              <div className="space-y-5 text-base md:text-lg text-white/60 font-body leading-relaxed max-w-xl">
                <p>
                  I started Juntoz because I saw talented artists posting beautiful work — and getting{' '}
                  <span className="text-white font-bold">zero clients</span> from it. Not because of skill.
                  Because they had no predictable system.
                </p>
                <p>
                  We've spent years building funnels, running ads, and studying what actually converts in the beauty niche across India.
                </p>
                <p>
                  We're not a general agency.{' '}
                  <span className="text-accent-2 font-bold bg-accent-2/10 px-2 py-0.5 rounded">We exclusively scale beauty businesses</span> — because that laser-focus is exactly why our results are unmatched.
                </p>
              </div>
            </ScrollReveal>

            {/* Mission Quote */}
            <ScrollReveal data-reveal="up" delay={200}>
              <div className="relative p-6 rounded-2xl bg-gradient-to-r from-accent-2/10 to-transparent border-l-4 border-l-accent-2 backdrop-blur-sm">
                <svg className="absolute top-4 right-4 w-8 h-8 text-accent-2/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.714 4.14-8.814 8.783-11.415l-1.42 2.62c-2.43 1.13-4.66 3.65-4.66 5.629h3.766v10.557h-6.469zm-13.017 0v-7.391c0-5.714 4.14-8.814 8.783-11.415l-1.42 2.62c-2.43 1.13-4.66 3.65-4.66 5.629h3.766v10.557h-6.469z"/>
                </svg>
                <p className="font-heading font-black text-white text-lg md:text-xl uppercase leading-relaxed tracking-wide max-w-[90%]">
                  My mission: Make every talented artist in India as{' '}
                  <span className="text-accent-2 drop-shadow-[0_0_15px_rgba(0,245,212,0.4)]">booked as they deserve to be.</span>
                </p>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal data-reveal="up" delay={300}>
              <a
                href={WA_SOFT}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-5 rounded-full font-heading font-black text-sm uppercase tracking-widest text-background overflow-hidden shadow-[0_0_30px_rgba(0,245,212,0.3)] transition-all duration-300 hover:scale-105"
                style={{ background: '#00F5D4' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span className="relative z-10">Talk to Us Directly</span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float-orb {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-orb {
          animation: float-orb 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
