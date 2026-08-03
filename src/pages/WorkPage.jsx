import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

export default function WorkPage() {
  return (
    <div className="pt-28 md:pt-36 pb-20 min-h-screen bg-background">
      <PageMeta
        title="Our Work — Client Success Stories"
        description="Explore how Juntoz has helped ambitious brands scale revenue with proven digital growth strategies."
        path="/work"
      />
      <div className="container mx-auto px-6 max-w-7xl">
        
        <ScrollReveal data-reveal="up" className="mb-6 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">Our Work</span>
          </div>
          <div className="flex justify-center my-3">
            <img src="/results_balloon.png" alt="Results" className="h-20 sm:h-32 md:h-44 lg:h-52 object-contain select-none pointer-events-none" />
          </div>
          <p className="font-body text-white/50 text-sm md:text-base max-w-xl leading-relaxed mx-auto">
            Explore how we help companies scale predictably using our proven, data-driven growth systems.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((study, idx) => (
            <ScrollReveal key={study.slug} data-reveal="up" delay={idx * 100}>
              <Link to={`/work/${study.slug}`} className="group block relative rounded-[2rem] overflow-hidden p-[1px] transition-transform duration-500 hover:-translate-y-2">
                
                {/* animated border */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_4s_ease-in-out_infinite]"
                  style={{ background: `linear-gradient(135deg, ${study.color}60, transparent, ${study.color}60)` }} />
                
                <div className="relative h-full bg-[#0A0A0F]/95 backdrop-blur-2xl rounded-[31px] p-6 sm:p-8 flex flex-col z-10 overflow-hidden">
                  
                  {/* bg glow */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{ background: study.color }} />

                  {/* Top tags */}
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <span className="font-body font-bold text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
                      style={{ background: `${study.color}15`, border: `1px solid ${study.color}40`, color: study.color }}>
                      {study.industry}
                    </span>
                  </div>

                  {/* Main Metric */}
                  <div className="flex-1 flex flex-col justify-center mb-8 relative z-10">
                    <p className="font-body text-white/40 text-xs uppercase tracking-widest mb-2 font-bold">{study.metricLabel}</p>
                    <div className="font-heading font-black uppercase leading-[1.05] tracking-tight transition-transform duration-500 origin-left"
                      style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: study.color, textShadow: `0 0 30px ${study.color}40` }}>
                      {study.metric}
                    </div>
                  </div>

                  {/* Client & Description */}
                  <div className="pt-6 relative z-10 border-t border-white/10">
                    <h3 className="font-heading font-black text-white text-xl uppercase tracking-tight mb-2">
                      {study.clientName}
                    </h3>
                    <p className="font-body text-white/50 text-sm leading-relaxed line-clamp-2">
                      {study.problem}
                    </p>
                    
                    <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300"
                      style={{ color: study.color }}>
                      Read Case Study
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
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
