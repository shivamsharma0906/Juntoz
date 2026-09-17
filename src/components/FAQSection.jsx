/**
 * FAQSection — Frequently Asked Questions
 * ─────────────────────────────────────────────
 * Exact layout from digitalcorsel.com/mumbai/:
 * • Centered bold heading
 * • 2-column accordion grid (1-col on mobile)
 * • Heart icon left, + / × right
 * • Smooth height animation on expand/collapse
 * Dark-mode with Juntoz brand colors.
 */
import { useState, useRef, useEffect } from 'react';

const FAQS = [
  {
    q: 'What types of businesses does Juntoz work with?',
    a: 'Juntoz works with ambitious, growth-focused businesses across multiple sectors—including high-growth startups, local service businesses and clinics, D2C e-commerce brands, B2B companies, and our specialized vertical in makeup artists and luxury salons. If your business has a viable offer and wants predictable customer acquisition, we build the system to scale it.',
  },
  {
    q: 'Why work with a full-service growth agency instead of freelancers?',
    a: 'Freelancers typically execute isolated tasks (one writes posts, another runs basic ads, a third designs graphics), leaving you to connect the dots. Juntoz provides an integrated growth engine: market positioning, high-converting creatives, paid acquisition management, local search optimization, and conversion tracking functioning as one synchronized pipeline.',
  },
  {
    q: 'Do you only work with beauty brands and makeup artists?',
    a: 'No. Juntoz is a full-service digital marketing agency serving businesses across multiple industries. Because we achieved industry-leading results in the beauty, salon, and bridal education sector, we maintain dedicated specialist playbooks for makeup artists, academies, and salons—alongside our broader commercial marketing practice.',
  },
  {
    q: 'How do you approach Google Business Profile (GMB) and Local Search?',
    a: 'We optimize every facet of your Google presence: high-intent local category alignment, weekly geo-tagged updates, schema-aligned citations, and structured review generation workflows. This ensures when nearby customers search for your core services, your business appears prominently in the Google 3-Pack.',
  },
  {
    q: 'What kind of ad budget is required to see real ROI?',
    a: 'We structure performance advertising campaigns calibrated to your unit economics and customer lifetime value (LTV). For local businesses and service clinics, we start with focused localized test budgets. For scaling brands, we deploy multi-stage acquisition and retargeting funnels to maximize return on ad spend (ROAS).',
  },
  {
    q: 'How quickly can we expect measurable business results?',
    a: 'Paid lead generation and customer acquisition campaigns on Meta and Google typically begin delivering qualified inquiries within the first 7 to 14 days. Foundational assets—such as Google Business Profile dominance, SEO ranking, and brand conversion architecture—compound over 60 to 90 days to drive long-term organic equity.',
  },
];

/* ── Accordion item ── */
function FAQItem({ item, index, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!bodyRef.current) return;
    setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div
      className={`rounded-2xl overflow-hidden border transition-colors duration-300 ${
        isOpen ? 'bg-white border-[#111111]/30 shadow-subtle' : 'bg-white border-[#DEDED7]'
      }`}
    >
      {/* ── Question row ── */}
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-start gap-3 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors"
        style={{ cursor: 'pointer', background: 'transparent' }}
        aria-expanded={isOpen}
      >
        {/* Question icon */}
        <span
          className="shrink-0 mt-0.5"
          style={{
            color: isOpen ? '#5D2E85' : '#5F5F5A',
            transition: 'color 0.3s ease',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </span>

        {/* Question text */}
        <span
          className="flex-1 font-body font-semibold text-sm sm:text-base leading-snug text-[#111111]"
        >
          {item.q}
        </span>

        {/* Plus / Cross icon */}
        <span
          className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full ml-2 mt-0.5 border border-[#DEDED7] bg-white transition-transform duration-300"
          style={{
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke={isOpen ? '#5D2E85' : '#111111'} strokeWidth="1.8" strokeLinecap="round">
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </span>
      </button>

      {/* ── Answer — smooth height animation ── */}
      <div
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div
          ref={bodyRef}
          className="px-5 sm:px-6 pb-5"
          style={{ paddingLeft: 'calc(1.25rem + 18px + 0.75rem)' }}
        >
          <p className="font-body text-[#5F5F5A] text-xs sm:text-sm leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main export ── */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggle = (i) => setOpenIndex(prev => (prev === i ? null : i));

  /* Split into 2 columns */
  const col1 = FAQS.filter((_, i) => i % 2 === 0);
  const col2 = FAQS.filter((_, i) => i % 2 === 1);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32 bg-[#F7F6F2]"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* ── Heading ── */}
        <div
          className="text-center mb-14 sm:mb-18 max-w-2xl mx-auto"
          style={{
            opacity:    revealed ? 1 : 0,
            transform:  revealed ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.75s ease 0.05s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.05s',
          }}
        >

          <h2
            className="font-heading font-black text-[#111111] leading-tight tracking-tight uppercase"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Frequently Asked{' '}
            <span className="text-[#5D2E85]">Questions</span>
          </h2>
        </div>

        {/* ── 2-column accordion grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {col1.map((item, i) => {
              const globalIndex = i * 2;
              return (
                <div
                  key={globalIndex}
                  style={{
                    opacity:    revealed ? 1 : 0,
                    transform:  revealed ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.65s ease ${0.1 + i * 0.08}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.08}s`,
                  }}
                >
                  <FAQItem
                    item={item}
                    index={globalIndex}
                    isOpen={openIndex === globalIndex}
                    onToggle={toggle}
                  />
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {col2.map((item, i) => {
              const globalIndex = i * 2 + 1;
              return (
                <div
                  key={globalIndex}
                  style={{
                    opacity:    revealed ? 1 : 0,
                    transform:  revealed ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.65s ease ${0.15 + i * 0.08}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.08}s`,
                  }}
                >
                  <FAQItem
                    item={item}
                    index={globalIndex}
                    isOpen={openIndex === globalIndex}
                    onToggle={toggle}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
