import { Link } from 'react-router-dom';
import logo from '../image.png';

const WA_HARD = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const footerLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Work',     to: '/work'     },
  { label: 'Results',  to: '/results'  },
  { label: 'About',    to: '/about'    },
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
           CTA ZONE (INSANE LEVEL)
      ══════════════════════════════════════ */}
      <div className="relative px-5 pt-20 pb-16 flex flex-col items-center text-center group" style={{ zIndex: 10 }}>

        {/* Ambient Hover Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-1/5 rounded-full blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

        {/* Status badge */}
        <div className="flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:scale-105 transition-transform duration-500">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-green-400">
            Currently Accepting Clients
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-heading font-black uppercase leading-[0.9] tracking-tighter mb-8"
          style={{ fontSize: 'clamp(2.2rem, 8vw, 7.5rem)', color: '#ffffff', maxWidth: '900px' }}
        >
          <span className="inline-block animate-[slideUp_1s_ease-out_forwards] mr-[0.25em] mb-2 sm:mb-0">Ready to</span>
          
          <span className="inline-block relative animate-[slideUp_1s_ease-out_0.1s_forwards] opacity-0 mr-[0.25em] mb-2 sm:mb-0">
            <span style={{
              WebkitTextStroke: '2px #FF3AF2',
              color: 'transparent',
              textShadow: '0 0 60px rgba(255,58,242,0.8)',
            }}>
              Dominate
            </span>
            {/* Added intense backdrop glow to keep it insane */}
            <span className="absolute inset-0 bg-[#FF3AF2] blur-[40px] opacity-20 z-[-1] animate-pulse" />
          </span>
          
          <br className="sm:hidden" />
          
          <span className="inline-block animate-[slideUp_1s_ease-out_0.2s_forwards] opacity-0">Your Market?</span>
        </h2>

        {/* Subtitle */}
        <p className="font-body max-w-xl leading-relaxed animate-[slideUp_1s_ease-out_0.4s_forwards] opacity-0" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'rgba(255,255,255,0.65)',
        }}>
          One strategy call is all it takes. No fluff — just a clear growth plan for your beauty brand.
        </p>

        {/* CTA Button */}
        <div className="mt-12 relative animate-[slideUp_1s_ease-out_0.6s_forwards] opacity-0">
          <div className="absolute inset-0 rounded-full blur-2xl scale-110 gradient-cta-bg opacity-40 group-hover:opacity-70 group-hover:blur-3xl transition-all duration-500 pointer-events-none" />
          <a
            href={WA_HARD}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 rounded-full font-heading font-black uppercase tracking-widest text-white transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden group/btn"
            style={{
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              padding: 'clamp(16px, 3vw, 24px) clamp(32px, 6vw, 56px)',
              background: 'linear-gradient(135deg, #FF3AF2 0%, #7B2FFF 100%)',
              boxShadow: '0 0 40px rgba(255,58,242,0.6), 0 0 80px rgba(123,47,255,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}
          >
            {/* Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover/btn:animate-[sweep_1.5s_ease-in-out_infinite]" />
            <svg className="w-6 h-6 shrink-0 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.875L.057 23.386a.5.5 0 0 0 .614.599l5.728-1.539A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 1 1 12 2.25 9.75 9.75 0 0 1 12 21.75z"/>
            </svg>
            <span className="relative z-10">Book a Strategy Call</span>
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 animate-[slideUp_1s_ease-out_0.8s_forwards] opacity-0">
          {[
            { icon: '🚀', text: '200+ Brands' },
            { icon: '📈', text: '3× Avg. Growth' },
            { icon: '⭐', text: '5.0 Rated' },
          ].map((t, i) => (
            <span key={i} className="flex items-center gap-2 font-body text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/50 hover:text-accent-2 transition-colors duration-300">
              <span className="text-sm sm:text-base">{t.icon}</span>{t.text}
            </span>
          ))}
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
                style={{ opacity: 0.85 }}
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
                { text: 'Mumbai, India',    href: null },
                { text: 'hello@juntoz.com', href: 'mailto:hello@juntoz.com' },
                { text: '+91 90040 01800',  href: 'tel:+919004001800' },
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
