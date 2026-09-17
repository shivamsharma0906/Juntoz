import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import MapSection from '../components/MapSection';
import PageMeta from '../components/PageMeta';

const WA = 'https://wa.me/919004001800?text=Hi%20Sujal!%20I%27m%20a%20makeup%20artist%20and%20I%27d%20love%20to%20claim%20my%20free%20growth%20audit.';

const CONTACT_METHODS = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor" stroke="none"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.875L.057 23.386a.5.5 0 0 0 .614.599l5.728-1.539A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 1 1 12 2.25 9.75 9.75 0 0 1 12 21.75z" fill="currentColor" stroke="none"/>
      </svg>
    ),
    label: 'Direct WhatsApp',
    value: '+91 90040 01800',
    href: WA,
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Agency Founder Email',
    value: 'Sujal.Mehta@juntoz.in',
    href: 'mailto:Sujal.Mehta@juntoz.in',
  },
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    label: 'Instagram DM',
    value: '@_juntoz',
    href: 'https://www.instagram.com/_juntoz',
  },
];

// Validated strategic growth audit form
function ContactForm() {
  const [fields, setFields] = useState({ 
    name: '', 
    phone: '', 
    budget: '₹50,000 – ₹1,00,000 / mo',
    serviceFocus: 'Full Growth System', 
    website: '', 
    city: '',
    targetGoal: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = 'Business or founder name is required';
    if (!/^\d{10}$/.test(fields.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit WhatsApp number';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    
    // Build pre-filled WhatsApp message for strategy consultation
    const msg = encodeURIComponent(
      `Hi Juntoz! I'm reaching out through your website contact form.\n\n` +
      `🏢 Business / Founder: ${fields.name}\n` +
      `📱 WhatsApp: ${fields.phone}\n` +
      `💰 Monthly Budget: ${fields.budget}\n` +
      `🎯 Area of Focus: ${fields.serviceFocus}\n` +
      `${fields.website ? `🌐 Website/Profile: ${fields.website}\n` : ''}` +
      `${fields.city ? `📍 Location: ${fields.city}\n` : ''}` +
      `${fields.targetGoal ? `📝 Project Details: ${fields.targetGoal}` : ''}`
    );
    window.open(`https://wa.me/919004001800?text=${msg}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const inputBase = `w-full bg-[#FAFAF8] hover:bg-white border border-[#DEDED7] focus:bg-white rounded-xl px-4 py-3.5 font-body text-[#111111] placeholder-[#5F5F5A]/50 text-sm transition-all duration-200 focus:outline-none focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/20`;
  const selectBase = `w-full bg-[#FAFAF8] hover:bg-white border border-[#DEDED7] focus:bg-white rounded-xl px-4 py-3.5 font-body text-[#111111] text-sm transition-all duration-200 focus:outline-none focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/20 cursor-pointer appearance-none`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#287A55]/15 border border-[#287A55]/30">
          <svg className="w-8 h-8 text-[#287A55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-black text-[#111111] text-2xl uppercase">Message Sent via WhatsApp!</h3>
        <p className="font-body text-[#5F5F5A] text-sm max-w-xs leading-relaxed">
          Your details were pre-filled and sent to our team. Sujal or Saloni will review your business and reply shortly!
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-heading font-bold text-[#5D2E85] hover:underline uppercase tracking-wider"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Row 1: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5">
            Business / Founder Name <span className="text-[#5D2E85]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Acme Brands or Sujal Mehta"
            value={fields.name}
            onChange={e => { setFields(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: null })); }}
            className={`${inputBase} ${errors.name ? 'border-red-500 bg-red-50' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 pl-1 font-medium">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5">
            WhatsApp Number <span className="text-[#5D2E85]">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit WhatsApp number"
            value={fields.phone}
            onChange={e => { setFields(p => ({ ...p, phone: e.target.value })); setErrors(p => ({ ...p, phone: null })); }}
            className={`${inputBase} ${errors.phone ? 'border-red-500 bg-red-50' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 pl-1 font-medium">{errors.phone}</p>}
        </div>
      </div>

      {/* Row 2: Monthly Budget & Primary Area of Focus */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-budget" className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5">
            Estimated Monthly Budget
          </label>
          <div className="relative">
            <select
              id="contact-budget"
              value={fields.budget}
              onChange={e => setFields(p => ({ ...p, budget: e.target.value }))}
              className={selectBase}
            >
              <option value="Under ₹30,000 / mo">Under ₹30,000 / month</option>
              <option value="₹30,000 – ₹50,000 / mo">₹30,000 – ₹50,000 / month</option>
              <option value="₹50,000 – ₹1,00,000 / mo">₹50,000 – ₹1,00,000 / month</option>
              <option value="₹1,00,000 – ₹2,50,000 / mo">₹1,00,000 – ₹2,50,000 / month</option>
              <option value="₹2,50,000+ / mo">₹2,50,000+ / month</option>
              <option value="Flexible / Need Guidance">Flexible / Need Guidance</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#5F5F5A]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="contact-service" className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5">
            Primary Area of Focus
          </label>
          <div className="relative">
            <select
              id="contact-service"
              value={fields.serviceFocus}
              onChange={e => setFields(p => ({ ...p, serviceFocus: e.target.value }))}
              className={selectBase}
            >
              <option value="Full Growth System">Full Growth System (Strategy + Ads + Web)</option>
              <option value="Performance Paid Ads">Performance Paid Ads (Meta &amp; Google)</option>
              <option value="Google Business Profile & Local SEO">Google Business Profile &amp; Local SEO</option>
              <option value="Web Design & Conversion CRO">Web Design &amp; Conversion CRO</option>
              <option value="Professional Content Shoots">Professional Content Shoots (Mumbai/Delhi)</option>
              <option value="Specialty: Makeup Artists">Specialty: Makeup Artists &amp; Academies</option>
              <option value="Specialty: Salons & Clinics">Specialty: Salons &amp; Clinics</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#5F5F5A]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Website & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-website" className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5">
            Website or Instagram (Optional)
          </label>
          <input
            id="contact-website"
            type="text"
            placeholder="e.g. yourwebsite.com or @_handle"
            value={fields.website}
            onChange={e => setFields(p => ({ ...p, website: e.target.value }))}
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="contact-city" className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5">
            City / Target Market (Optional)
          </label>
          <input
            id="contact-city"
            type="text"
            placeholder="e.g. Mumbai, Delhi NCR, Pan-India"
            value={fields.city}
            onChange={e => setFields(p => ({ ...p, city: e.target.value }))}
            className={inputBase}
          />
        </div>
      </div>

      {/* Row 4: Commercial Goal / Message */}
      <div>
        <label htmlFor="contact-goal" className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5">
          Tell us about your brand or growth goals (Optional)
        </label>
        <textarea
          id="contact-goal"
          rows={3}
          placeholder="e.g. Scale qualified monthly bookings, dominate local Google Maps rankings, or launch a new service line..."
          value={fields.targetGoal}
          onChange={e => setFields(p => ({ ...p, targetGoal: e.target.value }))}
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="contact-submit"
        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading font-black uppercase tracking-wider text-white text-xs sm:text-sm bg-[#111111] hover:bg-[#5D2E85] transition-all duration-200 cursor-pointer shadow-card hover:shadow-hover active:scale-[0.99] group mt-1"
      >
        <span>Send Message</span>
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      {/* Trust & Guarantee Micro-bar */}
      <div className="pt-2 flex flex-col items-center gap-3">
        <p className="text-center font-body text-[#5F5F5A] text-xs leading-relaxed">
          Pre-fills your inquiry directly on WhatsApp · Fast response from senior strategists · 100% confidential
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-heading font-semibold text-[#5F5F5A]">
          <span className="flex items-center gap-1.5">
            <span className="text-[#287A55] font-bold">✓</span> Fast Response
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#287A55] font-bold">✓</span> Zero Spam Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#287A55] font-bold">✓</span> Direct Founder Review
          </span>
        </div>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-36 pb-0 min-h-screen bg-[#F7F6F2]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

      <PageMeta
        title="Schedule a Digital Growth Audit — Juntoz Digital Agency"
        description="Ready to scale your business with predictable lead generation, local search dominance, and high-converting marketing systems? Book your strategic consultation."
        path="/contact"
      />
        <ScrollReveal data-reveal="up" className="mb-12 sm:mb-16 text-center">
          
          <h1 className="font-heading font-normal text-[#111111] text-3xl sm:text-6xl md:text-7xl leading-tight mb-6">
            Turn Digital Presence Into <br className="hidden sm:block" />
            <span className="text-[#5D2E85]">Business Growth</span>
          </h1>
          <p className="font-body text-[#5F5F5A] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Share your goal — we'll audit your presence and map a clear growth plan.
          </p>
        </ScrollReveal>

        {/* Two Column Layout: Form + Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 mb-20">

          {/* LEFT — Contact Form (3 cols) */}
          <ScrollReveal data-reveal="up" delay={100} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-[#DEDED7] shadow-card">
              <div className="flex items-center justify-between gap-3 mb-6 pb-5 border-b border-[#DEDED7]">
                <div>
                  <span className="font-heading font-bold text-[11px] uppercase tracking-wider text-[#5D2E85] block mb-1">
                    Direct Strategy Channel
                  </span>
                  <h2 className="font-heading font-black text-[#111111] text-2xl sm:text-3xl uppercase tracking-tight">
                    Send Us a Message
                  </h2>
                </div>
                <div className="hidden xs:flex items-center gap-2 px-3 py-1 rounded-full bg-[#287A55]/10 text-[#287A55] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#287A55] animate-pulse" />
                  <span>Active Today</span>
                </div>
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* RIGHT — Contact Methods (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {CONTACT_METHODS.map((m, i) => (
              <ScrollReveal key={i} data-reveal="up" delay={i * 80}>
                <a
                  href={m.href}
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#DEDED7] shadow-subtle hover:border-[#111111] hover:shadow-hover transition-all duration-200"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-[#F1E7F9] text-[#5D2E85] border border-[#5D2E85]/20 transition-colors duration-200 group-hover:bg-[#111111] group-hover:text-white">
                    {m.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-[#5F5F5A] text-[11px] uppercase tracking-wider font-bold mb-0.5">{m.label}</p>
                    <p className="font-heading font-black text-[#111111] text-base break-all transition-colors">{m.value}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>

      {/* Full-width MapSection at the bottom */}
      <MapSection />
    </div>
  );
}
