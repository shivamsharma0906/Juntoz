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
    <section className="py-20 sm:py-24 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <ScrollReveal data-reveal="up" className="text-center mb-14 sm:mb-18">
          <span
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full border mb-4 bg-[#F1E7F9] text-[#5D2E85] border-[#5D2E85]/20 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
            Leadership &amp; Vision
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#111111] uppercase tracking-tight">
            Meet the <span className="text-[#5D2E85]">Leadership</span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Combining strategic growth marketing with operational excellence to scale ambitious modern brands.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, i) => (
            <ScrollReveal key={leader.name} data-reveal="up" delay={i * 120}>
              <div className="h-full bg-[#F7F6F2] border border-[#DEDED7] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#111111]/40 hover:-translate-y-1 shadow-subtle group relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Photo / Avatar */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-[#DEDED7] bg-white shadow-xs">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#F7F6F2]">
                        <span className="font-heading font-black text-2xl text-[#111111]">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="text-center sm:text-left space-y-2">
                    <span
                      className="inline-block text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-white border-[#DEDED7] text-[#111111]"
                    >
                      {leader.badge}
                    </span>
                    <h3 className="font-heading font-black text-2xl text-[#111111] uppercase tracking-wide">
                      {leader.name}
                    </h3>
                    <p className="font-sans text-xs font-semibold text-[#5D2E85]">
                      {leader.role}
                    </p>
                    <p className="font-body text-xs text-[#5F5F5A] leading-relaxed pt-1">
                      {leader.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-[#DEDED7] flex justify-between items-center">
                  <span className="font-body text-xs text-[#5F5F5A] font-medium">
                    Juntoz Leadership
                  </span>
                  <Link
                    to={leader.link}
                    className="inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-wider text-[#111111] group-hover:text-[#5D2E85] transition-colors"
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
