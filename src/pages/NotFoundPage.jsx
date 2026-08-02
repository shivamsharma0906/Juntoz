import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found — Juntoz Digital Marketing Agency"
        description="The page you're looking for doesn't exist. Return to Juntoz to explore our digital marketing services for beauty brands."
        path="/404"
      />
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <p className="font-body text-[#00F5D4] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          404 — Not Found
        </p>
        <h1 className="font-heading font-black uppercase text-white text-4xl sm:text-6xl mb-4 tracking-tighter">
          Lost in the{' '}
          <span
            style={{
              background: 'linear-gradient(120deg, #00F5D4, #7B2FFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Void
          </span>
        </h1>
        <p className="font-body text-white/55 text-sm sm:text-base max-w-md mb-10 leading-relaxed">
          This page doesn&apos;t exist or may have moved. Head back home and keep building your brand.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[44px] rounded-xl font-heading font-black uppercase text-xs tracking-widest text-[#050508] bg-[#00F5D4] hover:bg-[#00e1c2] shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-all duration-300"
        >
          Back to Home
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </>
  );
}
