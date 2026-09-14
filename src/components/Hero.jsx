import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ─── Growth System Architecture Nodes with Category-Specific Accents ─── */
const GROWTH_NODES = [
  {
    id: 'ads',
    number: '01',
    title: 'Performance Ads',
    channel: 'Meta & Google Ads Engine',
    tag: 'Paid Growth',
    description: 'Targeted full-funnel campaigns capturing high-intent buyer demand.',
    borderAccent: 'border-l-[#3B82F6]',
    tagBg: 'bg-blue-50/80 text-blue-700 border-blue-200/60',
  },
  {
    id: 'search',
    number: '02',
    title: 'Search & Maps Visibility',
    channel: 'GMB 3-Pack & Local SEO',
    tag: 'Local & SEO',
    description: 'Dominating local search queries right when customers are ready to buy.',
    borderAccent: 'border-l-[#10B981]',
    tagBg: 'bg-emerald-50/80 text-emerald-700 border-emerald-200/60',
  },
  {
    id: 'brand',
    number: '03',
    title: 'Creative & Brand Direction',
    channel: 'Content & Positioning',
    tag: 'Rate Defense',
    description: 'Editorial visuals and compelling hooks that command premium pricing.',
    borderAccent: 'border-l-[#8B5CF6]',
    tagBg: 'bg-purple-50/80 text-purple-700 border-purple-200/60',
  },
  {
    id: 'conversion',
    number: '04',
    title: 'Inbound Conversion Engine',
    channel: 'Funnel Architecture & CRM',
    tag: 'Lead Capture',
    description: 'High-converting landing flows with rapid response automation.',
    borderAccent: 'border-l-[#E84A2A]',
    tagBg: 'bg-[#FBE9E4] text-[#E84A2A] border-[#E84A2A]/20',
  },
];

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.07,
      delayChildren: 0.16,
    },
  },
};

const nodeVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.38,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Juntoz Homepage Hero"
      className="relative flex flex-col justify-between overflow-x-clip bg-[#F7F6F2] pt-20 sm:pt-24 lg:pt-24 xl:pt-28 pb-12 sm:pb-16 lg:pb-7 lg:min-h-screen lg:h-[100dvh]"
    >
      {/* ── Background Color Depth & Radial Lighting Sheen ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft radial glow behind hero */}
        <div
          className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] lg:w-[1100px] h-[340px] sm:h-[500px] lg:h-[650px] rounded-full opacity-60 lg:opacity-70 blur-[75px] sm:blur-[110px] lg:blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FFFDF8 0%, #F5F3EC 65%, transparent 100%)' }}
        />
        {/* Blurred brand color blob behind right card */}
        <div
          className="absolute top-1/4 -right-16 sm:right-4 lg:right-10 w-[240px] sm:w-[320px] lg:w-[440px] h-[240px] sm:h-[320px] lg:h-[440px] rounded-full opacity-10 blur-[80px] lg:blur-[120px]"
          style={{ background: 'radial-gradient(circle, #E84A2A 0%, #FF6B4A 45%, transparent 75%)' }}
        />
        {/* Ambient bottom illumination */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 opacity-30 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(232,74,42,0.04), transparent)' }}
        />
      </div>

      {/* ── Main Hero Container (Expanded for widescreen, structured for mobile flow) ── */}
      <div className="container mx-auto px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] relative z-10 flex flex-col justify-between h-full my-auto">
        
        {/* Top & Middle: Responsive Split Grid (Stacked on mobile/tablet, 2-Col on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-10 xl:gap-16 items-center my-auto">
          
          {/* ── LEFT COLUMN: Editorial Typography & Strategic Positioning (7 Cols) ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left w-full"
          >
            {/* 1. Brand / Eyebrow Tag with Compact Mobile Sizing */}
            <motion.div variants={itemVariants} className="mb-3 sm:mb-4 lg:mb-5">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#DEDED7] bg-white/90 backdrop-blur-xs shadow-[0_2px_8px_rgba(232,74,42,0.05)]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E84A2A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E84A2A]"></span>
                </span>
                <span className="font-sans font-semibold text-[9.5px] xs:text-[10px] sm:text-[11px] uppercase tracking-[0.11em] sm:tracking-[0.14em] text-[#111111] whitespace-nowrap">
                  Growth-Focused Digital Marketing Agency
                </span>
              </div>
            </motion.div>

            {/* 2. Editorial Sculpted H1 Headline with Fluid Clamp & Natural 3-Line Cadence */}
            <motion.h1
              variants={itemVariants}
              style={{ fontFamily: "'Satoshi', 'Plus Jakarta Sans', 'Inter', sans-serif" }}
              className="font-black text-[#111111] uppercase tracking-[-0.03em] sm:tracking-[-0.025em] leading-[1.01] sm:leading-[0.98] mb-3 sm:mb-4 lg:mb-5 text-[clamp(2.15rem,8.4vw,2.75rem)] sm:text-[3.25rem] md:text-[3.6rem] lg:text-[4.2rem] xl:text-[4.85rem] 2xl:text-[5.35rem]"
            >
              <span className="block">We Turn</span>
              <span className="block">Digital Presence</span>
              <span className="block">
                Into{' '}
                <span className="bg-gradient-to-r from-[#E84A2A] via-[#E84A2A] to-[#CE3819] bg-clip-text text-transparent">
                  Business Growth.
                </span>
              </span>
            </motion.h1>

            {/* 3. Short Strategic Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="font-body text-[#5F5F5A] text-[13.5px] xs:text-[14px] sm:text-base lg:text-[16.5px] xl:text-[17.5px] leading-relaxed max-w-xl xl:max-w-2xl mb-5 sm:mb-6 lg:mb-7 font-normal"
            >
              Juntoz helps ambitious businesses build visibility, generate demand, and turn digital attention into measurable growth.
            </motion.p>

            {/* 4. Primary & Secondary CTAs (Full-width vertical stack on mobile, horizontal row on desktop) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-4 sm:mb-5 lg:mb-6"
            >
              <Link
                to="/work"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[46px] h-[48px] sm:h-[50px] xl:h-[54px] px-6 sm:px-7 xl:px-8 rounded-full font-heading font-bold text-xs xl:text-[13px] uppercase tracking-widest text-white bg-[#111111] hover:bg-[#E84A2A] active:bg-[#E84A2A] active:scale-[0.98] sm:hover:scale-[1.02] sm:hover:-translate-y-0.5 transition-all duration-200 shadow-[0_6px_18px_-3px_rgba(232,74,42,0.25)] hover:shadow-[0_12px_28px_-4px_rgba(232,74,42,0.42)]"
              >
                <span>Explore Our Work</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[46px] h-[48px] sm:h-[50px] xl:h-[54px] px-6 sm:px-7 xl:px-8 rounded-full font-heading font-bold text-xs xl:text-[13px] uppercase tracking-widest text-[#111111] bg-white/95 backdrop-blur-xs border border-[#DEDED7] hover:border-[#111111] hover:bg-[#111111] hover:text-white active:bg-[#111111] active:text-white active:scale-[0.98] sm:hover:scale-[1.02] sm:hover:-translate-y-0.5 transition-all duration-200 shadow-[0_2px_12px_rgba(17,17,17,0.04)] hover:shadow-[0_8px_24px_rgba(17,17,17,0.12)]"
              >
                <span>Our Services</span>
              </Link>
            </motion.div>

            {/* 5. Structured Trust Signals (Clean 2-column grid on mobile, inline wrap on tablet/desktop) */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-4 gap-y-2 text-[10.5px] xs:text-[11px] sm:text-xs text-[#5F5F5A] font-body pt-3 sm:pt-4 border-t border-[#DEDED7]/80 w-full mb-1 lg:mb-0"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#287A55]/12 text-[#287A55] flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0">
                  ✓
                </span>
                <span className="font-medium text-[#222220] whitespace-nowrap">Full-Funnel Growth</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#287A55]/12 text-[#287A55] flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0">
                  ✓
                </span>
                <span className="font-medium text-[#222220] whitespace-nowrap">Data-Driven Strategy</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 col-span-2 sm:col-span-1">
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#287A55]/12 text-[#287A55] flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0">
                  ✓
                </span>
                <span className="font-medium text-[#222220] whitespace-nowrap">Verified Execution</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Growth System Visual (Full-width stacked below headline on mobile, tuned density) ── */}
          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-2 sm:mt-4 lg:mt-0"
          >
            {/* The Growth System Frame (Full-width with matching margins on mobile, scaled on desktop) */}
            <div className="w-full max-w-none lg:max-w-[490px] xl:max-w-[540px] 2xl:max-w-[570px] bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#DEDED7] ring-1 ring-white/80 p-3.5 xs:p-4 sm:p-5 xl:p-7 shadow-[0_16px_36px_-10px_rgba(232,74,42,0.08),0_8px_18px_-4px_rgba(17,17,17,0.04)] relative flex flex-col justify-between overflow-hidden">
              
              {/* Subtle top gradient sheen */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E84A2A]/40 to-transparent pointer-events-none" />

              {/* Header: System Status with live pulsing dot */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 xl:pb-4 border-b border-[#DEDED7] mb-2.5 sm:mb-3.5 xl:mb-4">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center font-heading font-black text-[10px] sm:text-[11px] xl:text-xs shrink-0">
                    JZ
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[11px] sm:text-xs xl:text-sm uppercase tracking-wider text-[#111111] leading-none mb-0.5">
                      Growth System
                    </p>
                    <p className="font-body text-[9.5px] sm:text-[10px] xl:text-[11px] text-[#5F5F5A]">Multi-Channel Growth Engine</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#F7F6F2] border border-[#DEDED7] shrink-0">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#287A55] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#287A55]"></span>
                  </span>
                  <span className="font-sans font-semibold text-[9px] sm:text-[10px] uppercase tracking-wider text-[#111111] whitespace-nowrap">
                    Live System
                  </span>
                </div>
              </div>

              {/* 4 Connected Growth Nodes with Category-Specific Left Borders */}
              <div className="space-y-1.5 xs:space-y-2 xl:space-y-2.5 mb-2.5 sm:mb-3.5 xl:mb-4">
                {GROWTH_NODES.map((node) => (
                  <motion.div
                    key={node.id}
                    variants={nodeVariants}
                    whileHover={{ x: 3, transition: { duration: 0.18 } }}
                    className={`group p-2 xs:p-2.5 sm:p-3 xl:p-3.5 rounded-xl bg-[#F7F6F2]/80 hover:bg-[#F7F6F2] border border-[#DEDED7] border-l-[2.5px] sm:border-l-[3.5px] ${node.borderAccent} hover:border-[#E84A2A]/40 transition-all duration-200`}
                  >
                    <div className="flex items-start justify-between gap-1.5 mb-0.5 sm:mb-1">
                      <div className="flex items-baseline gap-1 sm:gap-1.5 min-w-0">
                        <span className="font-mono text-[9.5px] sm:text-[10px] xl:text-[11px] text-[#5F5F5A] font-bold shrink-0">
                          {node.number}
                        </span>
                        <h4 className="font-heading font-bold text-[11px] sm:text-xs xl:text-[13px] text-[#111111] uppercase tracking-tight group-hover:text-[#E84A2A] transition-colors leading-tight truncate">
                          {node.title}
                        </h4>
                      </div>
                      <span className={`font-sans text-[8.5px] sm:text-[9px] xl:text-[10px] uppercase tracking-wider font-semibold px-1.5 sm:px-2 py-0.5 rounded-full border shrink-0 whitespace-nowrap ${node.tagBg}`}>
                        {node.tag}
                      </span>
                    </div>
                    <p className="font-body text-[10px] xs:text-[10.5px] sm:text-[11px] xl:text-[12px] text-[#5F5F5A] leading-snug pl-3 sm:pl-4">
                      {node.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom System Integration Outcome with Soft Elevated Gradient Tint */}
              <div className="p-2.5 xs:p-3 sm:p-3.5 xl:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FBE9E4]/60 via-[#F7F6F2] to-white border border-[#DEDED7] flex items-center justify-between gap-2 shadow-2xs">
                <div className="min-w-0">
                  <span className="block font-sans text-[8.5px] sm:text-[9px] sm:text-[10px] uppercase font-bold text-[#5F5F5A] tracking-wider leading-none mb-0.5">
                    Compound Outcome
                  </span>
                  <p className="font-heading font-black text-[11px] xs:text-xs sm:text-sm xl:text-[15px] text-[#111111] uppercase tracking-tight truncate">
                    Predictable Revenue &amp; Scale
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-[#E84A2A] bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-[#E84A2A]/25 shadow-2xs whitespace-nowrap">
                    <span>Full Engine</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* ── LOWER SECTION: Integrated Strategic Proof Bar (Hidden on mobile to preserve clean first viewport, visible on desktop) ── */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8 pt-5 xl:pt-6 border-t border-[#DEDED7]/80 w-full mt-auto"
        >
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="font-heading font-black text-2xl xl:text-3xl text-[#111111] tracking-tight">
                3.2<span className="text-[#E84A2A]">×</span>
              </span>
              <span className="font-sans font-bold text-[9px] uppercase tracking-wider text-[#287A55] bg-[#287A55]/10 px-1.5 py-0.5 rounded">
                Avg Lift
              </span>
            </div>
            <p className="font-heading font-bold text-xs xl:text-[13px] uppercase tracking-wider text-[#111111] mb-0.5">
              Pipeline Expansion
            </p>
            <p className="font-body text-[11px] xl:text-[12px] text-[#5F5F5A] leading-snug">
              Average inbound inquiry expansion across deployed systems
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="font-heading font-black text-2xl xl:text-3xl text-[#111111] tracking-tight">
                Top 3
              </span>
              <span className="font-sans font-bold text-[9px] uppercase tracking-wider text-[#3B82F6] bg-blue-50 px-1.5 py-0.5 rounded">
                Local SEO
              </span>
            </div>
            <p className="font-heading font-bold text-xs xl:text-[13px] uppercase tracking-wider text-[#111111] mb-0.5">
              Google Maps Dominance
            </p>
            <p className="font-body text-[11px] xl:text-[12px] text-[#5F5F5A] leading-snug">
              3-pack visibility right when high-intent customers search
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="font-heading font-black text-2xl xl:text-3xl text-[#111111] tracking-tight">
                200<span className="text-[#E84A2A]">+</span>
              </span>
              <span className="font-sans font-bold text-[9px] uppercase tracking-wider text-[#8B5CF6] bg-purple-50 px-1.5 py-0.5 rounded">
                Deployed
              </span>
            </div>
            <p className="font-heading font-bold text-xs xl:text-[13px] uppercase tracking-wider text-[#111111] mb-0.5">
              Projects Scaled
            </p>
            <p className="font-body text-[11px] xl:text-[12px] text-[#5F5F5A] leading-snug">
              Multi-channel ads, custom conversion funnels &amp; branding
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="font-heading font-black text-2xl xl:text-3xl text-[#111111] tracking-tight">
                5.0<span className="text-[#E84A2A]">★</span>
              </span>
              <span className="font-sans font-bold text-[9px] uppercase tracking-wider text-[#287A55] bg-[#287A55]/10 px-1.5 py-0.5 rounded">
                Verified
              </span>
            </div>
            <p className="font-heading font-bold text-xs xl:text-[13px] uppercase tracking-wider text-[#111111] mb-0.5">
              Client Satisfaction
            </p>
            <p className="font-body text-[11px] xl:text-[12px] text-[#5F5F5A] leading-snug">
              Transparent live attribution and verified ROI reporting
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}