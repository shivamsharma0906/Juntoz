import ScrollReveal from './ScrollReveal.jsx';

const GROWTH_STAGES = [
  { step: '01', name: 'Strategy',     desc: 'Unit economics, competitive audit & commercial roadmapping.' },
  { step: '02', name: 'Brand',        desc: 'Visual identity, rate positioning & credibility assets.' },
  { step: '03', name: 'Reach',        desc: 'Omnichannel presence across Search, Meta & Local Discovery.' },
  { step: '04', name: 'Traffic',      desc: 'Directing high-intent buyers to dedicated landing endpoints.' },
  { step: '05', name: 'Leads',        desc: 'Instant WhatsApp & form pre-qualification funnels.' },
  { step: '06', name: 'Customers',    desc: 'Booked consultations, appointments & closed sales.' },
  { step: '07', name: 'Optimization', desc: 'CAC reduction, creative iteration & conversion testing.' },
  { step: '08', name: 'Growth',       desc: 'Predictable, compounded revenue & market authority.' },
];

export default function HowWeGrowBusinesses() {
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-[#F7F6F2] relative border-b border-[#DEDED7]/70">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">

        {/* ── SECTION HEADER ── */}
        <ScrollReveal data-reveal="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-heading font-black text-[#111111] text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-4">
            We Don&apos;t Provide Isolated Tasks.{' '}
            <span className="text-[#5D2E85]">We Build Growth Systems.</span>
          </h2>
          {/* hide on mobile — too verbose */}
          <p className="font-body text-[#5F5F5A] text-sm md:text-lg leading-relaxed hidden sm:block">
            Running ads without a landing page burns money. Posting content without conversion
            pathways produces vanity likes. Here is how Juntoz connects every digital touchpoint
            into a unified customer engine.
          </p>
          {/* short version on mobile */}
          <p className="font-body text-[#5F5F5A] text-sm leading-relaxed sm:hidden">
            Every touchpoint connected. One compounded growth engine.
          </p>
        </ScrollReveal>

        {/* ══════════════════════════════════
            MOBILE: horizontal scrollable snake
        ══════════════════════════════════ */}
        <div className="sm:hidden -mx-4 px-4 mb-10">
          {/* Progress strip */}
          <div className="flex items-center gap-0 mb-6 overflow-x-auto scrollbar-none pb-1">
            {GROWTH_STAGES.map((s, idx) => (
              <div key={s.step} className="flex items-center shrink-0">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-[#5D2E85] flex items-center justify-center shrink-0">
                    <span className="text-white font-heading font-black text-[10px]">{s.step}</span>
                  </div>
                  <span className="text-[10px] font-heading font-black text-[#5D2E85] uppercase tracking-wide mt-0.5 whitespace-nowrap">
                    {s.name}
                  </span>
                </div>
                {idx < GROWTH_STAGES.length - 1 && (
                  <div className="w-6 h-[2px] bg-gradient-to-r from-[#5D2E85] to-[#DEDED7] mx-0.5 mt-[-12px] shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Horizontal scrollable cards */}
          <div className="flex gap-3 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-3 -mx-4 px-4">
            {GROWTH_STAGES.map((s, idx) => (
              <div
                key={s.name}
                className="snap-start shrink-0 w-[72vw] max-w-[260px] bg-white border border-[#DEDED7] rounded-2xl p-4 shadow-card flex flex-col gap-2"
              >
                {/* Phase badge */}
                <div className="flex items-center justify-between">
                  <span className="font-heading font-black text-[11px] text-[#5D2E85] bg-[#F1E7F9] px-2.5 py-0.5 rounded-full border border-[#5D2E85]/20">
                    PHASE {s.step}
                  </span>
                  {idx < GROWTH_STAGES.length - 1 && (
                    <span className="text-[#DEDED7] text-base font-black">→</span>
                  )}
                </div>
                {/* Name */}
                <h3 className="font-heading font-black text-base text-[#111111] uppercase tracking-tight leading-tight">
                  {s.name}
                </h3>
                {/* Desc */}
                <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <p className="text-center text-[11px] font-sans font-semibold text-[#5F5F5A] mt-3 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            Swipe to see all 8 phases
          </p>
        </div>

        {/* ══════════════════════════════════
            DESKTOP: 4×2 grid (unchanged)
        ══════════════════════════════════ */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {GROWTH_STAGES.map((s, idx) => (
            <ScrollReveal key={s.name} data-reveal="up" delay={idx * 60}>
              <div className="relative p-6 rounded-3xl bg-white border border-[#DEDED7] shadow-subtle hover:border-[#111111]/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-xs text-[#5D2E85] bg-[#F1E7F9] px-2.5 py-1 rounded-full border border-[#5D2E85]/20">
                      PHASE {s.step}
                    </span>
                    {idx < GROWTH_STAGES.length - 1 && (
                      <span className="hidden lg:block text-[#DEDED7] text-sm font-black">→</span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-tight mb-2">
                    {s.name}
                  </h3>
                  <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </section>
  );
}
