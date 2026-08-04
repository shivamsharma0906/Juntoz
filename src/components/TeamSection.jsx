import ScrollReveal from './ScrollReveal';

// PLACEHOLDER: Team Members
const teamMembers = [
  {
    name: 'Placeholder: Jane Doe',
    role: 'Creative Director',
    bio: 'Former head of design at a leading beauty brand, now bringing high-converting aesthetics to our agency partners.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop', // placeholder image
    color: '#00F5D4',
  },
  {
    name: 'Placeholder: John Smith',
    role: 'Head of Growth',
    bio: 'Data-obsessed marketer who has managed over ₹5Cr in ad spend specifically for the beauty and wellness industry.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop', // placeholder image
    color: '#7B2FFF',
  },
  {
    name: 'Placeholder: Priya Patel',
    role: 'Content Strategist',
    bio: 'Expert in viral Instagram strategies for salons and MUAs, turning followers into booked appointments.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop', // placeholder image
    color: '#FF3AF2',
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden border-t border-white/5">
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        <ScrollReveal data-reveal="up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">The Brains Behind The Growth</span>
          </div>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl uppercase leading-none tracking-tighter mb-4">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF]">Team</span>
          </h2>
          <p className="font-body text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            We are a tight-knit group of beauty industry specialists, performance marketers, and creative directors.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 150}>
              <div className="group relative rounded-3xl p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-2">
                
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_4s_ease-in-out_infinite]"
                  style={{ background: `linear-gradient(135deg, ${member.color}60, transparent, ${member.color}60)` }} />
                
                <div className="relative h-full bg-[#0A0A0F]/95 backdrop-blur-2xl rounded-[23px] flex flex-col overflow-hidden p-6">
                  
                  {/* Photo */}
                  <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                    <img src={member.image} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                    
                    {/* Role Tag overlay on image */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="font-body font-bold text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                        style={{ background: `${member.color}15`, border: `1px solid ${member.color}40`, color: member.color, backdropFilter: 'blur(8px)' }}>
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-heading font-black text-white text-2xl uppercase tracking-tight mb-3">
                      {member.name}
                    </h3>
                    <p className="font-body text-white/60 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
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
