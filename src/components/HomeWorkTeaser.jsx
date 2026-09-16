import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { caseStudies } from '../data/caseStudies';

export default function HomeWorkTeaser() {
  // Take top 2 curated case studies
  const teaserStudies = caseStudies.slice(0, 2);

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#DEDED7]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <div>
            <ScrollReveal data-reveal="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-[#F7F6F2] shadow-subtle mb-4">
                <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
                <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">
                  Verified Client Proof
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={80}>
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#111111] leading-[1.04]">
                Real Businesses. <br />
                <span className="text-[#5D2E85]">Documented Growth.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal data-reveal="up" delay={120}>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-[#111111] hover:text-[#5D2E85] transition-colors group"
            >
              <span>View All Client Case Studies</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </ScrollReveal>
        </div>

        {/* 2 High-Impact Teaser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {teaserStudies.map((study, i) => (
            <ScrollReveal key={study.slug || i} data-reveal="up" delay={i * 100}>
              <Link
                to={`/case-study/${study.slug}`}
                className="group block rounded-3xl bg-[#F7F6F2] border border-[#DEDED7] hover:border-[#111111] transition-all duration-300 shadow-subtle hover:shadow-card hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#EAE8E1]">
                  <img
                    src={study.image}
                    alt={study.clientName}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-[#DEDED7] font-body font-bold text-[11px] text-[#111111] uppercase tracking-wider">
                    {study.category}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-2xl bg-[#111111]/90 backdrop-blur-sm text-white font-heading font-black text-xs sm:text-sm">
                    {study.metric}
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <p className="font-body font-bold text-xs uppercase tracking-wider text-[#5D2E85] mb-1">
                    {study.industry}
                  </p>
                  <h3 className="font-heading font-black text-xl text-[#111111] mb-3 group-hover:text-[#5D2E85] transition-colors">
                    {study.clientName}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#5F5F5A] leading-relaxed mb-5 line-clamp-2">
                    {study.approach}
                  </p>
                  <div className="flex items-center gap-1.5 font-heading font-bold text-xs uppercase tracking-wider text-[#111111] group-hover:text-[#5D2E85] transition-colors">
                    <span>Read Full Case Study</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
