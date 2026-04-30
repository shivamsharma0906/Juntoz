import logo from '../image.png';

export default function Footer() {
  return (
    <footer className="relative bg-background pt-32 pb-32 md:pb-48 overflow-hidden z-10">
      {/* Pattern Layer */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32 border-b-8 border-accent-1 pb-12">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <img src={logo} alt="Juntoz Logo" className="h-12 md:h-16 w-auto group-hover:rotate-3 transition-transform" />
            </a>
            <p className="font-body text-xl text-white/70 max-w-sm font-medium">
              Turning makeup artists into unapologetically booked-out brands.
            </p>
            <div className="pt-4">
              <a href="https://wa.me/919004001800" className="inline-block bg-accent-1 text-background font-heading font-black px-6 py-3 border-4 border-background hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0_#FFE600] uppercase tracking-widest">
                Start Growing ↗
              </a>
            </div>
            <div className="pt-8">
              <p className="font-body text-white/30 font-bold text-xs uppercase tracking-[0.2em]">
                © {new Date().getFullYear()} Juntoz Agency. All rights reserved.
              </p>
            </div>
          </div>

          {/* Links 1 */}
          <div className="space-y-6">
            <h4 className="font-heading font-black text-2xl text-accent-2 uppercase tracking-widest underline decoration-wavy decoration-accent-1 underline-offset-8">
              Explore
            </h4>
            <ul className="space-y-4 font-heading font-bold uppercase tracking-wider text-white">
              <li><a href="#services" className="hover:text-accent-1 hover:pl-2 transition-all">Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent-2 hover:pl-2 transition-all">Work</a></li>
              <li><a href="#results" className="hover:text-accent-3 hover:pl-2 transition-all">Results</a></li>
              <li><a href="#about" className="hover:text-accent-4 hover:pl-2 transition-all">About</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="font-heading font-black text-2xl text-accent-3 uppercase tracking-widest underline decoration-wavy decoration-accent-2 underline-offset-8">
                Contact
              </h4>
              <ul className="space-y-4 font-body text-lg text-white/80 font-medium">
                <li>Mumbai, India</li>
                <li><a href="mailto:hello@juntoz.com" className="hover:text-accent-1 transition-colors border-b-2 border-transparent hover:border-accent-1 pb-1">hello@juntoz.com</a></li>
                <li><a href="tel:+919004001800" className="hover:text-accent-2 transition-colors font-bold">+91 90040 01800</a></li>
              </ul>
            </div>

            {/* Social Icons moved above the line */}
            <div className="flex gap-4 pt-4 border-t-4 border-dashed border-white/10">
              <a 
                href="https://www.instagram.com/_juntoz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-accent-5 flex items-center justify-center hover:-translate-y-1 hover:rotate-6 transition-transform border-2 border-white shadow-[2px_2px_0_#FF3AF2] text-white"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-accent-2 flex items-center justify-center hover:-translate-y-1 hover:-rotate-6 transition-transform border-2 border-black text-black shadow-[2px_2px_0_#00F5D4]"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright moved to Brand Info above */}
      </div>

      {/* Massive decorative text clipping at the bottom */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 w-screen text-center pointer-events-none z-0">
        <h2 className="font-heading font-black text-[14vw] text-accent-5/10 leading-none whitespace-nowrap uppercase tracking-tighter">
          JUNTOZ
        </h2>
      </div>
    </footer>
  );
}
