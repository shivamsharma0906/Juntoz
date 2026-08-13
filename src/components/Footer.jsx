import { Link } from 'react-router-dom';
import logo from './logo.webp';

const footerServices = [
  { label: 'For Makeup Artists', to: '/for-makeup-artists' },
  { label: 'For Salons & Clinics', to: '/for-salons' },
  { label: 'Our Services', to: '/services' },
];

const footerCompany = [
  { label: 'Our Work', to: '/work' },
  { label: 'Client Results', to: '/results' },
  { label: 'About Us', to: '/about' },
  { label: 'Insights & Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const socials = [
  {
    label: 'Instagram',
    color: '#FF3AF2',
    href: 'https://www.instagram.com/_juntoz',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'LinkedIn',
    color: '#00F5D4',
    href: 'https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
];

export default function Footer() {
  /* ── 3D tilt for cards ── */
  const tilt = (e) => {
    const card = e.currentTarget;
    if (!card._raf) {
      card._raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
        card.style.transform = `perspective(500px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.03)`;
        card._raf = null;
      });
    }
  };
  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.4s ease-out';
    card.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale(1)';
    setTimeout(() => { card.style.transition = ''; }, 400);
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#050508] border-t border-white/5"
    >
      <style>{`
        @keyframes footer-pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50%       { opacity: 0.18; transform: scale(1.03); }
        }
        @keyframes juntoz-breathe {
          0%, 100% { text-shadow: 0 0 50px rgba(123,47,255,0.25), 0 0 100px rgba(255,58,242,0.12); }
          50%       { text-shadow: 0 0 80px rgba(123,47,255,0.45), 0 0 160px rgba(255,58,242,0.22); }
        }
        @keyframes circular-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes circular-spin-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        .footer-juntoz-breathe { animation: juntoz-breathe 6s ease-in-out infinite; }
      `}</style>

      {/* ── Ambient Glow Backgrounds ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full pointer-events-none opacity-20 -z-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(123,47,255,0.25) 0%, transparent 70%)',
          animation: 'footer-pulse 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[350px] rounded-full pointer-events-none opacity-15 -z-10 blur-[50px]"
        style={{ background: 'radial-gradient(ellipse, rgba(255,58,242,0.15) 0%, transparent 75%)' }}
      />

      {/* ── Animated Gradient Border Header Divider ── */}
      <div className="w-full h-[1px]" style={{
        background: 'linear-gradient(to right, transparent 0%, #FF3AF2 20%, #7B2FFF 50%, #00F5D4 80%, transparent 100%)',
      }} />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 pt-10 sm:pt-16 pb-12 space-y-12 sm:space-y-16">

        {/* ════ SECTION 1: HEADER & INTERACTIVE CONTACT CARDS ════ */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-12 border-b border-white/5 pb-12 sm:pb-16">
          <div className="text-center lg:text-left space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00F5D4]/25 bg-[#00F5D4]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
              <span className="font-heading font-bold text-[9px] uppercase tracking-wider text-[#00F5D4]">Start Your System</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-none text-white">
              Let's Talk About <br />
              <span style={{
                background: 'linear-gradient(120deg, #FF3AF2 20%, #7B2FFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Your Growth.</span>
            </h2>
            <p className="font-body text-white/50 text-sm max-w-md">
              Whether you have a specific project, need localized SEO, or want to audit your marketing performance—we're easy to reach.
            </p>
          </div>

          {/* Interactive contact widgets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full lg:max-w-2xl">
            {/* Email card */}
            <a
              href="mailto:Sujal.Mehta@juntoz.in"
              className="group flex flex-row sm:flex-col items-center sm:items-start justify-between p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/5 bg-[#0E0E1C]/35 hover:border-[#00F5D4]/40 hover:bg-[#0E0E1C]/60 active:scale-[0.98] transition-all duration-300 relative overflow-hidden"
              onMouseEnter={(e) => { e.currentTarget.style.willChange = 'transform'; }}
              onMouseLeave={(e) => { resetTilt(e); e.currentTarget.style.willChange = 'auto'; }}
              onMouseMove={tilt}
            >
              <div className="w-10 h-10 rounded-xl sm:rounded-2xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center shrink-0 mb-0 sm:mb-6 transition-colors duration-300 group-hover:bg-[#00F5D4]/20">
                <svg className="w-4 h-4 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 ml-3.5 sm:ml-0 sm:w-full">
                <span className="block text-[9px] text-white/60 uppercase tracking-widest font-heading font-bold mb-0.5 sm:mb-1">Email Us</span>
                <span className="block text-xs font-heading font-black text-white/80 group-hover:text-white truncate">Sujal.Mehta@juntoz.in</span>
              </div>
              <svg className="w-4 h-4 block sm:hidden shrink-0 ml-2 text-white/30 group-hover:text-[#00F5D4] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Phone card */}
            <a
              href="tel:+919004001800"
              className="group flex flex-row sm:flex-col items-center sm:items-start justify-between p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/5 bg-[#0E0E1C]/35 hover:border-[#FF3AF2]/40 hover:bg-[#0E0E1C]/60 active:scale-[0.98] transition-all duration-300 relative overflow-hidden"
              onMouseEnter={(e) => { e.currentTarget.style.willChange = 'transform'; }}
              onMouseLeave={(e) => { resetTilt(e); e.currentTarget.style.willChange = 'auto'; }}
              onMouseMove={tilt}
            >
              <div className="w-10 h-10 rounded-xl sm:rounded-2xl bg-[#FF3AF2]/10 border border-[#FF3AF2]/20 flex items-center justify-center shrink-0 mb-0 sm:mb-6 transition-colors duration-300 group-hover:bg-[#FF3AF2]/20">
                <svg className="w-4 h-4 text-[#FF3AF2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 ml-3.5 sm:ml-0 sm:w-full">
                <span className="block text-[9px] text-white/60 uppercase tracking-widest font-heading font-bold mb-0.5 sm:mb-1">Call Us</span>
                <span className="block text-xs font-heading font-black text-white/80 group-hover:text-white truncate">+91 90040 01800</span>
              </div>
              <svg className="w-4 h-4 block sm:hidden shrink-0 ml-2 text-white/30 group-hover:text-[#FF3AF2] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Instagram card */}
            <a
              href="https://www.instagram.com/_juntoz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-row sm:flex-col items-center sm:items-start justify-between p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/5 bg-[#0E0E1C]/35 hover:border-[#7B2FFF]/40 hover:bg-[#0E0E1C]/60 active:scale-[0.98] transition-all duration-300 relative overflow-hidden"
              onMouseEnter={(e) => { e.currentTarget.style.willChange = 'transform'; }}
              onMouseLeave={(e) => { resetTilt(e); e.currentTarget.style.willChange = 'auto'; }}
              onMouseMove={tilt}
            >
              <div className="w-10 h-10 rounded-xl sm:rounded-2xl bg-[#7B2FFF]/10 border border-[#7B2FFF]/20 flex items-center justify-center shrink-0 mb-0 sm:mb-6 transition-colors duration-300 group-hover:bg-[#7B2FFF]/20">
                <svg className="w-4 h-4 text-[#7B2FFF] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 ml-3.5 sm:ml-0 sm:w-full">
                <span className="block text-[9px] text-white/60 uppercase tracking-widest font-heading font-bold mb-0.5 sm:mb-1">Direct Message</span>
                <span className="block text-xs font-heading font-black text-white/80 group-hover:text-white truncate">@_juntoz</span>
              </div>
              <svg className="w-4 h-4 block sm:hidden shrink-0 ml-2 text-white/30 group-hover:text-[#7B2FFF] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ════ SECTION 2: MAP / INFO GRID ════ */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
          {/* Logo & Tagline Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 space-y-5 sm:space-y-6">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-block">
              <img
                src={logo}
                alt="Juntoz"
                loading="lazy"
                decoding="async"
                width="224"
                height="56"
                className="h-10 sm:h-12 w-auto transition-opacity duration-300 hover:opacity-80"
              />
            </Link>
            <p className="font-body text-white/50 text-xs sm:text-sm leading-relaxed max-w-sm">
              India's premium dedicated digital growth partner engineering local SEO, location-targeted ads, and custom loyalty channels for clinics, salons, and beauty brands.
            </p>
            {/* Social Icons row */}
            <div className="flex gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 text-white/60 bg-white/5 active:scale-95 transition-all duration-300"
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = s.color + '80';
                    e.currentTarget.style.boxShadow = `0 0 15px ${s.color}35`;
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.background = `${s.color}10`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Capabilities Links */}
          <div className="col-span-1 md:col-span-3 space-y-3 sm:space-y-4">
            <span className="block font-heading font-bold text-xs uppercase tracking-wider text-white/60">Capabilities</span>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerServices.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="group font-body text-xs sm:text-sm text-white/60 hover:text-[#00F5D4] transition-colors duration-300 flex items-center gap-2 py-0.5"
                  >
                    <span className="w-2 h-[1px] bg-white/20 transition-all duration-300 group-hover:w-4 group-hover:bg-[#00F5D4]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1 md:col-span-3 space-y-3 sm:space-y-4">
            <span className="block font-heading font-bold text-xs uppercase tracking-wider text-white/60">Company</span>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerCompany.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="group font-body text-xs sm:text-sm text-white/60 hover:text-[#FF3AF2] transition-colors duration-300 flex items-center gap-2 py-0.5"
                  >
                    <span className="w-2 h-[1px] bg-white/20 transition-all duration-300 group-hover:w-4 group-hover:bg-[#FF3AF2]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-2 space-y-3 sm:space-y-4 pr-16 sm:pr-0">
            <span className="block font-heading font-bold text-xs uppercase tracking-wider text-white/60">HQ Location</span>
            <ul className="grid grid-cols-2 sm:block gap-4 space-y-0 sm:space-y-3 font-body text-xs sm:text-sm text-white/60">
              <li>
                <span className="block text-[10px] text-white/35 uppercase tracking-widest font-heading font-bold">Studio Office</span>
                <span className="block mt-0.5">Mumbai, MH, India</span>
              </li>
              <li>
                <span className="block text-[10px] text-white/35 uppercase tracking-widest font-heading font-bold">Hours</span>
                <span className="block mt-0.5">Mon - Sat: 10AM - 7PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ════ SECTION 3: COPYRIGHT & LEGAL ════ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 text-center sm:text-left border-t border-white/5">
          <p className="font-body text-xs text-white/60 tracking-wider">
            © {new Date().getFullYear()} Juntoz Agency. All rights reserved.
          </p>
          <p className="font-body text-[10px] sm:text-xs uppercase tracking-widest text-white/30">
            Where Strategy Meets Growth.
          </p>
        </div>

      </div>

      {/* ════ SECTION 4: GIGANTIC WATERMARK BACKGROUND ════ */}
      <div
        className="relative w-full overflow-hidden pointer-events-none select-none mt-4 sm:mt-0"
        style={{ height: 'clamp(90px, 17vw, 240px)' }}
      >
        {/* Color glows behind text */}
        <div className="absolute bottom-0 left-0 right-0 h-[85%] bg-gradient-to-t from-[#FF3AF2]/15 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-gradient-to-t from-[#7B2FFF]/35 to-transparent blur-xl" />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#00F5D4]/15 to-transparent" />

        {/* Scaled breathing text */}
        <div
          className="footer-juntoz-breathe absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading font-black uppercase text-center"
          style={{
            fontSize: 'clamp(72px, 18.5vw, 240px)',
            lineHeight: 0.72,
            letterSpacing: '-0.03em',
            color: '#050508',
            WebkitTextStroke: 'clamp(1.5px, 0.4vw, 2.5px) rgba(255,255,255,0.32)',
            filter: 'drop-shadow(0 0 25px rgba(123,47,255,0.3))',
          }}
        >
          JUNTOZ
        </div>
      </div>

    </footer>
  );
}
