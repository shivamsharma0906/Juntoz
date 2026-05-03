import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    tag: 'META ADS',
    label: 'Mumbai Bridal MUA — Freelance Artist',
    result: '+180% LEADS\nIN 60 DAYS',
    desc: 'Targeted bride campaigns in Mumbai. Tripled inquiries.',
    hex: '#FF3AF2',
    bg: 'from-[#FF3AF2]/10 to-transparent',
    location: 'Mumbai Client',
  },
  {
    tag: 'INSTAGRAM GROWTH',
    label: 'Luxury Salon — Salon Owner',
    result: '10K ORGANIC\nFOLLOWERS\nIN 90 DAYS',
    desc: 'Viral reel strategy. 2x profile visits for luxury salon.',
    hex: '#00F5D4',
    bg: 'from-[#00F5D4]/10 to-transparent',
    location: 'Bangalore Salon',
  },
  {
    tag: 'SEO',
    label: 'Delhi Makeup Studio — Home Studio',
    result: '#1 ON GOOGLE\nIN 45 DAYS',
    desc: 'Page 1 ranking for "bridal makeup" in Delhi.',
    hex: '#FFE600',
    bg: 'from-[#FFE600]/10 to-transparent',
    location: 'Delhi Studio',
  },
  {
    tag: 'WHATSAPP MARKETING',
    label: 'Salon Chain — Multi-location Business',
    result: '200+ BOOKINGS\nIN 30 DAYS',
    desc: '24/7 Chatbot booking flow for salon chain.',
    hex: '#FF6B35',
    bg: 'from-[#FF6B35]/10 to-transparent',
    location: 'Nationwide Chain',
  },
  {
    tag: 'WEBSITE',
    label: 'Freelance Artist — MUA Academy',
    result: '40% BOOKING\nRATE\nIN 30 DAYS',
    desc: 'High-converting portfolio funnel for MUA academy.',
    hex: '#7B2FFF',
    bg: 'from-[#7B2FFF]/10 to-transparent',
    location: 'Pune Client',
  },
  {
    tag: 'FULL GROWTH SYSTEM',
    label: 'Bridal Studio — Premium Studio',
    result: '₹6+ LAKHS\nIN 2 MONTHS',
    desc: 'Booked 3 months out.',
    hex: '#FF3AF2',
    bg: 'from-[#FF3AF2]/10 to-transparent',
    location: 'Mumbai Studio',
  },
];

