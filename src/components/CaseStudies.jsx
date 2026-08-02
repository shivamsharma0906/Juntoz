import { useRef } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const WA_HARD = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const cases = [
  {
    tag: 'Meta Ads',
    client: 'Mumbai Bridal MUA',
    type: 'Freelance Artist',
    problem: 'Zero enquiries from Instagram despite 8K followers. ₹15K/month on random ads with zero results.',
    results: [
      { label: 'Monthly Enquiries', before: '3–5', after: '200+' },
      { label: 'Bookings / Month', before: '1–2', after: '18+' },
    ],
    headline: '+180% Leads\nin 60 Days',
    timeframe: '60 days',
    color: '#FF3AF2',
  },
  {
    tag: 'Instagram Growth',
    client: 'Pune Hair Salon',
    type: 'Salon Owner',
    problem: 'New salon with no online presence. Invisible on Google, no strategy, struggling for walk-ins.',
    results: [
      { label: 'Google Ranking', before: 'Not Ranked', after: 'Top 3' },
      { label: 'Walk-In Clients', before: '8/week', after: '35+/wk' },
    ],
    headline: 'Top 3 Google\nin 60 Days',
    timeframe: '60 days',
    color: '#00F5D4',
  },
  {
    tag: 'SEO + Ads',
    client: 'Delhi Makeup Studio',
    type: 'Studio Owner',
    problem: 'Spending on content creators but getting no conversions. Followers were growing, bookings were not.',
    results: [
      { label: 'Enquiry Quality', before: 'Low Budget', after: 'Premium' },
      { label: 'Monthly Bookings', before: '4–6', after: '22+' },
    ],
    headline: '22 Bookings\nPer Month',
    timeframe: '90 days',
    color: '#7B2FFF',
  },
];

export default function CaseStudies() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="case-studies" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Cinematic Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[150px] pointer-events-none z-0 transition-opacity duration-1000 opacity-20"
        style={{ background: 'radial-gradient(ellipse, #FF3AF2, transparent)' }} />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF3AF2] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">Deep Dives</span>
          </div>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3AF2] to-[#7B2FFF]">Wins</span>
          </h2>
          <p className="font-body text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Real campaigns. Real numbers. See exactly how we transformed these beauty businesses.
          </p>
        </ScrollReveal>

        {/* CSS Grid layout for Desktop, Flex/Scroll for Mobile */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-12 snap-x snap-mandatory lg:snap-none hide-scrollbar scroll-px-6">
          {cases.map((c, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 150} className="min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-center shrink-0">
              <div className="group h-full relative rounded-3xl overflow-hidden p-[1px] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                
                {/* Border sweep */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_4s_ease-in-out_infinite]"
                  style={{ background: `linear-gradient(135deg, ${c.color}60, transparent, ${c.color}60)` }} />
                
                <div className="relative h-full bg-[#05050C]/95 backdrop-blur-2xl rounded-[23px] flex flex-col overflow-hidden">
                  
                  {/* Internal Glow */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: c.color }} />

                  {/* Header Strip */}
                  <div className="px-6 py-5 flex items-center justify-between border-b border-white/5 relative z-10" style={{ background: `linear-gradient(90deg, ${c.color}10, transparent)` }}>
                    <span className="font-body font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full border shadow-lg"
                      style={{ background: `${c.color}15`, borderColor: `${c.color}40`, color: c.color }}>
                      {c.tag}
                    </span>
                    <span className="font-body text-white/40 text-[10px] uppercase tracking-widest font-semibold">{c.timeframe}</span>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
                    <div className="mb-6">
                      <p className="font-body text-white/40 text-[10px] uppercase tracking-widest mb-1 font-bold">{c.type}</p>
                      <p className="font-heading font-black text-white text-xl uppercase tracking-tight">{c.client}</p>
                    </div>

                    <div className="font-heading font-black uppercase leading-[1.05] tracking-tight mb-6 transition-transform duration-500 group-hover:scale-[1.03] origin-left whitespace-pre-line"
                      style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: c.color, textShadow: `0 0 30px ${c.color}50` }}>
                      {c.headline}
                    </div>

                    <p className="font-body text-white/60 text-sm leading-relaxed mb-8 flex-1">
                      {c.problem}
                    </p>

                    {/* Results Table */}
                    <div className="space-y-3 mt-auto">
                      {c.results.map((r, j) => (
                        <div key={j} className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                          <span className="font-body text-white/50 text-[10px] uppercase tracking-widest font-bold">{r.label}</span>
                          <div className="flex items-center gap-3">
                            <span className="font-heading font-black text-white/30 text-sm line-through decoration-white/20">{r.before}</span>
                            <span className="text-white/40 text-xs">→</span>
                            <span className="font-heading font-black text-base md:text-lg" style={{ color: c.color }}>{r.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal data-reveal="up" delay={300} className="mt-16 text-center px-5">
          <a
            href={WA_HARD}
            target="_blank" rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-5 rounded-full font-heading font-black text-sm uppercase tracking-widest text-background overflow-hidden shadow-[0_0_30px_rgba(255,58,242,0.3)] transition-all duration-300 hover:scale-105"
            style={{ background: '#FF3AF2' }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            <span className="relative z-10">Get Results Like These</span>
            <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </ScrollReveal>

      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
