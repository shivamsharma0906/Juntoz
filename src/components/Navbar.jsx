import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.webp';

const WA_HARD =
  'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { 
    name: 'Who We Help', 
    href: '#',
    isDropdown: true,
    dropdownItems: [
      { name: 'For Makeup Artists', href: '/for-makeup-artists' },
      { name: 'For Salons', href: '/for-salons' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const IG_PATH = 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z';
const LI_PATH = 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navRef = useRef(null);
  const linkRefs = useRef({});
  const ctaRef = useRef(null);
  const magnetRaf = useRef(null);
  const spotRef = useRef(null);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => {
      clearTimeout(t);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Immediately close dropdown if hovering other menu links
  useEffect(() => {
    if (hovered && hovered !== 'Who We Help') {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setDropdownOpen(false);
    }
  }, [hovered]);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 30);

      if (currentY > 80) {
        if (currentY > lastScrollY.current + 6) {
          setVisible(false); // Hide on scroll down
        } else if (currentY < lastScrollY.current - 6) {
          setVisible(true);  // Reveal on scroll up
        }
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(t);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    let activeHref = hovered ?? location.pathname;
    // Highlight "Who We Help" if we are on one of its subpages
    if (!hovered && (location.pathname === '/for-makeup-artists' || location.pathname === '/for-salons')) {
      activeHref = 'Who We Help';
    }

    const el = linkRefs.current[activeHref];
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - navRect.left + 'px',
        width: elRect.width + 'px',
        opacity: 1,
      });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [hovered, location.pathname]);

  const onNavMouseMove = useCallback((e) => {
    if (!navRef.current || !spotRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    spotRef.current.style.left = `${e.clientX - rect.left}px`;
    spotRef.current.style.top = `${e.clientY - rect.top}px`;
    spotRef.current.style.opacity = '1';
  }, []);

  const onNavMouseLeave = useCallback(() => {
    if (spotRef.current) spotRef.current.style.opacity = '0';
  }, []);

  const onCtaMouseMove = useCallback((e) => {
    const el = ctaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
    if (magnetRaf.current) cancelAnimationFrame(magnetRaf.current);
    magnetRaf.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`;
    });
  }, []);

  const onCtaMouseLeave = useCallback(() => {
    if (!ctaRef.current) return;
    ctaRef.current.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    ctaRef.current.style.transform = 'translate(0,0) scale(1)';
    setTimeout(() => {
      if (ctaRef.current) ctaRef.current.style.transition = '';
    }, 500);
  }, []);

  const navEnter = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? (visible ? 'translateY(0)' : 'translateY(-100%)') : 'translateY(-20px)',
    transition: 'opacity 0.6s ease 0.1s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const itemEnter = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(-10px)',
    transition: `opacity 0.5s ease ${delay}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <>
      <nav
        style={navEnter}
        className={`fixed top-0 w-full z-50 transition-[padding] duration-500 ${scrolled ? 'pt-2 sm:pt-4' : 'pt-3 sm:pt-6'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className={`
            flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3.5 transition-all duration-500 rounded-full relative
            ${scrolled
              ? 'bg-[#05050C]/90 border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,245,212,0.1)]'
              : 'bg-white/[0.03] border border-white/10'}
          `}>
            {/* Separate backdrop-blur layer to prevent browser clipping of absolutely positioned children */}
            <div className={`absolute inset-0 rounded-full pointer-events-none z-0 ${scrolled ? 'backdrop-blur-2xl' : 'backdrop-blur-xl'}`} />

            {/* ── Mobile Left Spacer (to keep logo perfectly centered on mobile) ── */}
            <div className="w-11 h-11 md:hidden pointer-events-none relative z-10" />

            {/* ── Logo (Centered on mobile, left-aligned on desktop) ── */}
            <div style={itemEnter(0.15)} className="flex-1 md:flex-initial flex justify-center md:justify-start relative z-10">
              <Link
                to="/"
                className="flex items-center shrink-0 relative z-[60] group/logo"
                onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-lg bg-[#00F5D4]/10 group-hover/logo:bg-[#00F5D4]/25 blur-[14px] transition-all duration-500 scale-150" />
                  <img
                    src={logo}
                    alt="Juntoz"
                    width="160"
                    height="40"
                    fetchPriority="high"
                    className="h-7 sm:h-9 md:h-10 w-auto relative z-10 transition-all duration-400 group-hover/logo:scale-105 group-hover/logo:drop-shadow-[0_0_12px_rgba(0,245,212,0.7)]"
                  />
                </div>
              </Link>
            </div>

            {/* ── Desktop nav links capsule ── */}
            <div style={itemEnter(0.25)} className="hidden md:block relative z-10">
              <div
                ref={navRef}
                onMouseMove={onNavMouseMove}
                onMouseLeave={onNavMouseLeave}
                className="flex items-center gap-1 relative bg-white/[0.04] rounded-full p-1.5 border border-white/10"
              >
                {/* Nested clipping container for background hover spotlight and indicator */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-0">
                  <div
                    ref={spotRef}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle, rgba(0,245,212,0.15) 0%, transparent 70%)',
                      opacity: 0,
                    }}
                  />
                  <div
                    className="absolute top-1.5 bottom-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))', 
                      border: '1px solid rgba(255,255,255,0.15)', 
                      ...indicatorStyle 
                    }}
                  />
                </div>

                {navLinks.map((link) => {
                  if (link.isDropdown) {
                    const isSubpageActive = location.pathname === '/for-makeup-artists' || location.pathname === '/for-salons';
                    return (
                      <div
                        key={link.name}
                        ref={(el) => { linkRefs.current[link.name] = el; }}
                        onMouseEnter={() => {
                          if (closeTimeoutRef.current) {
                            clearTimeout(closeTimeoutRef.current);
                            closeTimeoutRef.current = null;
                          }
                          setHovered(link.name);
                          setDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                          closeTimeoutRef.current = setTimeout(() => {
                            setHovered(null);
                            setDropdownOpen(false);
                          }, 180);
                        }}
                        className={`relative font-heading font-bold uppercase tracking-widest text-xs px-5 py-2.5 rounded-full transition-colors duration-200 z-10 cursor-pointer select-none group
                          ${isSubpageActive ? 'text-white' : 'text-white/60 hover:text-white'}`}
                      >
                        <span className="flex items-center gap-1.5">
                          {link.name}
                          <svg className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-[#00F5D4]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                        
                        <div
                          className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-52 z-50 transition-all duration-300 origin-top
                            ${dropdownOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                        >
                          <div className="w-full p-2 rounded-2xl bg-[#05050C]/95 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-1">
                            {link.dropdownItems.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="font-heading font-bold uppercase tracking-wider text-[10px] text-white/70 hover:text-[#00F5D4] hover:bg-white/5 px-4 py-2.5 rounded-xl transition-all duration-200 text-left block"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        {isSubpageActive && (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
                        )}
                      </div>
                    );
                  }

                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      ref={(el) => { linkRefs.current[link.href] = el; }}
                      onMouseEnter={() => setHovered(link.href)}
                      onMouseLeave={() => setHovered(null)}
                      className={`relative font-heading font-bold uppercase tracking-widest text-xs px-5 py-2.5 rounded-full transition-colors duration-200 z-10
                        ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ── Desktop CTA & Socials ── */}
            <div style={itemEnter(0.35)} className="hidden md:flex items-center gap-4 relative z-10">
              <div className="flex gap-2.5">
                {[
                  { href: 'https://www.instagram.com/_juntoz', label: 'Instagram', path: IG_PATH },
                  { href: 'https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/', label: 'LinkedIn', path: LI_PATH },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group/icon w-9 h-9 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.04] hover:border-[#00F5D4]/40 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(0,245,212,0.3)]"
                  >
                    <svg className="w-4 h-4 fill-current text-white/50 group-hover/icon:text-[#00F5D4] transition-colors duration-300" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="w-px h-5 bg-white/10" />

              <a
                ref={ctaRef}
                href={WA_HARD}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={onCtaMouseMove}
                onMouseLeave={onCtaMouseLeave}
                className="nav-cta-btn relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-black uppercase text-xs tracking-widest text-background overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00F5D4 0%, #7B2FFF 100%)',
                  boxShadow: '0 0 24px rgba(0,245,212,0.4)',
                  willChange: 'transform',
                }}
              >
                <span className="nav-cta-sweep absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full pointer-events-none" />
                <span className="relative z-10 font-bold">Let's Connect</span>
              </a>
            </div>

            {/* ── Mobile Hamburger (Icon only, no "Menu" word) ── */}
            <div className="md:hidden flex items-center justify-end relative z-10">
              <button
                className="flex items-center justify-center relative z-[60] group/menu w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md active:scale-95 transition-transform"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-[5px] items-center justify-center w-5">
                  <span className={`block h-[1.5px] rounded-full transition-all duration-400 ${menuOpen ? 'w-5 bg-[#00F5D4] rotate-45 translate-y-[3.25px]' : 'w-5 bg-white/80'}`} />
                  <span className={`block h-[1.5px] rounded-full transition-all duration-400 ${menuOpen ? 'w-5 bg-[#00F5D4] -rotate-45 -translate-y-[3.25px]' : 'w-3.5 bg-[#00F5D4] group-hover/menu:w-5'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        <ScrollProgress />
      </nav>

      {/* ── Mobile Full-Screen Glass Drawer ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}`}
        style={{ background: 'rgba(5,5,12,0.96)', backdropFilter: 'blur(28px)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[350px] h-[350px] rounded-full"
            style={{
              top: '-5%', left: '-15%',
              background: 'radial-gradient(circle, rgba(123,47,255,0.2) 0%, transparent 70%)',
              animation: menuOpen ? 'orb-drift-a 6s ease-in-out infinite' : 'none',
            }}
          />
          <div
            className="absolute w-[300px] h-[300px] rounded-full"
            style={{
              bottom: '10%', right: '-10%',
              background: 'radial-gradient(circle, rgba(0,245,212,0.15) 0%, transparent 70%)',
              animation: menuOpen ? 'orb-drift-b 8s ease-in-out infinite' : 'none',
            }}
          />
        </div>

        <div className="h-24 shrink-0" />

        <div className="flex-1 flex flex-col justify-between px-8 pb-12 relative z-10 overflow-y-auto">
          <nav className="flex flex-col gap-2 my-auto">
            {navLinks.map((link, i) => {
              if (link.isDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="flex flex-col border-b border-white/10 py-4"
                    style={{
                      transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      transitionProperty: 'opacity, transform',
                      transitionDuration: '0.4s',
                    }}
                  >
                    <div className="flex items-center gap-4 mb-2 pl-2">
                      <span className="font-heading font-black text-xs tracking-widest text-[#00F5D4]">0{i + 1}</span>
                      <span className="font-heading font-black text-lg uppercase tracking-tight text-white/50">{link.name}</span>
                    </div>
                    <div className="flex flex-col gap-1 pl-6">
                      {link.dropdownItems.map((item) => {
                        const isSubActive = location.pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center justify-between py-3.5 px-3 rounded-2xl transition-all duration-300
                              ${isSubActive ? 'text-white bg-white/5' : 'text-white/60 hover:text-white'}`}
                          >
                            <span className="font-heading font-black text-xl uppercase tracking-tight">{item.name}</span>
                            <svg className="w-5 h-5 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between py-4 px-2 border-b transition-all duration-400 ${isActive ? 'text-white border-[#00F5D4]/40 font-bold' : 'text-white/50 hover:text-white border-white/10'}`}
                  style={{
                    transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-heading font-black text-xs tracking-widest text-[#00F5D4]">0{i + 1}</span>
                    <span className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight">{link.name}</span>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-all duration-300 ${isActive ? 'opacity-100 text-[#00F5D4]' : 'opacity-0 group-hover:opacity-60 -translate-x-2 group-hover:translate-x-0'}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </nav>

          <div
            className="space-y-4 pt-6"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.4s ease ${navLinks.length * 60 + 80}ms, transform 0.4s ease ${navLinks.length * 60 + 80}ms`,
            }}
          >
            <a
              href={WA_HARD}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-full font-heading font-black text-base uppercase tracking-widest text-background transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(0,245,212,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #00F5D4 0%, #7B2FFF 100%)',
              }}
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.875L.057 23.386a.5.5 0 0 0 .614.599l5.728-1.539A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 1 1 12 2.25 9.75 9.75 0 0 1 12 21.75z" />
              </svg>
              Start The Conversation
            </a>

            <div className="flex items-center justify-center gap-4 pt-2">
              {[
                { href: 'https://www.instagram.com/_juntoz', label: 'Instagram', path: IG_PATH },
                { href: 'https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/', label: 'LinkedIn', path: LI_PATH },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.03)' }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes nav-cta-sweep {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%);  }
        }
        .nav-cta-btn:hover .nav-cta-sweep {
          animation: nav-cta-sweep 0.65s ease forwards;
        }

        @keyframes orb-drift-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(40px, 30px) scale(1.1); }
        }
        @keyframes orb-drift-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-30px, -20px) scale(1.15); }
        }
      `}</style>
    </>
  );
}

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
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
      <div
        ref={barRef}
        style={{
          width: '0%',
          height: '100%',
          background: 'linear-gradient(90deg, #00F5D4, #7B2FFF, #FF3AF2)',
          boxShadow: '0 0 10px rgba(0,245,212,0.8)',
        }}
      />
    </div>
  );
}