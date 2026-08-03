import React from 'react';
import { motion } from 'framer-motion';
import teamImage from './image.png';
import ScrollReveal from './ScrollReveal.jsx';

export default function SimpleAbout() {
  return (
    <section className="py-12 md:py-16 bg-[#050508] overflow-hidden relative">
      {/* Decorative Glows */}
      <div 
        className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.35) 0%, transparent 75%)' }}
      />
      <div 
        className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(255,58,242,0.3) 0%, transparent 75%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Image with Luxury Frame */}
          <div className="lg:col-span-6 relative flex justify-center">
            <ScrollReveal data-reveal="scale" className="relative w-full max-w-[580px]">
              {/* Outer frame shadow & border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3AF2]/10 to-[#7B2FFF]/10 rounded-[2.5rem] blur-xl -z-10" />
              
              <div 
                className="p-3 sm:p-4 rounded-[2.5rem] border border-white/10 bg-[#0E0E1C]/50 backdrop-blur-xl relative overflow-hidden"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
              >
                <div className="rounded-[2rem] overflow-hidden relative w-full aspect-[4/3] sm:aspect-[1.4/1]">
                  {/* Subtle black overlay that fades on hover */}
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500 z-10" />
                  
                  <motion.img 
                    src={teamImage} 
                    alt="Juntoz Team" 
                    className="w-full h-full object-cover block"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Floating location tag */}
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 shadow-lg select-none">
                    <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
                    <span className="font-heading font-bold text-[10px] uppercase tracking-wider text-white">Juntoz Studio / Mumbai HQ</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Premium Copy */}
          <div className="lg:col-span-6 space-y-6 text-left lg:pl-4">
            <ScrollReveal data-reveal="up">
              <span className="font-heading font-bold tracking-widest text-[#FF3AF2] uppercase text-xs block">
                Who We Are
              </span>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={100}>
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tighter leading-tight text-white">
                We Build Predictable <br />
                <span style={{
                  background: 'linear-gradient(120deg, #FF3AF2 20%, #7B2FFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Growth Systems.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={200} className="space-y-4">
              <p className="font-body text-white/90 text-lg font-semibold leading-relaxed">
                We are an integrated boutique team of media buyers, designers, and software engineers designed to scale your pipeline, not just buy vanity clicks.
              </p>
              <p className="font-body text-white/50 text-sm leading-relaxed">
                At Juntoz, we help ambitious beauty salons, clinics, and makeup artists escape the coupon-hunter trap and algorithm fatigue. We treat marketing as a rigorous operational system, engineering localized SEO rankings, location-targeted social ads, and automated WhatsApp appointment funnels to secure premium, predictable revenue for your brand.
              </p>
            </ScrollReveal>

            {/* Quick value tags */}
            <ScrollReveal data-reveal="up" delay={300} className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <span className="text-xl">🛠️</span>
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase text-white/90">Creative &amp; Ads</h4>
                  <p className="text-[10px] text-white/40">Visual performance setups</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">⚙️</span>
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase text-white/90">Custom Funnels</h4>
                  <p className="text-[10px] text-white/40">Technical API integrations</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
