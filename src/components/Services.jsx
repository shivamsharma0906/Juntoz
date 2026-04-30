import { useState, useRef, useEffect } from 'react';

const services = [
  {
    num: '01',
    icon: '🎯',
    title: 'Lead Generation Ads',
    subtitle: '(Meta & Google)',
    desc: 'Laser-targeted campaigns designed to put your business in front of brides and beauty lovers EXACTLY when they are looking.',
    backPoints: [
      '🚀 Facebook campaigns',
      '📊 Insights',
      '⚡ Boosting',
      '📈 Organic followers',
      '🎯 Fb Campaigns',
      '📥 Leads generation',
    ],
    hex: '#FF3AF2',
    borderHex: '#FFE600',
  },
  {
    num: '02',
    icon: '🚀',
    title: 'Instagram Growth',
    subtitle: '& Boosting',
    desc: 'Content strategies to turn your profile into a high-converting client magnet. We grow your authority.',
    backPoints: [
      '📱 Instagram Page handling',
      '✍️ Updated bio',
      '🤳 Stories - 11',
      '🗓️ Content calendar',
      '🌟 Highlights',
      '📈 Insights',
      '🎬 Edit reels',
      '📝 Post description',
      '📤 Upload posts & reels {8+7}',
      '🎵 Trending songs',
      '✨ Organic followers',
      '🎨 Grid layout : Aesthetic',
      '💡 Content ideas',
    ],
    hex: '#00F5D4',
    borderHex: '#FF3AF2',
  },
  {
    num: '03',
    icon: '📍',
    title: 'SEO & Local Visibility',
    subtitle: '',
    desc: 'Rank higher on Google when locals search for "makeup artists near me". Dominate local search.',
    backPoints: [
      '🗺️ Google Business Profile setup',
      '🔑 Local keyword optimisation',
      '⭐ Review generation strategy',
      '📄 On-page SEO for your website',
      '📊 Monthly ranking reports',
    ],
    hex: '#FF6B35',
    borderHex: '#00F5D4',
  },
];

