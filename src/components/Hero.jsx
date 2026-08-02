import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20to%20know%20how%20you%20can%20grow%20my%20business.';

/* ─── Rotating Industry Words ─── */
const ROTATING_WORDS = [
  'Restaurants.',
  'Clinics.',
  'Startups.',
  'Ecommerce.',
  'Real Estate.',
  'Brands.',
  'Businesses.',
];

/* ─── Desktop: High-Tech Active Workspace 3D Cards ─── */
const AnalyticsCard = ({ mousePos }) => (
  <motion.div 
    className="absolute top-[2%] right-[5%] w-72 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl border border-white/15"
    style={{
      background: 'linear-gradient(135deg, rgba(123,47,255,0.15) 0%, rgba(5,5,12,0.85) 100%)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)',
      transform: `perspective(1000px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 12}deg) translateZ(30px)`,
      transition: 'transform 0.1s ease-out'
    }}
    animate={{ y: [0, -12, 0], rotateZ: [-2, 1, -2] }}
    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#00F5D4] animate-ping" />
        <span className="font-heading font-black text-[10px] uppercase tracking-widest text-white/70">Live Analytics</span>
      </div>
      <span className="font-heading font-bold text-xs text-[#00F5D4] bg-[#00F5D4]/10 px-2.5 py-1 rounded-full border border-[#00F5D4]/30">+342% ROAS</span>
    </div>
    
    <div className="flex items-end gap-2 h-28 mt-2 pt-2 border-t border-white/10">
      {[45, 65, 50, 95, 75, 100, 88].map((h, i) => (
        <div key={i} className="flex-1 flex flex-col justify-end h-full">
          <div 
            className="w-full bg-gradient-to-t from-[#7B2FFF] via-[#00F5D4] to-[#FF3AF2] rounded-t-sm opacity-90 transition-all duration-500 hover:opacity-100" 
            style={{ height: `${h}%`, boxShadow: '0 0 12px rgba(0,245,212,0.4)' }} 
          />
        </div>
      ))}
    </div>
  </motion.div>
);

