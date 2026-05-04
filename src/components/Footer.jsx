import { Link } from 'react-router-dom';
import logo from '../image.png';


const footerLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Results', to: '/results' },
  { label: 'About', to: '/about' },
];

const socials = [
  {
    label: 'Instagram', color: '#FF3AF2',
    href: 'https://www.instagram.com/_juntoz',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'LinkedIn', color: '#00F5D4',
    href: 'https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
];

export default function Footer() {
  /* ── 3D tilt for contact cards ── */
  const tilt = (e) => {
    const card = e.currentTarget;
    if (!card._raf) {
      card._raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 22;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 22;
        card.style.transform = `perspective(500px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.05) translateZ(8px)`;
        card._raf = null;
      });
    }
  };
  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
    card.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale(1) translateZ(0)';
    setTimeout(() => { card.style.transition = ''; }, 500);
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a14 0%, #070710 60%, #050508 100%)' }}
    >
      <style>{`
        @keyframes footer-pulse {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50%       { opacity: 0.22; transform: scale(1.05); }
        }
        @keyframes juntoz-breathe {
          0%, 100% { text-shadow: 0 0 60px rgba(123,47,255,0.3), 0 0 120px rgba(255,58,242,0.15); }
          50%       { text-shadow: 0 0 100px rgba(123,47,255,0.55), 0 0 200px rgba(255,58,242,0.28), 0 0 300px rgba(0,245,212,0.1); }
        }
        @keyframes status-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        @keyframes gradient-x {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .juntoz-breathe { animation: juntoz-breathe 5s ease-in-out infinite; }
        .status-blink   { animation: status-blink 2s ease-in-out infinite; }
        .gradient-cta-bg {
          background: linear-gradient(135deg, #FF3AF2, #7B2FFF, #00F5D4, #FF3AF2);
          background-size: 300% 300%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sweep {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
      `}</style>

      {/* ── Ambient orbs (brighter) ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: '800px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(123,47,255,0.22) 0%, transparent 65%)',
        animation: 'footer-pulse 8s ease-in-out infinite',
      }} />
      <div className="absolute top-[30%] left-0 pointer-events-none" style={{
        width: '400px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(255,58,242,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div className="absolute top-[30%] right-0 pointer-events-none" style={{
        width: '400px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(0,245,212,0.1) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      {/* ── Top rainbow divider (brighter) ── */}
      <div className="w-full h-[2px]" style={{
        background: 'linear-gradient(to right, transparent 0%, #FF3AF2 25%, #7B2FFF 50%, #00F5D4 75%, transparent 100%)',
      }} />

      {/* ══════════════════════════════════════
           GET IN TOUCH
      ══════════════════════════════════════ */}
      <div className="relative px-5 pt-16 pb-12 flex flex-col items-center text-center" style={{ zIndex: 10 }}>

        {/* Label */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-2 opacity-60" />
          <p className="font-body text-accent-2 text-xs font-bold uppercase tracking-[0.25em]">Get In Touch</p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-2 opacity-60" />
        </div>

        {/* Headline */}
        <h2
          className="font-heading font-black uppercase leading-[0.9] tracking-tighter mb-4 text-white"
          style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
        >
          Let's Talk About<br />
          <span style={{
            background: 'linear-gradient(120deg, #FF3AF2, #7B2FFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Your Growth.</span>
        </h2>

        <p className="font-body text-white/45 text-base max-w-md mx-auto mb-10 leading-relaxed">
          Whether you have a question, a project in mind, or just want to explore — we're easy to reach.
        </p>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 w-full max-w-2xl">

          {/* Email */}
          <a
            href="mailto:hello@juntoz.com"
            className="group flex items-center gap-3 flex-1 min-w-0 px-5 py-4 rounded-2xl border border-white/8 bg-white/3 hover:border-accent-2/30 hover:bg-accent-2/5 transition-all duration-300"
            onMouseEnter={(e) => { e.currentTarget.style.willChange = 'transform'; }}
            onMouseLeave={(e) => { resetTilt(e); e.currentTarget.style.willChange = 'auto'; }}
            onMouseMove={tilt}
          >
            <div className="w-9 h-9 rounded-xl bg-accent-2/10 border border-accent-2/20 flex items-center justify-center shrink-0 group-hover:bg-accent-2/20 transition-colors duration-300">
              <svg className="w-4 h-4 text-accent-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left min-w-0">
              <p className="font-body text-white/35 text-[10px] uppercase tracking-widest">Email</p>
              <p className="font-body text-white/70 text-sm font-semibold group-hover:text-white transition-colors duration-300 truncate">hello@juntoz.com</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919004001800"
            className="group flex items-center gap-3 flex-1 min-w-0 px-5 py-4 rounded-2xl border border-white/8 bg-white/3 hover:border-accent-1/30 hover:bg-accent-1/5 transition-all duration-300"
            onMouseEnter={(e) => { e.currentTarget.style.willChange = 'transform'; }}
            onMouseLeave={(e) => { resetTilt(e); e.currentTarget.style.willChange = 'auto'; }}
            onMouseMove={tilt}
          >
            <div className="w-9 h-9 rounded-xl bg-accent-1/10 border border-accent-1/20 flex items-center justify-center shrink-0 group-hover:bg-accent-1/20 transition-colors duration-300">
              <svg className="w-4 h-4 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-left min-w-0">
              <p className="font-body text-white/35 text-[10px] uppercase tracking-widest">Call Us</p>
              <p className="font-body text-white/70 text-sm font-semibold group-hover:text-white transition-colors duration-300 whitespace-nowrap">+91 90040 01800</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/_juntoz"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 flex-1 min-w-0 px-5 py-4 rounded-2xl border border-white/8 bg-white/3 hover:border-[#FF3AF2]/30 hover:bg-[#FF3AF2]/5 transition-all duration-300"
            onMouseEnter={(e) => { e.currentTarget.style.willChange = 'transform'; }}
            onMouseLeave={(e) => { resetTilt(e); e.currentTarget.style.willChange = 'auto'; }}
            onMouseMove={tilt}
          >
            <div className="w-9 h-9 rounded-xl bg-[#FF3AF2]/10 border border-[#FF3AF2]/20 flex items-center justify-center shrink-0 group-hover:bg-[#FF3AF2]/20 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#FF3AF2] fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div className="text-left min-w-0">
              <p className="font-body text-white/35 text-[10px] uppercase tracking-widest">Instagram</p>
              <p className="font-body text-white/70 text-sm font-semibold group-hover:text-white transition-colors duration-300">@_juntoz</p>
            </div>
          </a>

        </div>
      </div>


      {/* ── Divider ── */}
      <div className="mx-5 sm:mx-auto sm:max-w-5xl h-px" style={{
        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 50%, transparent)',
      }} />

      {/* ══════════════════════════════════════
           INFO GRID
      ══════════════════════════════════════ */}
      <div className="container mx-auto px-5 sm:px-6 max-w-5xl relative" style={{ zIndex: 10 }}>
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">

          {/* Brand col — spans full width on mobile */}
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={logo}
                alt="Juntoz"
                className="h-14 w-auto transition-opacity duration-300"
                style={{ opacity: 0.85, filter: 'brightness(0) invert(1) sepia(1) hue-rotate(225deg) saturate(4) brightness(1.4)', mixBlendMode: 'screen' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.85'}
              />
            </Link>
            <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
              India's most focused growth partner for beauty brands, salons, and makeup artists.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = s.color + '80';
                    e.currentTarget.style.boxShadow = `0 0 20px ${s.color}40`;
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.background = `${s.color}12`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Explore
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm inline-flex items-center gap-2 transition-all duration-200"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                  >
                    <span className="w-3 h-px inline-block" style={{ background: '#00F5D4', opacity: 0.7 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em]" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Contact
            </p>
            <ul className="space-y-3">
              {[
                { text: 'Mumbai, India', href: null },
                { text: 'hello@juntoz.com', href: 'mailto:hello@juntoz.com' },
                { text: '+91 90040 01800', href: 'tel:+919004001800' },
              ].map((item, i) => (
                <li key={i}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-sm transition-colors duration-200 break-all"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="font-body text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Juntoz Agency. All rights reserved.
          </p>
          <p className="font-body text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Beauty brands that mean business.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
           JUNTOZ WATERMARK
      ══════════════════════════════════════ */}
      <div
        className="relative w-full overflow-hidden pointer-events-none select-none"
        style={{ height: 'clamp(80px, 18vw, 300px)' }}
      >
        {/* Pink bloom */}
        <div className="absolute bottom-0 left-0 right-0" style={{
          height: '80%',
          background: 'radial-gradient(ellipse 90% 100% at 50% 120%, rgba(255,58,242,0.18) 0%, transparent 60%)',
        }} />
        {/* Purple core */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{
          width: '65%', height: '70%',
          background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(123,47,255,0.5) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }} />
        {/* Cyan edge */}
        <div className="absolute bottom-0 left-0 right-0" style={{
          height: '35%',
          background: 'radial-gradient(ellipse 40% 100% at 50% 100%, rgba(0,245,212,0.14) 0%, transparent 100%)',
        }} />

        {/* Text */}
        <div
          className="juntoz-breathe absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading font-black uppercase"
          style={{
            fontSize: 'clamp(80px, 22vw, 380px)',
            lineHeight: 0.8,
            letterSpacing: '-0.03em',
            color: '#070710',               /* fills match bg so only stroke shows */
            WebkitTextStroke: '1.5px rgba(255,255,255,0.18)',
          }}
        >
          JUNTOZ
        </div>

        {/* Scanlines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)',
        }} />
        {/* Bottom void */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, #050508 0%, #050508 8%, rgba(5,5,8,0.4) 35%, transparent 65%)',
        }} />
        {/* Top blend */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, #070710 0%, transparent 20%)',
        }} />
      </div>

    </footer>
  );
}
