import { useEffect, useRef } from 'react';

const pains = [
  { text: 'Posting consistently but getting ZERO bookings 🤡', rotate: '-rotate-2' },
  { text: 'Thousands of followers, but no paying clients 💸', rotate: 'rotate-1' },
  { text: 'Content looks great — but it\'s not converting 📉', rotate: '-rotate-1' },
];

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="relative py-32 bg-background overflow-hidden z-10">
      {/* Pattern Layer */}
      <div className="absolute inset-0 pattern-dots opacity-20 z-0"></div>
      
      {/* Giant Background Emoji */}
      <div className="absolute top-10 left-[-5%] text-[10rem] md:text-[20rem] opacity-10 md:animate-spin-slow pointer-events-none select-none z-0">🌀</div>
      <div className="absolute bottom-10 right-[-5%] text-[8rem] md:text-[15rem] opacity-10 animate-float pointer-events-none select-none z-0">💀</div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Pain points (The Chaos) */}
          <div className="space-y-8 relative">
            <div className="absolute -inset-4 bg-accent-5/20 blur-3xl rounded-full z-0"></div>
            
            <div className="relative z-10 inline-block mb-4 px-6 py-2 bg-accent-1 border-4 border-accent-3 rotate-2">
              <span className="font-heading font-black text-xl text-white uppercase tracking-widest text-shadow-1">
                SOUND FAMILIAR?
              </span>
            </div>

            <div className="space-y-6">
              {pains.map((p, i) => (
                <div key={i} className={`
                  group relative p-6 bg-muted/80 backdrop-blur-md border-4 border-dashed border-accent-2 rounded-2xl
                  ${p.rotate} hover:rotate-0 hover:scale-105 hover:border-solid hover:bg-accent-5
                  transition-all duration-300 ease-out shadow-[8px_8px_0_#FF3AF2] hover:shadow-[12px_12px_0_#00F5D4,16px_16px_0_#FFE600]
                `}>
                  <p className="font-body font-bold text-lg md:text-xl text-white">
                    {p.text}
                  </p>
                  {/* Decorative corner tag */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent-3 rounded-full flex items-center justify-center font-heading font-black text-background text-sm border-2 border-background md:animate-pulse">
                    !
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Solution (The Fix) */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-2 border-4 border-accent-1 rounded-full text-accent-1 font-heading font-black tracking-widest text-xs md:text-sm uppercase bg-accent-1/10 backdrop-blur-sm -rotate-1">
              THE JUNTOZ WAY ⚡
            </div>
            
            <div className="space-y-2">
              <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl uppercase text-white leading-tight tracking-tighter text-shadow-2">
                We Turn Attention
              </h2>
              <div className="inline-block bg-accent-2 px-3 md:px-4 py-1 md:py-2 transform rotate-1">
                <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-7xl uppercase text-background leading-tight tracking-tighter mix-blend-multiply">
                  Into Appointments.
                </h2>
              </div>
            </div>

            <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed font-medium">
              We don't just manage your socials. We build a complete growth system — from content strategy and performance ads to branding and websites — designed to turn your audience into a steady flow of paying clients.
            </p>

            <div className="p-4 md:p-6 border-4 border-accent-3 bg-accent-4/10 rounded-2xl md:rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent-4 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <p className="relative z-10 font-heading font-bold text-lg md:text-2xl uppercase tracking-wider text-white">
                We don't sell promises. <br/>
                <span className="text-accent-3 group-hover:text-background transition-colors block mt-2 md:inline md:mt-0">We build consistent growth systems.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
