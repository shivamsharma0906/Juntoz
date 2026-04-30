import { useState, useEffect } from 'react';
import logo from '../image.png';

const navLinks = [
  { name: 'Services', href: '#services', color: 'hover:bg-accent-1 hover:text-white' },
  { name: 'Work', href: '#portfolio', color: 'hover:bg-accent-2 hover:text-black' },
  { name: 'Results', href: '#results', color: 'hover:bg-accent-3 hover:text-black' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`
          flex items-center justify-between px-6 py-4 rounded-full border-4 border-accent-3 transition-all duration-300
          ${scrolled ? 'bg-background/90 backdrop-blur-xl shadow-hard-1' : 'bg-background shadow-[0_0_40px_rgba(255,58,242,0.2)]'}
        `}>

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src={logo} alt="Juntoz Logo" className="h-10 md:h-12 w-auto group-hover:scale-110 transition-transform" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2 bg-muted rounded-full p-1 border-2 border-dashed border-accent-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-heading font-bold uppercase tracking-widest text-sm text-white px-6 py-2 rounded-full transition-all duration-300 ${link.color}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Socials & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/_juntoz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-1 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-2 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <a href="https://wa.me/919004001800" target="_blank" rel="noopener noreferrer" className="bg-accent-1 text-white font-heading font-black uppercase text-sm px-6 py-3 rounded-full border-2 border-accent-3 hover:bg-accent-3 hover:text-black hover:border-accent-1 transition-colors shadow-[4px_4px_0_#00F5D4] hover:shadow-[2px_2px_0_#FF3AF2] hover:translate-y-1 hover:translate-x-1">
              LET'S TALK
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white font-heading font-black bg-accent-5 px-4 py-2 rounded-full border-2 border-accent-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'X' : 'MENU '}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-background border-4 border-accent-1 rounded-[32px] p-6 flex flex-col gap-4 shadow-hard-2 animate-[float_0.3s_ease-out]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading font-black text-3xl text-white uppercase py-4 border-b-4 border-dashed border-accent-5 hover:text-accent-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center gap-8 py-4 border-t-4 border-dashed border-accent-5">
              <a 
                href="https://www.instagram.com/_juntoz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-1 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-2 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <a href="https://wa.me/919004001800" className="mt-4 bg-accent-3 text-black font-heading font-black text-2xl uppercase text-center py-4 rounded-full border-4 border-accent-1 shadow-[4px_4px_0_#FF3AF2]">
              LET'S TALK
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
