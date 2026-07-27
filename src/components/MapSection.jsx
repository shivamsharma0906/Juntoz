import { useEffect, useState } from 'react';

export default function MapSection({
  address = "Office No. 5, 1st Floor, Dev Shristi Tower, 60 Feet Rd, Bhayandar West, Mira Bhayandar, Maharashtra 401101"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);

  // Dynamic Opening Status Checker (IST time)
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      // Convert current system time to Indian Standard Time (IST) (UTC + 5:30)
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));

      const day = istTime.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const timeVal = hours * 100 + minutes;

      setCurrentDay(day);

      // Business hours: Monday to Saturday (1 to 6), 10:00 AM (1000) to 7:00 PM (1900)
      if (day >= 1 && day <= 6 && timeVal >= 1000 && timeVal <= 1900) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  // Operating schedule
  const schedule = [
    { name: 'Monday', time: '10:00 AM – 07:00 PM', idx: 1 },
    { name: 'Tuesday', time: '10:00 AM – 07:00 PM', idx: 2 },
    { name: 'Wednesday', time: '10:00 AM – 07:00 PM', idx: 3 },
    { name: 'Thursday', time: '10:00 AM – 07:00 PM', idx: 4 },
    { name: 'Friday', time: '10:00 AM – 07:00 PM', idx: 5 },
    { name: 'Saturday', time: '10:00 AM – 07:00 PM', idx: 6 },
    { name: 'Sunday', time: 'Closed', idx: 0 },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#050508]/20">
      {styleTag}

      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(ellipse, rgba(0,245,212,0.06) 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: '500px', height: '500px', background: 'radial-gradient(ellipse, rgba(255,58,242,0.05) 0%, transparent 70%)', filter: 'blur(70px)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00F5D4] opacity-60" />
            <p className="font-body text-[#00F5D4] text-xs font-bold uppercase tracking-[0.25em]">Find Our HQ</p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#00F5D4] opacity-60" />
          </div>
          <h2 className="font-heading font-black uppercase text-white leading-none tracking-tighter text-4xl sm:text-6xl mb-4">
            Visit Our <span style={{ background: 'linear-gradient(120deg, #00F5D4, #7B2FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Workspace</span>
          </h2>
          <p className="font-body text-white/55 text-sm sm:text-base max-w-lg leading-relaxed">
            Let's discuss how we can grow your beauty brand. Drop in during business hours or locate us online.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: Premium Dashboard Business Details */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#07070a]/60 backdrop-blur-md shadow-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-white/15 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00F5D4]/10 to-[#7B2FFF]/10 rounded-full filter blur-2xl pointer-events-none opacity-50" />

            <div>
              {/* Header Status & Icon */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-white text-lg uppercase tracking-wider">Office Hours</h3>
                    <p className="font-body text-white/40 text-xs">Dynamic status based on IST</p>
                  </div>
                </div>

                {/* dynamic status badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold tracking-wider ${isOpen
                  ? 'bg-[#00F5D4]/10 border-[#00F5D4]/35 text-[#00F5D4]'
                  : 'bg-[#FF3AF2]/10 border-[#FF3AF2]/35 text-[#FF3AF2]'
                  }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-[#00F5D4] map-pulse-green' : 'bg-[#FF3AF2] map-pulse-red'}`}></span>
                  {isOpen ? 'OPEN NOW' : 'CLOSED'}
                </div>
              </div>

              {/* Weekly Schedule */}
              <div className="space-y-3 mb-8">
                {schedule.map((day) => {
                  const isToday = currentDay === day.idx;
                  return (
                    <div
                      key={day.name}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg transition-all duration-300 ${isToday
                        ? 'bg-gradient-to-r from-[#00F5D4]/10 to-transparent border-l-2 border-[#00F5D4]'
                        : 'hover:bg-white/5'
                        }`}
                    >
                      <span className={`font-body text-sm font-medium ${isToday ? 'text-white' : 'text-white/60'}`}>
                        {day.name} {isToday && <span className="text-[10px] text-[#00F5D4] ml-1 uppercase font-bold tracking-wider">• Today</span>}
                      </span>
                      <span className={`font-body text-xs font-semibold ${isToday ? 'text-[#00F5D4]' : 'text-white/40'}`}>
                        {day.time}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Address Details */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#7B2FFF]/10 border border-[#7B2FFF]/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#7B2FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-black text-white/80 text-sm uppercase tracking-wide mb-1">Corporate Address</h4>
                  <p className="font-body text-white/50 text-xs sm:text-sm leading-relaxed">{address}</p>
                </div>
              </div>
            </div>

            {/* Direct Action Link */}
            <a
              href="https://maps.google.com/?q=Juntoz+Digital+Marketing+Agency+Bhayandar+West+Bhakti+Plaza"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn flex items-center justify-center gap-2 w-full py-4 rounded-xl font-heading font-black uppercase text-xs tracking-widest text-[#050508] bg-[#00F5D4] hover:bg-[#00e1c2] shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-all duration-300 overflow-hidden"
            >
              <span>GET DIRECTIONS ON MAPS</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* RIGHT: Google Maps Embed iframe */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#07070a]/60 backdrop-blur-md shadow-2xl p-2 sm:p-3 relative overflow-hidden group hover:border-white/15 transition-all duration-300">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00F5D4]/10 via-[#7B2FFF]/10 to-[#FF3AF2]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative rounded-[1.4rem] overflow-hidden h-[350px] sm:h-full min-h-[400px] w-full bg-[#050508] border border-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.5559639310036!2d72.8496079759016!3d19.301666781949923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b10eda3a9a65%3A0x3c3c948829e3150e!2sJuntoz%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1785145098582!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Juntoz Digital Marketing Agency"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Internal CSS animation helpers
const styleTag = (
  <style>{`
    @keyframes map-pulse-green {
      0%, 100% { box-shadow: 0 0 0 0 rgba(0, 245, 212, 0.4); }
      50% { box-shadow: 0 0 0 8px rgba(0, 245, 212, 0); }
    }
    @keyframes map-pulse-red {
      0%, 100% { box-shadow: 0 0 0 0 rgba(255, 58, 242, 0.4); }
      50% { box-shadow: 0 0 0 8px rgba(255, 58, 242, 0); }
    }
    .map-pulse-green {
      animation: map-pulse-green 2s infinite;
    }
    .map-pulse-red {
      animation: map-pulse-red 2s infinite;
    }
    @keyframes status-blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.35; }
    }
  `}</style>
);
