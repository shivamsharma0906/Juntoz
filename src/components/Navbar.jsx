import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo.webp';
import { SERVICES_MEGA_MENU } from '../data/services';

const WA_HARD =
  'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', isMega: true },
  { name: 'Specialties', href: '/specialties' },
  { name: 'Work', href: '/work' },
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
];

const IG_PATH = 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z';
const LI_PATH = 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z';

const mobileNavLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    isDropdown: true,
    children: [
      { name: 'All Services Overview', href: '/services', tag: 'All' },
      { name: 'Instagram Management', href: '/services/instagram-management', tag: 'Core' },
      { name: 'Meta Ads & Google Ads', href: '/services/meta-google-ads', tag: 'High ROAS' },
      { name: 'SEO', href: '/services/seo', tag: 'Organic' },
      { name: 'GMB (Google My Business)', href: '/services/gmb', tag: 'Local 3-Pack' },
      { name: 'Photo & Content Shoot', href: '/services/mobile-content-shoot', tag: 'Delhi & Mumbai' },
      { name: 'AI Videos', href: '/services/ai-videos', tag: 'Trending' },
      { name: 'Websites', href: '/services/websites', tag: 'Web' },
    ],
  },
  {
    name: 'Specialties',
    href: '/specialties',
    isDropdown: true,
    children: [
      { name: '36 Industry Playbooks', href: '/industries', tag: '36 Sectors' },
      { name: 'All Specialties Overview', href: '/specialties', tag: 'Overview' },
      { name: 'Makeup Artists', href: '/for-makeup-artists', tag: 'MUA Growth' },
      { name: 'Salons & Clinics', href: '/for-salons', tag: 'Local Scale' },
    ],
  },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
];

function MegaMenuIcon({ type }) {
  switch (type) {
    case 'ads':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case 'map':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'message':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case 'web':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'funnel':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      );
    case 'chart':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case 'camera':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'video':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    case 'sparkles':
    default:
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
  }
}