const MetaAdsCard = ({ mousePos }) => (
  <motion.div 
    className="absolute top-[38%] left-[2%] w-80 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl border border-white/15"
    style={{
      background: 'linear-gradient(135deg, rgba(255,58,242,0.15) 0%, rgba(5,5,12,0.85) 100%)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)',
      transform: `perspective(1000px) rotateX(${mousePos.y * -10}deg) rotateY(${mousePos.x * 14}deg) translateZ(45px)`,
      transition: 'transform 0.1s ease-out'
    }}
    animate={{ y: [0, 15, 0], rotateZ: [2, -1, 2] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </div>
      <div>
        <h4 className="font-heading font-black text-white text-xs uppercase tracking-wider">Meta Performance Engine</h4>
        <p className="font-body text-[10px] text-white/50">Active Scale Campaign</p>
      </div>
    </div>
    <div className="space-y-3">
      <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-xl border border-white/5">
        <span className="font-body text-xs text-white/70">Conversion Rate</span>
        <span className="font-heading font-bold text-xs text-[#00F5D4]">4.82%</span>
      </div>
      <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-xl border border-white/5">
        <span className="font-body text-xs text-white/70">Pipeline Generated</span>
        <span className="font-heading font-bold text-xs text-[#FF3AF2]">₹18.4L</span>
      </div>
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-3">
        <div className="h-full w-[82%] bg-gradient-to-r from-[#00F5D4] via-[#7B2FFF] to-[#FF3AF2] shadow-[0_0_10px_#00F5D4]" />
      </div>
    </div>
  </motion.div>
);

const CreativeCard = ({ mousePos }) => (
  <motion.div 
    className="absolute bottom-[5%] right-[10%] w-64 rounded-3xl p-4 shadow-2xl backdrop-blur-2xl border border-white/15"
    style={{
      background: 'linear-gradient(135deg, rgba(5,5,12,0.9) 0%, rgba(123,47,255,0.2) 100%)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.2)',
      transform: `perspective(1000px) rotateX(${mousePos.y * -6}deg) rotateY(${mousePos.x * 10}deg) translateZ(60px)`,
      transition: 'transform 0.1s ease-out'
    }}
    animate={{ y: [0, -14, 0], rotateZ: [-3, 1, -3] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
  >
    <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-[#7B2FFF] to-[#FF3AF2] mb-3 relative overflow-hidden group/img">
      <img 
        src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&auto=format&fit=crop"
        alt="Ad Creative"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80 group-hover/img:scale-110 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
        <span className="font-heading font-black text-[10px] text-white uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">Ad Creative</span>
        <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
      </div>
    </div>
    <div className="flex justify-between items-center px-1">
      <span className="font-body text-xs font-bold text-white/80">High CTR Visual</span>
      <span className="font-heading font-black text-xs text-[#00F5D4]">9.4% CTR</span>
    </div>
  </motion.div>
);

/* ─── Mobile Specific Cards ─── */
const MobileAnalyticsCard = () => (
  <motion.div 
    className="absolute top-0 right-0 w-64 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl border border-white/15 z-20"
    style={{
      background: 'linear-gradient(135deg, rgba(123,47,255,0.15) 0%, rgba(5,5,12,0.85) 100%)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)'
    }}
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#00F5D4] animate-ping" />
        <span className="font-heading font-black text-[10px] uppercase tracking-widest text-white/70">Live Analytics</span>
      </div>
      <span className="font-heading font-bold text-xs text-[#00F5D4] bg-[#00F5D4]/10 px-2.5 py-1 rounded-full border border-[#00F5D4]/30">+342% ROAS</span>
    </div>
    
    <div className="flex items-end gap-2 h-24 mt-2 pt-2 border-t border-white/10">
      {[45, 65, 50, 95, 75, 100, 88].map((h, i) => (
        <div key={i} className="flex-1 flex flex-col justify-end h-full">
          <div 
            className="w-full bg-gradient-to-t from-[#7B2FFF] via-[#00F5D4] to-[#FF3AF2] rounded-t-sm opacity-90" 
            style={{ height: `${h}%`, boxShadow: '0 0 12px rgba(0,245,212,0.4)' }} 
          />
        </div>
      ))}
    </div>
  </motion.div>
);

const MobileCreativeCard = () => (
  <motion.div 
    className="absolute top-32 left-0 w-56 rounded-3xl p-4 shadow-2xl backdrop-blur-2xl border border-white/15 z-10"
    style={{
      background: 'linear-gradient(135deg, rgba(5,5,12,0.9) 0%, rgba(123,47,255,0.2) 100%)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.2)'
    }}
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
  >
    <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-[#7B2FFF] to-[#FF3AF2] mb-3 relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&auto=format&fit=crop"
        alt="Ad Creative"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
        <span className="font-heading font-black text-[10px] text-white uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">Ad Creative</span>
        <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
      </div>
    </div>
    <div className="flex justify-between items-center px-1">
      <span className="font-body text-xs font-bold text-white/80">High CTR Visual</span>
      <span className="font-heading font-black text-xs text-[#00F5D4]">9.4% CTR</span>
    </div>
  </motion.div>
);

/* ─── Rotating Word Component ─── */
function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block" style={{ minWidth: '8ch' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#7B2FFF] to-[#FF3AF2] drop-shadow-[0_0_25px_rgba(0,245,212,0.4)]"
          initial={{ opacity: 0, y: 20, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const lineReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current || !isDesktop) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex flex-col overflow-hidden bg-[#050508]"
    >
      {/* ════ BACKGROUND LAYER (Shared) ════ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Dynamic Cursor Ambient Glow */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-300 ease-out pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,245,212,0.12) 0%, rgba(123,47,255,0.08) 40%, transparent 70%)',
            left: isDesktop ? `${(mousePos.x + 0.5) * 100}%` : '50%',
            top: isDesktop ? `${(mousePos.y + 0.5) * 100}%` : '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Ambient Corner Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.2) 0%, transparent 60%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(0,245,212,0.15) 0%, transparent 60%)', filter: 'blur(60px)' }} />
      </div>

      {/* ════ MAIN CONTENT (Split between Desktop and Mobile) ════ */}
      <div className="relative z-10 w-full flex-1">
        
        {/* ── DESKTOP LAYOUT (Unchanged) ── */}
        <div className="hidden md:flex container mx-auto px-6 lg:px-12 items-center max-w-7xl"
             style={{ minHeight: '100svh', paddingTop: 'clamp(6rem, 14vh, 8rem)', paddingBottom: '4rem' }}>
          
          {/* Left: Copy */}
          <div className="w-[55%] flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_0_20px_rgba(0,245,212,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75" />
                <span className="relative inline-flex rounded-full h-full w-full bg-[#00F5D4]" />
              </span>
              <span className="font-heading font-bold text-white text-xs tracking-[0.2em] uppercase">
                Accepting New Partnerships
              </span>
            </motion.div>

            <h1
              className="font-heading font-black uppercase tracking-tighter text-white mb-8"
              style={{ fontSize: 'clamp(2.2rem, 8vw, 6.2rem)', lineHeight: 0.92 }}
            >
              <motion.span
                className="block"
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                custom={0.1}
              >
                We grow
              </motion.span>
              <motion.span
                className="block mt-1"
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                custom={0.25}
              >
                <RotatingWord />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="font-body text-white/70 max-w-xl leading-relaxed mb-12 text-lg md:text-xl font-normal"
            >
              Stop patching together freelancers. We are one integrated team bringing brand strategy, creative, and performance marketing under one roof.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="flex items-center gap-5 w-auto"
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[56px] rounded-full font-heading font-black uppercase tracking-widest text-background px-9 overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(0,245,212,0.4)]"
                style={{ background: '#00F5D4' }}
              >
                <span className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-sm">Start the Conversation</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="#work" 
                className="font-heading font-bold uppercase tracking-widest text-white/70 text-xs hover:text-white transition-colors px-6 py-4 rounded-full border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-md"
              >
                Explore Our Work
              </a>
            </motion.div>
          </div>

          {/* Right: Interactive 3D Cards */}
          <div className="w-[45%] h-[620px] relative perspective-[1000px]">
            {isDesktop && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <AnalyticsCard mousePos={mousePos} />
                <MetaAdsCard mousePos={mousePos} />
                <CreativeCard mousePos={mousePos} />
              </motion.div>
            )}
          </div>
        </div>


        {/* ── MOBILE LAYOUT (Dedicated Experience) ── */}
        <div className="flex md:hidden flex-col container mx-auto px-4"
             style={{ minHeight: '100svh', paddingTop: '6rem', paddingBottom: '2rem' }}>
          
          {/* Zone 1: Copy & CTAs */}
          <div className="flex flex-col items-start w-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_0_15px_rgba(0,245,212,0.15)]"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75" />
                <span className="relative inline-flex rounded-full h-full w-full bg-[#00F5D4]" />
              </span>
              <span className="font-heading font-bold text-white text-[10px] tracking-widest uppercase">
                Accepting Partnerships
              </span>
            </motion.div>

            <h1 className="font-heading font-black uppercase tracking-tighter text-white mb-4"
                style={{ fontSize: '3.5rem', lineHeight: 0.85 }}>
              <motion.span
                className="block"
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                custom={0.1}
              >
                We Build
              </motion.span>
              <motion.span
                className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#7B2FFF] to-[#FF3AF2]"
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                custom={0.2}
              >
                Growth.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="font-body text-white/70 max-w-[280px] leading-relaxed mb-8 text-sm font-normal"
            >
              One integrated team bringing brand strategy, creative, and performance marketing under one roof.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col items-start gap-4 w-full"
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full max-w-[290px] h-[52px] px-6 rounded-full font-heading font-black uppercase tracking-wider text-background shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-transform active:scale-95"
                style={{ background: '#00F5D4' }}
              >
                <span className="text-xs whitespace-nowrap">Start the Conversation</span>
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="#work" 
                className="font-heading font-bold uppercase tracking-widest text-white/50 text-[10px] hover:text-white transition-colors pl-4"
              >
                Explore Our Work &rarr;
              </a>
            </motion.div>
          </div>

          {/* Zone 2: Dedicated Mobile Visual Composition */}
          <div className="w-full relative flex-1 min-h-[300px] mt-12 flex justify-center perspective-[800px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="w-full max-w-[320px] relative h-[300px]"
            >
              <MobileAnalyticsCard />
              <MobileCreativeCard />
            </motion.div>
          </div>
        </div>

      </div>
      
      {/* ── Zone 3: Industry Marquee (Shared but handles layout via CSS) ── */}
      <div className="w-full border-t border-white/10 bg-[#050508]/80 backdrop-blur-xl py-3 overflow-hidden z-20 
                      md:absolute md:bottom-0 md:left-0 relative mt-auto">
         <div className="flex whitespace-nowrap animate-[marquee-fwd_40s_linear_infinite] w-max">
           {[...Array(3)].map((_, i) => (
             <span key={i} className="flex items-center">
               {['RESTAURANTS', 'CLINICS', 'REAL ESTATE', 'ECOMMERCE', 'EDUCATION', 'FITNESS', 'STARTUPS', 'HOSPITALITY'].map((tag, j) => (
                 <span key={j} className="flex items-center">
                   <span className="px-6 font-heading font-black text-[10px] sm:text-xs uppercase tracking-widest text-white/40">{tag}</span>
                   <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00F5D4]/40 shadow-[0_0_6px_#00F5D4]" />
                 </span>
               ))}
             </span>
           ))}
         </div>
      </div>

      <style>{`
        @keyframes marquee-fwd {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}