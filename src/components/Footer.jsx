import { Link } from 'react-router-dom';
import logo from './logo.webp';

const footerServices = [
  { label: 'Growth Strategy & Roadmaps', to: '/services' },
  { label: 'Performance & Paid Ads', to: '/services' },
  { label: 'Google Business Profile (GMB)', to: '/google-business-profile' },
  { label: 'Brand & Professional Shoots', to: '/services' },
  { label: 'Web Design & Conversion CRO', to: '/services' },
];

const footerSpecialties = [
  { label: 'Makeup Artists & Academies', to: '/for-makeup-artists' },
  { label: 'Salons & Aesthetic Clinics', to: '/for-salons' },
  { label: 'All Specializations & Industries', to: '/specialties' },
];

const footerCompany = [
  { label: 'Selected Case Studies', to: '/case-studies' },
  { label: 'About Juntoz & Team', to: '/about' },
  { label: 'Book a Strategy Call', to: '/contact' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_juntoz',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#111111] border-t border-white/12"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 pt-12 sm:pt-18 pb-10 sm:pb-12 space-y-10 sm:space-y-14">

        {/* ════ SECTION 1: HEADER & INTERACTIVE CONTACT CARDS ════ */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-12 border-b border-white/12 pb-12 sm:pb-16">
          <div className="text-center lg:text-left space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
              <span className="font-sans font-semibold text-xs uppercase tracking-wider text-white/90">Direct Communication</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-white">
              Let's Talk About <br />
              <span className="text-[#5D2E85]">Your Growth.</span>
            </h2>
            <p className="font-body text-white/65 text-sm max-w-md">
              Whether you have a specific bridal campaign, need localized growth funnels, or want to audit your marketing performance—we're easy to reach.
            </p>
          </div>

          {/* Interactive contact widgets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full lg:max-w-2xl">
            {/* Email card */}
            <a
              href="mailto:Sujal.Mehta@juntoz.in"
              className="group flex flex-row sm:flex-col items-center sm:items-start justify-between p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/12 bg-[#1A1A1A] hover:border-[#5D2E85]/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mb-0 sm:mb-6 transition-colors duration-300 group-hover:bg-[#5D2E85]/15 group-hover:border-[#5D2E85]/30">
                <svg className="w-4 h-4 text-white/80 group-hover:text-[#5D2E85] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 ml-3.5 sm:ml-0 sm:w-full">
                <span className="block text-[10px] text-white/50 uppercase tracking-wider font-sans font-bold mb-0.5 sm:mb-1">Email Us</span>
                <span className="block text-xs font-sans font-semibold text-white/90 group-hover:text-white truncate">Sujal.Mehta@juntoz.in</span>
              </div>
              <svg className="w-4 h-4 block sm:hidden shrink-0 ml-2 text-white/30 group-hover:text-[#5D2E85] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Phone card */}
            <a
              href="tel:+919004001800"
              className="group flex flex-row sm:flex-col items-center sm:items-start justify-between p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/12 bg-[#1A1A1A] hover:border-[#5D2E85]/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mb-0 sm:mb-6 transition-colors duration-300 group-hover:bg-[#5D2E85]/15 group-hover:border-[#5D2E85]/30">
                <svg className="w-4 h-4 text-white/80 group-hover:text-[#5D2E85] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 ml-3.5 sm:ml-0 sm:w-full">
                <span className="block text-[10px] text-white/50 uppercase tracking-wider font-sans font-bold mb-0.5 sm:mb-1">Call Us</span>
                <span className="block text-xs font-sans font-semibold text-white/90 group-hover:text-white truncate">+91 90040 01800</span>
              </div>
              <svg className="w-4 h-4 block sm:hidden shrink-0 ml-2 text-white/30 group-hover:text-[#5D2E85] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Instagram card */}
            <a
              href="https://www.instagram.com/_juntoz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-row sm:flex-col items-center sm:items-start justify-between p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/12 bg-[#1A1A1A] hover:border-[#5D2E85]/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mb-0 sm:mb-6 transition-colors duration-300 group-hover:bg-[#5D2E85]/15 group-hover:border-[#5D2E85]/30">
                <svg className="w-4 h-4 text-white/80 group-hover:text-[#5D2E85] transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 ml-3.5 sm:ml-0 sm:w-full">
                <span className="block text-[10px] text-white/50 uppercase tracking-wider font-sans font-bold mb-0.5 sm:mb-1">Direct Message</span>
                <span className="block text-xs font-sans font-semibold text-white/90 group-hover:text-white truncate">@_juntoz</span>
              </div>
              <svg className="w-4 h-4 block sm:hidden shrink-0 ml-2 text-white/30 group-hover:text-[#5D2E85] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ════ SECTION 2: MAP / INFO GRID ════ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
          {/* Logo & Tagline Column */}
          <div className="md:col-span-4 space-y-5 sm:space-y-6">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-block">
              <img
                src={logo}
                alt="Juntoz"
                loading="lazy"
                decoding="async"
                width="240"
                height="60"
                className="w-[180px] sm:w-[220px] md:w-[240px] h-auto object-contain transition-opacity duration-200 hover:opacity-90"
              />
            </Link>
            <p className="font-body text-white/65 text-xs sm:text-sm leading-relaxed max-w-sm">
              A growth-focused digital marketing agency helping ambitious businesses build authority, capture search intent, generate qualified leads, and scale predictably.
            </p>
            {/* Social Icons row */}
            <div className="flex gap-2.5 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/12 text-white/70 bg-[#1A1A1A] hover:text-[#5D2E85] hover:border-[#5D2E85]/40 transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid: 2-Columns on Mobile, 4-Columns on Desktop */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-8">
            {/* Left Column on Mobile: Capabilities & Specialties */}
            <div className="space-y-8 md:space-y-0">
              <div className="space-y-3 sm:space-y-4">
                <span className="block font-sans font-bold text-xs uppercase tracking-wider text-white">Capabilities</span>
                <ul className="space-y-2.5 sm:space-y-3">
                  {footerServices.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        onClick={() => window.scrollTo(0, 0)}
                        className="font-body text-xs sm:text-sm text-white/70 hover:text-[#5D2E85] transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialties (Mobile only - stacked under Capabilities on left side) */}
              <div className="md:hidden space-y-3 pt-2">
                <span className="block font-sans font-bold text-xs uppercase tracking-wider text-white">Specialties</span>
                <ul className="space-y-2.5">
                  {footerSpecialties.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        onClick={() => window.scrollTo(0, 0)}
                        className="font-body text-xs sm:text-sm text-white/70 hover:text-[#5D2E85] transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specialties (Desktop only - in its own column) */}
            <div className="hidden md:block space-y-3 sm:space-y-4">
              <span className="block font-sans font-bold text-xs uppercase tracking-wider text-white">Specialties</span>
              <ul className="space-y-2.5 sm:space-y-3">
                {footerSpecialties.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      onClick={() => window.scrollTo(0, 0)}
                      className="font-body text-xs sm:text-sm text-white/70 hover:text-[#5D2E85] transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column on Mobile: Company & Office Location */}
            <div className="space-y-8 md:space-y-0">
              <div className="space-y-3 sm:space-y-4">
                <span className="block font-sans font-bold text-xs uppercase tracking-wider text-white">Company</span>
                <ul className="space-y-2.5 sm:space-y-3">
                  {footerCompany.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        onClick={() => window.scrollTo(0, 0)}
                        className="font-body text-xs sm:text-sm text-white/70 hover:text-[#5D2E85] transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Office Location (Mobile only - stacked under Company on right side) */}
              <div className="md:hidden space-y-3 pt-2">
                <span className="block font-sans font-bold text-xs uppercase tracking-wider text-white">Office Location</span>
                <ul className="space-y-2.5 font-body text-xs text-white/70">
                  <li>
                    <span className="block text-[10px] text-white/40 uppercase tracking-widest font-sans font-bold">Studio Office</span>
                    <span className="block mt-0.5">Mumbai, MH, India</span>
                  </li>
                  <li>
                    <span className="block text-[10px] text-white/40 uppercase tracking-widest font-sans font-bold">Hours</span>
                    <span className="block mt-0.5">Mon - Sat: 10AM - 7PM</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Details Column (Desktop only - in its own column) */}
            <div className="hidden md:block space-y-3 sm:space-y-4">
              <span className="block font-sans font-bold text-xs uppercase tracking-wider text-white">Office Location</span>
              <ul className="space-y-3 font-body text-xs sm:text-sm text-white/70">
                <li>
                  <span className="block text-[10px] text-white/40 uppercase tracking-widest font-sans font-bold">Studio Office</span>
                  <span className="block mt-0.5">Mumbai, MH, India</span>
                </li>
                <li>
                  <span className="block text-[10px] text-white/40 uppercase tracking-widest font-sans font-bold">Hours</span>
                  <span className="block mt-0.5">Mon - Sat: 10AM - 7PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ════ SECTION 3: COPYRIGHT & LEGAL ════ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 pt-5 sm:pt-7 text-center sm:text-left border-t border-white/15">
          <p className="font-body text-xs sm:text-sm text-white/85 tracking-wider">
            © {new Date().getFullYear()} Juntoz Agency. All rights reserved.
          </p>
          <p className="font-body text-[11px] sm:text-xs uppercase tracking-widest text-white/75 font-medium">
            Where Strategy Meets Growth.
          </p>
        </div>

      </div>
    </footer>
  );
}
