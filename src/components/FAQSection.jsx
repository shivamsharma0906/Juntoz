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
    q: 'Is it necessary to have a digital marketing agency for my salon?',
    a: 'Yes — if you want consistent, predictable bookings. Most salons rely only on word-of-mouth, which plateaus. A dedicated agency like Juntoz builds you a full-funnel system: Instagram growth, ads, WhatsApp follow-up, and local SEO so new clients find and book you every month.',
  },
  {
    q: 'How are your services useful for an already established beauty business?',
    a: 'Established businesses often have the talent but lack a scalable client acquisition system. We audit what\'s working, plug the revenue leaks, and layer paid + organic strategies to increase your monthly bookings and average ticket value without increasing your workload.',
  },
  {
    q: 'Do we get customised growth strategies for our beauty brand?',
    a: 'Absolutely. Every salon, MUA, and skin clinic is different. We start with a deep audit of your current presence, competitors, and target clients before building a bespoke roadmap — no copy-paste templates.',
  },
  {
    q: 'Can Juntoz provide performance marketing (paid ads) services?',
    a: 'Yes. We run highly targeted Meta (Instagram & Facebook) ads and Google Ads campaigns tailored specifically for beauty businesses. We handle creative, targeting, A/B testing, and optimisation to ensure your ad spend returns measurable bookings.',
  },
  {
    q: 'Why is local SEO important for my salon or beauty clinic?',
    a: 'When someone searches "best salon near me" or "MUA in Mumbai," your business must appear at the top. We optimise your Google Business Profile, build local citations, and manage reviews so you capture that high-intent traffic daily.',
  },
  {
    q: 'How long before I start seeing real results from your services?',
    a: 'Most clients see measurable improvements in reach and enquiries within the first 30 days. Significant booking growth typically follows within 60–90 days as campaigns optimise. We set realistic timelines upfront so expectations are always aligned.',
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
      className="rounded-2xl overflow-hidden"
      style={{
        background: isOpen ? 'rgba(0,245,212,0.04)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${isOpen ? 'rgba(0,245,212,0.25)' : 'rgba(255,255,255,0.08)'}`,
        transition: 'background 0.35s ease, border-color 0.35s ease',
      }}
    >
      {/* ── Question row ── */}
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-start gap-3 px-5 py-4 sm:px-6 sm:py-5 text-left"
        style={{ cursor: 'pointer', background: 'transparent' }}
        aria-expanded={isOpen}
      >
        {/* Heart icon */}
        <span
          className="shrink-0 mt-0.5"
          style={{
            color: isOpen ? '#00F5D4' : 'rgba(255,255,255,0.25)',
            transition: 'color 0.3s ease',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={isOpen ? '#00F5D4' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'fill 0.3s ease' }}>
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </span>

        {/* Question text */}
        <span
          className="flex-1 font-body font-semibold leading-snug"
          style={{
            fontSize: 'clamp(0.78rem, 1.8vw, 0.92rem)',
            color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.70)',
            transition: 'color 0.3s ease',
          }}
        >
          {item.q}
        </span>

        {/* Plus / Cross icon */}
        <span
          className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full ml-2 mt-0.5"
          style={{
            background: isOpen ? 'rgba(0,245,212,0.15)' : 'rgba(255,255,255,0.07)',
            border: `1px solid ${isOpen ? 'rgba(0,245,212,0.35)' : 'rgba(255,255,255,0.12)'}`,
            transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke={isOpen ? '#00F5D4' : 'rgba(255,255,255,0.5)'} strokeWidth="1.8" strokeLinecap="round" style={{ transition: 'stroke 0.3s ease' }}>
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
          transition: 'height 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div
          ref={bodyRef}
          className="px-5 sm:px-6 pb-5"
          style={{ paddingLeft: 'calc(1.25rem + 16px + 0.75rem)' }} /* align with question text */
        >
          <p
            className="font-body leading-relaxed"
            style={{
              fontSize: 'clamp(0.76rem, 1.7vw, 0.88rem)',
              color: 'rgba(255,255,255,0.50)',
            }}
          >
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
      className="relative overflow-hidden py-10 sm:py-14"
    >

      {/* ── Subtle background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(123,47,255,0.2) 40%, rgba(0,245,212,0.2) 60%, transparent 95%)' }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(255,58,242,0.15) 40%, rgba(123,47,255,0.15) 60%, transparent 95%)' }} />
        <div style={{ position:'absolute', top:'10%', right:'-5%', width:'400px', height:'400px', background:'radial-gradient(ellipse, rgba(123,47,255,0.07) 0%, transparent 65%)', filter:'blur(50px)' }} />
        <div style={{ position:'absolute', bottom:'10%', left:'-5%', width:'350px', height:'350px', background:'radial-gradient(ellipse, rgba(0,245,212,0.05) 0%, transparent 65%)', filter:'blur(50px)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* ── Heading — centred, bold, mixed weight like reference ── */}
        <div
          className="text-center mb-8 sm:mb-10"
          style={{
            opacity:    revealed ? 1 : 0,
            transform:  revealed ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.75s ease 0.05s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.05s',
          }}
        >
          <h2
            className="font-heading text-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.65rem, 5.5vw, 4rem)' }}
          >
            Frequently{' '}
            <span
              className="font-black"
              style={{
                background: 'linear-gradient(120deg, #00F5D4, #7B2FFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Asked
            </span>{' '}
            <span className="font-black text-white">Questions</span>
          </h2>
        </div>

        {/* ── 2-column accordion grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

          {/* Column 1 */}
          <div className="flex flex-col gap-3 sm:gap-4">
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
          <div className="flex flex-col gap-3 sm:gap-4">
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
