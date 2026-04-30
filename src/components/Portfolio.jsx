const projects = [
  {
    tag: 'META ADS',
    label: 'Mumbai Bridal MUA — Freelance Artist',
    result: '+180% LEADS\nin 60 Days',
    desc: 'Targeted bride campaigns in Mumbai. Tripled inquiries.',
    hex: '#FF3AF2',
    bg: 'linear-gradient(135deg, #2D0030, #FF3AF2 200%)',
    verified: true,
    location: 'Mumbai Client',
  },
  {
    tag: 'INSTAGRAM GROWTH',
    label: 'Luxury Salon — Salon Owner',
    result: '10K ORGANIC\nFollowers in 90 Days',
    desc: 'Viral reel strategy. 2x profile visits for luxury salon.',
    hex: '#00F5D4',
    bg: 'linear-gradient(135deg, #002D28, #00F5D4 200%)',
    verified: true,
    location: 'Bangalore Salon',
  },
  {
    tag: 'SEO',
    label: 'Delhi Makeup Studio — Home Studio',
    result: '#1 ON GOOGLE\nin 45 Days',
    desc: 'Page 1 ranking for "bridal makeup" in Delhi.',
    hex: '#FFE600',
    bg: 'linear-gradient(135deg, #2D2600, #FFE600 200%)',
    verified: true,
    location: 'Delhi Studio',
  },
  {
    tag: 'WHATSAPP MARKETING',
    label: 'Salon Chain — Multi-location Business',
    result: '200+ BOOKINGS\nin 30 Days',
    desc: '24/7 Chatbot booking flow for salon chain.',
    hex: '#FF6B35',
    bg: 'linear-gradient(135deg, #2D1500, #FF6B35 200%)',
    verified: true,
    location: 'Nationwide Chain',
  },
  {
    tag: 'WEBSITE',
    label: 'Freelance Artist — MUA Academy',
    result: '40% BOOKING RATE\nin 30 Days',
    desc: 'High-converting portfolio funnel for MUA academy.',
    hex: '#7B2FFF',
    bg: 'linear-gradient(135deg, #12002D, #7B2FFF 200%)',
    verified: true,
    location: 'Pune Client',
  },
  {
    tag: 'FULL GROWTH SYSTEM',
    label: 'Bridal Studio — Premium Studio',
    result: '₹6+ LAKHS\nin 2 Months',
    desc: 'Booked 3 months out.',
    hex: '#FF3AF2',
    bg: 'linear-gradient(135deg, #1A0020, #7B2FFF 40%, #FF3AF2 200%)',
    verified: true,
    isBridge: true,
    location: 'Mumbai Studio',
  },
];

const chats = [
  { name: 'Unnati', time: '10:42 AM', msg: 'This ad is giving genuine leads. Appointments have been made.' },
  { name: 'Nikita', time: '02:15 PM', msg: 'Today 4 party makeup booked. More enquiries coming without negotiation.' },
  { name: 'Shaheen', time: '11:30 AM', msg: 'First booking worth around ₹70,000. You are doing a wonderful job.' },
  { name: 'Kajol', time: '04:20 PM', msg: '₹6,11,248 generated in just 2 months. Thanks for your support...' }
];

