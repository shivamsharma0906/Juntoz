import { useRef } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const projects = [
  {
    tag: 'META ADS',
    label: 'Mumbai Bridal MUA',
    result: '+180% LEADS\nIN 60 DAYS',
    desc: 'Targeted bride campaigns in Mumbai. Tripled high-ticket inquiries.',
    hex: '#FF3AF2',
    location: 'Mumbai',
  },
  {
    tag: 'INSTAGRAM GROWTH',
    label: 'Luxury Salon',
    result: '10K ORGANIC\nFOLLOWERS',
    desc: 'Viral reel strategy resulting in 2x profile visits and walk-ins.',
    hex: '#00F5D4',
    location: 'Bangalore',
  },
  {
    tag: 'SEO',
    label: 'Makeup Studio',
    result: '#1 ON GOOGLE\nIN 45 DAYS',
    desc: 'Page 1 organic ranking for "bridal makeup" locally.',
    hex: '#FFE600',
    location: 'Delhi',
  },
  {
    tag: 'WHATSAPP MARKETING',
    label: 'Salon Chain',
    result: '200+ BOOKINGS\nIN 30 DAYS',
    desc: '24/7 Automated Chatbot booking flow for a nationwide salon chain.',
    hex: '#FF6B35',
    location: 'Nationwide',
  },
  {
    tag: 'WEBSITE FUNNEL',
    label: 'MUA Academy',
    result: '40% BOOKING\nRATE',
    desc: 'High-converting portfolio funnel for an elite makeup academy.',
    hex: '#7B2FFF',
    location: 'Pune',
  },
  {
    tag: 'FULL GROWTH SYSTEM',
    label: 'Premium Bridal Studio',
    result: '₹6+ LAKHS\nIN 2 MONTHS',
    desc: 'Completely booked out 3 months in advance via omnichannel ads.',
    hex: '#FF3AF2',
    location: 'Mumbai',
  },
];

const chats = [
  { name: 'Unnati', time: '10:42 AM', msg: 'This ad is giving genuine leads. Appointments have been made.' },
  { name: 'Nikita', time: '02:15 PM', msg: 'Today 4 party makeup booked. More enquiries coming without negotiation.' },
  { name: 'Shaheen', time: '11:30 AM', msg: 'First booking worth around ₹70,000. You are doing a wonderful job.' },
  { name: 'Kajol', time: '04:20 PM', msg: '₹6,11,248 generated in just 2 months. Thanks for your support...' }
];

