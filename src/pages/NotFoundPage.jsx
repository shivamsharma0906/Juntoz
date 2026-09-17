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
      <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 pt-32 md:pt-40 pb-20 text-center bg-[#F7F6F2]">

        <h1 className="font-heading font-black uppercase text-[#111111] text-4xl sm:text-6xl md:text-7xl mb-4 tracking-tight">
          Page Not <span className="text-[#5D2E85]">Found</span>
        </h1>
        
        <p className="font-body text-[#5F5F5A] text-base md:text-lg max-w-md mb-10 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been relocated. Return to home to explore our growth systems and case studies.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-bold uppercase text-xs tracking-widest text-white bg-[#111111] hover:bg-[#5D2E85] transition-all duration-300 shadow-sm"
        >
          Return Home
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </>
  );
}
