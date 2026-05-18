import { useState, useRef, useEffect, useCallback } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const testimonials = [
  {
    quote: 'My bridal bookings tripled within 2 months. I went from 3–4 enquiries a month to 30+. The system genuinely works.',
    name: 'Priya S.', role: 'Bridal Makeup Artist', city: 'Mumbai',
    metric: '3× bookings in 60 days', color: '#FF3AF2',
    rating: 5,
  },
  {
    quote: 'They built my Instagram strategy and lead funnel from scratch. Now clients reach out to me — I stopped chasing them.',
    name: 'Ananya K.', role: 'Freelance MUA', city: 'Delhi',
    metric: '0 → consistent leads/month', color: '#00F5D4',
    rating: 5,
  },
  {
    quote: 'Content strategy improved and my salon appeared in local Google results within weeks. Real visibility, real bookings.',
    name: 'Mehak R.', role: 'Salon Owner', city: 'Pune',
    metric: 'Top local search results', color: '#7B2FFF',
    rating: 5,
  },
  {
    quote: 'The quality of enquiries improved dramatically — brides with real budgets, not price-shoppers. Worth every rupee.',
    name: 'Kajol P.', role: 'Bridal Studio Owner', city: 'Mumbai',
    metric: 'Higher-quality leads', color: '#FF3AF2',
    rating: 5,
  },
  {
    quote: 'First booking from their ads came within 3 weeks of launch. The targeting was spot-on for my ideal client.',
    name: 'Shaheen M.', role: 'Premium MUA', city: 'Bangalore',
    metric: 'First booking in 3 weeks', color: '#00F5D4',
    rating: 5,
  },
];

const StarRow = ({ color }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, j) => (
      <svg key={j} className="w-3.5 h-3.5 drop-shadow-md" fill={color} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ─── Infinite Marquee Card ─────────────────────────────────── */
function MarqueeCard({ t }) {
  return (
    <div
      className="relative flex flex-col gap-4 p-5 sm:p-6 shrink-0 w-[300px] sm:w-[350px] rounded-2xl group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
      style={{
        background: `linear-gradient(135deg, ${t.color}08 0%, rgba(255,255,255,0.02) 100%)`,
        border: `1px solid ${t.color}35`,
        boxShadow: `0 4px 30px ${t.color}10, inset 0 1px 0 ${t.color}12`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Metric badge */}
      <div
        className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full font-body font-bold text-[10px] uppercase tracking-wide relative z-10 transition-colors duration-300"
        style={{ background: `${t.color}12`, border: `1px solid ${t.color}35`, color: t.color }}
      >
        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: t.color }} />
        {t.metric}
      </div>

      {/* Stars */}
      <div className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"><StarRow color={t.color} /></div>

      {/* Quote */}
      <p className="font-body text-white/75 text-sm leading-relaxed flex-1 relative z-10 group-hover:text-white transition-colors duration-300">
        "{t.quote}"
      </p>

      {/* Divider */}
      <div className="h-px w-full relative z-10 transition-colors duration-300" style={{ background: `${t.color}20` }} />

      {/* Author */}
      <div className="flex items-center justify-between gap-3 relative z-10">
        <div>
          <p className="font-heading font-black text-white text-sm uppercase tracking-tight">{t.name}</p>
          <p className="font-body text-xs mt-0.5 opacity-80" style={{ color: t.color }}>{t.role} · {t.city}</p>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
          style={{ background: `${t.color}12`, border: `1px solid ${t.color}30` }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: t.color }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Infinite Marquee Track ─────────────────────────────────── */
function InfiniteMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const items = [...testimonials, ...testimonials, ...testimonials]; // Triple for seamless loop

  return (
    <div 
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className="flex gap-6 w-max"
        style={{
          animation: 'marquee-scroll 50s linear infinite',
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        {items.map((t, i) => (
          <MarqueeCard key={i} t={t} />
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33% - 8px)); } /* -33.33% of triple width + gap offset */
        }
      `}</style>
    </div>
  );
}

/* ─── Featured Quote (Verve Media inspired) ──────────────────── */
function FeaturedQuote() {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-[60px] opacity-30 pointer-events-none" style={{ background: '#00F5D4' }} />
      
      <svg className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-6 text-accent-2/40 opacity-50" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.714 4.14-8.814 8.783-11.415l-1.42 2.62c-2.43 1.13-4.66 3.65-4.66 5.629h3.766v10.557h-6.469zm-13.017 0v-7.391c0-5.714 4.14-8.814 8.783-11.415l-1.42 2.62c-2.43 1.13-4.66 3.65-4.66 5.629h3.766v10.557h-6.469z"/>
      </svg>
      
      <h3 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-white leading-[1.1] mb-8">
        "Our salon was struggling to find high-paying clients. Juntoz didn't just run ads; they built a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF]">client acquisition machine</span>."
      </h3>
      
      <div className="inline-flex items-center gap-4 text-left">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00F5D4] to-[#7B2FFF] p-[2px]">
           <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-heading font-black text-white">SK</div>
        </div>
        <div>
          <p className="font-heading font-black text-white text-sm uppercase tracking-wider">Sneha Kapoor</p>
          <p className="font-body text-white/50 text-xs">Founder, Radiance Studio</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main export ─────────────────────────────────────────── */
export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-10 bg-background overflow-hidden" aria-label="Client testimonials">
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none z-0 opacity-40"
        style={{ background: 'rgba(0,245,212,0.1)' }} />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0 opacity-40"
        style={{ background: 'rgba(123,47,255,0.1)' }} />

      <div className="relative z-10">
        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-6 px-5 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">Rated 5.0 on Google</span>
          </div>
          
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter mb-4">
            Real Clients.<br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#7B2FFF] to-[#FF3AF2]"> Real Results.</span>
          </h2>
          <p className="font-body text-white/50 text-sm sm:text-base max-w-lg mx-auto mb-8">
            See how beauty professionals across India are transforming their businesses with predictable, high-quality bookings.
          </p>
        </ScrollReveal>

        {/* Featured Pull Quote */}
        <ScrollReveal data-reveal="fade" delay={100}>
          <FeaturedQuote />
        </ScrollReveal>

        {/* Infinite Scrolling Marquee */}
        <ScrollReveal data-reveal="up" delay={200}>
          <InfiniteMarquee />
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal data-reveal="up" delay={300} className="mt-16 text-center px-5 relative z-20">
          <a
            href="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20to%20know%20how%20you%20can%20grow%20my%20business."
            target="_blank" rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-5 rounded-full font-heading font-black text-sm uppercase tracking-widest text-background overflow-hidden shadow-[0_0_40px_rgba(0,245,212,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(0,245,212,0.5)]"
            style={{ background: '#00F5D4' }}
          >
             <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
             <span className="relative z-10">Start Your Success Story</span>
             <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
          </a>
          <p className="font-body text-white/30 text-xs tracking-widest mt-4 uppercase">Join 200+ Thriving Beauty Brands</p>
        </ScrollReveal>
      </div>
    </section>
  );
}