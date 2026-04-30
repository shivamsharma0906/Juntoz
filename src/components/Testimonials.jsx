import { useState, useRef } from 'react';

const testimonials = [
  {
    quote: 'Their attention to detail and commitment to quality truly set them apart. My bookings tripled within 2 months of working with them.',
    name: 'Priya S.',
    role: 'Bridal Makeup Artist',
    color: 'accent-1',
    hex: '#FF3AF2'
  },
  {
    quote: 'Excellent service. They built my entire brand from scratch — logo, Instagram, website — and now clients come to me instead of me chasing them.',
    name: 'Ananya K.',
    role: 'Freelance MUA',
    color: 'accent-3',
    hex: '#FFE600'
  },
  {
    quote: 'Best for social media and website design. The content strategy they created is exactly what my audience connects with. Highly recommend!',
    name: 'Mehak R.',
    role: 'Salon Owner',
    color: 'accent-2',
    hex: '#00F5D4'
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStart = useRef(0);

  const handleTouchStart = (clientX) => {
    touchStart.current = clientX;
  };

  const handleTouchEnd = (clientX) => {
    const diff = touchStart.current - clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIdx < testimonials.length - 1) {
        setActiveIdx(prev => prev + 1);
      } else if (diff < 0 && activeIdx > 0) {
        setActiveIdx(prev => prev - 1);
      }
    }
  };

  return (
    <section id="testimonials" className="relative py-32 bg-background overflow-hidden z-10">
      <div className="absolute inset-0 pattern-stripes opacity-10 z-0"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 text-8xl animate-wiggle opacity-20 pointer-events-none">⭐</div>
      <div className="absolute bottom-20 left-10 text-9xl animate-float-reverse opacity-20 pointer-events-none">💖</div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl uppercase text-white leading-none text-shadow-3 -rotate-1">
            CLIENT <span className="text-accent-1 block sm:inline">LOVE</span>
          </h2>
        </div>

        {/* Desktop Grid / Mobile Slider */}
        <div className="relative overflow-hidden md:overflow-visible">
          <div 
            className="flex md:grid md:grid-cols-3 gap-8 md:gap-12 transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing md:cursor-default select-none md:!transform-none"
            style={{ 
              transform: `translateX(calc(-${activeIdx * 100}% - ${activeIdx * 32}px))` 
            }}
            onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
            onMouseDown={(e) => handleTouchStart(e.clientX)}
            onMouseUp={(e) => handleTouchEnd(e.clientX)}
          >
            {testimonials.map((t, i) => {
              const rotation = i % 2 === 0 ? 'md:rotate-2' : 'md:-rotate-2';
              const isActive = activeIdx === i;
              
              return (
                <div
                  key={i}
                  className={`relative min-w-full md:min-w-0 bg-muted p-8 md:p-10 rounded-[40px] border-8 transition-all duration-300 ${rotation} ${isActive ? 'opacity-100 scale-100 shadow-mega' : 'opacity-40 scale-95 md:opacity-100 md:scale-100'}`}
                  style={{ 
                    borderColor: t.hex,
                    boxShadow: isActive ? `12px 12px 0 ${t.hex}` : `6px 6px 0 ${t.hex}80`,
                  }}
                >
                  {/* Giant Quote Mark */}
                  <div className="absolute -top-10 -left-2 flex items-end gap-2 pointer-events-none">
                    <div className="font-display text-[8rem] leading-none" style={{ color: t.hex, textShadow: '4px 4px 0 #FFF' }}>"</div>
                  </div>

                  {/* Numbering Badge - Top Right */}
                  <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full flex items-center justify-center font-heading font-black text-2xl border-4 border-background z-20" style={{ backgroundColor: t.hex, color: '#0D0D1A' }}>
                    0{i + 1}
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-8 bg-background inline-flex p-2 border-2 rounded-xl relative z-10" style={{ borderColor: t.hex }}>
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-6 h-6" style={{ color: t.hex }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="font-body text-xl md:text-2xl text-white font-bold leading-relaxed mb-8 relative z-10">{t.quote}</p>
                  <div className="w-full border-t-4 border-dashed mb-6" style={{ borderColor: t.hex }}></div>

                  {/* Author Info */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-heading font-black text-2xl text-white uppercase">{t.name}</p>
                      <p className="font-heading font-bold text-sm tracking-widest uppercase" style={{ color: t.hex }}>{t.role}</p>
                    </div>
                    <div className="bg-accent-5 text-white font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full border-2 border-white rotate-6">VERIFIED ✓</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots (Mobile only) */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActiveIdx(i)} className={`transition-all duration-300 rounded-full ${activeIdx === i ? 'w-10 h-3 bg-accent-1 shadow-[0_0_15px_#FF3AF2]' : 'w-3 h-3 bg-white/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
