import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './IMG_0367.png';

const WA_HARD =
  'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Results', href: '/results' },
  { name: 'About', href: '/about' },
];

const IG_PATH = 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z';
const LI_PATH = 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const location = useLocation();

  /* ── Scroll-aware ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close on route change ── */
  useEffect(() => {
    const timer = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location]);

  /* ── Body lock ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Sliding active indicator ── */
  useEffect(() => {
    const activeHref = hovered ?? location.pathname;
    const el = linkRefs.current[activeHref];
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - navRect.left + 'px',
        width: elRect.width + 'px',
        opacity: 1,
      });
    }
  }, [hovered, location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-5'}`}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className={`
            flex items-center justify-between px-4 sm:px-5 py-3 transition-all duration-500 rounded-2xl sm:rounded-full
            ${scrolled
              ? 'bg-[#06060f]/85 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]'
              : 'bg-white/4 backdrop-blur-xl border border-white/8'}
          `}>

            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex items-center shrink-0 relative z-[60] group/logo"
              onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="relative">
                {/* Glow behind logo */}
                <div className="absolute inset-0 rounded-lg bg-accent-2/0 group-hover/logo:bg-accent-2/15 blur-[12px] transition-all duration-500 scale-150" />
                <img
                  src={logo}
                  alt="Juntoz"
                  className="h-8 md:h-10 w-auto relative z-10 transition-all duration-400 group-hover/logo:scale-105 group-hover/logo:drop-shadow-[0_0_8px_rgba(0,245,212,0.6)]"
                />
              </div>
            </Link>

            {/* ── Desktop nav links with sliding indicator ── */}
            <div
              ref={navRef}
              className="hidden md:flex items-center gap-0 relative bg-white/4 backdrop-blur-sm rounded-full p-1 border border-white/8"
            >
              {/* Sliding pill indicator */}
              <div
                className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{
                  background: 'rgba(255,255,255,0.09)',
                  ...indicatorStyle,
                }}
              />

              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    ref={(el) => { linkRefs.current[link.href] = el; }}
                    onMouseEnter={() => setHovered(link.href)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative font-body font-semibold uppercase tracking-widest text-xs px-5 py-2 rounded-full transition-colors duration-200 z-10
                      ${isActive ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
                  >
                    {link.name}
                    {/* Active dot */}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-2 shadow-[0_0_4px_#00F5D4]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── Desktop right side ── */}
            <div className="hidden md:flex items-center gap-4">
              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  { href: 'https://www.instagram.com/_juntoz', label: 'Instagram', path: IG_PATH, color: '#FF3AF2' },
                  { href: 'https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/', label: 'LinkedIn', path: LI_PATH, color: '#00F5D4' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group/icon w-8 h-8 rounded-full flex items-center justify-center border border-white/8 bg-white/4 hover:border-white/20 transition-all duration-300 hover:scale-110"
                    style={{ '--icon-color': s.color }}
                  >
                    <svg
                      className="w-3.5 h-3.5 fill-current text-white/40 group-hover/icon:text-white transition-colors duration-300"
                      viewBox="0 0 24 24"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-4 bg-white/10" />

              {/* CTA — spinning border like hero */}
              <a
                href={WA_HARD}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta-btn relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-black uppercase text-xs tracking-widest text-white transition-all duration-300 hover:scale-105 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #FF3AF2 0%, #7B2FFF 100%)' }}
              >
                {/* Sweep shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <span className="relative z-10">Book a Call</span>
              </a>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="md:hidden flex items-center gap-3 relative z-[60] group/menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`font-heading font-black text-[10px] tracking-widest uppercase transition-colors duration-300 ${menuOpen ? 'text-accent-2' : 'text-white/40 group-hover/menu:text-white'}`}>
                {menuOpen ? 'Close' : 'Menu'}
              </span>
              <div className="flex flex-col gap-[5px] items-end justify-center w-6">
                <span className={`block h-[1.5px] rounded-full transition-all duration-400 origin-right ${menuOpen ? 'w-6 bg-accent-2 -rotate-45 -translate-y-[3px]' : 'w-6 bg-white/70'}`} />
                <span className={`block h-[1.5px] rounded-full transition-all duration-400 origin-right ${menuOpen ? 'w-6 bg-accent-2 rotate-45 translate-y-[3px]' : 'w-4 bg-accent-2 group-hover/menu:w-6'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* ── Bottom progress bar (scroll position) ── */}
        <ScrollProgress />
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-400 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ background: 'rgba(4,4,12,0.97)', backdropFilter: 'blur(24px)' }}
      >
        <div className="h-20 shrink-0" />

        <div className="flex-1 flex flex-col justify-center px-6 pb-10 gap-8">

          {/* Nav links with stagger */}
          <nav className="flex flex-col gap-0">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between py-5 px-1 border-b transition-all duration-200 ${isActive ? 'text-white border-white/15' : 'text-white/40 hover:text-white border-white/6'
                    }`}
                  style={{
                    transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                    transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-body text-[10px] tracking-widest text-white/20 font-semibold">0{i + 1}</span>
                    <span className="font-heading font-black text-3xl sm:text-4xl uppercase">{link.name}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 transition-all duration-300 ${isActive ? 'opacity-100 text-accent-2' : 'opacity-0 group-hover:opacity-60 -translate-x-2 group-hover:translate-x-0'}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="space-y-3">
            <a
              href={WA_HARD}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-heading font-black text-base uppercase tracking-widest text-white transition-all duration-300 active:scale-95 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FF3AF2 0%, #7B2FFF 100%)',
                boxShadow: '0 0 30px rgba(255,58,242,0.4)',
              }}
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.875L.057 23.386a.5.5 0 0 0 .614.599l5.728-1.539A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 1 1 12 2.25 9.75 9.75 0 0 1 12 21.75z" />
              </svg>
              Book a Strategy Call
            </a>

            {/* Socials */}
            <div className="flex items-center justify-center gap-4 pt-1">
              {[
                { href: 'https://www.instagram.com/_juntoz', label: 'Instagram', color: '#FF3AF2', path: IG_PATH },
                { href: 'https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/', label: 'LinkedIn', color: '#00F5D4', path: LI_PATH },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.45)' }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Scroll progress thin bar */
        @keyframes nav-cta-sweep {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%);  }
        }
        .nav-cta-btn:hover > span:first-child {
          animation: nav-cta-sweep 0.7s ease forwards;
        }
      `}</style>
    </>
  );
}

/* ── Thin scroll-progress bar — direct DOM, no React re-renders ── */
function ScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (!barRef.current) return;
      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      barRef.current.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/5 overflow-hidden">
      <div
        ref={barRef}
        style={{
          width: '0%',
          height: '100%',
          background: 'linear-gradient(90deg, #00F5D4, #7B2FFF, #FF3AF2)',
          boxShadow: '0 0 8px rgba(0,245,212,0.6)',
        }}
      />
    </div>
  );
}
