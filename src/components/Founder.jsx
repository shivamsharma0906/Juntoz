const WA_SOFT = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20a%20custom%20growth%20plan%20for%20my%20business.';

export default function Founder() {
  return (
    <section id="founder" className="relative py-28 bg-background overflow-hidden">
      {/* Very faint orbs only */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-5/8 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-2/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Founder Visual */}
          <div className="relative flex justify-center">
            {/* Soft glow behind frame */}
            <div className="absolute inset-0 bg-accent-2/5 rounded-[40px] blur-[60px] pointer-events-none" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
              {/* Clean frame — no stacked shadows */}
              <div
                className="absolute inset-0 rounded-3xl border border-accent-2/30"
                style={{ boxShadow: '0 0 60px rgba(0, 245, 212, 0.1)' }}
              />
              {/* Inner glass card */}
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-[4rem] mb-3">👨‍💼</div>
                  <div className="font-heading font-black text-lg text-white uppercase tracking-wider">Juntoz</div>
                  <div className="font-body text-xs text-accent-2 uppercase tracking-[0.2em] font-semibold mt-1">Founder</div>
                </div>
              </div>

              {/* Single subtle badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-accent-5/40 border border-accent-5/50 backdrop-blur-md">
                <span className="font-heading font-black text-white text-xs uppercase tracking-widest">200+ Clients</span>
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="space-y-7">
            <div>
              <p className="font-body text-accent-2 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                The person behind Juntoz
              </p>
              <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl uppercase leading-tight tracking-tighter">
                Built by a Marketer<br />
                Who <span className="text-accent-2 text-glow-cyan">Gets</span> the Beauty<br />
                Business.
              </h2>
            </div>

            <div className="space-y-4 text-base md:text-lg text-white/60 font-body font-medium leading-relaxed">
              <p>
                I started Juntoz because I saw talented artists posting beautiful work — and getting{' '}
                <span className="text-white/90 font-semibold">zero clients</span> from it. Not because of skill.
                Because they had no system.
              </p>
              <p>
                We've spent years building funnels, running ads, and studying what actually converts in the beauty niche across India.
              </p>
              <p>
                We're not a general agency.{' '}
                <span className="text-white/90 font-semibold">We only work with beauty businesses</span> — because that focus is exactly why our results are consistent.
              </p>
            </div>

            {/* Mission — glass card with left accent line */}
            <div
              className="glass-card p-5 border-l-2 border-l-accent-2 pl-6"
              style={{ borderRadius: '0 16px 16px 0', borderLeft: '2px solid rgba(0,245,212,0.5)' }}
            >
              <p className="font-heading font-bold text-white text-base md:text-lg uppercase leading-relaxed tracking-wide">
                My mission: Make every talented artist in India as{' '}
                <span className="text-accent-2">booked as they deserve to be.</span>
              </p>
            </div>

            {/* CTA */}
            <a
              href={WA_SOFT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent-1 text-white font-heading font-black text-sm uppercase tracking-widest glow-pink hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Talk to Us Directly
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
