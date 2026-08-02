import ScrollReveal from './ScrollReveal.jsx';

const GOOGLE_URL = 'https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D';

const TAGS = ['Marketing Experts', 'Growth Systems', '200+ Clients'];

export default function BusinessCard() {
  return (
    <section className="relative py-16 sm:py-28 bg-background overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
           style={{ background: 'radial-gradient(ellipse, #00F5D4, transparent)' }} />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
           style={{ background: 'radial-gradient(circle, #7B2FFF, transparent)' }} />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">

        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">
              Verified &amp; Trusted Agency
            </span>
          </div>
          <h2 className="font-heading font-black text-white text-3xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter">
            Juntoz on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">
              Google
            </span>
          </h2>
        </ScrollReveal>

        {/* ─── MOBILE CARD (< md) ──────────────────────────────── */}
        <ScrollReveal data-reveal="up" delay={150} className="block md:hidden">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(5,5,12,0.95) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
            }}
          >
            {/* Top 3-colour accent line */}
            <div className="h-[2px] w-full"
              style={{ background: 'linear-gradient(to right, #00F5D4, #7B2FFF, #FF3AF2)' }} />

            <div className="p-5">

              {/* Row 1: Logo + Name */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5D4] to-[#7B2FFF] blur-md opacity-50 rounded-2xl animate-pulse" />
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(123,47,255,0.4), rgba(255,58,242,0.2))',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-[#05050C] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-black text-white text-xl uppercase leading-none tracking-tight">
                    Juntoz Agency
                  </h3>
                  <p className="font-body text-white/45 text-[11px] font-medium mt-0.5 leading-snug">
                    Digital Marketing · Mumbai, India
                  </p>
                </div>
              </div>

              {/* Row 2: Star rating */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-heading font-black text-[#FFE600] text-2xl leading-none">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FFE600]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="w-px h-3.5 bg-white/20" />
                <span className="font-body text-white/50 text-[10px] uppercase tracking-widest font-bold">100+ Reviews</span>
              </div>

              {/* Row 3: Punchy copy */}
              <p className="font-body text-white/60 text-sm leading-relaxed mb-4">
                We build bold, data-driven growth systems that help businesses dominate their market with predictable, scalable results.
              </p>

              {/* Row 4: Tags — single-line horizontal scroll */}
              <div className="flex gap-2 overflow-x-auto pb-1 mb-5" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {TAGS.map((tag) => (
                  <span key={tag} className="shrink-0 font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/55 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Full-width pinned CTA */}
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-between w-full px-5 py-4 font-heading font-black text-sm uppercase tracking-widest text-[#05050C] relative overflow-hidden transition-all duration-300 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #FF3AF2 0%, #7B2FFF 100%)',
                boxShadow: '0 -4px 20px rgba(255,58,242,0.25)',
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
              <span className="relative z-10">Read Google Reviews</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        {/* ─── DESKTOP CARD (≥ md) ─────────────────────────────── */}
        <ScrollReveal data-reveal="up" delay={150} className="hidden md:block">
          <div className="group relative p-1 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
               style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[nav-cta-sweep_1.5s_ease-in-out_infinite] pointer-events-none" />

            <div className="relative bg-[#05050C]/90 backdrop-blur-2xl rounded-[22px] p-12 overflow-hidden flex items-start gap-12">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-1/20 rounded-full blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00F5D4]/10 rounded-full blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5D4] to-[#7B2FFF] blur-md opacity-50 rounded-3xl animate-pulse" />
                <div className="relative w-32 h-32 rounded-3xl flex items-center justify-center shadow-2xl"
                     style={{
                       background: 'linear-gradient(135deg, rgba(123,47,255,0.4), rgba(255,58,242,0.2))',
                       border: '1px solid rgba(255,255,255,0.15)',
                       backdropFilter: 'blur(10px)',
                     }}>
                  <svg className="w-16 h-16 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-blue-500 rounded-full border-4 border-[#05050C] flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-left space-y-5 relative z-10">
                <div className="space-y-1">
                  <h3 className="font-heading font-black text-white text-4xl uppercase leading-none tracking-tight">Juntoz Agency</h3>
                  <p className="font-body text-white/50 text-base font-medium tracking-wide">Digital Marketing · Mumbai, India</p>
                </div>

                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md">
                  <span className="font-heading font-black text-[#FFE600] text-xl leading-none">5.0</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#FFE600] drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="w-px h-4 bg-white/20 mx-1" />
                  <span className="font-body text-white/60 text-xs uppercase tracking-widest font-bold">100+ Reviews</span>
                </div>

                <p className="font-body text-white/70 text-base leading-relaxed max-w-lg">
                  We build bold, data-driven growth systems that help businesses dominate their market with predictable, scalable results.
                </p>

                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <span key={tag} className="font-body text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white/90 hover:bg-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={GOOGLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-black text-sm uppercase tracking-widest text-background overflow-hidden shadow-[0_0_30px_rgba(255,58,242,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,58,242,0.5)]"
                    style={{ background: 'linear-gradient(135deg, #FF3AF2 0%, #7B2FFF 100%)' }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                    <span className="relative z-10">Read Google Reviews</span>
                    <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}