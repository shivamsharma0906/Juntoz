import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    icon: (
      <svg className="w-7 h-7 text-white group-hover:text-accent-2 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
    title: 'Deep Audit',
    desc: 'We analyse your social presence, ad accounts, and local SEO to pinpoint exactly where you\'re losing clients.',
    tag: 'Week 1',
    color: '#00F5D4',
    bg: 'bg-accent-2',
    border: 'border-accent-2',
    shadow: 'shadow-[0_0_20px_rgba(0,245,212,0.4)]'
  },
  {
    num: '02',
    icon: (
      <svg className="w-7 h-7 text-white group-hover:text-accent-1 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Custom Strategy',
    desc: 'No templates. A 90-day roadmap built specifically for your salon, your city, and your goals.',
    tag: 'Week 1–2',
    color: '#FF3AF2',
    bg: 'bg-accent-1',
    border: 'border-accent-1',
    shadow: 'shadow-[0_0_20px_rgba(255,58,242,0.4)]'
  },
  {
    num: '03',
    icon: (
      <svg className="w-7 h-7 text-white group-hover:text-accent-2 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
    ),
    title: 'Content + Traffic',
    desc: 'Instagram reels, targeted Meta ads, and local SEO — all running simultaneously so you\'re visible everywhere clients look.',
    tag: 'Ongoing',
    color: '#00F5D4',
    bg: 'bg-accent-2',
    border: 'border-accent-2',
    shadow: 'shadow-[0_0_20px_rgba(0,245,212,0.4)]'
  },
  {
    num: '04',
    icon: (
      <svg className="w-7 h-7 text-white group-hover:text-accent-1 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
    ),
    title: 'Lead Capture',
    desc: 'We convert profile visitors and ad clicks into real WhatsApp enquiries through optimised funnels.',
    tag: 'Ongoing',
    color: '#FF3AF2',
    bg: 'bg-accent-1',
    border: 'border-accent-1',
    shadow: 'shadow-[0_0_20px_rgba(255,58,242,0.4)]'
  },
  {
    num: '05',
    icon: (
      <svg className="w-7 h-7 text-white group-hover:text-accent-2 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
    title: 'Convert + Scale',
    desc: 'We track what\'s working, double down on it, and scale. Pure data-driven growth every month.',
    tag: 'Monthly',
    color: '#00F5D4',
    bg: 'bg-accent-2',
    border: 'border-accent-2',
    shadow: 'shadow-[0_0_20px_rgba(0,245,212,0.4)]'
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-20 bg-background overflow-hidden">
      {/* ── Dynamic Ambient Background ── */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-accent-2/10 rounded-full blur-[120px] pointer-events-none z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* ── Header ── */}
        <div data-reveal="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent-2/20 bg-accent-2/5 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse" />
            <p className="font-body text-accent-2 text-xs font-bold uppercase tracking-[0.2em]">
              Our Proven System
            </p>
          </div>
          
          <h2 className="font-heading font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase leading-[0.95] tracking-tighter max-w-4xl mx-auto">
            How We{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-2 to-accent-1 relative z-10">
                Grow
              </span>
              <span className="absolute inset-0 bg-accent-2/20 blur-[30px] z-[-1] animate-pulse"></span>
            </span>{' '}
            Your Business
          </h2>
          
          <p className="font-body text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            A repeatable, data-driven system we've run for 200+ beauty brands across India.
          </p>
        </div>

        {/* ── Desktop Horizontal Timeline ── */}
        <div className="hidden lg:block relative mt-32">
          
          {/* Animated Connecting Line */}
          <div className="absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-white/5 z-0">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-2 via-accent-1 to-accent-2 transition-all duration-[2000ms] ease-in-out"
              style={{ width: isVisible ? '100%' : '0%' }}
            />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div 
                key={i} 
                data-reveal="up"
                data-delay={String((i + 1) * 100)}
                className="relative flex flex-col items-center text-center group"
              >
                
                {/* Number Badge (Floating above) */}
                <div className={`absolute -top-10 right-1/2 translate-x-[40px] w-8 h-8 rounded-full ${step.bg} flex items-center justify-center font-heading font-black text-xs text-background border-2 border-[#050508] shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:-translate-y-2 group-hover:${step.shadow} transition-all duration-500 z-20`}>
                  {step.num}
                </div>

                {/* Main Node Circle */}
                <div className="relative w-[80px] h-[80px] flex items-center justify-center rounded-full border-2 border-white/10 bg-[#0a0a0f] z-10 mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/5">
                  {/* Dashed ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/20 transition-colors duration-500" />
                  
                  {/* Glowing core on hover */}
                  <div className={`absolute inset-0 rounded-full ${step.bg} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
                  
                  <div className="relative z-10">{step.icon}</div>
                </div>

                {/* Content */}
                <div className="w-full relative">
                  <span className={`inline-block mb-3 px-3 py-1 rounded border border-white/10 bg-white/5 font-body font-bold text-[9px] uppercase tracking-widest text-white/60 group-hover:border-${step.color.replace('#', '')}/30 transition-colors duration-300`} style={{ color: isVisible ? step.color : '' }}>
                    {step.tag}
                  </span>
                  
                  <h3 className="font-heading font-black text-white text-xl uppercase mb-3 leading-tight group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-white/40 text-sm leading-relaxed max-w-[200px] mx-auto group-hover:text-white/70 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile Vertical Timeline ── */}
        <div className="lg:hidden relative ml-4 sm:ml-8 pl-8 space-y-12 py-4">
          
          {/* Static Background Line */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-white/5 z-0" />

          {/* Animated Vertical Line */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] z-0">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-2 via-accent-1 to-accent-2 transition-all duration-[2000ms] ease-in-out"
              style={{ height: isVisible ? '100%' : '0%' }}
            />
          </div>

          {steps.map((step, i) => (
            <div 
              key={i} 
              data-reveal="left"
              data-delay={String(i * 100)}
              className="relative group"
            >
              
              {/* Node Point */}
              <div className={`absolute -left-[41px] top-6 w-5 h-5 rounded-full border-4 border-[#050508] ${step.bg} z-10 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:${step.shadow} group-hover:scale-125 transition-all duration-500`} />

              {/* Number Badge */}
              <div className="absolute -left-4 -top-6 font-heading font-black text-5xl text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none">
                {step.num}
              </div>

              {/* Card */}
              <div className="glass-card p-5 sm:p-6 rounded-2xl transition-all duration-300 relative overflow-hidden hover:border-white/15" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                {/* Sweep highlight */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:animate-[sweep_1.5s_ease-in-out] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500">
                      {step.icon}
                    </div>
                    <div>
                      <span className="font-body text-[10px] font-bold uppercase tracking-widest block mb-0.5" style={{ color: step.color }}>{step.tag}</span>
                      <h3 className="font-heading font-black text-white text-base sm:text-lg uppercase leading-tight">{step.title}</h3>
                    </div>
                  </div>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
