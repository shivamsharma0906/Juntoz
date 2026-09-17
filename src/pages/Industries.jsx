import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';
import IndustryFinder from '../components/IndustryFinder';

export default function Industries() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-24 min-h-screen bg-[#F7F6F2]">
      <PageMeta
        title="Industries We Scale — 36 Specialized Growth Playbooks | Juntoz"
        description="Search or filter the 36 industries we build full-funnel digital growth, SEO, performance advertising, and conversion engines for."
        path="/industries"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* ── PAGE HEADER ── */}
        <section className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">

          <ScrollReveal data-reveal="up" delay={60}>
            <h1 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[1.06] mb-3 sm:mb-4">
              Find Your <span className="text-[#5D2E85]">Industry.</span>
            </h1>
          </ScrollReveal>

          {/* Full subtitle — desktop only */}
          <ScrollReveal data-reveal="up" delay={120}>
            <p className="hidden sm:block font-sans text-[#5F5F5A] text-base sm:text-lg leading-relaxed">
              Search or filter the 36 industries we build specialized digital growth, SEO, and acquisition strategies for.
            </p>
            {/* Short subtitle — mobile only */}
            <p className="sm:hidden font-sans text-[#5F5F5A] text-sm leading-relaxed">
              36 industries. One growth engine.
            </p>
          </ScrollReveal>
        </section>

        {/* ── INTERACTIVE INDUSTRY FINDER ── */}
        <IndustryFinder showHeader={false} />

        {/* ── CLOSING CTA BAND ── */}
        <section className="max-w-4xl mx-auto mt-10 sm:mt-12">
          <div className="bg-[#111111] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D2E85]/20 rounded-full blur-[80px] pointer-events-none" />

            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 font-sans font-semibold text-[11px] uppercase tracking-wider text-white mb-3 sm:mb-4">
              Custom Growth Playbooks
            </span>

            <h2 className="font-heading font-black text-xl sm:text-3xl md:text-4xl uppercase tracking-tight mb-2 sm:mb-3 relative z-10">
              Don&apos;t See Your Industry?
            </h2>

            {/* Hide verbose paragraph on mobile */}
            <p className="hidden sm:block font-sans text-white/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-7 relative z-10">
              Any market, any model. Let&apos;s build your custom growth plan.
            </p>

            <div className="relative z-10 mt-5 sm:mt-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] text-white font-heading font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-md"
              >
                <span>Speak With Our Team</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
