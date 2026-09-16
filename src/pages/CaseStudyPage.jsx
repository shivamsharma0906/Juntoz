import { useParams, Navigate, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-[#F7F6F2]">
      <PageMeta
        title={`${study.clientName} Case Study — Juntoz`}
        description={`Read how Juntoz helped ${study.clientName} scale revenue: ${study.result}`}
        path={`/case-study/${study.slug}`}
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        
        {/* Back Link */}
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#5F5F5A] hover:text-[#5D2E85] mb-10 transition-colors font-body text-xs uppercase tracking-wider font-bold">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Case Studies
        </Link>

        {/* Header */}
        <ScrollReveal data-reveal="up" className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-[#F1E7F9] border border-[#5D2E85]/20">
            <span className="font-body font-bold text-[11px] tracking-wider uppercase text-[#5D2E85]">
              {study.industry}
            </span>
          </div>
          <h1 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl md:text-6xl uppercase leading-tight tracking-tight mb-8">
            {study.clientName}
          </h1>

          {/* Hero Image */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden relative border border-[#DEDED7] shadow-card">
            <img src={study.image} alt={study.clientName} fetchPriority="high" className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>

        {/* Key Metric Highlight - Dark Impact Section */}
        <ScrollReveal data-reveal="up" delay={100} className="mb-12">
          <div className="rounded-3xl bg-[#111111] border border-white/10 p-8 sm:p-12 text-center shadow-2xl">
            <p className="font-body text-white/60 text-xs sm:text-sm uppercase tracking-wider mb-3 font-bold">
              {study.metricLabel}
            </p>
            <div className="font-heading font-black uppercase text-[#5D2E85] tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
              {study.metric}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Breakdown Grid if available */}
        {study.stats && (
          <ScrollReveal data-reveal="up" className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {study.stats.map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-[#DEDED7] shadow-subtle text-center">
                  <div className="font-heading font-black text-2xl text-[#111111] mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-[#5F5F5A] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Services Deployed */}
        {study.services && (
          <ScrollReveal data-reveal="up" className="mb-12">
            <div className="p-6 rounded-2xl bg-white border border-[#DEDED7] shadow-subtle">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5D2E85] block mb-3">
                Growth Services Deployed
              </span>
              <div className="flex flex-wrap gap-2">
                {study.services.map((svc, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-full bg-[#F7F6F2] border border-[#DEDED7] text-xs font-body font-semibold text-[#111111]">
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Content Sections */}
        <div className="space-y-12">
          <ScrollReveal data-reveal="up" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#DEDED7] shadow-card">
            <h2 className="font-heading font-black text-[#111111] text-2xl uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-5 h-1 bg-[#5D2E85] rounded-full block" /> The Challenge
            </h2>
            <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed">
              {study.problem}
            </p>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#DEDED7] shadow-card">
            <h2 className="font-heading font-black text-[#111111] text-2xl uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-5 h-1 bg-[#111111] rounded-full block" /> The Juntoz Strategy
            </h2>
            <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed">
              {study.approach}
            </p>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#DEDED7] shadow-card">
            <h2 className="font-heading font-black text-[#111111] text-2xl uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-5 h-1 bg-[#287A55] rounded-full block" /> The Transformation
            </h2>
            <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed mb-8">
              {study.result}
            </p>
            
            {/* Quote */}
            {study.quote && (
              <div className="relative pl-6 sm:pl-8 py-3 border-l-4 border-[#5D2E85] bg-[#F7F6F2] rounded-r-2xl border border-y-[#DEDED7] border-r-[#DEDED7]">
                <p className="font-heading font-bold text-[#111111] text-lg sm:text-xl italic leading-relaxed">
                  "{study.quote}"
                </p>
                <p className="font-body text-[#5F5F5A] text-xs tracking-wider uppercase mt-3 font-bold">
                  — {study.clientName}
                </p>
              </div>
            )}
          </ScrollReveal>

          {/* Bottom Callout */}
          <ScrollReveal data-reveal="up" className="pt-4">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] border border-white/10 text-center shadow-2xl">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                Want a Similar Transformation For Your Brand?
              </h3>
              <p className="font-body text-white/65 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                Book a free 20-minute MUA Growth Audit with our founders. We'll audit your profile and show you where your biggest revenue unlock is.
              </p>
              <a
                href={`https://wa.me/919004001800?text=Hi%20Sujal!%20I%20just%20read%20the%20${encodeURIComponent(study.clientName)}%20case%20study%20and%20would%20love%20a%20growth%20audit.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-[0.98]"
              >
                Claim Your Free MUA Audit
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
}
