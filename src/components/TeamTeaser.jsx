import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import founderImg from './Founder.webp';
import coFounderImg from './CoFounder.webp';

export default function TeamTeaser() {
  const leaders = [
    {
      name: 'Sujal Mehta',
      role: 'Founder & CEO',
      badge: 'Growth Strategist',
      description: 'EXTC Engineer (SPIT) with 9+ years corporate leadership experience at TCS & Nokia. Built Juntoz to scale brands with predictable growth.',
      image: founderImg,
      link: '/founder',
      accentColor: '#00F5D4',
    },
    {
      name: 'Saloni Mehta',
      role: 'Co-Founder',
      badge: 'Head of Operations & Client Success',
      description: 'B.Com with 7+ years business operations experience. Drives client success, operational systems, and business execution.',
      image: coFounderImg,
      link: '/co-founder',
      accentColor: '#7B2FFF',
    },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <ScrollReveal data-reveal="up" className="text-center mb-12 sm:mb-16">
          <span
            className="inline-flex items-center gap-2 font-body text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full border mb-4"
            style={{ color: '#00F5D4', borderColor: 'rgba(0,245,212,0.2)', background: 'rgba(0,245,212,0.05)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
            Leadership &amp; Vision
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF]">Team</span>
          </h2>
          <p className="font-body text-white/50 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Combining strategic growth marketing with operational excellence to scale modern brands.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, i) => (
            <ScrollReveal key={leader.name} data-reveal="up" delay={i * 120}>
              <div className="h-full bg-[#0E0E1C]/45 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#00F5D4]/40 hover:shadow-[0_0_35px_rgba(0,245,212,0.12)] hover:-translate-y-1 group relative overflow-hidden">
                {/* Background glow on hover */}
                <div
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: leader.accentColor }}
                />

                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Photo / Avatar */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-[#05050C] shadow-lg group-hover:scale-105 transition-transform duration-300">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#14142B] to-[#080814]">
                        <span className="font-heading font-black text-2xl text-[#00F5D4]">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </span>
                        <span className="font-body text-[9px] uppercase tracking-wider text-white/40 mt-1">
                          No Photo
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-[#00F5D4]/30 transition-colors"
                    />
                  </div>

                  {/* Info */}
                  <div className="text-center sm:text-left space-y-2">
                    <span
                      className="inline-block text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                      style={{
                        color: leader.accentColor,
                        borderColor: `${leader.accentColor}30`,
                        background: `${leader.accentColor}10`,
                      }}
                    >
                      {leader.badge}
                    </span>
                    <h3 className="font-heading font-black text-2xl text-white uppercase tracking-wide">
                      {leader.name}
                    </h3>
                    <p className="font-body text-xs font-semibold text-white/60">
                      {leader.role}
                    </p>
                    <p className="font-body text-xs text-white/50 leading-relaxed pt-1">
                      {leader.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex justify-between items-center">
                  <span className="font-body text-xs text-white/40 font-medium">
                    Juntoz Leadership
                  </span>
                  <Link
                    to={leader.link}
                    className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-[#00F5D4] group-hover:text-white transition-colors"
                  >
                    View Profile
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
