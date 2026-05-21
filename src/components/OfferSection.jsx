import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const WA_HARD = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';
const WA_SOFT = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20a%20custom%20growth%20plan%20for%20my%20business.';

const TOTAL_SLOTS = 10;
const REMAINING_SLOTS = 3;

const includes = [
  { icon: '🎯', title: 'Custom Growth Strategy', desc: 'A tailored 90-day roadmap built for your exact business, city, and goals.' },
  { icon: '📱', title: 'Instagram Management', desc: 'Full page handling — posts, reels, stories, DMs, and aesthetic grid.' },
  { icon: '💰', title: 'Performance Ad Campaigns', desc: 'Meta & Google ads optimised to generate real enquiries, not just impressions.' },
  { icon: '🗺️', title: 'Local SEO & Google Profile', desc: 'Rank on top when someone searches "makeup artist near me" in your city.' },
  { icon: '📥', title: 'WhatsApp Lead Funnel', desc: 'Turn ad clicks and profile visitors into direct WhatsApp enquiries automatically.' },
  { icon: '📊', title: 'Monthly Reports', desc: 'Clear, honest reporting on what\'s working. No jargon. Just results.' },
];

function SlotIndicator({ remaining, total }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2.5">
        {[...Array(total)].map((_, i) => (
          <div
            key={i}
            className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 transition-all duration-300 ${
              i < (total - remaining)
                ? 'bg-white/10 border-white/10'
                : 'bg-[#FFE600] border-[#FFE600] shadow-[0_0_15px_#FFE600] animate-pulse'
            }`}
          />
        ))}
      </div>
      <p className="font-heading font-black text-[#FFE600] text-lg uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,230,0,0.4)]">
        {remaining} of {total} slots remaining
      </p>
    </div>
  );
}

export default function OfferSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const update = () => {
      const diff = endOfMonth - new Date();
      if (diff <= 0) return;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft({ days, hours, mins });
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="offer" className="relative py-24 md:py-32 bg-[#0A0A0F] overflow-hidden z-10 border-y border-white/5">
      <div className="absolute inset-0 pattern-grid opacity-50 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#7B2FFF]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden mix-blend-overlay">
        <div className="font-heading font-black text-[10rem] md:text-[20rem] text-white/5 leading-none tracking-tighter">OFFER</div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-20">

        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-16 md:mb-20">
          <div className="inline-block px-5 py-2 border-2 border-[#FFE600]/30 bg-[#FFE600]/10 text-[#FFE600] font-heading font-bold uppercase tracking-widest text-xs md:text-sm mb-8 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(255,230,0,0.15)]">
            🔥 Limited Onboarding — June 2025
          </div>
          <h2 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl uppercase text-white leading-[0.95] tracking-tighter">
            Everything You{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] to-[#FF3AF2]">
              Get
            </span>
          </h2>
          <p className="font-body text-white/60 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            One growth partner. One cohesive system. Everything you need to fill your calendar without the guesswork.
          </p>
        </ScrollReveal>

        {/* Slots + Countdown */}
        <ScrollReveal data-reveal="zoom" delay={100} className="relative group max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FFE600] to-[#FF3AF2] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative bg-[#05050C]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 text-center shadow-2xl">
            
            <SlotIndicator remaining={REMAINING_SLOTS} total={TOTAL_SLOTS} />

            <div className="w-full h-1.5 bg-white/10 rounded-full my-8 max-w-sm mx-auto overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#FFE600] to-[#FF3AF2] transition-all duration-1000 relative"
                style={{ width: `${((TOTAL_SLOTS - REMAINING_SLOTS) / TOTAL_SLOTS) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-[sweep_2s_ease-in-out_infinite]" />
              </div>
            </div>

            <p className="font-heading font-bold text-white/40 text-xs uppercase tracking-widest mb-6">
              Onboarding closes in:
            </p>
            
            <div className="flex items-center justify-center gap-6 md:gap-12">
              {[
                { val: timeLeft.days, label: 'Days' },
                { val: timeLeft.hours, label: 'Hours' },
                { val: timeLeft.mins, label: 'Mins' },
              ].map((t, i) => (
                <div key={i} className="text-center">
                  <div className="font-heading font-black text-5xl md:text-7xl text-white leading-none drop-shadow-xl">
                    {String(t.val).padStart(2, '0')}
                  </div>
                  <div className="font-heading font-bold text-[#FFE600] text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2">{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* What's Included */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-24">
          {includes.map((item, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 100}>
              <div className="group relative h-full bg-[#05050C] rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-[#080810]/95 backdrop-blur-2xl rounded-[31px] p-8 flex flex-col z-10">
                  <div className="text-4xl mb-6 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 origin-bottom-left">{item.icon}</div>
                  <h3 className="font-heading font-black text-white text-lg md:text-xl uppercase mb-3 leading-snug">{item.title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Buttons */}
        <ScrollReveal data-reveal="up" delay={200} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="text-center w-full sm:w-auto">
            <div className="relative group/btn inline-block w-full">
              <div className="absolute -inset-1 bg-[#FFE600] rounded-full blur opacity-30 group-hover/btn:opacity-60 transition duration-500 animate-pulse" />
              <a
                href={WA_HARD}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-3 px-10 py-5 bg-[#FFE600] text-background font-heading font-black uppercase tracking-widest text-sm md:text-base rounded-full shadow-[0_0_20px_rgba(255,230,0,0.4)] hover:scale-105 transition-all duration-300 w-full"
              >
                <span>📞</span> Book a Strategy Call
              </a>
            </div>
            <p className="font-body text-white/40 text-[10px] md:text-xs mt-4 uppercase tracking-[0.2em] font-bold">Limited slots available each month.</p>
          </div>

          <div className="hidden sm:block text-white/20 font-bold">OR</div>

          <div className="text-center w-full sm:w-auto">
            <a
              href={WA_SOFT}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-3 px-10 py-5 bg-transparent text-white font-heading font-black uppercase tracking-widest text-sm md:text-base rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 w-full"
            >
              <span>💬</span> Get Your Growth Plan
            </a>
            <p className="font-body text-white/40 text-[10px] md:text-xs mt-4 uppercase tracking-[0.2em] font-bold">Takes 30 seconds. No commitment.</p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