export default function Portfolio() {
  const sectionRef = useRef(null);

  const highlightAmount = (text) => {
    const amountRegex = /(₹[\d,]+|[\d]+%|[\d]+K)/g;
    return text.split(amountRegex).map((part, i) =>
      amountRegex.test(part) ? <span key={i} className="font-black text-accent-2 drop-shadow-[0_0_8px_rgba(0,245,212,0.4)]">{part}</span> : part
    );
  };

  return (
    <section ref={sectionRef} id="portfolio" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-2/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto max-w-7xl px-6 relative z-20">

        {/* ── Header ── */}
        <ScrollReveal data-reveal="up" className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-ping" />
            <p className="font-body text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">
              The Portfolio
            </p>
          </div>
          <h2 className="font-heading font-black text-white text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.95] tracking-tighter">
            Our Best{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#FF3AF2]">
              Work
            </span>
          </h2>
          <p className="font-body text-white/50 text-base sm:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
            We build systems that actually generate revenue. Here's a snapshot of the impact we've made for beauty businesses.
          </p>
        </ScrollReveal>

        {/* ── CSS Grid for Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {projects.map((p, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 100}>
              <div
                className="group relative bg-[#05050C] rounded-[2rem] overflow-hidden p-[1px] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                style={{ boxShadow: `0 10px 40px rgba(0,0,0,0.5)` }}
              >
                {/* Border Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_4s_ease-in-out_infinite]"
                  style={{ background: `linear-gradient(135deg, ${p.hex}60, transparent, ${p.hex}60)` }} />

                <div className="relative h-full bg-[#080810]/95 backdrop-blur-2xl rounded-[31px] p-8 flex flex-col z-10 overflow-hidden">
                  
                  {/* Internal ambient glow */}
                  <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: p.hex }} />

                  {/* Top Labels */}
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <span
                      className="font-body font-bold text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                      style={{ background: `${p.hex}15`, border: `1px solid ${p.hex}40`, color: p.hex }}
                    >
                      {p.tag}
                    </span>
                    <span className="font-body text-[10px] font-bold uppercase tracking-widest text-white/30 pt-1 text-right pl-2">{p.location}</span>
                  </div>

                  {/* Main Metric */}
                  <div className="flex-1 flex flex-col justify-center mb-8 relative z-10">
                    <p className="font-body text-white/40 text-xs uppercase tracking-widest mb-2 font-bold">{p.label}</p>
                    <div
                      className="font-heading font-black uppercase leading-[1.05] tracking-tight whitespace-pre-line group-hover:scale-[1.03] transition-transform duration-500 origin-left"
                      style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: p.hex, textShadow: `0 0 30px ${p.hex}40` }}
                    >
                      {p.result}
                    </div>
                  </div>

                  {/* Description & Verified Tag */}
                  <div className="pt-6 relative z-10" style={{ borderTop: `1px solid ${p.hex}20` }}>
                    <p className="font-body text-white/60 text-sm leading-relaxed">{p.desc}</p>
                    <div className="inline-flex items-center gap-2 mt-5 px-3 py-1.5 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/20 shadow-inner">
                      <svg className="w-3.5 h-3.5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-body text-[10px] font-bold uppercase tracking-widest text-[#00F5D4]">
                        Verified Scale
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── WhatsApp Proof Section ── */}
        <ScrollReveal data-reveal="up" className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white leading-tight mb-4">
              Don't Just Trust The Numbers.<br/>
              <span className="text-accent-2 drop-shadow-[0_0_30px_rgba(0,245,212,0.4)]">Read The Chats.</span>
            </h2>
            <p className="font-body text-base md:text-lg text-white/50">
              Actual WhatsApp conversations with our clients. Zero fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chats.map((chat, idx) => (
              <ScrollReveal key={idx} data-reveal="up" delay={idx * 100}>
                <div className="bg-[#0A0A0F]/80 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:border-accent-2/40 flex flex-col h-full">
                  
                  {/* Header */}
                  <div className="bg-white/5 px-5 py-4 flex items-center gap-4 border-b border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F5D4] to-[#7B2FFF] flex items-center justify-center font-heading font-black text-white text-lg shrink-0 shadow-lg">
                      {chat.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-bold text-sm tracking-wide">{chat.name}</h4>
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
                      </div>
                      <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Online</span>
                    </div>
                  </div>

                  {/* Message Body */}
                  <div className="p-6 bg-black/40 flex-1 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity" />
                    
                    <div className="bg-gradient-to-br from-[#1E1E28] to-[#12121A] border border-white/5 text-white/90 p-5 rounded-2xl rounded-tl-sm self-start shadow-xl relative z-10 group-hover:border-accent-2/30 transition-colors duration-500">
                      <p className="font-body text-sm leading-relaxed">
                        {highlightAmount(chat.msg)}
                      </p>
                      <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase block mt-3 text-right">
                        {chat.time}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Action Call */}
        <ScrollReveal data-reveal="fade" delay={400} className="mt-20 text-center">
          <div className="relative group inline-block">
             <div className="absolute -inset-2 bg-gradient-to-r from-[#FF3AF2] to-[#7B2FFF] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse" />
             <a
              href="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20grow%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-heading font-black text-sm md:text-base uppercase tracking-widest text-white bg-[#05050C] border border-white/10 transition-transform duration-300 hover:scale-[1.02]"
             >
               💬 Start Your Success Story 
             </a>
          </div>
        </ScrollReveal>

      </div>
      
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
