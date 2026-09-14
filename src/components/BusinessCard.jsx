import ScrollReveal from './ScrollReveal.jsx';

const GOOGLE_URL = 'https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D';

const TAGS = ['Marketing Experts', 'Growth Systems', '200+ Clients'];

export default function BusinessCard() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#F7F6F2] border-t border-[#DEDED7] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">

        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
            <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">
              Verified &amp; Trusted Agency
            </span>
          </div>
          <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl uppercase leading-tight tracking-tight">
            Juntoz on Google
          </h2>
        </ScrollReveal>

        {/* Card Component */}
        <ScrollReveal data-reveal="up" delay={150}>
          <div className="relative rounded-3xl bg-white border border-[#DEDED7] shadow-card overflow-hidden transition-all duration-300 hover:shadow-hover">
            {/* Vermilion accent top border */}
            <div className="h-1 w-full bg-[#E84A2A]" />

            <div className="p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10">
              {/* Agency Monogram / Verified Badge */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#111111] flex items-center justify-center shadow-md">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#287A55] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-left space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <h3 className="font-heading font-black text-[#111111] text-2xl sm:text-3xl uppercase tracking-tight">
                      Juntoz Agency
                    </h3>
                    <p className="font-body text-[#5F5F5A] text-sm font-medium mt-0.5">
                      Digital Growth Agency · Mumbai, India
                    </p>
                  </div>

                  {/* Star Rating Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#F7F6F2] border border-[#DEDED7] rounded-full px-4 py-1.5 self-start">
                    <span className="font-heading font-black text-[#111111] text-lg leading-none">5.0</span>
                    <div className="flex gap-0.5 text-[#E84A2A]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="w-px h-3.5 bg-[#DEDED7]" />
                    <span className="font-body text-[#5F5F5A] text-xs font-semibold">100+ Reviews</span>
                  </div>
                </div>

                <p className="font-body text-[#5F5F5A] text-sm sm:text-base leading-relaxed">
                  We build high-converting growth systems and targeted client acquisition engines that help Indian businesses scale with predictable, verified ROI.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {TAGS.map((tag) => (
                    <span key={tag} className="font-body text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#F7F6F2] border border-[#DEDED7] text-[#5F5F5A]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-3">
                  <a
                    href={GOOGLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111111] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#E84A2A] shadow-sm active:scale-[0.98]"
                  >
                    <span>Read Google Reviews</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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