import ScrollReveal from './ScrollReveal.jsx';

const GROWTH_STAGES = [
  { step: '01', name: 'Strategy', desc: 'Unit economics, competitive audit & commercial roadmapping.' },
  { step: '02', name: 'Brand', desc: 'Visual identity, rate positioning & credibility assets.' },
  { step: '03', name: 'Reach', desc: 'Omnichannel presence across Search, Meta & Local Discovery.' },
  { step: '04', name: 'Traffic', desc: 'Directing high-intent buyers to dedicated landing endpoints.' },
  { step: '05', name: 'Leads', desc: 'Instant WhatsApp & form pre-qualification funnels.' },
  { step: '06', name: 'Customers', desc: 'Booked consultations, appointments & closed sales.' },
  { step: '07', name: 'Optimization', desc: 'CAC reduction, creative iteration & conversion testing.' },
  { step: '08', name: 'Growth', desc: 'Predictable, compounded revenue & market authority.' },
];

export default function HowWeGrowBusinesses() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F6F2] relative border-b border-[#DEDED7]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Section Header */}
        <ScrollReveal data-reveal="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white text-[#5F5F5A] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
            <span>The Growth Architecture</span>
          </div>
          <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-5">
            We Don’t Provide Isolated Tasks.{' '}
            <span className="text-[#5D2E85]">We Build Growth Systems.</span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-base md:text-lg leading-relaxed">
            Running ads without a landing page burns money. Posting content without conversion pathways produces vanity likes. Here is how Juntoz connects every digital touchpoint into a unified customer engine.
          </p>
        </ScrollReveal>

        {/* 8-Stage Progression Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
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

        {/* Bottom Strategic Summary Box */}
        <ScrollReveal data-reveal="up" delay={200}>
          <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#DEDED7] shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#5D2E85]">The Integrated Difference</span>
              <h4 className="font-heading font-black text-xl text-[#111111] uppercase tracking-tight">
                Every marketing dollar should be accountable to revenue.
              </h4>
              <p className="font-body text-sm text-[#5F5F5A] max-w-2xl leading-relaxed">
                By integrating market strategy, high-hook creatives, search rankings, and automated qualification, we ensure your business never leaks qualified leads.
              </p>
            </div>
            <a
              href="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20would%20like%20to%20audit%20our%20growth%20system."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-widest text-white bg-[#111111] hover:bg-[#5D2E85] transition-all duration-300 shadow-sm shrink-0 w-full md:w-auto"
            >
              <span>Audit Your Growth System</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
