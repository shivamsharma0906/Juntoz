import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../image.png';

const WA_HARD =
  'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Results', href: '/results' },
  { name: 'About', href: '/about' },
];

const IG_PATH =
  'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z';
const LI_PATH =
  'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'pt-3 sm:pt-4' : 'pt-5 sm:pt-6'}`}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className={`
            flex items-center justify-between px-5 sm:px-6 py-3 transition-all duration-500 rounded-[2rem] sm:rounded-full
            ${scrolled
              ? 'bg-[#050508]/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(255,58,242,0.25)]'
              : 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl'}
          `}>

            {/* Logo with Magic White-Background Removal */}
            <Link
              to="/"
              className="flex items-center shrink-0 relative z-[60] group/logo"
              onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <img 
                src={logo} 
                alt="Juntoz" 
                className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover/logo:scale-105" 
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/4 backdrop-blur-sm rounded-full p-1 border border-white/8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-body font-semibold uppercase tracking-widest text-xs px-5 py-2 rounded-full transition-all duration-200 ${location.pathname === link.href
                      ? 'bg-white/10 text-white'
                      : 'text-white/55 hover:text-white hover:bg-white/8'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop socials + CTA */}
            <div className="hidden md:flex items-center gap-5">
              <div className="flex gap-4">
                {[
                  { href: 'https://www.instagram.com/_juntoz', label: 'Instagram', path: IG_PATH },
                  { href: 'https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/', label: 'LinkedIn', path: LI_PATH },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors" aria-label={s.label}>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
              <a
                href={WA_HARD}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-black uppercase text-xs tracking-widest text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, #FF3AF2, #7B2FFF)',
                  boxShadow: '0 0 20px rgba(255,58,242,0.4)',
                }}
              >
                Book a Call
              </a>
            </div>

            {/* Insane-Level Custom Hamburger Toggle */}
            <button
              className="md:hidden flex items-center gap-3 relative z-[60] group/menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`font-heading font-black text-[10px] tracking-widest uppercase transition-colors duration-300 ${menuOpen ? 'text-accent-2' : 'text-white/50 group-hover/menu:text-white'}`}>
                {menuOpen ? 'Close' : 'Menu'}
              </span>
              <div className="flex flex-col gap-[5px] items-end justify-center w-6 h-6">
                <span className={`block h-[2px] rounded-full transition-all duration-300 origin-right ${menuOpen ? 'w-6 bg-accent-2 -rotate-45 -translate-y-[1px]' : 'w-6 bg-white'}`} />
                <span className={`block h-[2px] rounded-full transition-all duration-300 origin-right ${menuOpen ? 'w-6 bg-accent-2 rotate-45 translate-y-[1px]' : 'w-4 bg-accent-2 group-hover/menu:w-6'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ background: 'rgba(5,5,10,0.97)', backdropFilter: 'blur(20px)' }}
      >
        {/* Top spacer for navbar height */}
        <div className="h-20 shrink-0" />

        <div className="flex-1 flex flex-col justify-center px-6 pb-10 gap-6">

          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-heading font-black text-3xl sm:text-4xl uppercase py-4 px-2 transition-all duration-200 border-b ${location.pathname === link.href
                    ? 'text-white'
                    : 'text-white/55 hover:text-white'
                  }`}
                style={{
                  borderBottomColor: 'rgba(255,255,255,0.07)',
                  animationDelay: `${i * 50}ms`,
                }}
              >
                <span className="text-xs font-body font-semibold tracking-widest text-white/20 mr-3">
                  0{i + 1}
                </span>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-4 space-y-3">
            <a
              href={WA_HARD}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-heading font-black text-base uppercase tracking-widest text-white transition-all duration-300 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #FF3AF2 0%, #7B2FFF 100%)',
                boxShadow: '0 0 30px rgba(255,58,242,0.5)',
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.875L.057 23.386a.5.5 0 0 0 .614.599l5.728-1.539A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 1 1 12 2.25 9.75 9.75 0 0 1 12 21.75z" />
              </svg>
              Book a Strategy Call
            </a>

            {/* Socials */}
            <div className="flex items-center justify-center gap-6 pt-2">
              {[
                { href: 'https://www.instagram.com/_juntoz', label: 'Instagram', color: '#FF3AF2', path: IG_PATH },
                { href: 'https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/', label: 'LinkedIn', color: '#00F5D4', path: LI_PATH },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
