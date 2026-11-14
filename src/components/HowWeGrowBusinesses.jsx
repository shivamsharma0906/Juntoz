import React, { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HeadlineHighlight } from './ui/CurvedUnderline';

const GROWTH_STAGES = [
  {
    step: '01',
    name: 'Strategy',
    tag: 'Market Roadmap',
    desc: 'Unit economics, competitive audit & commercial roadmapping.',
  },
  {
    step: '02',
    name: 'Brand',
    tag: 'Credibility Assets',
    desc: 'Visual identity, rate positioning & credibility assets.',
  },
  {
    step: '03',
    name: 'Reach',
    tag: 'Omnichannel Mix',
    desc: 'Omnichannel presence across Search, Meta & Local Discovery.',
  },
  {
    step: '04',
    tag: 'Landing Endpoints',
    name: 'Traffic',
    desc: 'Directing high-intent buyers to dedicated landing endpoints.',
  },
  {
    step: '05',
    name: 'Leads',
    tag: 'WhatsApp Pre-Qual',
    desc: 'Instant WhatsApp & form pre-qualification funnels.',
  },
  {
    step: '06',
    name: 'Customers',
    tag: 'Closed Bookings',
    desc: 'Booked consultations, appointments & closed sales.',
  },
  {
    step: '07',
    name: 'Optimization',
    tag: 'CAC Reduction',
    desc: 'CAC reduction, creative iteration & conversion testing.',
  },
  {
    step: '08',
    name: 'Growth',
    tag: 'Compounded Scale',
    desc: 'Predictable, compounded revenue & market authority.',
  },
];

// ─── Interactive 3D Tilt Card Component ────────────────────────────────────────
function GrowthCard({ stage, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Smooth physical tilt angles (max ±7 deg)
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -7;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7;

    setTilt({ rotateX, rotateY });
    setSpotlight({ x, y, opacity: 1 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: (index % 4) * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="relative h-full rounded-2xl bg-white border border-[#E7E5E0] p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#5D2E85]/40 hover:shadow-[0_20px_45px_rgba(93,46,133,0.12)] group shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-default select-none"
      >
        {/* Dynamic Specular Sheen following cursor */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(280px circle at ${spotlight.x}px ${spotlight.y}px, rgba(93, 46, 133, 0.08), transparent 75%)`,
          }}
        />

        {/* Top Accent line on hover */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#5D2E85] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Card Header: Phase badge & micro arrow */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#5D2E85] bg-[#F4EEF9] px-2.5 py-0.5 rounded-full border border-[#5D2E85]/15 uppercase">
              Phase {stage.step}
            </span>
            <span className="text-[#C5C3BC] text-sm group-hover:text-[#5D2E85] group-hover:translate-x-1 transition-all duration-300 font-sans font-light">
              →
            </span>
          </div>

          {/* Phase Title */}
          <h3 className="font-sans font-bold text-lg text-[#111111] uppercase tracking-tight mb-2 group-hover:text-[#5D2E85] transition-colors duration-200">
            {stage.name}
          </h3>

          {/* Phase Description */}
          <p className="font-sans text-xs text-[#5F5F5A] leading-relaxed">
            {stage.desc}
          </p>
        </div>

        {/* Bottom Deliverable Pillar */}
        <div className="pt-5 mt-4 border-t border-[#F2F0EB] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5D2E85]/60 group-hover:bg-[#5D2E85] group-hover:scale-125 transition-all duration-300" />
            <span className="font-mono text-[10px] font-medium tracking-wide text-[#7A7A75] uppercase group-hover:text-[#5D2E85] transition-colors duration-200">
              {stage.tag}
            </span>
          </div>
          <span className="font-mono text-[9px] text-[#A6A49E] tracking-widest">
            {stage.step}/08
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function HowWeGrowBusinesses() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const headerY = useTransform(smoothProgress, [0, 1], [30, 0]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  const topRow = GROWTH_STAGES.slice(0, 4);
  const bottomRow = GROWTH_STAGES.slice(4, 8);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[#F7F6F2] relative border-b border-[#DEDED7]/70 overflow-hidden"
    >
      {/* Soft Ambient Radial Light (No developer graph grid) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(93, 46, 133, 0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">

        {/* ── SECTION HEADER ── */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="font-mono font-semibold text-xs uppercase tracking-[0.22em] text-[#5D2E85] block mb-3.5">
            Integrated Pipeline · Zero Silos
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="font-normal text-[#111111] text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] mb-4 tracking-tight"
          >
            <span className="block mb-1 sm:mb-2">We Don&apos;t Provide Isolated Tasks.</span>
            <span className="block">
              We Build <HeadlineHighlight>Growth Systems</HeadlineHighlight>.
            </span>
          </h2>
          <p className="font-sans text-[#5F5F5A] text-sm md:text-base leading-relaxed hidden sm:block max-w-2xl mx-auto">
            Running ads without a landing page burns money. Posting content without conversion
            pathways produces vanity likes. Here is how Juntoz connects every digital touchpoint
            into a unified customer engine.
          </p>
          <p className="font-sans text-[#5F5F5A] text-sm leading-relaxed sm:hidden">
            Every touchpoint connected. One compounded growth engine.
          </p>
        </motion.div>

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* DESKTOP PIPELINE: 2 Rows of 4 Precision 3D Cards                      */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        <div className="hidden sm:block space-y-5 mb-14">
          {/* Row 1: Phases 01 - 04 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {topRow.map((stage, idx) => (
              <GrowthCard key={stage.step} stage={stage} index={idx} />
            ))}
          </div>

          {/* Row 2: Phases 05 - 08 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {bottomRow.map((stage, idx) => (
              <GrowthCard key={stage.step} stage={stage} index={idx + 4} />
            ))}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* MOBILE: Clean Horizontal Swipeable Pipeline                           */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        <div className="sm:hidden -mx-4 px-4 mb-8">
          <div className="flex gap-3.5 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-3 -mx-4 px-4">
            {GROWTH_STAGES.map((s) => (
              <div
                key={s.step}
                className="snap-start shrink-0 w-[78vw] max-w-[280px] bg-white border border-[#E7E5E0] rounded-2xl p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-[#5D2E85] bg-[#F4EEF9] px-2.5 py-0.5 rounded-full border border-[#5D2E85]/15 uppercase">
                      Phase {s.step}
                    </span>
                    <span className="font-mono text-[9px] text-[#A6A49E]">
                      {s.step}/08
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-base text-[#111111] uppercase tracking-tight mb-1.5">
                    {s.name}
                  </h3>
                  <p className="font-sans text-xs text-[#5F5F5A] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#F2F0EB] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
                  <span className="font-mono text-[10px] font-medium text-[#7A7A75] uppercase">
                    {s.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] font-sans font-medium text-[#7A7A75] mt-3 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#5D2E85]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Swipe through all 8 phases
          </p>
        </div>

      </div>
    </section>
  );
}
