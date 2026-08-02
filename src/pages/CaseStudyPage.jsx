import { useParams, Navigate, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <PageMeta
        title={`${study.clientName} Case Study — Juntoz`}
        description={study.problem}
        path={`/work/${study.slug}`}
      />
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Back Link */}
        <Link to="/work" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors font-body text-xs uppercase tracking-widest font-bold">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Work
        </Link>

        {/* Header */}
        <ScrollReveal data-reveal="up" className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: `${study.color}15`, border: `1px solid ${study.color}40`, color: study.color }}>
            <span className="font-body font-bold text-[10px] tracking-[0.2em] uppercase">
              {study.industry}
            </span>
          </div>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter mb-8">
            {study.clientName}
          </h1>

          {/* Hero Image */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img src={study.image} alt={study.clientName} fetchPriority="high" className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>

        {/* Key Metric Highlight */}
        <ScrollReveal data-reveal="up" delay={100} className="mb-20">
          <div className="relative rounded-[2rem] overflow-hidden p-[1px]">
             <div className="absolute inset-0 opacity-40 animate-[gradient-shift_4s_ease-in-out_infinite]"
               style={{ background: `linear-gradient(135deg, ${study.color}60, transparent, ${study.color}60)` }} />
             <div className="relative bg-[#0A0A0F] rounded-[31px] p-8 sm:p-12 text-center overflow-hidden">
               <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none"
                 style={{ background: study.color }} />
               <p className="font-body text-white/40 text-sm uppercase tracking-widest mb-4 font-bold">{study.metricLabel}</p>
               <div className="font-heading font-black uppercase leading-none tracking-tight"
                 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: study.color, textShadow: `0 0 40px ${study.color}50` }}>
                 {study.metric}
               </div>
             </div>
          </div>
        </ScrollReveal>

        {/* Content Sections */}
        <div className="space-y-16">
          <ScrollReveal data-reveal="up">
            <h2 className="font-heading font-black text-white text-2xl uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-white/20 block" /> The Problem
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed">
              {study.problem}
            </p>
          </ScrollReveal>

          <ScrollReveal data-reveal="up">
            <h2 className="font-heading font-black text-white text-2xl uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-white/20 block" /> Our Approach
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed">
              {study.approach}
            </p>
          </ScrollReveal>

          <ScrollReveal data-reveal="up">
            <h2 className="font-heading font-black text-white text-2xl uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-white/20 block" /> The Result
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-10">
              {study.result}
            </p>
            
            {/* Quote */}
            <div className="relative pl-8 sm:pl-12 py-4 border-l-2" style={{ borderColor: study.color }}>
              <svg className="absolute -top-4 -left-4 w-12 h-12 opacity-20" style={{ color: study.color }} fill="currentColor" viewBox="0 0 32 32">
                <path d="M10.333 13.333c0-3.667 3-6.667 6.667-6.667v-4c-5.867 0-10.667 4.8-10.667 10.667 0 2.933 1.2 5.6 3.067 7.6L12 18.267c-1.067-1.467-1.667-3.2-1.667-4.933zM25.333 13.333c0-3.667 3-6.667 6.667-6.667v-4c-5.867 0-10.667 4.8-10.667 10.667 0 2.933 1.2 5.6 3.067 7.6L27 18.267c-1.067-1.467-1.667-3.2-1.667-4.933z" />
              </svg>
              <p className="font-heading font-bold text-white text-xl sm:text-2xl italic leading-relaxed">
                "{study.quote}"
              </p>
              <p className="font-body text-white/50 text-sm tracking-widest uppercase mt-6 font-bold">
                — {study.clientName}
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
      
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
