import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import MapSection from '../components/MapSection';
import PageMeta from '../components/PageMeta';

const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const CONTACT_METHODS = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor" stroke="none"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.875L.057 23.386a.5.5 0 0 0 .614.599l5.728-1.539A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 1 1 12 2.25 9.75 9.75 0 0 1 12 21.75z" fill="currentColor" stroke="none"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+91 90040 01800',
    href: WA,
    color: '#00F5D4',
    sublabel: 'Fastest response — usually within minutes',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Email',
    value: 'Sujal.Mehta@juntoz.in',
    href: 'mailto:Sujal.Mehta@juntoz.in',
    color: '#7B2FFF',
    sublabel: 'We reply within 24 hours',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: 'Call',
    value: '+91 90040 01800',
    href: 'tel:+919004001800',
    color: '#FF3AF2',
    sublabel: 'Mon – Sat, 10 AM – 7 PM IST',
  },
];

// Simple validated contact form (no backend — placeholder)
function ContactForm() {
  const [fields, setFields] = useState({ name: '', phone: '', business: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = 'Name is required';
    if (!/^\d{10}$/.test(fields.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit number';
    if (!fields.business.trim()) e.business = 'Tell us about your business';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    // Build a pre-filled WhatsApp message from form data
    const msg = encodeURIComponent(
      `Hi Juntoz! I'd like to discuss growing my business.\n\nName: ${fields.name}\nPhone: ${fields.phone}\nBusiness: ${fields.business}\n${fields.message ? `Message: ${fields.message}` : ''}`
    );
    window.open(`https://wa.me/919004001800?text=${msg}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const inputBase = `w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 font-body text-white placeholder-white/25 text-sm transition-all duration-300 focus:outline-none focus:border-[#00F5D4]/50 focus:bg-white/8 focus:ring-2 focus:ring-[#00F5D4]/10`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
        <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,245,212,0.4)]" style={{ background: 'rgba(0,245,212,0.15)', border: '1px solid rgba(0,245,212,0.3)' }}>
          <svg className="w-10 h-10 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-black text-white text-3xl uppercase">We'll be in touch!</h3>
        <p className="font-body text-white/50 text-sm max-w-xs leading-relaxed">WhatsApp should have opened with your message pre-filled. Expect a response within minutes.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <input
            id="contact-name"
            type="text"
            placeholder="Your Name *"
            value={fields.name}
            onChange={e => { setFields(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: null })); }}
            className={`${inputBase} ${errors.name ? 'border-red-500/70 bg-red-500/5' : ''}`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.name}</p>}
        </div>
        <div>
          <input
            id="contact-phone"
            type="tel"
            placeholder="WhatsApp Number *"
            value={fields.phone}
            onChange={e => { setFields(p => ({ ...p, phone: e.target.value })); setErrors(p => ({ ...p, phone: null })); }}
            className={`${inputBase} ${errors.phone ? 'border-red-500/70 bg-red-500/5' : ''}`}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <input
          id="contact-business"
          type="text"
          placeholder="Your Business Type (e.g. Bridal MUA, Hair Salon) *"
          value={fields.business}
          onChange={e => { setFields(p => ({ ...p, business: e.target.value })); setErrors(p => ({ ...p, business: null })); }}
          className={`${inputBase} ${errors.business ? 'border-red-500/70 bg-red-500/5' : ''}`}
        />
        {errors.business && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.business}</p>}
      </div>

      <div>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Anything you'd like to add? (optional)"
          value={fields.message}
          onChange={e => setFields(p => ({ ...p, message: e.target.value }))}
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        id="contact-submit"
        className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-heading font-black uppercase tracking-widest text-background overflow-hidden shadow-[0_0_30px_rgba(0,245,212,0.25)] hover:shadow-[0_0_50px_rgba(0,245,212,0.45)] transition-all duration-300 hover:scale-[1.01] text-sm"
        style={{ background: '#00F5D4' }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
        <span className="relative z-10">Open WhatsApp & Send</span>
        <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.875L.057 23.386a.5.5 0 0 0 .614.599l5.728-1.539A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 1 1 12 2.25 9.75 9.75 0 0 1 12 21.75z"/>
        </svg>
      </button>
      <p className="text-center font-body text-white/25 text-xs">We will open WhatsApp with your details pre-filled — no waiting for a form reply.</p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-0 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-7xl">

      <PageMeta
        title="Contact Juntoz — Book a Free Strategy Call"
        description="Ready to fill your calendar with premium beauty clients? Contact Juntoz today and get a free growth strategy call within 24 hours."
        path="/contact"
      />
        <ScrollReveal data-reveal="up" className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">Get In Touch</span>
          </div>
          <h1 className="font-heading font-black text-white text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tighter mb-6">
            Let's Talk{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF]">Growth</span>
          </h1>
          <p className="font-body text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Ready to fill your calendar with premium clients? Drop us a message and we'll get back to you within minutes on WhatsApp.
          </p>
        </ScrollReveal>

        {/* Two Column Layout: Form + Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 mb-20">

          {/* LEFT — Contact Form (3 cols) */}
          <ScrollReveal data-reveal="up" delay={100} className="lg:col-span-3">
            <div className="relative rounded-[2rem] overflow-hidden p-[1px]">
              <div className="absolute inset-0 opacity-30 animate-[gradient-shift_5s_ease-in-out_infinite]"
                style={{ background: 'linear-gradient(135deg, rgba(0,245,212,0.5), transparent, rgba(123,47,255,0.5))' }} />
              <div className="relative bg-[#0A0A0F]/95 backdrop-blur-2xl rounded-[31px] p-8 sm:p-10">
                <h2 className="font-heading font-black text-white text-2xl uppercase tracking-tight mb-8">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Contact Methods (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {CONTACT_METHODS.map((m, i) => (
              <ScrollReveal key={i} data-reveal="up" delay={i * 120}>
                <a
                  href={m.href}
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${m.color}08`;
                    e.currentTarget.style.borderColor = `${m.color}35`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  }}
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ background: `${m.color}12`, border: `1px solid ${m.color}25`, color: m.color }}>
                    {m.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">{m.label}</p>
                    <p className="font-heading font-black text-white text-base mb-1 break-all group-hover:text-white transition-colors">{m.value}</p>
                    <p className="font-body text-white/35 text-xs leading-relaxed">{m.sublabel}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>

      {/* Full-width MapSection at the bottom */}
      <MapSection />

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px rgba(10,10,15,0.95) inset !important;
          -webkit-text-fill-color: white !important;
          caret-color: white;
        }
      `}</style>
    </div>
  );
}
