import ScrollReveal from './ScrollReveal.jsx';

const GOOGLE_URL = 'https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D';

export default function BusinessCard() {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-[100px] pointer-events-none z-0 opacity-40"
           style={{ background: 'radial-gradient(ellipse, #00F5D4, transparent)' }} />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
           style={{ background: 'radial-gradient(circle, #7B2FFF, transparent)' }} />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">
              Verified & Trusted Agency
            </span>
          </div>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter">
            Juntoz on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">Google</span>
          </h2>
        </ScrollReveal>

        {/* Premium Glass Card */}
        <ScrollReveal data-reveal="up" delay={150}>
          <div className="group relative p-1 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
               style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))' }}>
            
            {/* Shimmer Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[nav-cta-sweep_1.5s_ease-in-out_infinite] pointer-events-none" />

            <div className="relative bg-[#05050C]/90 backdrop-blur-2xl rounded-[22px] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              
              {/* Inner Glow Spotlight */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-1/20 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00F5D4]/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

              {/* Dynamic Avatar */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5D4] to-[#7B2FFF] blur-md opacity-50 rounded-3xl animate-pulse" />
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center shadow-2xl"
                     style={{
                       background: 'linear-gradient(135deg, rgba(123,47,255,0.4), rgba(255,58,242,0.2))',
                       border: '1px solid rgba(255,255,255,0.15)',
                       backdropFilter: 'blur(10px)'
                     }}>
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                {/* Verified Badge */}
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-blue-500 rounded-full border-4 border-[#05050C] flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 text-center md:text-left space-y-5 relative z-10">
                
                <div className="space-y-1">
                  <h3 className="font-heading font-black text-white text-3xl md:text-4xl uppercase leading-none tracking-tight">
                    Juntoz Agency
                  </h3>
                  <p className="font-body text-white/50 text-sm md:text-base font-medium tracking-wide">
                    Digital Marketing · Beauty Niche · Mumbai, India
                  </p>
                </div>

                {/* Rating Block */}
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md">
                  <span className="font-heading font-black text-[#FFE600] text-xl leading-none">5.0</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#FFE600] drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="w-px h-4 bg-white/20 mx-1" />
                  <span className="font-body text-white/60 text-[11px] md:text-xs uppercase tracking-widest font-bold">100+ Reviews</span>
                </div>

                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
                  We don't do boring. We build bold, data-driven growth systems for makeup artists who want to dominate their local market with predictable bookings.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {['Marketing Experts', 'Beauty Niche', '200+ Clients'].map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white/90 hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-4">
                  <a
                    href={GOOGLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-black text-sm uppercase tracking-widest text-background overflow-hidden shadow-[0_0_30px_rgba(255,58,242,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,58,242,0.5)]"
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
