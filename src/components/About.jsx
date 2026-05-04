import { useState, useRef, useEffect } from 'react';

const proofStats = [
  { value: 200, suffix: '+', label: 'Beauty Clients Across India', color: '#FF3AF2', icon: '💄' },
  { value: 100, suffix: '+', label: 'Active Clients / Month', color: '#00F5D4', icon: '🎯' },
  { value: 5.0, suffix: '★', label: 'Client Rating', color: '#7B2FFF', icon: '⭐' },
];

const values = [
  {
    n: '01',
    headline: 'More Bridal Bookings',
    sub: 'Not Just Likes',
    color: '#FF3AF2',
    icon: '💍',
    description: 'Convert Instagram followers into paying bridal clients with our proven funnel system.',
  },
  {
    n: '02',
    headline: 'Real Leads',
    sub: 'Not Vanity Followers',
    color: '#00F5D4',
    icon: '📈',
    description: 'Quality leads who actually book, not random followers who never convert.',
  },
  {
    n: '03',
    headline: 'Predictable Revenue',
    sub: 'Monthly Booking System',
    color: '#7B2FFF',
    icon: '💰',
    description: 'Stop the feast-or-famine cycle. Get consistent monthly bookings.',
  },
];

// ── Animated Counter Hook ──
function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  return { count, setCount, hasAnimated, setHasAnimated, end, duration };
}


// ── Stat Card Component ──
const StatCard = ({ stat, index, isVisible }) => {
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
      className="group relative flex items-center gap-4 flex-1 min-w-[140px] px-4 py-3 rounded-xl transition-all duration-500 hover:scale-105"
      style={{
        background: `linear-gradient(135deg, ${stat.color}08 0%, transparent 100%)`,
        border: `1px solid ${stat.color}20`,
        boxShadow: `0 4px 20px ${stat.color}10`,
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Animated background glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="relative z-10 text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
        style={{
          filter: `drop-shadow(0 0 8px ${stat.color}60)`,
        }}
      >
        {stat.icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <div
          className="font-heading font-black leading-none transition-all duration-300 group-hover:scale-110"
          style={{
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            color: stat.color,
            textShadow: `0 0 25px ${stat.color}70`,
          }}
        >
          {formattedValue}{stat.suffix}
        </div>
        <div
          className="font-body text-xs uppercase tracking-widest mt-1 transition-colors duration-300 group-hover:text-white/60"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          {stat.label}
        </div>
      </div>

      {/* Pulse indicator */}
      <div
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 animate-ping"
        style={{ background: stat.color }}
      />
    </div>
  );
};

// ── Value Card ── (all hover via CSS — zero React re-renders on mouse move)
const ValueCard = ({ value, index }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: `linear-gradient(135deg, ${value.color}05 0%, rgba(255,255,255,0.02) 100%)`,
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Gradient overlay — CSS only via group-hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${value.color}10 0%, transparent 100%)` }}
      />
      {/* Content */}
      <div className="relative z-10 flex items-start gap-4 px-5 py-5">
        {/* Number badge */}
        <div
          className="relative w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-heading font-black text-xs transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: value.color,
            color: '#08080f',
            boxShadow: `0 0 14px ${value.color}50`,
          }}
        >
          <span className="relative z-10">{value.n}</span>
        </div>

        {/* Text content */}
        <div className="flex-1">
          {/* Icon */}
          <div
            className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-125"
            style={{
              filter: `drop-shadow(0 0 10px ${value.color}60)`,
            }}
          >
            {value.icon}
          </div>

          {/* Headline */}
          <p className="font-heading font-black text-white text-base uppercase leading-tight mb-1">
            {value.headline}
          </p>

          {/* Subtitle */}
          <p className="font-body text-sm font-semibold mb-3" style={{ color: value.color }}>
            {value.sub}
          </p>

          {/* Description */}
          <p className="font-body text-xs leading-relaxed text-white/40">
            {value.description}
          </p>
        </div>
      </div>

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-20 h-20 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle at top right, ${value.color} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 bg-background overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Static background glows — CSS only, no JS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full blur-[120px]" style={{ background: 'rgba(255,58,242,0.06)' }} />
        <div className="absolute bottom-[15%] right-[10%] w-[250px] h-[250px] rounded-full blur-[100px]" style={{ background: 'rgba(0,245,212,0.06)' }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full blur-[80px]" style={{ background: 'rgba(123,47,255,0.05)' }} />
      </div>

      {/* Animated gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #00F5D4 50%, transparent 100%)',
          opacity: 0.3,
        }}
      />

      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">

        {/* Header Section */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Label with animated underline */}
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-accent-2 animate-pulse" />
            <p
              className="font-body text-sm font-bold uppercase tracking-[0.3em]"
              style={{ color: '#00F5D4' }}
            >
              Who We Are
            </p>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-accent-2 animate-pulse" />
          </div>

          {/* Headline with gradient animation */}
          <h2
            id="about-heading"
            className="font-heading font-black uppercase leading-tight tracking-tighter mb-5"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            <span className="text-white">Your Growth Partner for </span>
            <span
              className="inline-block bg-gradient-to-r from-accent-2 via-white to-accent-2 bg-clip-text text-transparent animate-gradient-shift"
              style={{
                backgroundSize: '200% auto',
                textShadow: '0 0 40px rgba(0,245,212,0.6)',
              }}
            >
              Beauty Brands.
            </span>
          </h2>

          {/* Body copy with staggered fade-in */}
          <p
            className={`font-body leading-relaxed max-w-3xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              color: 'rgba(255,255,255,0.65)',
            }}
          >
            We help makeup artists, salons, and beauty brands turn Instagram into a
            consistent booking machine using ads, content, and conversion systems.{' '}
            <span className="text-accent-2 font-semibold">No fluff. Just results.</span>
          </p>
        </div>

        {/* Stats Section with animated counter */}
        <div
          className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div
            className="relative flex flex-wrap gap-4 p-6 rounded-3xl backdrop-blur-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            {/* Animated background shimmer */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  'linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                animation: 'shimmer 3s infinite',
              }}
            />

            {proofStats.map((stat, i) => (
              <div key={i} className="flex-1 min-w-[140px]">
                {i > 0 && (
                  <div
                    className="hidden sm:block absolute w-px h-12 top-1/2 -translate-y-1/2"
                    style={{
                      left: `${(i / proofStats.length) * 100}%`,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                    }}
                  />
                )}
                <StatCard stat={stat} index={i} isVisible={isVisible} />
              </div>
            ))}
          </div>
        </div>

        {/* Value Cards Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {values.map((v, idx) => (
            <ValueCard key={v.n} value={v} index={idx} />
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="font-body text-white/40 text-sm tracking-wide">
            Ready to scale your beauty business?{' '}
            <a
              href="#contact"
              className="text-accent-2 font-semibold hover:underline transition-all duration-300 hover:text-accent-2/80"
            >
              Let's talk →
            </a>
          </p>
        </div>

      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
            opacity: 0.8;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
            opacity: 0.7;
          }
        }
        .animate-float-orb {
          animation: float-orb ease-in-out infinite;
        }

        @keyframes particle-rise {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity, 0.3);
          }
          90% {
            opacity: var(--opacity, 0.3);
          }
          100% {
            transform: translateY(-100vh) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-particle-rise {
          animation: particle-rise linear infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 4s ease infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}