/**
 * NumbersSection — "Let The Numbers Talk About Us"
 * Exact layout pattern from digitalcorsel.com/mumbai/
 * Dark-mode version with Juntoz brand colours.
 *
 * Layout per row:
 *   LEFT  → small label + trend arrow  |  giant metric
 *   RIGHT → client/category name (bold) + service type (muted)
 *   Separator: thin 1px horizontal line between rows
 */
import { useEffect, useRef, useState } from 'react';
import useCountUp from '../hooks/useCountUp.js';
import { clientData } from '../data/clients.js';

/* ── Result rows ── */
const RESULTS = clientData.filter(c => c.statsLabel).map(c => ({
  label: c.statsLabel,
  metric: c.statsMetric,
  client: c.businessName || c.name,
  service: c.statsService,
  color: c.color,
}));

/* ── Local useCountUp removed in favor of shared hook ── */

/* ── Trend arrow SVG ── */
const TrendArrow = ({ color }) => (
  <svg
    width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke={color} strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

function AnimatedMetric({ metric, started, color, delay = 0 }) {
  // Extract numeric portion e.g. "+340%" → 340
  const num = parseInt(metric.replace(/[^0-9]/g, ''), 10);
  const prefix = metric.startsWith('+') ? '+' : '';
  const suffix = metric.endsWith('%') ? '%' : '';
  const { value } = useCountUp(num, { duration: 1800, started, delay });

  return (
    <span style={{ color, textShadow: `0 0 40px ${color}45` }}>
      {prefix}{value}{suffix}
    </span>
  );
}

/* ── Single result row ── */
function ResultRow({ row, index, started, revealed }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        opacity:    revealed ? 1 : 0,
        transform:  revealed ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${0.15 + index * 0.12}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.15 + index * 0.12}s`,
      }}
    >
      {/* Top divider */}
      <div
        style={{
          height: '1px',
          background: hovered
            ? `linear-gradient(to right, ${row.color}50, rgba(255,255,255,0.08), ${row.color}20)`
            : 'rgba(255,255,255,0.07)',
          transition: 'background 0.4s ease',
        }}
      />

      {/* Row content */}
      <div
        className="flex items-center justify-between py-5 sm:py-6 cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ transition: 'padding 0.3s ease' }}
      >
        {/* ── LEFT: label + giant metric ── */}
        <div className="flex flex-col gap-1 sm:gap-2">
          {/* Small label + arrow */}
          <div className="flex items-center gap-2">
            <span
              className="font-body font-semibold tracking-wide"
              style={{
                fontSize: 'clamp(0.62rem, 1.3vw, 0.78rem)',
                color: hovered ? row.color : 'rgba(255,255,255,0.45)',
                transition: 'color 0.35s ease',
              }}
            >
              {row.label}
            </span>
            <span
              style={{
                opacity: hovered ? 1 : 0.4,
                transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              <TrendArrow color={row.color} />
            </span>
          </div>

          {/* Giant metric */}
          <div
            className="font-heading font-black leading-none"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.8rem)' }}
          >
            <AnimatedMetric
              metric={row.metric}
              started={started}
              color={row.color}
              delay={index * 150}
            />
          </div>
        </div>

        {/* ── RIGHT: client + service ── */}
        <div
          className="flex flex-col items-end gap-1 sm:gap-2 text-right ml-4"
          style={{ minWidth: '120px', maxWidth: '40%' }}
        >
          <span
            className="font-heading font-black text-white leading-tight"
            style={{
              fontSize: 'clamp(0.85rem, 2vw, 1.3rem)',
              opacity: hovered ? 1 : 0.75,
              transition: 'opacity 0.35s ease',
            }}
          >
            {row.client}
          </span>
          <span
            className="font-body leading-snug"
            style={{
              fontSize: 'clamp(0.65rem, 1.2vw, 0.78rem)',
              color: hovered ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.48)',
              transition: 'color 0.35s ease',
            }}
          >
            {row.service}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Main export ── */
export default function NumbersSection() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [started,  setStarted]  = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          setTimeout(() => setStarted(true), 250);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-10 sm:py-14">

      {/* ── Ambient background glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(0,245,212,0.06) 0%, transparent 65%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at bottom right, rgba(123,47,255,0.08) 0%, transparent 65%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">

        {/* ── Big heading — left-aligned, mixed weights like original ── */}
        <div
          className="text-center mb-8 sm:mb-10"
          style={{
            opacity:    revealed ? 1 : 0,
            transform:  revealed ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.75s ease 0.05s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.05s',
          }}
        >
          <h2
            className="font-heading text-white leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
          >
            Let The{' '}
            <span className="font-black" style={{
              background: 'linear-gradient(120deg, #00F5D4, #7B2FFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Numbers
            </span>
            <br />
            Talk{' '}
            <span className="font-black" style={{
              background: 'linear-gradient(120deg, #7B2FFF, #FF3AF2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              About Us.
            </span>
          </h2>
        </div>

        {/* ── Rows ── */}
        {RESULTS.map((row, i) => (
          <ResultRow
            key={i}
            row={row}
            index={i}
            started={started}
            revealed={revealed}
          />
        ))}

        {/* Final bottom divider */}
        <div
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.07)',
            opacity: revealed ? 1 : 0,
            transition: 'opacity 0.7s ease 0.65s',
          }}
        />
      </div>
    </section>
  );
}
