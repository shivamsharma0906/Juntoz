import { motion } from 'framer-motion';
import teamImage from './image.png';
import ScrollReveal from './ScrollReveal.jsx';

export default function SimpleAbout() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F2] overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Image with Luxury Frame */}
          <div className="lg:col-span-6 relative flex justify-center">
            <ScrollReveal data-reveal="scale" className="relative w-full max-w-[580px]">
              <div 
                className="p-3 sm:p-4 rounded-[2.5rem] border border-[#DEDED7] bg-white shadow-card relative overflow-hidden"
              >
                <div className="rounded-[2rem] overflow-hidden relative w-full">
                  <motion.img 
                    src={teamImage} 
                    alt="Juntoz Team" 
                    className="w-full h-auto object-contain block"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Premium Copy */}
          <div className="lg:col-span-6 space-y-6 text-left lg:pl-4">
            <ScrollReveal data-reveal="up">
              <span className="font-sans font-bold tracking-[0.16em] text-[#5D2E85] uppercase text-xs block">
                Who We Are
              </span>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={100}>
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-[#111111]">
                We Build Predictable <br />
                <span className="text-[#5D2E85]">Growth Systems.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={200} className="space-y-4">
              <p className="font-body text-[#111111] text-lg font-semibold leading-relaxed">
                We are an integrated boutique team of media buyers, designers, and software engineers designed to scale your pipeline, not just buy vanity clicks.
              </p>
              <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
                At Juntoz, we partner with ambitious businesses across industries to engineer predictable customer acquisition. We treat marketing as an operational science: combining data-driven paid advertising, local Google search dominance, high-ticket brand positioning, and automated inquiry pipelines that turn casual traffic into high-value clients.
              </p>
            </ScrollReveal>

            {/* Quick value tags */}
            <ScrollReveal data-reveal="up" delay={300} className="grid grid-cols-2 gap-4 pt-4 border-t border-[#DEDED7]">
              <div className="flex items-center gap-3">
                <span className="text-xl">🛠️</span>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase text-[#111111]">Creative &amp; Ads</h4>
                  <p className="text-[11px] text-[#5F5F5A]">Visual performance setups</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">⚙️</span>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase text-[#111111]">Custom Funnels</h4>
                  <p className="text-[11px] text-[#5F5F5A]">Technical API integrations</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
