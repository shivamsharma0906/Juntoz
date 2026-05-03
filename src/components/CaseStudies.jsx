import { useEffect, useRef, useState } from 'react';

const WA_HARD = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const cases = [
  {
    type: 'Bridal Makeup Artist',
    city: 'Mumbai',
    problem: 'Zero enquiries from Instagram despite 8K followers. Spent ₹15,000/month on random ads with no results.',
    actions: [
      'Full Instagram content strategy overhaul',
      'Targeted Meta lead ads with bridal audience',
      'WhatsApp funnel for instant enquiry capture',
      'Google Business Profile + local SEO',
    ],
    results: [
      { label: 'Monthly Enquiries', before: '3–5',      after: '200+' },
      { label: 'Bookings / Month',  before: '1–2',      after: '18+'  },
      { label: 'Instagram Reach',   before: '2K/month', after: '40K/month' },
    ],
    timeframe: '90 days',
    color: '#FF3AF2',
    bg: 'bg-accent-1',
  },
  {
    type: 'Hair & Makeup Salon',
    city: 'Pune',
    problem: 'New salon struggling to get walk-ins. No online presence, invisible on Google, no social strategy.',
    actions: [
      'Complete brand identity + Instagram setup',
      'Google ranking with "salon near me" keywords',
      'Reels content production system',
      'Referral + review generation campaign',
    ],
    results: [
      { label: 'Google Ranking',       before: 'Not Ranked', after: 'Top 3 Local' },
      { label: 'Walk-In Clients',      before: '8/week',     after: '35+/week'    },
      { label: 'Instagram Followers',  before: '220',        after: '4.8K'        },
    ],
    timeframe: '60 days',
    color: '#00F5D4',
    bg: 'bg-accent-2',
  },
];

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="case-studies" className="relative py-32 bg-background overflow-hidden">
      {/* ── Ambient Backgrounds ── */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'radial-gradient(ellipse, rgba(123,47,255,0.08) 0%, transparent 70%)', filter: 'blur(100px)' }} />

      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">

        {/* ── Header ── */}
        <div className={`mb-16 sm:mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent-2/20 bg-accent-2/5 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-ping" />
            <p className="font-body text-accent-2 text-xs font-bold uppercase tracking-[0.2em]">
              Client Case Studies
            </p>
          </div>
          <h2 className="font-heading font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase leading-[0.95] tracking-tighter">
            The Proof Is In <br className="hidden sm:block" />
            <span className="relative inline-block mt-2 sm:mt-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-2 to-[#00ff9d] relative z-10">
                The Numbers.
              </span>
              <span className="absolute inset-0 bg-accent-2/20 blur-[30px] z-[-1] animate-pulse"></span>
            </span>
          </h2>
        </div>

        {/* ── Case Study Cards ── */}
        <div className="space-y-12">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group relative rounded-[2rem] bg-[#0a0a0f] border transition-all duration-700 ease-out overflow-hidden hover:scale-[1.01]"
              style={{ 
                borderColor: `${c.color}25`,
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 200}ms`
              }}
            >
              {/* Sweep Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${c.color}, transparent 70%)` }} />

              {/* ── Card Header ── */}
              <div
                className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 sm:px-10 py-6 sm:py-8 z-10"
                style={{ borderBottom: `1px solid ${c.color}20` }}
              >
                <div>
                  <p className="font-heading font-black text-2xl sm:text-4xl uppercase text-white tracking-wider group-hover:text-white transition-colors duration-300">
                    {c.type}
                  </p>
                  <p className="font-body text-sm mt-2 flex items-center gap-2 font-bold uppercase tracking-widest"
                    style={{ color: c.color }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {c.city}
                  </p>
                </div>
                <div
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-body font-bold text-xs uppercase tracking-widest shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-none transition-shadow duration-300"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}40`, color: c.color }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }} />
                  Results in {c.timeframe}
                </div>
              </div>

              {/* ── Card Body ── */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:px-10 sm:py-10 z-10">

                {/* Left Column: Problem + Actions */}
                <div className="space-y-8">
                  
                  {/* Problem Block */}
                  <div className="relative p-6 rounded-2xl bg-black/40 border border-white/5 group-hover:border-white/10 transition-colors duration-500">
                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.25em] mb-3 text-white/40">
                      The Problem
                    </p>
                    <p className="font-body text-white/70 text-base leading-relaxed italic">
                      "{c.problem}"
                    </p>
                  </div>

                  {/* Actions Block */}
                  <div>
                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.25em] mb-4 text-white/40 pl-2">
                      What We Did
                    </p>
                    <div className="space-y-3">
                      {c.actions.map((action, j) => (
                        <div key={j} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                          <div
                            className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-0.5 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                            style={{ background: `${c.color}20`, border: `1px solid ${c.color}50` }}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" strokeWidth={3} style={{ color: c.color }}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-body text-white/80 text-sm font-medium leading-snug pt-0.5">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Results */}
                <div>
                  <p className="font-body text-[10px] font-bold uppercase tracking-[0.25em] mb-4 text-white/40 pl-2">
                    The Results
                  </p>
                  <div className="space-y-4">
                    {c.results.map((r, j) => (
                      <div
                        key={j}
                        className="relative p-5 sm:p-6 rounded-2xl overflow-hidden group/result transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                        style={{ background: `${c.color}08`, border: `1px solid ${c.color}20` }}
                      >
                        {/* Hover glow on result card */}
                        <div className="absolute inset-0 opacity-0 group-hover/result:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `linear-gradient(45deg, transparent, ${c.color}15, transparent)` }} />
                        
                        <p className="font-body text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 relative z-10"
                          style={{ color: c.color }}>
                          {r.label}
                        </p>
                        <div className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 gap-y-1 relative z-10">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="font-heading font-black text-lg sm:text-xl lg:text-2xl text-white/20 line-through decoration-white/10 decoration-2 whitespace-nowrap">
                              {r.before}
                            </span>
                            <span className="font-body text-white/30 text-sm">→</span>
                          </div>
                          <span
                            className="font-heading font-black text-2xl sm:text-3xl xl:text-4xl text-white group-hover/result:scale-105 transition-transform duration-300 origin-left whitespace-nowrap"
                            style={{ textShadow: `0 0 30px ${c.color}80` }}
                          >
                            {r.after}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-body text-white/40 text-sm uppercase tracking-widest mb-8 font-bold">
            Your business could be our next case study.
          </p>
          <div className="relative inline-block group/cta">
            <div className="absolute -inset-2 bg-accent-1 opacity-30 blur-xl rounded-full group-hover/cta:opacity-60 group-hover/cta:blur-2xl transition-all duration-500 animate-pulse" />
            <a
              href={WA_HARD}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-12 py-5 rounded-full font-heading font-black text-base uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FF3AF2 0%, #7B2FFF 100%)',
                boxShadow: '0 0 30px rgba(255,58,242,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/cta:animate-[sweep_1.5s_ease-in-out_infinite]" />
              <span className="relative z-10">Book a Strategy Call</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
