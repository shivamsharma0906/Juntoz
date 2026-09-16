import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const visualVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15,
    },
  },
};

/* ─── Full-Funnel Illustration Component ───
   [CONSIDER CUSTOM ILLUSTRATION LATER]
   Layered SVG + HTML composition representing Awareness → Consideration → Conversion → Advocacy
   with floating glassmorphic metrics HUD card overlay.
─── */
function FullFunnelVisual() {
  return (
    <div className="relative w-full max-w-[500px] lg:max-w-[540px] xl:max-w-[580px] mx-auto flex items-center justify-center select-none">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#5D2E85]/10 via-[#06B6D4]/10 to-transparent rounded-full blur-3xl -z-10" />

      {/* Main SVG Composition */}
      <svg
        viewBox="0 0 520 480"
        className="w-full h-auto drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Funnel Tier Gradients */}
          <linearGradient id="funnelTopRim" x1="160" y1="80" x2="360" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3A8A" />
            <stop offset="0.5" stopColor="#2563EB" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>

          <radialGradient id="funnelInnerHole" cx="260" cy="88" r="95" fx="260" fy="88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0F172A" />
            <stop offset="0.75" stopColor="#1E293B" />
            <stop offset="1" stopColor="#1E3A8A" />
          </radialGradient>

          <linearGradient id="tier1Grad" x1="160" y1="90" x2="360" y2="185" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>

          <linearGradient id="tier2Grad" x1="190" y1="185" x2="330" y2="265" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D9488" />
            <stop offset="0.5" stopColor="#14B8A6" />
            <stop offset="1" stopColor="#0F766E" />
          </linearGradient>

          <linearGradient id="tier3Grad" x1="210" y1="265" x2="310" y2="345" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D97706" />
            <stop offset="0.5" stopColor="#F59E0B" />
            <stop offset="1" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="tier4Grad" x1="225" y1="345" x2="295" y2="420" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E11D48" />
            <stop offset="0.5" stopColor="#F43F5E" />
            <stop offset="1" stopColor="#BE123C" />
          </linearGradient>

          {/* Orbital rings gradient */}
          <linearGradient id="orbitCyanPurple" x1="80" y1="120" x2="440" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#5D2E85" stopOpacity="0.6" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* ── Swirling Orbital Glow Rings ── */}
        <ellipse
          cx="260"
          cy="210"
          rx="220"
          ry="115"
          transform="rotate(-18 260 210)"
          stroke="url(#orbitCyanPurple)"
          strokeWidth="2.2"
          strokeDasharray="8 8"
          opacity="0.65"
        />
        <ellipse
          cx="260"
          cy="230"
          rx="180"
          ry="85"
          transform="rotate(14 260 230)"
          stroke="url(#orbitCyanPurple)"
          strokeWidth="1.8"
          strokeDasharray="5 7"
          opacity="0.45"
        />

        {/* ── STAGE 1: Awareness (Top Cone) ── */}
        <path
          d="M 150 90 L 195 185 L 325 185 L 370 90 Z"
          fill="url(#tier1Grad)"
          stroke="#1E3A8A"
          strokeWidth="1.5"
        />

        {/* Inner 3D Funnel Mouth */}
        <ellipse
          cx="260"
          cy="88"
          rx="110"
          ry="32"
          fill="url(#funnelInnerHole)"
          stroke="url(#funnelTopRim)"
          strokeWidth="3.5"
        />

        {/* Inward Traffic Flow Arrows inside Mouth */}
        <path
          d="M 230 65 Q 245 80 250 95"
          stroke="#FBBF24"
          strokeWidth="3"
          strokeLinecap="round"
          markerEnd="url(#goldArrow)"
        />
        <path
          d="M 290 65 Q 275 80 270 95"
          stroke="#FBBF24"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <polygon points="250,98 243,90 257,90" fill="#FBBF24" />
        <polygon points="270,98 263,90 277,90" fill="#FBBF24" />

        {/* Top Megaphones inside Awareness ring */}
        <g transform="translate(205, 120) scale(0.85)">
          <path d="M4 12v4a1 1 0 001 1h2l4 3V8l-4 3H5a1 1 0 00-1 1z" fill="#FCD34D" stroke="#D97706" strokeWidth="1.2" />
        </g>
        <g transform="translate(285, 120) scale(0.85) scale(-1, 1)">
          <path d="M4 12v4a1 1 0 001 1h2l4 3V8l-4 3H5a1 1 0 00-1 1z" fill="#FCD34D" stroke="#D97706" strokeWidth="1.2" />
        </g>

        {/* ── STAGE 2: Consideration (Teal Band) ── */}
        <path
          d="M 195 188 L 220 268 L 300 268 L 325 188 Z"
          fill="url(#tier2Grad)"
          stroke="#0F766E"
          strokeWidth="1.5"
        />
        <ellipse cx="260" cy="188" rx="65" ry="11" fill="#14B8A6" opacity="0.6" />
        {/* Search lens in consideration */}
        <g transform="translate(250, 220)">
          <circle cx="9" cy="9" r="6" stroke="#FFFFFF" strokeWidth="2.2" fill="none" />
          <line x1="14" y1="14" x2="19" y2="19" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* ── STAGE 3: Conversion (Amber Band) ── */}
        <path
          d="M 220 270 L 235 345 L 285 345 L 300 270 Z"
          fill="url(#tier3Grad)"
          stroke="#B45309"
          strokeWidth="1.5"
        />
        <ellipse cx="260" cy="270" rx="40" ry="8" fill="#F59E0B" opacity="0.6" />
        {/* Shopping Cart Icon in Conversion */}
        <g transform="translate(248, 295)">
          <path d="M2 2h3l2.5 10h10l2-7H6.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="9" cy="15" r="1.5" fill="#FFFFFF" />
          <circle cx="16" cy="15" r="1.5" fill="#FFFFFF" />
        </g>

        {/* ── STAGE 4: Advocacy (Rose / Pink Cup) ── */}
        <path
          d="M 235 348 L 240 415 Q 260 426 280 415 L 285 348 Z"
          fill="url(#tier4Grad)"
          stroke="#BE123C"
          strokeWidth="1.5"
        />
        <ellipse cx="260" cy="348" rx="25" ry="6" fill="#F43F5E" opacity="0.8" />
        
        {/* Heart emblem in Advocacy */}
        <path
          d="M260 388 C260 388 250 380 250 372 C250 367 254 363 259 365 C260 365.3 260 365.3 260 365.3 C260 365.3 260 365.3 261 365 C266 363 270 367 270 372 C270 380 260 388 260 388 Z"
          fill="#FFFFFF"
        />

        {/* Floating Hearts & Stars at Base */}
        <circle cx="230" cy="425" r="3" fill="#F43F5E" />
        <circle cx="288" cy="422" r="2.5" fill="#FBBF24" />
        <polygon points="296,432 298,437 303,437 299,440 300,445 296,442 292,445 293,440 289,437 294,437" fill="#F59E0B" />
        <polygon points="222,434 224,438 228,438 225,441 226,445 222,442 218,445 219,441 216,438 220,438" fill="#F43F5E" />
      </svg>

      {/* ── Stage Text Labels & Floating Icons (HTML Overlay) ── */}

      {/* Top Awareness Banner & Icons */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-none">
        <span className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-[#111111] bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#DEDED7] shadow-xs">
          Awareness
        </span>
      </div>

      {/* Floating Megaphone (Top Left) */}
      <div className="absolute top-6 left-2 sm:left-4 flex items-center gap-2 p-1.5 rounded-xl bg-white/90 border border-[#DEDED7] shadow-xs pointer-events-none animate-bounce" style={{ animationDuration: '3s' }}>
        <span className="text-base sm:text-lg">📢</span>
        <span className="font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-wider text-[#111111]">Awareness</span>
      </div>

      {/* Floating Search / Cart (Top Right) */}
      <div className="absolute top-6 right-2 sm:right-6 flex items-center gap-2 p-1.5 rounded-xl bg-white/90 border border-[#DEDED7] shadow-xs pointer-events-none">
        <span className="text-base sm:text-lg">🛒</span>
        <span className="font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-wider text-[#111111]">Conversion</span>
      </div>

      {/* Consideration Label (Middle Left) */}
      <div className="absolute top-[44%] left-0 sm:left-2 flex items-center gap-1.5 p-1 sm:p-1.5 rounded-lg bg-white/90 border border-[#DEDED7] shadow-xs pointer-events-none">
        <span className="text-xs sm:text-sm">🔍</span>
        <span className="font-heading font-bold text-[9.5px] sm:text-[11px] uppercase tracking-wider text-[#0D9488]">Consideration</span>
      </div>

      {/* Conversion Label (Lower Left) */}
      <div className="absolute top-[65%] left-2 sm:left-6 flex items-center gap-1.5 p-1 sm:p-1.5 rounded-lg bg-white/90 border border-[#DEDED7] shadow-xs pointer-events-none">
        <span className="text-xs sm:text-sm">🛒</span>
        <span className="font-heading font-bold text-[9.5px] sm:text-[11px] uppercase tracking-wider text-[#D97706]">Conversion</span>
      </div>

      {/* Advocacy Label (Bottom Left) */}
      <div className="absolute bottom-4 left-6 sm:left-12 flex items-center gap-1.5 p-1 sm:p-1.5 rounded-lg bg-white/90 border border-[#DEDED7] shadow-xs pointer-events-none">
        <span className="text-xs sm:text-sm">❤️</span>
        <span className="font-heading font-bold text-[9.5px] sm:text-[11px] uppercase tracking-wider text-[#E11D48]">Advocacy</span>
      </div>

      {/* ── FLOATING METRICS HUD CARD (Rotated overlay bottom-right) ── */}
      <motion.div
        initial={{ opacity: 0, y: 15, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.2 } }}
        className="absolute bottom-2 sm:bottom-6 -right-2 sm:-right-6 w-[205px] sm:w-[245px] xl:w-[265px] bg-white/95 backdrop-blur-md border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-[0_16px_36px_rgba(6,182,212,0.22),0_4px_16px_rgba(93,46,133,0.08)] z-20"
      >
        <div className="space-y-2 sm:space-y-2.5">
          
          {/* Stat 1: Performance ROI + Sparkline */}
          <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
            <div>
              <span className="block font-sans font-bold text-[8.5px] sm:text-[9.5px] uppercase tracking-wider text-gray-500">
                Performance Ads
              </span>
              <span className="font-heading font-black text-xs sm:text-sm text-[#111111]">
                2.5x ROI
              </span>
            </div>
            {/* Mini Sparkline Chart */}
            <svg className="w-12 h-6 text-[#287A55]" viewBox="0 0 48 24" fill="none">
              <path d="M2 18 L12 14 L22 17 L32 8 L44 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="44" cy="4" r="2.5" fill="currentColor" />
            </svg>
          </div>

          {/* Stat 2: Search Visibility */}
          <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
            <div>
              <span className="block font-sans font-bold text-[8.5px] sm:text-[9.5px] uppercase tracking-wider text-gray-500">
                Search Visibility
              </span>
              <span className="font-heading font-black text-xs sm:text-sm text-[#2563EB]">
                Top 1 Ranking
              </span>
            </div>
            <span className="text-xs">🏆</span>
          </div>

          {/* Stat 3: Client Conversion */}
          <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
            <div>
              <span className="block font-sans font-bold text-[8.5px] sm:text-[9.5px] uppercase tracking-wider text-gray-500">
                Client Conversion
              </span>
              <span className="font-heading font-black text-xs sm:text-sm text-[#059669]">
                15% Increase
              </span>
            </div>
            <span className="text-xs text-[#059669] font-bold">▲</span>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center justify-between pt-0.5">
            <span className="font-sans font-bold text-[8.5px] sm:text-[9px] uppercase tracking-wider text-gray-400">
              Verified Rating
            </span>
            <span className="font-heading font-bold text-[10px] sm:text-xs text-[#5D2E85] bg-[#F1E7F9] px-2 py-0.5 rounded-full">
              ★ 4.8/5 Stars
            </span>
          </div>

        </div>
      </motion.div>

    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Juntoz Homepage Hero"
      className="relative flex flex-col justify-between overflow-x-clip bg-[#F7F6F2] pt-24 sm:pt-28 lg:pt-28 xl:pt-32 pb-12 sm:pb-16 lg:pb-8"
    >
      {/* ── Background Color Depth & Radial Lighting Sheen ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] lg:w-[1100px] h-[340px] sm:h-[500px] lg:h-[650px] rounded-full opacity-60 lg:opacity-70 blur-[75px] sm:blur-[110px] lg:blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FFFDF8 0%, #F5F3EC 65%, transparent 100%)' }}
        />
        <div
          className="absolute top-1/3 -right-16 sm:right-4 lg:right-10 w-[260px] sm:w-[380px] lg:w-[480px] h-[260px] sm:h-[380px] lg:h-[480px] rounded-full opacity-15 blur-[90px] lg:blur-[130px]"
          style={{ background: 'radial-gradient(circle, #5D2E85 0%, #38BDF8 50%, transparent 75%)' }}
        />
      </div>

      {/* ── Main Hero Container ── */}
      <div className="container mx-auto px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] relative z-10 flex flex-col justify-between h-full my-auto">
        
        {/* Top & Middle: 2-Column Split (Stacked on mobile, 2-Col on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-10 xl:gap-14 items-center my-auto">
          
          {/* ── LEFT COLUMN: Headline & Value Proposition (6.5 Cols) ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left w-full"
          >
            {/* 4-Line Selective Accent Headline (From Awareness To / Advocacy: Our / Full-Funnel / System.) */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "'Satoshi', 'Plus Jakarta Sans', 'Inter', sans-serif",
              }}
              className="font-heading font-bold text-[#111111] uppercase tracking-tight leading-[1.08] mb-4 sm:mb-5 text-[2.15rem] xs:text-[2.35rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[2.85rem] xl:text-[3.25rem]"
            >
              <span className="block whitespace-nowrap">From Awareness To</span>
              <span className="block whitespace-nowrap">
                Advocacy: <span className="text-[#5D2E85]">Our</span>
              </span>
              <span className="block whitespace-nowrap">Full-Funnel</span>
              <span className="block whitespace-nowrap">System.</span>
            </motion.h1>

            {/* Subhead: 2 Short Sentences */}
            <motion.p
              variants={itemVariants}
              className="font-body text-[#5F5F5A] text-base sm:text-lg lg:text-[17.5px] leading-relaxed max-w-lg mb-7 sm:mb-8 font-normal"
            >
              We build the engine, you own the growth. Full-funnel marketing, scientifically proven.
            </motion.p>

            {/* Single Layered Pill CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                to="/case-studies"
                className="group relative inline-flex items-center gap-3 p-1 rounded-full bg-[#5D2E85]/10 border border-[#5D2E85]/35 hover:border-[#5D2E85] transition-all duration-300 shadow-[0_8px_24px_rgba(93,46,133,0.20)] hover:shadow-[0_12px_32px_rgba(93,46,133,0.32)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#5D2E85]/30 group-hover:border-[#5D2E85]/60 transition-colors">
                  {/* Circular Icon Inset on Left */}
                  <div className="w-5 h-5 rounded-full border-[2px] border-[#5D2E85] flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
                  </div>
                  <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#5D2E85]">
                    View Case Study
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Funnel Visual with Metrics Overlay (5.5-6 Cols) ── */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-6 relative w-full flex justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0"
          >
            <FullFunnelVisual />

            {/* ── Floating Revenue Badge ── */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-4 right-0 sm:right-4 lg:-right-2 xl:right-0 z-20"
            >
              <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-[#5D2E85] shadow-[0_12px_36px_rgba(93,46,133,0.45)] min-w-[130px]">
                <span className="font-heading font-black text-white text-2xl sm:text-3xl tracking-tight leading-none mb-1">
                  ₹3Cr+
                </span>
                <span className="font-sans font-bold text-white/75 text-[11px] uppercase tracking-wider">
                  Revenue Generated
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* ── LOWER SECTION: 4-Column Stats Row ── */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-[#DEDED7] w-full mt-12 sm:mt-16 lg:mt-12"
        >
          {/* Stat 1: Revenue Generated */}
          <div className="flex flex-col">
            <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2rem] text-[#5D2E85] tracking-tight mb-1">
              ₹3Cr+
            </span>
            <span className="font-sans font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#111111] mb-1">
              Revenue Generated
            </span>
            <span className="font-body text-xs sm:text-[13px] text-[#5F5F5A] leading-snug">
              Tracked client revenue attributed to Juntoz campaigns
            </span>
          </div>

          {/* Stat 2: Google Maps Dominance */}
          <div className="flex flex-col">
            <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2rem] text-[#111111] tracking-tight mb-1">
              Top 3 {/* [NEEDS REAL METRIC] */}
            </span>
            <span className="font-sans font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#111111] mb-1">
              Google Maps Dominance
            </span>
            <span className="font-body text-xs sm:text-[13px] text-[#5F5F5A] leading-snug">
              3-pack visibility for high-intent customer search
            </span>
          </div>

          {/* Stat 3: Projects Scaled */}
          <div className="flex flex-col">
            <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2rem] text-[#111111] tracking-tight mb-1">
              200+ {/* [NEEDS REAL METRIC] */}
            </span>
            <span className="font-sans font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#111111] mb-1">
              Projects Scaled
            </span>
            <span className="font-body text-xs sm:text-[13px] text-[#5F5F5A] leading-snug">
              Multi-channel ads, custom conversion funnels &amp; branding
            </span>
          </div>

          {/* Stat 4: Client Satisfaction */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2rem] text-[#111111] tracking-tight">
                5.0+ {/* [NEEDS REAL METRIC] */}
              </span>
              <span className="text-[#5D2E85] text-xl leading-none">★</span>
            </div>
            <span className="font-sans font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#111111] mb-1">
              Client Satisfaction
            </span>
            <span className="font-body text-xs sm:text-[13px] text-[#5F5F5A] leading-snug">
              Transparent ROI reporting and verifiable ROI reporting
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}