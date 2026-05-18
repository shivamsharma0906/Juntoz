import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const steps = [
  {
    num: '01',
    icon: (
      <svg className="w-6 h-6 text-white group-hover:text-[#00F5D4] transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
    title: 'Deep Audit',
    desc: 'We analyse your social presence, ad accounts, and local SEO to pinpoint exactly where you\'re losing clients.',
    tag: 'Week 1',
    color: '#00F5D4',
  },
  {
    num: '02',
    icon: (
      <svg className="w-6 h-6 text-white group-hover:text-[#FF3AF2] transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Custom Strategy',
    desc: 'No templates. A 90-day roadmap built specifically for your salon, your city, and your goals.',
    tag: 'Week 1–2',
    color: '#FF3AF2',
  },
  {
    num: '03',
    icon: (
      <svg className="w-6 h-6 text-white group-hover:text-[#00F5D4] transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
    ),
    title: 'Content + Traffic',
    desc: 'Instagram reels, targeted Meta ads, and local SEO — all running simultaneously so you\'re visible everywhere clients look.',
    tag: 'Ongoing',
    color: '#00F5D4',
  },
  {
    num: '04',
    icon: (
      <svg className="w-6 h-6 text-white group-hover:text-[#FF3AF2] transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
    ),
    title: 'Lead Capture',
    desc: 'We convert profile visitors and ad clicks into real WhatsApp enquiries through optimised funnels.',
    tag: 'Ongoing',
    color: '#FF3AF2',
  },
  {
    num: '05',
    icon: (
      <svg className="w-6 h-6 text-white group-hover:text-[#00F5D4] transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
    title: 'Convert + Scale',
    desc: 'We track what\'s working, double down on it, and scale. Pure data-driven growth every month.',
    tag: 'Monthly',
    color: '#00F5D4',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-10 md:py-14 bg-background overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px] pointer-events-none z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-20' : 'opacity-0'}`}
        style={{ background: 'radial-gradient(ellipse, #00F5D4, transparent)' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F5D4]/20 bg-[#00F5D4]/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span className="font-body font-semibold text-[#00F5D4] text-[10px] tracking-widest uppercase">Our Proven System</span>
          </div>
          
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] uppercase leading-[0.95] tracking-tighter max-w-4xl mx-auto">
            How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#FF3AF2] drop-shadow-[0_0_20px_rgba(0,245,212,0.3)]">
              Grow
            </span>{' '}
            Your Business
          </h2>
          
          <p className="font-body text-white/50 text-sm md:text-base max-w-2xl mx-auto mt-6 leading-relaxed">
            A repeatable, data-driven system we've run for 200+ beauty brands across India.
          </p>
        </ScrollReveal>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mt-6 px-10">
          
          {/* Animated Connecting Line */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-px bg-white/10 z-0">
            <div 
              className="absolute top-0 left-0 h-full transition-all duration-[2000ms] ease-in-out"
              style={{ 
                width: isVisible ? '100%' : '0%',
                background: 'linear-gradient(90deg, #00F5D4, #FF3AF2, #00F5D4)',
                boxShadow: '0 0 10px rgba(0,245,212,0.5)'
              }}
            />
          </div>

          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal 
                key={i} 
                data-reveal="up"
                delay={i * 150}
                className="relative flex flex-col items-center text-center group"
              >
                
                {/* Main Node Circle */}
                <div className="relative w-20 h-20 flex items-center justify-center rounded-full border border-white/10 bg-[#05050C] z-10 mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#080810] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/20 group-hover:rotate-45 transition-all duration-700" />
                  
                  {/* Glowing core on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" style={{ background: step.color }} />
                  
                  <div className="relative z-10">{step.icon}</div>
                  
                  {/* Floating Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center font-heading font-black text-xs text-background border border-white/10 transition-transform duration-500 group-hover:-translate-y-1 shadow-lg"
                    style={{ background: step.color }}>
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full relative">
                  <span className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 font-body font-bold text-[9px] uppercase tracking-widest transition-colors duration-300" 
                    style={{ color: step.color, borderColor: `${step.color}30` }}>
                    {step.tag}
                  </span>
                  
                  <h3 className="font-heading font-black text-white text-lg uppercase mb-3 leading-tight group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-white/50 text-xs leading-relaxed max-w-[180px] mx-auto group-hover:text-white/80 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8 py-4">
          
          {/* Animated Vertical Line */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-white/10 z-0">
            <div 
              className="absolute top-0 left-0 w-full transition-all duration-[2000ms] ease-in-out"
              style={{ 
                height: isVisible ? '100%' : '0%',
                background: 'linear-gradient(to bottom, #00F5D4, #FF3AF2, #00F5D4)',
                boxShadow: '0 0 10px rgba(0,245,212,0.5)'
              }}
            />
          </div>

          {steps.map((step, i) => (
            <ScrollReveal 
              key={i} 
              data-reveal="left"
              delay={i * 100}
              className="relative group"
            >
              
              {/* Node Point */}
              <div className="absolute -left-[37px] top-8 w-4 h-4 rounded-full border-2 border-[#05050C] z-10 transition-all duration-500 group-hover:scale-150" 
                style={{ background: step.color, boxShadow: `0 0 15px ${step.color}60` }} />

              {/* Huge Background Number */}
              <div className="absolute -left-6 -top-4 font-heading font-black text-6xl text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none z-0">
                {step.num}
              </div>

              {/* Card */}
              <div className="relative z-10 bg-[#05050C] p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 transition-all duration-300 overflow-hidden hover:-translate-y-1 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${step.color}, transparent)` }} />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500">
                      {step.icon}
                    </div>
                    <div>
                      <span className="font-body text-[9px] font-bold uppercase tracking-widest block mb-1" style={{ color: step.color }}>{step.tag}</span>
                      <h3 className="font-heading font-black text-white text-xl uppercase leading-tight">{step.title}</h3>
                    </div>
                  </div>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>

            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
