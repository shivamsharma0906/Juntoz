import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';
import IndustryFinder from '../components/IndustryFinder';

export default function Industries() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 min-h-screen bg-[#F7F6F2]">
      <PageMeta
        title="Industries We Scale — 36 Specialized Growth Playbooks | Juntoz"
        description="Search or filter the 36 industries we build full-funnel digital growth, SEO, performance advertising, and conversion engines for."
        path="/industries"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* ── 1. Page Header ── */}
        <section className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <ScrollReveal data-reveal="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DEDED7] bg-white shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
              <span className="font-sans font-bold text-[#5F5F5A] text-[11px] tracking-widest uppercase">
                Industry Finder
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={60}>
            <h1 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[1.06] mb-4">
              Find Your <span className="text-[#5D2E85]">Industry.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={120}>
            <p className="font-sans text-[#5F5F5A] text-base sm:text-lg leading-relaxed">
              Search or filter the 36 industries we build specialized digital growth, SEO, and acquisition strategies for.
            </p>
          </ScrollReveal>
        </section>

        {/* ── 2. Interactive Industry Finder Component ── */}
        <IndustryFinder showHeader={false} />

        {/* ── 3. Closing CTA Band ── */}
        <section className="max-w-4xl mx-auto mt-12">
          <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D2E85]/20 rounded-full blur-[80px] pointer-events-none" />
            
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 font-sans font-semibold text-[11px] uppercase tracking-wider text-white mb-4">
              Custom Growth Playbooks
            </span>
            
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight mb-3 relative z-10">
              Don&apos;t See Your Industry?
            </h2>
            
            <p className="font-sans text-white/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-7 relative z-10">
              Any market, any model. Let's build your custom growth plan.
            </p>
            
            <div className="relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] text-white font-heading font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
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
