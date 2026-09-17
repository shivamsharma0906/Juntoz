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
      accentColor: '#5D2E85',
    },
    {
      name: 'Saloni Mehta',
      role: 'Co-Founder',
      badge: 'Head of Operations & Client Success',
      description: 'B.Com with 7+ years business operations experience. Drives client success, operational systems, and business execution.',
      image: coFounderImg,
      link: '/co-founder',
      accentColor: '#111111',
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-[#F7F6F2] relative overflow-hidden border-b border-[#DEDED7]/70">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <ScrollReveal data-reveal="up" className="text-center mb-8 sm:mb-14">
         
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#111111] uppercase tracking-tight">
            Meet the <span className="text-[#5D2E85]">Leadership</span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Combining strategic growth marketing with operational excellence to scale ambitious modern brands.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-8 lg:gap-12">
          {leaders.map((leader, i) => (
            <ScrollReveal key={leader.name} data-reveal="up" delay={i * 120}>
              <div className="h-full bg-white border border-[#DEDED7] rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#111111]/40 hover:-translate-y-1 shadow-subtle group relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
                  {/* Photo / Avatar */}
                  <div className="relative w-14 h-14 sm:w-28 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 border border-[#DEDED7] bg-white shadow-xs">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#F7F6F2]">
                        <span className="font-heading font-black text-xs sm:text-2xl text-[#111111]">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="text-center sm:text-left space-y-1 sm:space-y-2">
                    <span
                      className="hidden sm:inline-block text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-white border-[#DEDED7] text-[#111111]"
                    >
                      {leader.badge}
                    </span>
                    <h3 className="font-heading font-black text-xs sm:text-2xl text-[#111111] uppercase tracking-wide leading-snug">
                      {leader.name}
                    </h3>
                    <p className="font-sans text-[10px] sm:text-xs font-semibold text-[#5D2E85]">
                      {leader.role}
                    </p>
                    <p className="hidden sm:block font-body text-xs text-[#5F5F5A] leading-relaxed pt-1">
                      {leader.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-3 sm:pt-6 mt-3 sm:mt-6 border-t border-[#DEDED7] flex justify-between items-center mt-auto">
                  <span className="hidden sm:inline font-body text-xs text-[#5F5F5A] font-medium">
                    Juntoz Leadership
                  </span>
                  <Link
                    to={leader.link}
                    className="inline-flex items-center gap-1.5 sm:gap-2 font-sans font-semibold text-[10px] sm:text-xs uppercase tracking-wider text-[#111111] group-hover:text-[#5D2E85] transition-colors"
                  >
                    <span>View Profile</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
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
