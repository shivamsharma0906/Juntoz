const GOOGLE_URL = 'https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D';

export default function BusinessCard() {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-accent-1/6 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-accent-2 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Verified Agency
          </p>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl uppercase leading-none tracking-tighter">
            Juntoz on <span className="text-accent-2 text-glow-cyan">Google</span>
          </h2>
        </div>

        {/* Card */}
        <div className="glass-card-strong p-8 md:p-10 relative overflow-hidden">

          {/* Subtle inner glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent-1/5 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">

            {/* Avatar */}
            <div
              className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl flex items-center justify-center text-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(123,47,255,0.3), rgba(255,58,242,0.2))',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              ⚡
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h3 className="font-heading font-black text-white text-2xl md:text-3xl uppercase leading-none">
                  Juntoz Agency
                </h3>
                <p className="font-body text-white/40 text-sm mt-1">Digital Marketing · Beauty Niche · Mumbai, India</p>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="font-heading font-black text-accent-3 text-xl">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-body text-white/35 text-xs uppercase tracking-widest">(100+ Reviews)</span>
              </div>

              <p className="font-body text-white/55 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                We don't do boring. We build bold, data-driven growth systems for makeup artists who want to dominate their local market.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {['Marketing Experts', 'Beauty Niche', '200+ Clients'].map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href={GOOGLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-heading font-black text-sm uppercase tracking-widest text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #FF3AF2 0%, #7B2FFF 100%)',
                    boxShadow: '0 0 25px rgba(255,58,242,0.4)',
                  }}
                >
                  Read Google Reviews ↗
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
