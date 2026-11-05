import { useEffect, useRef, useState, useCallback } from 'react';
import { motionConfig } from '../config/motion';

const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20to%20request%20a%20growth%20audit%20for%20my%20business.';

const TICKER = [
  'PERFORMANCE ADVERTISING',
  'GOOGLE MAPS & LOCAL SEO',
  'CONVERSION RATE OPTIMIZATION',
  'BRAND & CONTENT PRODUCTION',
  'LEAD GENERATION SYSTEMS',
  'BEAUTY & SALON PLAYBOOKS',
];

const PROOF = [
  { num: '5+ Yrs', label: 'Agency Experience' },
  { num: '30+', label: 'Active Retainers' },
  { num: '5.0 ★', label: 'Google Rating' },
  { num: '3.1×', label: 'Avg. Inquiries Growth' },
];

export default function CTASection() {
  const ref = useRef(null);
  const btnRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: -100, y: -100, active: false });

  // Intersection observer for headline entrance
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Subtle magnetic hover pull & spotlight sheen on primary button (desktop only)
  const handleBtnMouseMove = useCallback((e) => {
    if (!motionConfig.ctaMotion) return;
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pullX = (x - rect.width / 2) * 0.12;
    const pullY = (y - rect.height / 2) * 0.18;
    setBtnOffset({ x: pullX, y: pullY });
    setSpotlight({ x, y, active: true });
  }, []);

  const handleBtnMouseLeave = useCallback(() => {
    setBtnOffset({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, active: false }));
  }, []);

  const isMotionActive = motionConfig.ctaMotion;

  return (
    <section ref={ref} id="cta" className="relative flex flex-col overflow-hidden bg-[#111111] py-24 md:py-32">
      {/* Ticker Bar */}
      <div className="relative z-10 py-3 overflow-hidden border-y border-white/10 bg-[#161616] mb-16">
        <div className="cta-ticker-fwd flex whitespace-nowrap w-max">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5 font-sans font-bold text-[11px] uppercase tracking-[0.2em] text-white/30">
              {t}<span className="w-1 h-1 rounded-full bg-[#5D2E85] shrink-0" />
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        {/* Subtle Advocacy Halo Ring & Ambient Aura behind conversion content */}
        {isMotionActive && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] sm:w-[680px] sm:h-[680px] pointer-events-none -z-0"
            aria-hidden="true"
          >
            {/* Ambient soft pulse glow */}
            <div className="absolute inset-0 rounded-full bg-[#5D2E85]/20 blur-3xl animate-pulse duration-[7000ms]" />
            {/* Orbital fine ring with advocacy particle nodes */}
            <svg className="w-full h-full text-[#5D2E85]/25 cta-advocacy-spin" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1" strokeDasharray="4 10" opacity="0.6" />
              <circle cx="200" cy="200" r="145" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 14" opacity="0.4" />
              <circle cx="200" cy="15" r="3.5" fill="#5D2E85" opacity="0.9" />
              <circle cx="385" cy="200" r="2.5" fill="#F1E7F9" opacity="0.8" />
              <circle cx="70" cy="325" r="3" fill="#5D2E85" opacity="0.7" />
            </svg>
          </div>
        )}

        <div className="w-full max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">

          {/* Masked Typographic Entrance */}
          <div className="mb-6">
            <h2
              className="font-heading font-black uppercase leading-tight tracking-tight select-none"
              aria-label="Ready to scale your business?"
            >
              <span className="block overflow-hidden mb-2">
                <span
                  className={`block text-white text-3xl sm:text-5xl md:text-6xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isMotionActive ? (visible ? 'translate-y-0' : 'translate-y-full') : 'translate-y-0'
                  }`}
                >
                  READY TO SCALE
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className={`block text-[#5D2E85] text-4xl sm:text-6xl md:text-7xl transition-transform duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isMotionActive ? (visible ? 'translate-y-0' : 'translate-y-full') : 'translate-y-0'
                  }`}
                >
                  YOUR BUSINESS?
                </span>
              </span>
            </h2>
          </div>

          <p className="font-body text-white/65 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10">
            Get a direct 1-on-1 growth audit covering your paid advertising pipeline, local search visibility, and conversion bottlenecks. No fluff, just high-converting strategy.
          </p>

          <div className="mb-16">
            <div className="inline-block relative">
              <a
                ref={btnRef}
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                style={{
                  transform: isMotionActive
                    ? `translate3d(${btnOffset.x}px, ${btnOffset.y}px, 0)`
                    : 'none',
                  transition: isMotionActive && btnOffset.x === 0
                    ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s'
                    : 'background-color 0.2s',
                }}
                className="relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-12 sm:py-5 rounded-full font-sans font-bold text-sm sm:text-base uppercase tracking-wider text-white bg-[#5D2E85] hover:bg-[#4C266D] shadow-md active:scale-95 cursor-pointer"
              >
                {/* Reactive spotlight sheen */}
                {isMotionActive && spotlight.active && (
                  <span
                    aria-hidden="true"
                    className="absolute pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-white/20 blur-md transition-opacity duration-200"
                    style={{ left: `${spotlight.x}px`, top: `${spotlight.y}px` }}
                  />
                )}

                <svg className="w-5 h-5 shrink-0 fill-current relative z-10" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.139.564 4.147 1.549 5.878L0 24l6.272-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.24-1.375l-.374-.222-3.724.904.938-3.617-.243-.387A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                <span className="relative z-10">Request Business Growth Audit</span>
              </a>
            </div>
            <p className="font-body text-xs text-[#5F5F5A] mt-4">
              Direct Founder Call · 20-Minute Strategic Session · Performance Focused
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {PROOF.map((p, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/10 rounded-2xl px-4 py-5 text-center transition-all duration-300 hover:border-white/20">
                <div className="font-heading font-black text-2xl text-white">{p.num}</div>
                <div className="font-sans text-white/50 text-[11px] uppercase tracking-wider mt-1">{p.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes cta-ticker-fwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes cta-advocacy-spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .cta-ticker-fwd { animation: cta-ticker-fwd 26s linear infinite; }
        .cta-advocacy-spin { animation: cta-advocacy-spin 90s linear infinite; }
      `}</style>
    </section>
  );
}
