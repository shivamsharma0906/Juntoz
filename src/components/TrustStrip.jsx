const items = [
  'BOOKINGS💄',
  'CLIENTS📅',
  'LEADS💰',
  'REELS🎥',
  'WHATSAPP💬',
  'GROWTH💎'
];

export default function TrustStrip() {
  const list = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-accent-3 border-y-4 border-accent-1 py-6 z-20 group">

      <div className="flex overflow-hidden mask-fade">
        <div className="flex shrink-0 w-max animate-marquee-scroll group-hover:[animation-play-state:paused] gap-10 pr-10">
          {list.map((text, i) => (
            <div key={i} className="flex items-center gap-10 shrink-0">
              <span className="font-heading font-black text-lg md:text-xl text-background tracking-tight uppercase whitespace-nowrap transition-all duration-300 hover:text-white group-hover:scale-105 cursor-default">
                {text}
              </span>
              <div className="w-2 h-2 bg-accent-1 rounded-full animate-pulse shrink-0"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .animate-marquee-scroll {
          animation: marquee-scroll 35s linear infinite;
        }

        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}