import { useEffect, useRef, useState } from 'react';

const pains = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Posting consistently but getting zero bookings?',
    sub: "You're creating content — but it's not turning into clients.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    text: 'Thousands of followers, but no paying clients?',
    sub: "Vanity metrics don't pay rent. You need a conversion system.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Spent money on ads that brought nothing back?',
    sub: 'Random boosting isn\'t advertising. Targeted campaigns are.',
  },
];

const fixes = [
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ), 
    text: 'Targeted ads that bring real bridal enquiries' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ), 
    text: 'Instagram strategy that converts followers to clients' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ), 
    text: 'Google SEO so clients find you first' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ), 
    text: 'WhatsApp funnels that turn DMs into confirmed bookings' 
  },
];

export default function ProblemSolution() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="problem-solution" className="relative py-20 bg-background overflow-hidden">
      
      {/* ── Dynamic Backgrounds ── */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-1/5 rounded-full blur-[150px] pointer-events-none z-0 transition-opacity duration-1000 delay-300" style={{ opacity: isVisible ? 1 : 0 }} />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-2/5 rounded-full blur-[150px] pointer-events-none z-0 transition-opacity duration-1000 delay-500" style={{ opacity: isVisible ? 1 : 0 }} />

      {/* ── Central Divider Line (Desktop) ── */}
      <div className="hidden lg:block absolute top-24 bottom-24 left-1/2 w-px bg-white/5 z-0">
        {/* Animated glowing particle on the line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-50 blur-[2px] animate-slide-down"></div>
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">

          {/* ── LEFT COLUMN (THE PROBLEM) ── */}
          <div className={`space-y-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent-1/20 bg-accent-1/5 backdrop-blur-md mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-1 animate-pulse" />
                <p className="font-body text-accent-1 text-xs font-bold uppercase tracking-[0.2em]">
                  Sound Familiar?
                </p>
              </div>
              <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tighter">
                You're Working Hard.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-[#ff7eb3] relative inline-block">
                  But Not Smart.
                  {/* Subtle pink glow behind text */}
                  <span className="absolute inset-0 bg-accent-1/20 blur-[30px] z-[-1]"></span>
                </span>
              </h2>
            </div>

            {/* Pain Cards */}
            <div className="space-y-5">
              {pains.map((p, i) => (
                <div 
                  key={i} 
                  className="group relative p-5 rounded-2xl bg-[#0a0a0f] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/30 hover:shadow-[0_8px_24px_rgba(255,58,242,0.1)] overflow-hidden"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Hover background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-1/0 to-accent-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex items-start gap-3 sm:gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-accent-1/10 flex items-center justify-center border border-accent-1/20 text-accent-1 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      {p.icon}
                    </div>
                    <div>
                      <p className="font-body font-bold text-white/90 text-base sm:text-lg group-hover:text-white transition-colors duration-300">{p.text}</p>
                      <p className="font-body text-sm text-white/40 mt-1.5 leading-relaxed group-hover:text-white/60 transition-colors duration-300">{p.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pink Callout Block */}
            <div className="relative overflow-hidden rounded-2xl p-5 bg-accent-1/5 border border-accent-1/20 group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-1/0 via-accent-1/10 to-accent-1/0 -translate-x-[100%] group-hover:animate-sweep pointer-events-none" />
              <div className="flex gap-4 items-center relative z-10">
                <div className="w-1 h-12 bg-accent-1 rounded-full shrink-0 shadow-[0_0_10px_rgba(255,58,242,0.5)]" />
                <p className="font-heading font-black text-white/90 text-xl uppercase leading-snug tracking-wide">
                  The problem isn't your talent.<br />
                  <span className="text-accent-1">It's your system.</span>
                </p>
              </div>
            </div>

          </div>


          {/* ── RIGHT COLUMN (THE SOLUTION) ── */}
          <div className={`space-y-8 lg:pt-14 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent-2/20 bg-accent-2/5 backdrop-blur-md mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-ping" />
                <p className="font-body text-accent-2 text-xs font-bold uppercase tracking-[0.2em]">
                  The Juntoz System
                </p>
              </div>
              <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tighter">
                We Build You a<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-2 to-[#00ff9d] relative inline-block">
                  Growth Machine.
                  {/* Subtle cyan glow behind text */}
                  <span className="absolute inset-0 bg-accent-2/20 blur-[30px] z-[-1]"></span>
                </span>
              </h2>
            </div>

            <p className="font-body text-white/60 text-sm sm:text-lg md:text-xl leading-relaxed max-w-lg border-l-2 border-accent-2/30 pl-4 sm:pl-5 py-1">
              Not random posts. Not boosted reels. A complete, end-to-end system that attracts, captures, and converts the right clients — every single month.
            </p>

            {/* Solution Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fixes.map((f, i) => (
                <div 
                  key={i} 
                  className="group relative p-4 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-transparent border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-2/40 hover:shadow-[0_8px_24px_rgba(0,245,212,0.12)] overflow-hidden flex flex-col justify-center min-h-[100px]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Sweep highlight */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:animate-sweep pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-2/10 flex items-center justify-center text-accent-2 group-hover:scale-110 group-hover:bg-accent-2 group-hover:text-background transition-all duration-500 shadow-[0_0_15px_rgba(0,245,212,0.2)]">
                      {f.icon}
                    </div>
                    <span className="font-body text-white/80 text-sm font-bold leading-snug group-hover:text-white transition-colors duration-300">
                      {f.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cyan Callout Block */}
            <div className="relative overflow-hidden rounded-2xl p-5 bg-accent-2/5 border border-accent-2/20 group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-2/0 via-accent-2/10 to-accent-2/0 -translate-x-[100%] group-hover:animate-sweep pointer-events-none" />
              <div className="flex gap-4 items-center relative z-10">
                <div className="w-1 h-12 bg-accent-2 rounded-full shrink-0 shadow-[0_0_10px_rgba(0,245,212,0.5)]" />
                <p className="font-heading font-black text-white/90 text-lg sm:text-xl uppercase leading-snug tracking-wide">
                  We don't sell services.<br />
                  <span className="text-accent-2">We sell a booked-out calendar.</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Styles for internal animations */}
      <style>{`
        @keyframes slide-down {
          0% { transform: translate(-50%, -100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-50%, 1000px); opacity: 0; }
        }
        .animate-slide-down {
          animation: slide-down 4s linear infinite;
        }
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-sweep {
          animation: sweep 1.5s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
}
