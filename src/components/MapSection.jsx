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
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-white border-t border-[#DEDED7]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-[#F7F6F2] shadow-subtle mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
            <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">Find Our Office</span>
          </div>
          <h2 className="font-heading font-black uppercase text-[#111111] leading-tight tracking-tight text-3xl sm:text-5xl md:text-6xl mb-4">
            Visit Our <span className="text-[#5D2E85]">Workspace</span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-sm sm:text-base max-w-lg leading-relaxed">
            Let's discuss how we can grow your beauty brand. Drop in during business hours or locate us online.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: Premium Dashboard Business Details */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#DEDED7] bg-[#F7F6F2] shadow-card p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
            <div>
              {/* Header Status & Icon */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#DEDED7]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#DEDED7] flex items-center justify-center shadow-subtle">
                    <svg className="w-5 h-5 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-[#111111] text-lg uppercase tracking-tight">Office Hours</h3>
                    <p className="font-body text-[#5F5F5A] text-xs font-medium">Dynamic status based on IST</p>
                  </div>
                </div>

                {/* dynamic status badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold tracking-wider ${isOpen
                  ? 'bg-[#287A55]/10 border-[#287A55]/30 text-[#287A55]'
                  : 'bg-red-50 border-red-200 text-red-600'
                  }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-[#287A55] animate-pulse' : 'bg-red-500'}`}></span>
                  {isOpen ? 'OPEN NOW' : 'CLOSED'}
                </div>
              </div>

              {/* Weekly Schedule */}
              <div className="space-y-2 mb-8">
                {schedule.map((day) => {
                  const isToday = currentDay === day.idx;
                  return (
                    <div
                      key={day.name}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg transition-all duration-200 ${isToday
                        ? 'bg-white border-l-2 border-[#5D2E85] shadow-subtle'
                        : 'hover:bg-white/60'
                        }`}
                    >
                      <span className={`font-body text-sm ${isToday ? 'font-bold text-[#111111]' : 'font-medium text-[#5F5F5A]'}`}>
                        {day.name} {isToday && <span className="text-[10px] text-[#5D2E85] ml-1 uppercase font-bold tracking-wider">• Today</span>}
                      </span>
                      <span className={`font-body text-xs font-semibold ${isToday ? 'text-[#5D2E85]' : 'text-[#5F5F5A]'}`}>
                        {day.time}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Address Details */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-[#DEDED7] shadow-subtle mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#F1E7F9] border border-[#5D2E85]/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#5D2E85]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-black text-[#111111] text-sm uppercase tracking-wide mb-1">Corporate Address</h4>
                  <p className="font-body text-[#5F5F5A] text-xs sm:text-sm leading-relaxed">{address}</p>
                </div>
              </div>
            </div>

            {/* Direct Action Link */}
            <a
              href="https://maps.google.com/?q=Juntoz+Digital+Marketing+Agency+Bhayandar+West+Bhakti+Plaza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-heading font-bold uppercase text-xs tracking-wider text-white bg-[#111111] hover:bg-[#5D2E85] shadow-sm transition-colors duration-200"
            >
              <span>GET DIRECTIONS ON MAPS</span>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* RIGHT: Google Maps Embed iframe */}
          <div className="lg:col-span-7 rounded-3xl border border-[#DEDED7] bg-white shadow-card p-2 sm:p-3 relative overflow-hidden transition-all duration-300">
            <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-full min-h-[400px] w-full bg-[#F7F6F2]">
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