const chats = [
  { name: 'Unnati', time: '10:42 AM', msg: 'This ad is giving genuine leads. Appointments have been made.' },
  { name: 'Nikita', time: '02:15 PM', msg: 'Today 4 party makeup booked. More enquiries coming without negotiation.' },
  { name: 'Shaheen', time: '11:30 AM', msg: 'First booking worth around ₹70,000. You are doing a wonderful job.' },
  { name: 'Kajol', time: '04:20 PM', msg: '₹6,11,248 generated in just 2 months. Thanks for your support...' }
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const projectsScrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [projectDotIdx, setProjectDotIdx] = useState(0);

  const handleProjectsScroll = () => {
    if (!projectsScrollRef.current) return;
    const scrollLeft = projectsScrollRef.current.scrollLeft;
    const card = projectsScrollRef.current.children[0];
    if (card) {
      const cardWidth = card.offsetWidth + 24; // gap-6 is 24px
      const index = Math.round(scrollLeft / cardWidth);
      setProjectDotIdx(Math.min(index, projects.length - 1));
    }
  };

  const slideToProject = (index) => {
    if (!projectsScrollRef.current) return;
    const card = projectsScrollRef.current.children[index];
    if (card) {
      const paddingOffset = 20; // matches px-5
      projectsScrollRef.current.scrollTo({ left: card.offsetLeft - paddingOffset, behavior: 'smooth' });
      setProjectDotIdx(index);
    }
  };

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

  const highlightAmount = (text) => {
    const amountRegex = /(₹[\d,]+|[\d]+%|[\d]+K)/g;
    return text.split(amountRegex).map((part, i) =>
      amountRegex.test(part) ? <span key={i} className="font-black text-accent-2">{part}</span> : part
    );
  };

  return (
    <section ref={sectionRef} id="portfolio" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />

      {/* Ambient center glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent-2/10 rounded-full blur-[150px] pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

      <div className="container mx-auto max-w-7xl relative z-20">

        {/* ── Header ── */}
        <div className={`text-center mb-16 sm:mb-20 px-5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-ping" />
            <p className="font-body text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
              Real Results
            </p>
          </div>
          <h2 className="font-heading font-black text-white text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.95] tracking-tighter">
            Client{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#FF3AF2] relative z-10">
                Wins
              </span>
              <span className="absolute inset-0 bg-accent-2/20 blur-[30px] z-[-1] animate-pulse"></span>
            </span>
          </h2>
          <p className="font-body text-white/50 text-base sm:text-lg lg:text-xl max-w-xl mx-auto mt-6">
            Real campaigns. Real numbers. Real beauty businesses that scaled.
          </p>
        </div>

        {/* ── Grid (Swipeable on Mobile) ── */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        
        <div 
          ref={projectsScrollRef}
          onScroll={handleProjectsScroll}
          className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-24 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-5 lg:px-6 scroll-px-5"
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative bg-[#050508] border rounded-[2rem] overflow-hidden transition-all duration-700 hover:scale-[1.02] min-w-[85vw] sm:min-w-[350px] lg:min-w-0 snap-start shrink-0 flex flex-col"
              style={{ 
                borderColor: `${p.hex}30`,
                boxShadow: `0 0 0 ${p.hex}00`,
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${(i % 3) * 150}ms`
              }}
            >
              {/* Animated hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${p.bg} opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`} />
              {/* Sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] pointer-events-none" />

              <div className="relative p-6 sm:p-8 flex flex-col h-full z-10">
                {/* Top Labels */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="font-body font-bold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap"
                    style={{ background: `${p.hex}15`, borderColor: `${p.hex}50`, color: p.hex }}
                  >
                    {p.tag}
                  </span>
                  <span className="font-body text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/30 pt-1 text-right pl-2">{p.location}</span>
                </div>

                {/* Main Metric */}
                <div className="flex-1 flex flex-col justify-center mb-8">
                  <p className="font-body text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">{p.label}</p>
                  <div
                    className="font-heading font-black uppercase leading-[1.05] tracking-tight whitespace-pre-line group-hover:scale-[1.03] transition-transform duration-500 origin-left"
                    style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', color: p.hex, textShadow: `0 0 40px ${p.hex}60` }}
                  >
                    {p.result}
                  </div>
                </div>

                {/* Description & Verified Tag */}
                <div className="pt-5 mt-auto" style={{ borderTop: `1px solid ${p.hex}20` }}>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{p.desc}</p>
                  <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-md bg-green-500/10 border border-green-500/20">
                    <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-[10px] font-bold uppercase tracking-widest text-green-400 whitespace-nowrap">
                      Verified Result
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer so the last item can snap to the start on mobile */}
          <div className="w-[1px] shrink-0 lg:hidden" />
        </div>

        {/* Enhanced Dots (Mobile Only) */}
        <div className="mb-16 px-5 lg:hidden">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => slideToProject(i)}
                aria-label={`Go to project ${i + 1}`}
                aria-current={projectDotIdx === i}
                className="relative rounded-full transition-all duration-300 hover:scale-125 focus:outline-none"
                style={{
                  width: projectDotIdx === i ? '36px' : '10px',
                  height: '10px',
                  background: projectDotIdx === i
                    ? 'linear-gradient(90deg, #00F5D4 0%, #7B2FFF 100%)'
                    : 'rgba(255,255,255,0.2)',
                  boxShadow: projectDotIdx === i ? '0 0 12px #00F5D4' : 'none',
                }}
              >
                {projectDotIdx === i && (
                  <span className="absolute inset-0 rounded-full animate-ping opacity-40"
                    style={{ background: '#00F5D4' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Bridge Text ── */}
        <div className={`hidden lg:block text-center px-5 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-heading font-black text-white/30 uppercase tracking-[0.4em] text-[10px] sm:text-xs">
            This is not just data — see real client conversations below
          </p>
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent mx-auto mt-6" />
        </div>

        {/* ── WhatsApp Proof Section ── */}
        <div className={`mt-8 lg:mt-16 sm:mt-24 max-w-6xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="hidden lg:block text-center px-5 mb-12 sm:mb-20">
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-tight">
              Real Client <span className="text-accent-2" style={{ textShadow: '0 0 30px rgba(0,245,212,0.5)' }}>Proof</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-white/50 mt-4">
              Actual conversations with our clients. No fake numbers.
            </p>
          </div>

          {/* Chat Grid (Desktop Only now) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 px-5 pb-8">
            {chats.map((chat, idx) => (
              <div
                key={idx}
                className="relative bg-[#0a0a0f] rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-accent-2/30 group min-w-[85vw] sm:min-w-[300px] lg:min-w-0 snap-start shrink-0 flex flex-col"
              >
                {/* Header */}
                <div className="bg-white/5 px-4 py-3 flex items-center gap-3 border-b border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-1 to-accent-2 flex items-center justify-center font-bold text-white uppercase text-lg shrink-0 shadow-inner">
                    {chat.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-bold text-sm truncate">{chat.name}</h4>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0 shadow-[0_0_8px_#4ade80]"></div>
                    </div>
                    <span className="text-white/40 text-[10px] uppercase tracking-wider font-semibold">
                      Online
                    </span>
                  </div>
                </div>

                {/* Message Body */}
                <div className="p-5 bg-black/20 min-h-[160px] flex-1 flex flex-col justify-end relative">
                  <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"></div>

                  <div className="bg-gradient-to-br from-[#1a1a24] to-[#0d0d14] border border-white/10 text-white/90 p-4 rounded-2xl rounded-tl-sm self-start max-w-[95%] shadow-[0_5px_15px_rgba(0,0,0,0.3)] relative z-10 group-hover:border-accent-2/30 transition-colors duration-500">
                    <p className="font-body text-sm leading-relaxed">
                      {highlightAmount(chat.msg)}
                    </p>
                    <span className="text-[9px] font-bold tracking-widest text-white/30 uppercase block mt-3 text-right">
                      {chat.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-8 lg:mt-16 sm:mt-20 px-5 text-center relative rounded-3xl overflow-hidden group/cta">
            <div className="absolute inset-5 bg-gradient-to-r from-accent-2 via-accent-1 to-accent-2 opacity-20 blur-xl pointer-events-none group-hover/cta:opacity-40 transition-opacity duration-500" />
            <div className="relative glass-card p-8 sm:p-16 rounded-[22px] border border-white/10 mx-auto">
              <p className="font-body text-accent-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-4">
                Trusted by 200+ makeup artists & salons
              </p>
              <h3 className="font-heading font-black text-white text-2xl sm:text-4xl md:text-5xl uppercase leading-[1.1] tracking-tighter mb-8 sm:mb-10 max-w-2xl mx-auto">
                Ready to become our next success story?
              </h3>
              <a
                href="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20grow%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-wrap justify-center items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-heading font-black text-xs sm:text-sm uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,58,242,0.3)]"
                style={{ background: 'linear-gradient(135deg, #FF3AF2 0%, #7B2FFF 100%)' }}
              >
                💬 Message Us on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
