import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function HomeSpecialtyTeaser() {
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-[#F7F6F2] border-b border-[#DEDED7]/70">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-18">

          <ScrollReveal data-reveal="up" delay={80}>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#111111] leading-[1.04] mb-4">
              Specialized Playbooks Where <br />
              <span className="text-[#5D2E85]">Nuance Really Matters.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={120}>
            <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              While Juntoz serves diverse commercial industries, we maintain two deeply specialized practices with proven, industry-specific client acquisition playbooks.
            </p>
          </ScrollReveal>
        </div>

        {/* Dual Teaser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Makeup Artists Teaser */}
          <ScrollReveal data-reveal="up" delay={100}>
            <Link
              to="/for-makeup-artists"
              className="group block h-full p-8 sm:p-10 rounded-3xl bg-white border border-[#DEDED7] hover:border-[#111111] transition-all duration-300 shadow-card hover:shadow-hover hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-body font-bold text-xs uppercase tracking-wider">
                  Specialty Practice
                </span>
                <span className="text-[#5F5F5A] text-xs font-bold uppercase tracking-wider">
                  MUA &amp; Academy
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl text-[#111111] mb-3 group-hover:text-[#5D2E85] transition-colors">
                For Makeup Artists
              </h3>

              <p className="font-body text-sm text-[#5F5F5A] leading-relaxed mb-6">
                Lock in high-ticket bridal contracts months in advance, eliminate off-season slumps, and automate WhatsApp pre-qualification so you never waste time on price-shoppers.
              </p>

              <div className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-[#111111] group-hover:text-[#5D2E85] transition-colors">
                <span>View Specialist MUA Playbook</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Salons Teaser */}
          <ScrollReveal data-reveal="up" delay={160}>
            <Link
              to="/for-salons"
              className="group block h-full p-8 sm:p-10 rounded-3xl bg-white border border-[#DEDED7] hover:border-[#111111] transition-all duration-300 shadow-card hover:shadow-hover hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-body font-bold text-xs uppercase tracking-wider">
                  Specialty Practice
                </span>
                <span className="text-[#5F5F5A] text-xs font-bold uppercase tracking-wider">
                  Salons &amp; Clinics
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl text-[#111111] mb-3 group-hover:text-[#5D2E85] transition-colors">
                For Salons &amp; Clinics
              </h3>

              <p className="font-body text-sm text-[#5F5F5A] leading-relaxed mb-6">
                Pack styling chairs and treatment rooms daily with hyper-local pin-code ads, Google Maps 3-Pack domination, and automated recurring client rebooking engines.
              </p>

              <div className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-[#111111] group-hover:text-[#5D2E85] transition-colors">
                <span>View Specialist Salon Playbook</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
