import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industries } from '../data/industries';
import { SERVICES_MEGA_MENU } from '../data/services';
import { COMPANY_STATS } from '../data/clients';

export default function GlobalReachHero() {
  // Pick 6 representative industries from real industries.js data
  const selectedIndustries = industries.slice(0, 6);

  // Extract service categories from real services.js data
  const serviceCategories = SERVICES_MEGA_MENU.map((s) => s.category);

  return (
    <section className="relative min-h-screen bg-[#F7F6F2] pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden border-b border-[#DEDED7]">
      {/* ── Background Ambient Lighting ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#5D2E85]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-12 right-12 w-80 h-80 bg-[#5D2E85]/4 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 max-w-[1440px] relative z-10">
        
        {/* ════ MAIN 2-COLUMN HERO LAYOUT ════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center mb-16 lg:mb-20">
          
          {/* ── LEFT COLUMN: Headline, Positioning, CTAs, Inline Stats ── */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* 1. Top Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DEDED7] shadow-xs mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#5D2E85] animate-pulse" />
              <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#5D2E85]">
                DIGITAL GROWTH &amp; PERFORMANCE AGENCY
              </span>
            </motion.div>

            {/* 2. Bold H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="font-normal text-3xl sm:text-5xl lg:text-6xl xl:text-[3.6rem] text-[#111111] leading-[1.12] tracking-tight mb-6"
            >
              From Local Visibility <br className="hidden sm:inline" />
              To{' '}
              <span className="relative inline-block text-[#5D2E85] font-bold">
                Predictable Growth.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#5D2E85]"
                  viewBox="0 0 260 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C60 3.5 150 2.5 257 8.5C185 5 85 6.5 15 11.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* 3. Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-[#5F5F5A] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8"
            >
              We connect paid performance acquisition, Google Maps 3-Pack dominance, and conversion architecture into a synchronized pipeline engineered to turn search intent into verified revenue.
            </motion.p>

            {/* 4. CTA Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-12"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] active:scale-95 text-white font-sans font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(93,46,133,0.35)] transition-all duration-200 text-center"
              >
                <span>Book a Strategy Consultation</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white hover:bg-[#111111] hover:text-white border border-[#DEDED7] text-[#111111] font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center group"
              >
                <div className="w-6 h-6 rounded-full bg-[#F1E7F9] group-hover:bg-white/20 flex items-center justify-center text-[#5D2E85] group-hover:text-white transition-colors">
                  <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>See Our Work</span>
              </Link>
            </motion.div>

            {/* 5. Inline Real Metrics Row (Pulling from clients.js COMPANY_STATS) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-[#DEDED7]/80 w-full grid grid-cols-3 gap-4 sm:gap-8"
            >
              <div>
                <span className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#111111] block mb-0.5">
                  {COMPANY_STATS.clientsScaled || '200+'}
                </span>
                <span className="font-sans text-xs text-[#5F5F5A] font-medium block">
                  Brands Scaled
                </span>
              </div>
              <div>
                <span className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#5D2E85] block mb-0.5">
                  {COMPANY_STATS.googleRating || '5.0 ★'}
                </span>
                <span className="font-sans text-xs text-[#5F5F5A] font-medium block">
                  Client Rating
                </span>
              </div>
              <div>
                <span className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#111111] block mb-0.5">
                  {COMPANY_STATS.yearsActive ? `${COMPANY_STATS.yearsActive}+ Yrs` : '5+ Yrs'}
                </span>
                <span className="font-sans text-xs text-[#5F5F5A] font-medium block">
                  Market Experience
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Decorative SVG Globe Composition & Floating Stat Cards ── */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center">
            
            {/* Vertical Services Texture Stack (Desktop XL Only) */}
            <div className="hidden xl:flex flex-col gap-3 absolute -right-6 top-1/2 -translate-y-1/2 z-20 select-none">
              {serviceCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-xs border border-[#DEDED7] text-[10px] font-mono font-semibold uppercase tracking-wider text-[#5F5F5A] shadow-xs"
                >
                  {cat}
                </div>
              ))}
            </div>

            {/* Handwritten Script Accent Note */}
            <div className="absolute -top-6 left-4 sm:left-12 z-20 pointer-events-none select-none">
              <span className="font-script text-2xl sm:text-3xl text-[#5D2E85] -rotate-6 block drop-shadow-xs">
                Scaling Beyond Borders ~
              </span>
            </div>

            {/* SVG Globe Vector Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-square rounded-full bg-gradient-to-b from-white to-[#F1E7F9]/30 border border-[#DEDED7] p-6 sm:p-8 flex items-center justify-center shadow-card relative overflow-hidden"
            >
              {/* Globe Dot Grid / Lat-Long Line Art Pattern */}
              <svg className="w-full h-full text-[#5D2E85]/20 overflow-visible" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
                <circle cx="200" cy="200" r="85" stroke="currentColor" strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="185" ry="75" stroke="currentColor" strokeWidth="1.2" />
                <ellipse cx="200" cy="200" rx="75" ry="185" stroke="currentColor" strokeWidth="1.2" />
                <line x1="15" y1="200" x2="385" y2="200" stroke="currentColor" strokeWidth="1.5" />
                <line x1="200" y1="15" x2="200" y2="385" stroke="currentColor" strokeWidth="1.5" />

                {/* Curved Connection Flight Paths (Vector Arc Lines) */}
                <path d="M120 180 Q 200 80, 280 160" stroke="#5D2E85" strokeWidth="2" strokeDasharray="5 5" fill="none" className="animate-pulse" />
                <path d="M140 260 Q 240 310, 310 220" stroke="#5D2E85" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />

                {/* Regional Hotspot Connection Nodes */}
                <g className="animate-pulse">
                  <circle cx="120" cy="180" r="6" fill="#5D2E85" />
                  <circle cx="120" cy="180" r="12" fill="#5D2E85" opacity="0.3" />
                  {/* Label: Mumbai */}
                  <text x="120" y="200" textAnchor="middle" fill="#111111" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Mumbai</text>
                </g>

                <g className="animate-pulse" style={{ animationDelay: '0.8s' }}>
                  <circle cx="280" cy="160" r="6" fill="#5D2E85" />
                  <circle cx="280" cy="160" r="12" fill="#5D2E85" opacity="0.3" />
                  {/* Label: Delhi */}
                  <text x="280" y="150" textAnchor="middle" fill="#111111" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Delhi NCR</text>
                </g>

                <g className="animate-pulse" style={{ animationDelay: '1.4s' }}>
                  <circle cx="240" cy="270" r="5" fill="#5D2E85" />
                  <circle cx="240" cy="270" r="10" fill="#5D2E85" opacity="0.3" />
                  {/* Label: Bangalore */}
                  <text x="240" y="290" textAnchor="middle" fill="#111111" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Bangalore</text>
                </g>
              </svg>

              {/* Central Agency Badge inside Globe */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-[#DEDED7] shadow-card text-center">
                  <span className="font-heading font-black text-sm text-[#111111] uppercase tracking-wider block">JUNTOZ</span>
                  <span className="font-sans text-[9px] font-bold text-[#5D2E85] tracking-widest block uppercase">Growth Core</span>
                </div>
              </div>
            </motion.div>

            {/* ── Floating Stat Card 1 (Upper Left) ── */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-2 left-0 sm:left-4 z-20 p-3 sm:p-4 rounded-2xl bg-white border border-[#DEDED7] shadow-card flex items-center gap-3 max-w-[200px]"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F1E7F9] border border-[#5D2E85]/30 flex items-center justify-center text-[#5D2E85] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5F5F5A] block">
                  Regional Scale
                </span>
                <span className="font-heading font-black text-sm text-[#111111]">
                  200+ Brands
                </span>
              </div>
            </motion.div>

            {/* ── Floating Stat Card 2 (Upper Right) ── */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-8 right-0 sm:right-2 z-20 p-2.5 sm:p-3.5 rounded-2xl bg-white border border-[#DEDED7] shadow-card flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                ↗
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#5F5F5A] block">
                  Audience Reach
                </span>
                <span className="font-sans font-bold text-xs text-[#287A55]">
                  +450% Organic
                </span>
              </div>
            </motion.div>

            {/* ── Floating Stat Card 3 (Bottom Right) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 right-2 sm:right-6 z-20 p-4 rounded-2xl bg-white border border-[#DEDED7] shadow-card max-w-[220px]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5F5F5A]">
                  Conversion Telemetry
                </span>
                <span className="px-2 py-0.5 rounded bg-[#F1E7F9] text-[#5D2E85] text-[10px] font-extrabold">
                  +310%
                </span>
              </div>
              <span className="font-heading font-bold text-xs text-[#111111] block mb-2 leading-snug">
                Strategy To Growth
              </span>
              {/* Mini Static Trend Line Chart */}
              <div className="h-8 w-full flex items-end gap-1.5 pt-1">
                <div className="h-3/10 w-full bg-[#5D2E85]/20 rounded-t" />
                <div className="h-5/10 w-full bg-[#5D2E85]/30 rounded-t" />
                <div className="h-7/10 w-full bg-[#5D2E85]/50 rounded-t" />
                <div className="h-full w-full bg-[#5D2E85] rounded-t" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ════ 4. CITY / LOCATION PHOTO STRIP ════ */}
        <div className="pt-6 border-t border-[#DEDED7]/80 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A]">
                KEY EXECUTION HUBS
              </span>
              <span className="font-script text-xl text-[#5D2E85] hidden sm:inline">
                ~ Same Vision, A Bigger Tomorrow.
              </span>
            </div>

            {/* City Location Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full md:w-auto">
              {[
                { city: 'Mumbai', label: 'MH HQ', code: 'BOM' },
                { city: 'Delhi NCR', label: 'North Hub', code: 'DEL' },
                { city: 'Bangalore', label: 'South Hub', code: 'BLR' },
              ].map((hub) => (
                <div
                  key={hub.city}
                  className="p-3 rounded-2xl bg-white border border-[#DEDED7] shadow-subtle flex items-center gap-2.5 hover:border-[#5D2E85]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#F7F6F2] border border-[#DEDED7] flex items-center justify-center text-[#5D2E85] shrink-0 font-mono font-bold text-xs">
                    📍
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-bold text-xs text-[#111111] block truncate">
                      {hub.city}
                    </span>
                    <span className="text-[9px] font-mono text-[#5F5F5A] block">
                      {hub.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        

        {/* ════ 6. INDUSTRIES QUICK-LIST ════ */}
        <div className="pt-6 border-t border-[#DEDED7]/80">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A] shrink-0">
              INDUSTRIES WE WORK WITH
            </span>
            <Link
              to="/industries"
              className="font-sans font-semibold text-xs text-[#5D2E85] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Explore all 36 Industry Playbooks</span>
              <span>→</span>
            </Link>
          </div>

          {/* Horizontal Pill Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {selectedIndustries.map((ind) => (
              <Link
                key={ind.id}
                to="/industries"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-[#F1E7F9] border border-[#DEDED7] hover:border-[#5D2E85]/40 text-[#111111] transition-all duration-200 shadow-xs"
              >
                <span className="text-sm">{ind.icon}</span>
                <span className="font-sans font-bold text-xs">{ind.title}</span>
              </Link>
            ))}
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5D2E85]/10 hover:bg-[#5D2E85] text-[#5D2E85] hover:text-white border border-[#5D2E85]/20 transition-all duration-200 font-sans font-bold text-xs"
            >
              <span>+30 More</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* ════ 7. SCROLL CUE (Desktop Only) ════ */}
        <div className="hidden md:flex flex-col items-center justify-center mt-12 pt-4">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-[#5F5F5A]/70"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
              SCROLL TO EXPLORE
            </span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