const TEL_LINK = 'tel:+919004001800';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [specialtiesMenuOpen, setSpecialtiesMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState({ Specialties: false });

  const ctaRef = useRef(null);
  const magnetRaf = useRef(null);
  const megaTimeoutRef = useRef(null);
  const specialtiesTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleMegaEnter = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150); // 150ms buffer prevents mouse-leave flicker
  };

  const handleSpecialtiesEnter = () => {
    if (specialtiesTimeoutRef.current) clearTimeout(specialtiesTimeoutRef.current);
    setSpecialtiesMenuOpen(true);
  };

  const handleSpecialtiesLeave = () => {
    specialtiesTimeoutRef.current = setTimeout(() => {
      setSpecialtiesMenuOpen(false);
    }, 150);
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
      setMegaMenuOpen(false);
      setSpecialtiesMenuOpen(false);
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
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setMegaMenuOpen(false);
        setSpecialtiesMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const onCtaMouseMove = useCallback((e) => {
    const el = ctaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
    if (magnetRaf.current) cancelAnimationFrame(magnetRaf.current);
    magnetRaf.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${dx}px, ${dy}px) scale(1.08)`;
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
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 pointer-events-none ${
          scrolled ? 'pt-2 sm:pt-2' : 'pt-2.5 sm:pt-3.5'
        }`}
      >
        <div className="w-[94%] sm:w-[95%] max-w-[1380px] xl:max-w-[1460px] mx-auto pointer-events-auto relative">
          <div className={`
            flex items-center justify-between px-5 sm:px-7 lg:px-8 xl:px-10 py-1.5 sm:py-2 lg:py-2.5 transition-all duration-300 rounded-full relative
            ${scrolled
              ? 'bg-[#F7F6F2]/95 border border-[#DEDED7] shadow-[0_10px_30px_rgba(17,17,17,0.08)]'
              : 'bg-white/95 border border-[#DEDED7] shadow-[0_6px_24px_rgba(17,17,17,0.05)]'}
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

            {/* ── LOGO (Left-aligned, scaled length-wise with locked aspect ratio) ── */}
            <div style={itemEnter(0.15)} className="flex-1 lg:flex-initial flex justify-center lg:justify-start items-center shrink-0 relative z-10 mr-0 lg:mr-6">
              <Link
                to="/"
                className="flex items-center shrink-0 relative z-[60] group/logo"
                onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <img
                  src={logo}
                  alt="Juntoz"
                  width="185"
                  height="48"
                  fetchPriority="high"
                  className="w-[130px] sm:w-[150px] lg:w-[165px] xl:w-[180px] h-auto object-contain relative z-10 transition-transform duration-200 group-hover/logo:scale-105"
                />
              </Link>
            </div>

            {/* ── MOBILE RIGHT: Solid Juntoz Brand Color Call Circle Button ── */}
            <div className="lg:hidden flex items-center justify-end relative z-10">
              <a
                href={TEL_LINK}
                aria-label="Call Juntoz"
                title="Call Us: +91 90040 01800"
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-[#5D2E85] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(93,46,133,0.35)] active:scale-95 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
            </div>

            {/* ── Desktop nav links (Generous spacing between options, larger text size) ── */}
            <div style={itemEnter(0.25)} className="hidden lg:flex items-center justify-center gap-7 lg:gap-10 xl:gap-14 2xl:gap-16 flex-1 px-3 relative z-10">
              {navLinks.map((link) => {
                if (link.isMega) {
                  const isServiceActive = location.pathname.startsWith('/services');
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={handleMegaEnter}
                      onMouseLeave={handleMegaLeave}
                    >
                      <Link
                        to={link.href}
                        onFocus={handleMegaEnter}
                        className={`relative inline-flex items-center gap-1.5 font-sans font-semibold text-[19px] lg:text-[20px] xl:text-[21.5px] tracking-tight transition-colors duration-200 cursor-pointer py-1.5 ${
                          isServiceActive || megaMenuOpen ? 'text-[#5D2E85]' : 'text-[#1F1F1D] hover:text-[#5D2E85]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <svg
                          className={`w-4 h-4 text-[#777772] transition-transform duration-200 ${
                            megaMenuOpen ? 'rotate-180 text-[#5D2E85]' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        {isServiceActive && (
                          <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
                        )}
                      </Link>
                    </div>
                  );
                }

                if (link.name === 'Specialties') {
                  const isSpecialtiesActive = location.pathname.startsWith('/specialties') || location.pathname.startsWith('/industries') || location.pathname.startsWith('/for-');
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={handleSpecialtiesEnter}
                      onMouseLeave={handleSpecialtiesLeave}
                    >
                      <Link
                        to={link.href}
                        onFocus={handleSpecialtiesEnter}
                        className={`relative inline-flex items-center gap-1.5 font-sans font-semibold text-[19px] lg:text-[20px] xl:text-[21.5px] tracking-tight transition-colors duration-200 cursor-pointer py-1.5 ${
                          isSpecialtiesActive || specialtiesMenuOpen ? 'text-[#5D2E85]' : 'text-[#1F1F1D] hover:text-[#5D2E85]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <svg
                          className={`w-4 h-4 text-[#777772] transition-transform duration-200 ${
                            specialtiesMenuOpen ? 'rotate-180 text-[#5D2E85]' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        {isSpecialtiesActive && (
                          <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
                        )}
                      </Link>

                      {/* Dropdown Panel for Specialties */}
                      <AnimatePresence>
                        {specialtiesMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[340px] bg-white border border-[#DEDED7] rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.12),0_4px_16px_rgba(93,46,133,0.06)] p-3 z-50 pointer-events-auto"
                          >
                            <div className="flex flex-col gap-1">
                              <Link
                                to="/industries"
                                onClick={() => setSpecialtiesMenuOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-[#F1E7F9]/60 group"
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center shrink-0 mt-0.5 text-base group-hover:bg-[#5D2E85] group-hover:text-white transition-colors">
                                  🏢
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-heading font-bold text-[14px] text-[#111111] group-hover:text-[#5D2E85] transition-colors">
                                      36 Industry Playbooks
                                    </span>
                                    <span className="text-[9px] font-mono font-bold uppercase text-[#5D2E85] bg-[#F1E7F9] px-1.5 py-0.5 rounded">
                                      36 Sectors
                                    </span>
                                  </div>
                                  <p className="text-[12px] text-[#5F5F5A] leading-snug mt-0.5">
                                    Search &amp; filter our 36 specialized sector growth frameworks.
                                  </p>
                                </div>
                              </Link>

                              <Link
                                to="/specialties"
                                onClick={() => setSpecialtiesMenuOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-[#F7F6F2] group"
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center shrink-0 mt-0.5 text-base group-hover:bg-[#5D2E85] group-hover:text-white transition-colors">
                                  ✨
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="font-heading font-bold text-[14px] text-[#111111] group-hover:text-[#5D2E85] transition-colors block">
                                    Specialties &amp; Industries Overview
                                  </span>
                                  <p className="text-[12px] text-[#5F5F5A] leading-snug mt-0.5">
                                    All industries &amp; bespoke MUA architectures on one page.
                                  </p>
                                </div>
                              </Link>

                              <Link
                                to="/for-makeup-artists"
                                onClick={() => setSpecialtiesMenuOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-[#F7F6F2] group"
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center shrink-0 mt-0.5 text-base group-hover:bg-[#5D2E85] group-hover:text-white transition-colors">
                                  💄
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="font-heading font-bold text-[14px] text-[#111111] group-hover:text-[#5D2E85] transition-colors block">
                                    For Makeup Artists &amp; Academies
                                  </span>
                                  <p className="text-[12px] text-[#5F5F5A] leading-snug mt-0.5">
                                    Bridal bookings, masterclasses &amp; viral reels.
                                  </p>
                                </div>
                              </Link>

                              <Link
                                to="/for-salons"
                                onClick={() => setSpecialtiesMenuOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-[#F7F6F2] group"
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center shrink-0 mt-0.5 text-base group-hover:bg-[#5D2E85] group-hover:text-white transition-colors">
                                  ✂️
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="font-heading font-bold text-[14px] text-[#111111] group-hover:text-[#5D2E85] transition-colors block">
                                    For Salons &amp; Clinic Chains
                                  </span>
                                  <p className="text-[12px] text-[#5F5F5A] leading-snug mt-0.5">
                                    Local Google Maps 3-Pack and appointment scale.
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive =
                  link.href === '/'
                    ? location.pathname === '/'
                    : location.pathname === link.href ||
                      location.pathname.startsWith(link.href + '/') ||
                      (link.href === '/case-studies' && location.pathname.startsWith('/case-study'));
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative font-sans font-semibold text-[19px] lg:text-[20px] xl:text-[21.5px] tracking-tight transition-colors duration-200 z-10 whitespace-nowrap py-1.5 ${
                      isActive ? 'text-[#5D2E85]' : 'text-[#1F1F1D] hover:text-[#5D2E85]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── Desktop Call Button (Solid circular button, #5D2E85, shadow elevation) ── */}
            <div style={itemEnter(0.35)} className="hidden lg:flex items-center shrink-0 relative z-10 ml-0 lg:ml-4">
              <a
                ref={ctaRef}
                href={TEL_LINK}
                title="Schedule a call: +91 90040 01800"
                aria-label="Call us"
                onMouseMove={onCtaMouseMove}
                onMouseLeave={onCtaMouseLeave}
                className="w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-[#5D2E85] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(93,46,133,0.35)] hover:shadow-[0_6px_22px_rgba(93,46,133,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out group/call cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current text-white transition-transform duration-200 group-hover/call:rotate-12" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
            </div>

          </div>

          {/* ── DESKTOP SERVICES MEGA-MENU PANEL (Rounded panel aligned with wide navbar) ── */}
          <AnimatePresence>
            {megaMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.99 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
                className="hidden lg:block absolute top-[calc(100%+10px)] left-0 right-0 w-full bg-white border border-[#DEDED7] rounded-[24px] shadow-[0_24px_54px_rgba(0,0,0,0.12),0_4px_16px_rgba(93,46,133,0.06)] px-8 xl:px-12 py-8 z-50 pointer-events-auto"
              >
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-3 gap-8 xl:gap-12">
                    {SERVICES_MEGA_MENU.map((col) => (
                      <div key={col.category} className="flex flex-col">
                        <div className="pb-3 mb-4 border-b border-[#F0EFEB]">
                          <span className="block font-sans font-bold text-xs uppercase tracking-wider text-[#777772]">
                            {col.category}
                          </span>
                          <span className="block text-xs text-[#5F5F5A] mt-0.5">
                            {col.description}
                          </span>
                        </div>

                        <div className="flex flex-col gap-3.5">
                          {col.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              onClick={() => setMegaMenuOpen(false)}
                              className="group/item flex items-start gap-3.5 p-2 -mx-2 rounded-xl transition-all duration-150 hover:bg-[#F7F6F2]"
                            >
                              <div className="w-9 h-9 rounded-lg bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 group-hover/item:bg-[#5D2E85] group-hover/item:text-white">
                                <MegaMenuIcon type={item.icon} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-heading font-semibold text-[14.5px] text-[#111111] group-hover/item:text-[#5D2E85] transition-colors leading-snug">
                                    {item.title}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5D2E85] bg-[#F1E7F9] px-2 py-0.5 rounded-md leading-none shrink-0">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[12.5px] text-[#5F5F5A] leading-relaxed mt-1 line-clamp-2">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Footer Band */}
                  <div className="mt-6 pt-4 border-t border-[#F0EFEB] flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#5F5F5A]">
                      Looking for custom MUA campaign execution?
                    </span>
                    <Link
                      to="/services"
                      onClick={() => setMegaMenuOpen(false)}
                      className="font-sans font-semibold text-[#5D2E85] hover:text-[#4C266D] inline-flex items-center gap-1.5 group/link"
                    >
                      <span>View all services &amp; deliverables</span>
                      <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
              className="fixed top-[66px] sm:top-[76px] left-3 right-3 sm:left-5 sm:right-5 max-w-lg mx-auto z-50 lg:hidden rounded-[22px] sm:rounded-[24px] bg-white border border-[#DEDED7] shadow-[0_20px_45px_-10px_rgba(17,17,17,0.16),0_10px_20px_-5px_rgba(93,46,133,0.06)] overflow-hidden flex flex-col max-h-[calc(100dvh-84px)]"
            >
              {/* Menu Items List */}
              <div className="flex-1 overflow-y-auto divide-y divide-[#F0EFEB]">
                {mobileNavLinks.map((link) => {
                  if (link.isDropdown) {
                    const isExpanded = expandedMobile[link.name];
                    const isAnyChildActive = link.children.some(c => location.pathname === c.href);

                    return (
                      <div key={link.name} className="flex flex-col">
                        {/* Expandable Top-Level Row */}
                        <button
                          type="button"
                          onClick={() => toggleAccordion(link.name)}
                          className={`w-full flex items-center justify-between px-5 sm:px-6 min-h-[52px] py-3.5 text-left transition-colors duration-150 hover:bg-[#5D2E85]/[0.04] active:bg-[#5D2E85]/[0.08] ${isAnyChildActive ? 'text-[#5D2E85] font-bold' : 'text-[#111111]'
                            }`}
                        >
                          <span className="font-heading font-semibold text-[15px] sm:text-[16px] tracking-tight">
                            {link.name}
                          </span>
                          <svg
                            className={`w-4 h-4 text-[#5F5F5A] transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#5D2E85]' : ''
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
                                      className={`flex items-center justify-between pl-9 pr-5 sm:pl-10 sm:pr-6 py-2.5 transition-colors duration-150 active:bg-[#5D2E85]/10 ${isSubActive
                                          ? 'text-[#5D2E85] font-bold bg-[#5D2E85]/[0.06]'
                                          : 'text-[#444444] hover:text-[#111111]'
                                        }`}
                                    >
                                      <span className="font-sans text-[13.5px] sm:text-[14px] font-medium tracking-normal">
                                        {sub.name}
                                      </span>
                                      <span className="text-[9px] sm:text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#5D2E85] bg-[#F1E7F9] px-2 py-0.5 rounded-full">
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

                  const isActive =
                    link.href === '/'
                      ? location.pathname === '/'
                      : location.pathname === link.href ||
                        location.pathname.startsWith(link.href + '/') ||
                        (link.href === '/case-studies' && location.pathname.startsWith('/case-study'));
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between px-5 sm:px-6 min-h-[52px] py-3.5 transition-colors duration-150 hover:bg-[#5D2E85]/[0.04] active:bg-[#5D2E85]/[0.08] ${isActive ? 'text-[#5D2E85] font-bold bg-[#5D2E85]/[0.03]' : 'text-[#111111]'
                        }`}
                    >
                      <span className="font-heading font-semibold text-[15px] sm:text-[16px] tracking-tight">
                        {link.name}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
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
                  className="w-full flex items-center justify-center gap-2 h-11 sm:h-12 rounded-full font-heading font-bold text-xs uppercase tracking-widest text-white bg-[#111111] hover:bg-[#5D2E85] active:bg-[#5D2E85] active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(17,17,17,0.12)]"
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
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-[#DEDED7] text-[#5F5F5A] bg-white hover:text-[#5D2E85] hover:border-[#5D2E85]/40 transition-all"
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
          background: '#5D2E85',
        }}
      />
    </div>
  );
}