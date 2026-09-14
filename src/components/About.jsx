import { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const proofStats = [
  { value: 5, suffix: '+ Yrs', label: 'Agency Experience', icon: '⏳' },
  { value: 200, suffix: '+', label: 'Clients Scaled', icon: '📈' },
  { value: 5.0, suffix: '★', label: 'Google Client Rating', icon: '⭐' },
];

const values = [
  {
    n: '01',
    headline: 'Commercial Revenue',
    sub: 'Not Just Vanity Metrics',
    icon: '📊',
    description: 'We measure success by qualified inbound inquiries, verified customer appointments, and revenue pipeline — not superficial impressions or likes.',
  },
  {
    n: '02',
    headline: 'Brand Rate Defense',
    sub: 'Command Premium Pricing',
    icon: '👑',
    description: 'We build editorial-grade digital assets, landing pages, and positioning frameworks that establish market authority and eliminate price bargaining.',
  },
  {
    n: '03',
    headline: 'Systemic Consistency',
    sub: 'Always-On Growth Engine',
    icon: '⚙️',
    description: 'We counter business dry spells by integrating paid ads, local Google search dominance, and automated lead qualification into an ongoing revenue machine.',
  },
];

// Stat Card Counter
const StatCounter = ({ stat, isVisible }) => {
  const counterRef = useRef({ count: 0, hasAnimated: false });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible || counterRef.current.hasAnimated) return;
    counterRef.current.hasAnimated = true;
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(increment * currentStep, stat.value);
      setDisplayValue(newValue);
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(stat.value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  const formattedValue = typeof stat.value === 'number' && stat.value % 1 !== 0
    ? displayValue.toFixed(1)
    : Math.floor(displayValue);

  return (
    <div
      className="group relative flex flex-col md:flex-row items-center gap-4 flex-1 p-6 rounded-3xl border border-[#DEDED7] bg-white shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:border-[#111111]/30"
    >
      {/* Icon block */}
      <div 
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 border border-[#DEDED7] bg-[#F7F6F2] text-[#111111]"
      >
        {stat.icon}
      </div>

      {/* Text block */}
      <div className="flex-1 text-center md:text-left">
        <div className="font-heading font-black text-3xl leading-none text-[#111111] flex items-baseline justify-center md:justify-start">
          <span>{formattedValue}</span>
          <span className="text-[#E84A2A] ml-0.5">{stat.suffix}</span>
        </div>
        <div className="font-sans font-bold text-[11px] uppercase tracking-wider text-[#5F5F5A] mt-1.5">
          {stat.label}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const [sectionRef, setSectionRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef);
    return () => observer.disconnect();
  }, [sectionRef]);

  return (
    <section 
      ref={setSectionRef}
      id="about-metrics" 
      className="py-20 sm:py-28 bg-[#F7F6F2] relative overflow-hidden border-t border-[#DEDED7]"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 space-y-16 md:space-y-20">
        
        {/* Stats Row */}
        <ScrollReveal data-reveal="up" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofStats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </ScrollReveal>

        {/* Values Block */}
        <div className="space-y-12">
          <ScrollReveal className="text-center max-w-xl mx-auto space-y-3">
            <span className="font-sans font-semibold tracking-wider text-[#E84A2A] uppercase text-xs block">
              Core Principles
            </span>
            <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl uppercase tracking-tight">
              How We Create Impact
            </h2>
            <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
              We align our design, code, and ad strategies with a simple focus: generating measurable business leverage.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <ScrollReveal key={value.headline} delay={idx * 150}>
                <div className="group rounded-[2rem] border border-[#DEDED7] bg-white p-8 flex flex-col justify-between shadow-subtle hover:border-[#111111]/40 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-black text-base border border-[#DEDED7] bg-[#F7F6F2] text-[#111111]"
                      >
                        {value.icon}
                      </div>
                      <span className="font-sans font-bold text-[#E84A2A] text-lg">{value.n}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-[#111111] text-xl uppercase tracking-tight">
                        {value.headline}
                      </h3>
                      <p className="font-sans font-bold text-[11px] tracking-wider uppercase text-[#E84A2A]">
                        {value.sub}
                      </p>
                    </div>

                    <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── Why a Specialist Beats a Generalist for MUAs ── */}
        <div className="pt-14 border-t border-[#DEDED7] space-y-12">
          <ScrollReveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-sans font-semibold tracking-wider text-[#E84A2A] uppercase text-xs block">
              The Strategic Advantage
            </span>
            <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl uppercase tracking-tight">
              Why a Specialist Beats a Generalist for MUAs
            </h2>
            <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
              Most digital agencies manage real estate, restaurants, and clinics on the same desk. Here is why beauty professionals scale dramatically faster with an exclusive MUA growth partner.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal data-reveal="left" delay={100}>
              <div className="p-8 rounded-3xl bg-white border border-[#DEDED7] space-y-4 h-full shadow-subtle">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FBE9E4] text-[#E84A2A] flex items-center justify-center font-bold text-xs">
                    01
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-wide">
                    Wedding Calendar &amp; Muhurat Timing
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5F5F5A] font-body leading-relaxed">
                  Generalist agencies run uniform ad spend all year round, burning cash during slow periods. We understand the Indian wedding calendar intimately—scaling ad spend 3 to 6 months ahead of peak wedding dates when brides are actively shortlisting artists.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="right" delay={200}>
              <div className="p-8 rounded-3xl bg-white border border-[#DEDED7] space-y-4 h-full shadow-subtle">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FBE9E4] text-[#E84A2A] flex items-center justify-center font-bold text-xs">
                    02
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-wide">
                    Skin Texture &amp; Editorial Lighting Nuance
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5F5F5A] font-body leading-relaxed">
                  Generic marketers slap harsh filters on reels that blur skin texture and ruin professional reputation. We guide you on camera angles, ring light vs. softbox diffusion, and 4K color grading that highlight authentic bridal radiance.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="left" delay={300}>
              <div className="p-8 rounded-3xl bg-white border border-[#DEDED7] space-y-4 h-full shadow-subtle">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FBE9E4] text-[#E84A2A] flex items-center justify-center font-bold text-xs">
                    03
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-wide">
                    High-Ticket Rate Anchoring (No Bargaining)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5F5F5A] font-body leading-relaxed">
                  Generalists generate low-intent leads asking "Rate please?" who vanish when quoted ₹25,000. We build luxury digital rate cards and WhatsApp qualification scripts that filter out price shoppers and anchor your value at ₹35k–₹70k+.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="right" delay={400}>
              <div className="p-8 rounded-3xl bg-white border border-[#DEDED7] space-y-4 h-full shadow-subtle">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FBE9E4] text-[#E84A2A] flex items-center justify-center font-bold text-xs">
                    04
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-wide">
                    Off-Season Masterclass Monetization
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5F5F5A] font-body leading-relaxed">
                  When bridal bookings dip between June and August, generalist agencies flounder. We launch sold-out Pro Masterclass batches, 1-on-1 certifications, and early-bird bridal campaigns so your income stays predictable all 12 months.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}