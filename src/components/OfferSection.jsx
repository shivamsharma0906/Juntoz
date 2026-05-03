import { useState, useEffect } from 'react';

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
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        {[...Array(total)].map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 transition-all duration-300 ${
              i < (total - remaining)
                ? 'bg-white/20 border-white/20'
                : 'bg-accent-3 border-accent-3 shadow-[0_0_10px_#FFE600]'
            }`}
          />
        ))}
      </div>
      <p className="font-heading font-black text-accent-3 text-lg uppercase tracking-widest">
        {remaining} of {total} slots remaining
      </p>
    </div>
  );
}

export default function OfferSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    // Count down to end of current month
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
    <section id="offer" className="relative py-32 bg-accent-5 overflow-hidden z-10 border-y-8 border-accent-3">
      <div className="absolute inset-0 pattern-mesh opacity-60 z-0" />

      {/* Big bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="font-heading font-black text-[6rem] md:text-[16rem] text-white/5 leading-none">OFFER</div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-20">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 border-4 border-accent-3 bg-accent-3 text-background font-heading font-bold uppercase tracking-widest text-sm mb-6 -rotate-2 shadow-[4px_4px_0_#0D0D1A]">
            🔥 LIMITED ONBOARDING — JUNE 2025
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase text-white leading-none tracking-tighter text-shadow-3">
            EVERYTHING YOU GET
          </h2>
          <p className="font-body text-white/70 text-lg md:text-xl max-w-xl mx-auto mt-4 font-medium">
            One growth partner. One system. Everything you need to fill your calendar — without the guesswork.
          </p>
        </div>

        {/* Slots + Countdown */}
        <div className="bg-background/80 backdrop-blur-md rounded-[32px] border-8 border-accent-3 p-8 md:p-10 mb-12 text-center"
          style={{ boxShadow: '8px 8px 0 #FFE600' }}>

          <SlotIndicator remaining={REMAINING_SLOTS} total={TOTAL_SLOTS} />

          <div className="w-full h-1 bg-white/10 rounded-full my-6 max-w-sm mx-auto">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent-3 to-accent-4 transition-all duration-1000"
              style={{ width: `${((TOTAL_SLOTS - REMAINING_SLOTS) / TOTAL_SLOTS) * 100}%` }}
            />
          </div>

          <p className="font-heading font-bold text-white/60 text-sm uppercase tracking-widest mb-6">
            Onboarding closes in:
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {[
              { val: timeLeft.days, label: 'Days' },
              { val: timeLeft.hours, label: 'Hours' },
              { val: timeLeft.mins, label: 'Mins' },
            ].map((t, i) => (
              <div key={i} className="text-center">
                <div className="font-heading font-black text-4xl md:text-6xl text-accent-3 leading-none" style={{ textShadow: '2px 2px 0 #0D0D1A' }}>
                  {String(t.val).padStart(2, '0')}
                </div>
                <div className="font-heading font-bold text-white/40 text-xs uppercase tracking-widest mt-1">{t.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {includes.map((item, i) => (
            <div
              key={i}
              className="group bg-background/60 backdrop-blur-sm rounded-2xl border-4 border-white/10 p-6 hover:border-accent-3 hover:bg-background/80 hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-heading font-black text-xl text-white uppercase mb-2 group-hover:text-accent-3 transition-colors">{item.title}</h3>
              <p className="font-body text-white/60 text-sm md:text-base font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="text-center">
            <a
              href={WA_HARD}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent-3 text-background font-heading font-black uppercase tracking-widest text-lg rounded-full border-4 border-background shadow-[8px_8px_0_#FF3AF2] hover:scale-105 hover:shadow-[12px_12px_0_#00F5D4] transition-all duration-300"
            >
              <span>📞</span> Book a Strategy Call
            </a>
            <p className="font-body text-white/40 text-xs mt-3 uppercase tracking-widest">Limited slots available each month.</p>
          </div>
          <div className="text-center">
            <a
              href={WA_SOFT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent text-white font-heading font-black uppercase tracking-widest text-lg rounded-full border-4 border-dashed border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <span>💬</span> Get Your Growth Plan
            </a>
            <p className="font-body text-white/40 text-xs mt-3 uppercase tracking-widest">Takes 30 seconds. No commitment.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