export default function Services() {
  const [flipped, setFlipped] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStart = useRef(0);

  const handleFlip = (idx) => {
    setFlipped(prev => (prev === idx ? null : idx));
  };

  const handleTouchStart = (clientX) => {
    touchStart.current = clientX;
  };

  const handleTouchEnd = (clientX) => {
    const diff = touchStart.current - clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIdx < services.length - 1) {
        setActiveIdx(prev => prev + 1);
        setFlipped(null);
      } else if (diff < 0 && activeIdx > 0) {
        setActiveIdx(prev => prev - 1);
        setFlipped(null);
      }
    }
  };

  return (
    <section id="services" className="relative py-32 bg-background overflow-hidden z-10">
      <div className="absolute inset-0 opacity-20 z-0" style={{backgroundImage:'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,230,0,0.08) 10px,rgba(255,230,0,0.08) 20px)'}}></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-20">

        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[5rem] sm:text-[8rem] md:text-[12rem] font-heading font-black text-accent-5/10 pointer-events-none select-none whitespace-nowrap">
            WHAT WE DO
          </div>
          <div className="inline-block px-6 py-2 border-4 border-accent-2 bg-muted/80 rounded-full text-accent-2 font-heading font-bold uppercase tracking-widest mb-6 -rotate-2">
            The Growth Pillars 🛠️
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase text-white leading-none" style={{textShadow:'4px 4px 0 #7B2FFF, 8px 8px 0 #FF3AF2'}}>
            WHAT WE <span className="text-transparent" style={{WebkitTextStroke:'2px #FF3AF2'}}>BUILD</span> FOR YOU
          </h2>
        </div>

        {/* Desktop Grid / Mobile Slider */}
        <div className="relative overflow-hidden md:overflow-visible">
          <div 
            className="flex md:grid md:grid-cols-3 gap-8 md:gap-14 transition-transform duration-500 ease-out md:!transform-none md:cursor-default cursor-grab active:cursor-grabbing select-none"
            style={{ 
              transform: `translateX(calc(-${activeIdx * 100}% - ${activeIdx * 32}px))` 
            }}
            onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
            onMouseDown={(e) => handleTouchStart(e.clientX)}
            onMouseUp={(e) => handleTouchEnd(e.clientX)}
          >
            {services.map((s, i) => {
              const isFlipped = flipped === i;
              const rotation = i === 1 ? 'md:rotate-2' : i === 2 ? 'md:-rotate-1' : 'md:rotate-1';
              const isActive = activeIdx === i;

              return (
                <div
                  key={s.num}
                  className={`relative min-w-full flex-shrink-0 md:min-w-0 ${rotation} hover:rotate-0 transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95 md:opacity-100 md:scale-100'}`}
                  style={{ perspective: '1000px', height: '460px' }}
                >
                  {/* Inner flip container */}
                  <div
                    className="w-full h-full relative transition-all duration-700"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 p-8 rounded-[32px] border-8 flex flex-col"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        backgroundColor: '#2D1B4E',
                        borderColor: s.borderHex,
                        boxShadow: isActive ? `8px 8px 0 ${s.hex}` : `4px 4px 0 ${s.hex}80`,
                      }}
                    >
                      <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full flex items-center justify-center font-heading font-black text-2xl border-4 border-background" style={{ backgroundColor: s.hex, color: '#0D0D1A' }}>
                        {s.num}
                      </div>
                      <div className="text-5xl mb-5">{s.icon}</div>
                      <h3 className="font-heading font-black text-2xl uppercase text-white leading-tight mb-1" style={{ textShadow: `2px 2px 0 ${s.hex}` }}>{s.title}</h3>
                      {s.subtitle && <h4 className="font-heading font-bold text-lg uppercase mb-4" style={{ color: s.hex }}>{s.subtitle}</h4>}
                      <p className="font-body text-white/80 text-base font-medium leading-relaxed flex-1 mt-2">{s.desc}</p>
                      <button onClick={() => handleFlip(i)} className="mt-6 inline-flex items-center gap-2 font-heading font-bold uppercase tracking-widest text-sm px-5 py-2.5 rounded-full border-4 text-white transition-all hover:scale-105" style={{ borderColor: s.hex, backgroundColor: 'rgba(0,0,0,0.3)' }}>Learn More <span>→</span></button>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 p-8 rounded-[32px] border-8 flex flex-col justify-between"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        backgroundColor: s.hex === '#FF3AF2' ? '#1A0A2E' : s.hex === '#00F5D4' ? '#081A18' : '#1A0A05',
                        borderColor: s.hex,
                        boxShadow: `8px 8px 0 ${s.borderHex}`,
                      }}
                    >
                      <div>
                        <h3 className="font-heading font-black text-2xl uppercase mb-6 leading-tight" style={{ color: s.hex, textShadow: `2px 2px 0 #0D0D1A` }}>What's Included ✅</h3>
                        <div className="max-h-[240px] overflow-y-auto pr-2 custom-scrollbar">
                          <ul className="space-y-3">
                            {s.backPoints.map((pt, j) => (
                              <li key={j} className="font-body font-bold text-white text-base flex items-start gap-2"><span>{pt}</span></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button onClick={() => handleFlip(i)} className="mt-6 inline-flex items-center gap-2 font-heading font-bold uppercase tracking-widest text-sm px-5 py-2.5 rounded-full border-4 transition-all hover:scale-105" style={{ borderColor: s.hex, color: s.hex, backgroundColor: 'rgba(0,0,0,0.4)' }}>← Flip Back</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots (Mobile only) */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-12">
          {services.map((_, i) => (
            <button key={i} onClick={() => setActiveIdx(i)} className={`transition-all duration-300 rounded-full ${activeIdx === i ? 'w-10 h-3 bg-accent-2 shadow-[0_0_15px_#00F5D4]' : 'w-3 h-3 bg-white/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
