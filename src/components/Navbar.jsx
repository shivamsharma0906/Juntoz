import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo.webp';

const WA_HARD =
  'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { 
    name: 'Specialties', 
    href: '#specialties',
    isDropdown: true,
    children: [
      { name: 'Google Business Profile', href: '/google-business-profile', tag: 'Local 3-Pack' },
      { name: 'For Makeup Artists', href: '/for-makeup-artists', tag: 'MUA Growth' },
      { name: 'For Salons & Clinics', href: '/for-salons', tag: 'Local Scale' },
    ]
  },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/blog' },
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
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });
  const [expandedMobile, setExpandedMobile] = useState({ Specialties: false });

  const navRef = useRef(null);
  const linkRefs = useRef({});
  const ctaRef = useRef(null);
  const magnetRaf = useRef(null);
  const spotRef = useRef(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleHover = (linkHrefOrName) => {
    setHovered(linkHrefOrName);
  };

  const toggleAccordion = (name) => {
    setExpandedMobile((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 30);

      // On desktop (>= 1024px), navbar remains fixed at top always. On mobile/tablet, toggle visibility on scroll.
      if (window.innerWidth >= 1024) {
        setVisible(true);
      } else {
        if (currentY > 80) {
          if (currentY > lastScrollY.current + 6) {
            setVisible(false); // Hide on scroll down on mobile
          } else if (currentY < lastScrollY.current - 6) {
            setVisible(true);  // Reveal on scroll up on mobile
          }
        } else {
          setVisible(true);
        }
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route navigation
  useEffect(() => {
    const t = setTimeout(() => {
      setMenuOpen(false);
    }, 0);
    return () => clearTimeout(t);
  }, [location]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Accessibility: Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    let activeHref = hovered ?? location.pathname;
    if (!hovered && (location.pathname === '/for-makeup-artists' || location.pathname === '/for-salons' || location.pathname === '/google-business-profile')) {
      activeHref = 'Specialties';
    }

    const updateIndicator = () => {
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
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
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

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
  const navEnter = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? (visible || isDesktop ? 'translateY(0)' : 'translateY(-100%)') : 'translateY(-20px)',
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
        <div className="container mx-auto px-3 sm:px-6 max-w-7xl">
          <div className={`
            flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 transition-all duration-500 rounded-full relative
            ${scrolled
              ? 'bg-[#F7F6F2]/95 border border-[#DEDED7] shadow-[0_4px_20px_-2px_rgba(17,17,17,0.06)]'
              : 'bg-white/90 border border-[#DEDED7] shadow-sm'}
          `}>
            {/* Backdrop blur layer */}
            <div className="absolute inset-0 rounded-full pointer-events-none z-0 backdrop-blur-md" />

            {/* ── MOBILE LEFT: Minimal Hamburger Touch Target (44px min) ── */}
            <div className="lg:hidden flex items-center justify-start relative z-10">
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu-dropdown"
                aria-label="Toggle navigation menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full text-[#111111] hover:bg-black/5 active:scale-95 transition-all cursor-pointer relative z-[60]"
              >
                <div className="w-5 h-3.5 flex flex-col justify-between items-center pointer-events-none">
                  <span className={`block h-[1.8px] w-5 rounded-full bg-[#111111] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                  <span className={`block h-[1.8px] w-5 rounded-full bg-[#111111] transition-all duration-200 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
                  <span className={`block h-[1.8px] w-5 rounded-full bg-[#111111] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
                </div>
              </button>
            </div>

            {/* ── LOGO (Centered on mobile, left-aligned on desktop) ── */}
            <div style={itemEnter(0.15)} className="flex-1 lg:flex-initial flex justify-center lg:justify-start items-center shrink-0 relative z-10 mr-0 lg:mr-2 xl:mr-4">
              <Link
                to="/"
                className="flex items-center shrink-0 relative z-[60] group/logo"
                onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <img
                  src={logo}
                  alt="Juntoz"
                  width="140"
                  height="36"
                  fetchPriority="high"
                  className="h-7 sm:h-8 lg:h-8 xl:h-9 w-auto relative z-10 transition-transform duration-300 group-hover/logo:scale-105"
                />
              </Link>
            </div>

            {/* ── MOBILE RIGHT: Solid Juntoz Brand Color WhatsApp Circle Button (44px min) ── */}
            <div className="lg:hidden flex items-center justify-end relative z-10">
              <a
                href={WA_HARD}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Juntoz on WhatsApp"
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-[#E84A2A] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(232,74,42,0.35)] active:scale-95 transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29" />
                </svg>
              </a>
            </div>

            {/* ── Desktop nav links capsule ── */}
            <div style={itemEnter(0.25)} className="hidden lg:block relative z-10 shrink min-w-0">
              <div
                ref={navRef}
                onMouseMove={onNavMouseMove}
                onMouseLeave={onNavMouseLeave}
                className="flex items-center gap-0.5 xl:gap-1 relative bg-[#F7F6F2] rounded-full p-1 border border-[#DEDED7]"
              >
                {/* Nested clipping container for background indicator */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-0">
                  <div
                    ref={spotRef}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle, rgba(232,74,42,0.08) 0%, transparent 70%)',
                      opacity: 0,
                    }}
                  />
                  <div
                    className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ 
                      background: '#FFFFFF', 
                      border: '1px solid #DEDED7', 
                      boxShadow: '0 1px 4px rgba(17,17,17,0.06)',
                      ...indicatorStyle 
                    }}
                  />
                </div>

                {navLinks.map((link) => {
                  if (link.isDropdown) {
                    const isDropActive = location.pathname.startsWith('/for-') || location.pathname === '/google-business-profile';
                    return (
                      <div
                        key={link.name}
                        className="relative group/drop z-20"
                        onMouseEnter={() => handleHover(link.name)}
                        onMouseLeave={() => handleHover(null)}
                      >
                        <button
                          type="button"
                          ref={(el) => { linkRefs.current[link.name] = el; }}
                          className={`relative inline-flex items-center gap-1 font-sans font-medium text-[11px] xl:text-xs tracking-normal xl:tracking-wider uppercase px-2.5 xl:px-4 py-1.5 xl:py-2 rounded-full transition-colors duration-200 cursor-pointer
                            ${isDropActive ? 'text-[#111111] font-semibold' : 'text-[#5F5F5A] hover:text-[#111111]'}`}
                        >
                          <span>{link.name}</span>
                          <svg className="w-3 h-3 transition-transform duration-200 group-hover/drop:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                          {isDropActive && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E84A2A]" />
                          )}
                        </button>

                        {/* Dropdown Menu Box */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover/drop:opacity-100 group-hover/drop:translate-y-0 group-hover/drop:pointer-events-auto transition-all duration-200 z-50">
                          <div className="bg-white border border-[#DEDED7] rounded-2xl p-2 shadow-card w-64 flex flex-col gap-1">
                            {link.children.map((sub) => {
                              const isSubActive = location.pathname === sub.href;
                              return (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 group/sub ${
                                    isSubActive
                                      ? 'bg-[#F7F6F2] text-[#111111] font-semibold'
                                      : 'text-[#5F5F5A] hover:bg-[#F7F6F2] hover:text-[#111111]'
                                  }`}
                                >
                                  <span className="font-heading text-xs uppercase tracking-tight">{sub.name}</span>
                                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#E84A2A] bg-[#FBE9E4] px-2 py-0.5 rounded-md">
                                    {sub.tag}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      ref={(el) => { linkRefs.current[link.href] = el; }}
                      onMouseEnter={() => handleHover(link.href)}
                      onMouseLeave={() => handleHover(null)}
                      className={`relative font-sans font-medium text-[11px] xl:text-xs tracking-normal xl:tracking-wider uppercase px-2.5 xl:px-4 py-1.5 xl:py-2 rounded-full transition-colors duration-200 z-10 whitespace-nowrap
                        ${isActive ? 'text-[#111111] font-semibold' : 'text-[#5F5F5A] hover:text-[#111111]'}`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E84A2A]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ── Desktop CTA & Socials ── */}
            <div style={itemEnter(0.35)} className="hidden lg:flex items-center gap-2 xl:gap-3 relative z-10 shrink-0">
              <div className="hidden xl:flex gap-2">
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
                    className="group/icon w-8 h-8 rounded-full flex items-center justify-center border border-[#DEDED7] bg-white text-[#5F5F5A] hover:text-[#E84A2A] hover:border-[#E84A2A]/40 transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="hidden xl:block w-px h-4 bg-[#DEDED7]" />

              <a
                ref={ctaRef}
                href={WA_HARD}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={onCtaMouseMove}
                onMouseLeave={onCtaMouseLeave}
                className="relative inline-flex items-center gap-2 px-4 xl:px-5 py-2 rounded-full font-sans font-semibold text-[11px] xl:text-xs tracking-wider uppercase text-white bg-[#111111] hover:bg-[#E84A2A] transition-colors duration-300 shadow-sm whitespace-nowrap"
              >
                <span>Book a Strategy Call</span>
              </a>
            </div>

          </div>
        </div>

        <ScrollProgress />
      </nav>

      {/* ── MOBILE GBIM-STYLE DROPDOWN CARD & BACKDROP (Mobile-only) ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Soft Ambient Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[3px] lg:hidden"
            />

            {/* Dropdown Card (Slides directly below top bar) */}
            <motion.div
              id="mobile-menu-dropdown"
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[66px] sm:top-[76px] left-3 right-3 sm:left-5 sm:right-5 max-w-lg mx-auto z-50 lg:hidden rounded-[22px] sm:rounded-[24px] bg-white border border-[#DEDED7] shadow-[0_20px_45px_-10px_rgba(17,17,17,0.16),0_10px_20px_-5px_rgba(232,74,42,0.06)] overflow-hidden flex flex-col max-h-[calc(100dvh-84px)]"
            >
              {/* Menu Items List */}
              <div className="flex-1 overflow-y-auto divide-y divide-[#F0EFEB]">
                {navLinks.map((link) => {
                  if (link.isDropdown) {
                    const isExpanded = expandedMobile[link.name];
                    const isAnyChildActive = link.children.some(c => location.pathname === c.href);

                    return (
                      <div key={link.name} className="flex flex-col">
                        {/* Expandable Top-Level Row */}
                        <button
                          type="button"
                          onClick={() => toggleAccordion(link.name)}
                          className={`w-full flex items-center justify-between px-5 sm:px-6 min-h-[52px] py-3.5 text-left transition-colors duration-150 hover:bg-[#E84A2A]/[0.04] active:bg-[#E84A2A]/[0.08] ${
                            isAnyChildActive ? 'text-[#E84A2A] font-bold' : 'text-[#111111]'
                          }`}
                        >
                          <span className="font-heading font-semibold text-[15px] sm:text-[16px] tracking-tight">
                            {link.name}
                          </span>
                          <svg
                            className={`w-4 h-4 text-[#5F5F5A] transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-[#E84A2A]' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Accordion Sub-Items with Framer Motion Auto-Height */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              key="accordion-panel"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden bg-[#FAFAF8]"
                            >
                              <div className="py-1 border-t border-[#F0EFEB]/70">
                                {link.children.map((sub) => {
                                  const isSubActive = location.pathname === sub.href;
                                  return (
                                    <Link
                                      key={sub.name}
                                      to={sub.href}
                                      onClick={() => setMenuOpen(false)}
                                      className={`flex items-center justify-between pl-9 pr-5 sm:pl-10 sm:pr-6 py-2.5 transition-colors duration-150 active:bg-[#E84A2A]/10 ${
                                        isSubActive
                                          ? 'text-[#E84A2A] font-bold bg-[#E84A2A]/[0.06]'
                                          : 'text-[#444444] hover:text-[#111111]'
                                      }`}
                                    >
                                      <span className="font-sans text-[13.5px] sm:text-[14px] font-medium tracking-normal">
                                        {sub.name}
                                      </span>
                                      <span className="text-[9px] sm:text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#E84A2A] bg-[#FBE9E4] px-2 py-0.5 rounded-full">
                                        {sub.tag}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between px-5 sm:px-6 min-h-[52px] py-3.5 transition-colors duration-150 hover:bg-[#E84A2A]/[0.04] active:bg-[#E84A2A]/[0.08] ${
                        isActive ? 'text-[#E84A2A] font-bold bg-[#E84A2A]/[0.03]' : 'text-[#111111]'
                      }`}
                    >
                      <span className="font-heading font-semibold text-[15px] sm:text-[16px] tracking-tight">
                        {link.name}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E84A2A]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Dropdown Bottom Footer with CTA and WhatsApp */}
              <div className="p-3.5 sm:p-4 bg-[#FBFBFA] border-t border-[#F0EFEB] flex flex-col gap-2.5">
                <a
                  href={WA_HARD}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 h-11 sm:h-12 rounded-full font-heading font-bold text-xs uppercase tracking-widest text-white bg-[#111111] hover:bg-[#E84A2A] active:bg-[#E84A2A] active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(17,17,17,0.12)]"
                >
                  <span>Book a Strategy Call</span>
                  <span>→</span>
                </a>

                {/* Socials row */}
                <div className="flex items-center justify-center gap-3 pt-1">
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
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-[#DEDED7] text-[#5F5F5A] bg-white hover:text-[#E84A2A] hover:border-[#E84A2A]/40 transition-all"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d={s.path} /></svg>
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
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
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#DEDED7]/40 overflow-hidden">
      <div
        ref={barRef}
        style={{
          width: '0%',
          height: '100%',
          background: '#E84A2A',
        }}
      />
    </div>
  );
}