export default function Portfolio() {
  const highlightAmount = (text) => {
    const amountRegex = /(₹[\d,]+|[\d]+%|[\d]+K)/g;
    return text.split(amountRegex).map((part, i) => 
      amountRegex.test(part) ? <span key={i} className="font-black text-accent-2">{part}</span> : part
    );
  };

  return (
    <section id="portfolio" className="relative py-32 bg-muted overflow-hidden z-10 border-y-8 border-accent-3">
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none" style={{ backgroundImage: 'conic-gradient(from 90deg at 1px 1px, transparent 90deg, rgba(0,245,212,0.05) 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">

        {/* Header */}
        <div className="text-center mb-12 md:mb-20 px-2">
          <div className="inline-block px-4 sm:px-8 py-2 sm:py-3 border-4 border-accent-1 bg-background rounded-full text-white font-heading font-black uppercase tracking-widest text-xs sm:text-lg md:text-xl md:rotate-2 mb-4 md:mb-6 shadow-[4px_4px_0_#FFE600,8px_8px_0_#FF3AF2] md:shadow-[8px_8px_0_#FFE600,16px_16px_0_#FF3AF2]">
            REAL RESULTS 📊
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase text-white leading-[1.1] md:leading-none text-shadow-2 md:text-shadow-mega break-words">
            CLIENT <span className="text-accent-3 block sm:inline">WINS</span>
          </h2>
          <p className="font-body text-base md:text-xl text-white/60 mt-4 font-medium px-4">
            Real campaigns. Real numbers. Real beauty businesses that scaled.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 px-2 md:px-0 mb-12">
          {projects.map((p, i) => {
            const rotations = ['md:rotate-1', 'md:-rotate-1', 'md:rotate-1', 'md:-rotate-1', 'md:rotate-1', 'md:-rotate-1'];
            const offsets = [
              '-translate-x-0',
              'translate-x-0 md:translate-y-8',
              '-translate-x-0',
              'translate-x-0 md:translate-y-8',
              '-translate-x-0',
              'translate-x-0 md:translate-y-8'
            ];
            return (
              <div
                key={i}
                className={`group relative rounded-[32px] border-4 md:border-8 overflow-hidden cursor-pointer transition-all duration-300 ${rotations[i]} ${offsets[i]} hover:rotate-0 hover:scale-105 hover:z-30 flex flex-col`}
                style={{
                  background: p.bg,
                  borderColor: p.hex,
                  boxShadow: `8px 8px 0 ${p.hex}`,
                  minHeight: '320px',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 40px ${p.hex}, 12px 12px 0 #FFF`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = `8px 8px 0 ${p.hex}`}
              >
                {/* Dot overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(circle, ${p.hex} 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />

                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between">
                  {/* Top: Tag & Verified Badge */}
                  <div className="flex flex-wrap gap-2 justify-between items-start mb-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-heading font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border-2 bg-black/40 text-white w-max" style={{ borderColor: p.hex }}>
                        {p.tag}
                      </span>
                      <span className="text-[10px] font-body font-bold text-white/60 uppercase tracking-tighter">
                        {p.location}
                      </span>
                    </div>
                    {p.verified && (
                      <div className="flex flex-col gap-1 items-end">
                        <span className="flex items-center gap-1 font-body font-bold text-[10px] bg-green-500/20 text-green-400 border border-green-500/50 px-2 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm whitespace-nowrap">
                          ✔ Verified Result
                        </span>
                        <span className="text-[9px] font-body font-bold text-white/40 uppercase">Real Client Data</span>
                      </div>
                    )}
                  </div>

                  {/* Result & Client Label */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-heading font-bold text-sm md:text-base text-white/80 uppercase tracking-widest mb-3 leading-tight">
                      {p.label}
                    </h3>
                    <div className="font-heading font-black text-3xl sm:text-5xl uppercase text-white leading-[1] mb-2 drop-shadow-lg whitespace-pre-line" style={{ textShadow: `2px 2px 0 ${p.hex}` }}>
                      {p.result}
                    </div>
                  </div>

                  {/* Desc & Arrow */}
                  <div className="mt-6 border-t-2 border-white/10 pt-4">
                    <p className="font-body text-white/90 text-sm md:text-base font-medium leading-relaxed mb-4">
                      {p.desc}
                    </p>
                    {/* Removed View Case Study / Scroll for proof labels */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridge Text */}
        <div className="text-center mt-20 mb-12">
          <p className="font-heading font-black text-white/40 uppercase tracking-[0.3em] text-xs md:text-sm md:animate-pulse">
            This is not just data — see real client conversations below
          </p>
        </div>

        {/* WhatsApp Proof Section */}
        <div className="mt-20 md:mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-tight text-shadow-1">
              REAL CLIENT <span className="text-accent-2">PROOF</span>
            </h2>
            <p className="font-body text-base md:text-xl text-white/60 mt-2 font-medium">
              Actual conversations with our clients. No fake numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {chats.map((chat, idx) => (
              <div 
                key={idx} 
                className={`relative bg-background/80 backdrop-blur-md rounded-2xl border-2 border-accent-5/30 shadow-[0_8px_32px_rgba(123,47,255,0.15)] overflow-hidden transition-transform duration-300 hover:-translate-y-2 group`}
              >
                {/* Header */}
                <div className="bg-muted px-4 py-3 flex items-center gap-3 border-b border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-5 to-accent-1 flex items-center justify-center font-bold text-white uppercase text-lg shrink-0">
                    {chat.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-bold text-sm truncate">{chat.name}</h4>
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-2 md:animate-pulse shrink-0"></div>
                    </div>
                    <span className="text-white/50 text-[10px] flex items-center gap-1">
                      Online
                    </span>
                  </div>
                  <div className="ml-auto text-accent-2 text-[10px] font-bold border border-accent-2/30 bg-accent-2/10 px-2 py-1 rounded flex items-center gap-1 shrink-0 whitespace-nowrap">
                    ✔ Verified
                  </div>
                </div>
                
                {/* Message Body */}
                <div className="p-4 bg-muted/30 min-h-[160px] flex flex-col justify-end relative">
                  <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"></div>
                  
                  {/* Subtle Typing indicator mock */}
                  <div className="absolute top-4 left-4 flex gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-1 h-1 bg-white rounded-full md:animate-bounce"></div>
                    <div className="w-1 h-1 bg-white rounded-full md:animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1 h-1 bg-white rounded-full md:animate-bounce [animation-delay:0.4s]"></div>
                  </div>

                  <div className="bg-gradient-to-br from-accent-5 to-accent-1 text-white p-3 rounded-xl rounded-tl-none self-start max-w-[95%] shadow-[4px_4px_0_rgba(0,0,0,0.3)] relative z-10">
                    <p className="text-sm md:text-base leading-relaxed font-medium">
                      {highlightAmount(chat.msg)}
                    </p>
                    <span className="text-[10px] text-white/70 absolute bottom-1 right-2">{chat.time}</span>
                    <div className="pb-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Strong CTA */}
          <div className="mt-16 md:mt-24 text-center border-4 border-dashed border-accent-2/30 bg-accent-2/5 rounded-[40px] p-8 md:p-12">
            <p className="font-heading font-bold text-accent-1 uppercase tracking-widest mb-2 text-sm md:text-base">
              Trusted by 200+ makeup artists & salons
            </p>
            <h3 className="font-heading font-black text-3xl md:text-5xl uppercase text-white mb-8">
              Want bookings like this?
            </h3>
            <a
              href="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20grow%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[64px] md:min-h-[80px] py-4 px-8 md:px-12 rounded-full bg-[#25D366] border-4 border-[#128C7E] font-heading font-black text-lg md:text-2xl uppercase tracking-widest text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform"
            >
              <span className="mr-3 text-2xl md:text-3xl md:animate-wiggle">💬</span>
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
