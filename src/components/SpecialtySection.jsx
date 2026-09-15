import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal.jsx';

export default function SpecialtySection() {
  return (
    <section id="specialty" className="py-20 md:py-28 bg-[#F7F6F2] relative border-b border-[#DEDED7]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Section Header */}
        <ScrollReveal data-reveal="up" className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white text-[#5F5F5A] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
            <span>Dedicated Vertical Expertise</span>
          </div>
          <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-5">
            Our Specialty:{' '}
            <span className="text-[#5D2E85]">Makeup Artists &amp; Salons.</span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-base md:text-lg leading-relaxed">
            We work with businesses across multiple industries — and we have developed particular, deep expertise in the beauty and personal care sector. We understand the exact dynamics of visual portfolio proof, high-hook transformation reels, local Google discovery, and WhatsApp booking speed.
          </p>
        </ScrollReveal>

        {/* 2 Focused Vertical Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Makeup Artists */}
          <ScrollReveal data-reveal="up" delay={50}>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-white border border-[#DEDED7] shadow-card flex flex-col justify-between hover:border-[#111111]/30 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] border border-[#5D2E85]/20">
                    Specialist Vertical 01
                  </span>
                  <span className="text-2xl">💄</span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-3">
                  For Makeup Artists &amp; Academies
                </h3>
                <p className="font-body text-sm text-[#5F5F5A] leading-relaxed mb-6">
                  We turn makeup artists into booked-out luxury brands. Helping bridal artists, masterclass educators, and editorial creators command premium fees and eliminate off-season dry spells.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#DEDED7]/80 mb-8">
                  {[
                    'Bridal Season Meta Ads & Pin-Code Targeting',
                    'Automated WhatsApp Lead Pre-Qualification',
                    'Masterclass Launch & Registration Funnels',
                    'Luxury Portfolio & Rate Card Repositioning'
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs font-body text-[#111111]">
                      <span className="text-[#5D2E85] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/for-makeup-artists"
                className="inline-flex items-center justify-between w-full px-6 py-4 rounded-2xl bg-[#111111] text-white hover:bg-[#5D2E85] font-heading font-bold text-xs uppercase tracking-widest transition-colors duration-200 shadow-sm"
              >
                <span>Explore Makeup Artist Marketing</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2: Salons & Clinic Chains */}
          <ScrollReveal data-reveal="up" delay={150}>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-white border border-[#DEDED7] shadow-card flex flex-col justify-between hover:border-[#111111]/30 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] border border-[#5D2E85]/20">
                    Specialist Vertical 02
                  </span>
                  <span className="text-2xl">✂️</span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-3">
                  For Hair &amp; Beauty Salons
                </h3>
                <p className="font-body text-sm text-[#5F5F5A] leading-relaxed mb-6">
                  Fill dead weekday styling chairs and generate consistent local walk-ins. We deploy hyper-local search maps dominance, Google 3-pack rankings, and automated WhatsApp retention.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#DEDED7]/80 mb-8">
                  {[
                    'Hyper-Local Google Maps 3-Pack Optimization',
                    'Weekday Capacity & Treatment Fill Campaigns',
                    'Automated WhatsApp Review & Loyalty Flows',
                    'Geotargeted Instagram Pin-Code Outreach'
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs font-body text-[#111111]">
                      <span className="text-[#5D2E85] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/for-salons"
                className="inline-flex items-center justify-between w-full px-6 py-4 rounded-2xl bg-[#111111] text-white hover:bg-[#5D2E85] font-heading font-bold text-xs uppercase tracking-widest transition-colors duration-200 shadow-sm"
              >
                <span>Explore Salon Marketing</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
