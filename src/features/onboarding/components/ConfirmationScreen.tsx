import React from 'react';
import { Link } from 'react-router-dom';
import type { OnboardingSubmissionResult } from '../types/onboarding';

interface ConfirmationScreenProps {
  result: OnboardingSubmissionResult;
  onRestart?: () => void;
}

export const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({
  result,
  onRestart,
}) => {
  const whatsappPrefilledText = encodeURIComponent(
    `Hi Sujal & Juntoz Team! I just completed my client onboarding for ${result.businessName || 'my brand'} (${result.platform || 'growth marketing'}). My submission ID is ${result.submissionId || 'new'}. Excited to review the kickoff roadmap!`
  );

  const handleDownload = () => {
    const content =
      result.textDossier ||
      `JUNTOZ CLIENT INTAKE DOSSIER\nID: ${result.submissionId}\nBrand: ${result.businessName}\nClient: ${result.clientName}\nPlatform: ${result.platform}\nSubmitted: ${result.submittedAt}\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Juntoz-Intake-${result.businessName?.replace(/[^a-zA-Z0-9_-]/g, '_') || 'Submission'}-${result.submissionId || 'Record'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-2xl mx-auto py-6 sm:py-10 text-center space-y-8 animate-fadeIn">
      {/* Monogram Crest */}
      <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-[#F1E7F9] border border-[#5D2E85]/20 shadow-xs">
        <svg className="w-8 h-8 text-[#5D2E85]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Main Heading & Reassurance */}
      <div className="space-y-3">
        <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#5D2E85] bg-[#F1E7F9] px-3.5 py-1 rounded-full border border-[#5D2E85]/20">
          INTAKE DOSSIER LOGGED · ID: {result.submissionId || 'JUNTOZ-LIVE'}
        </span>

        <h1
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="text-4xl sm:text-5xl font-normal text-[#111111] leading-tight pt-2"
        >
          Welcome to Juntoz.
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#5F5F5A] max-w-lg mx-auto leading-relaxed">
          Thank you, <strong>{result.clientName || 'Partner'}</strong>. Your business details, targeting coordinates, and assets for{' '}
          <strong>{result.businessName || 'your brand'}</strong> have been securely routed to Sujal Mehta and the Juntoz growth team.
        </p>
      </div>

      {/* 3-Step What Happens Next Timeline */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E3DA] shadow-subtle text-left space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7E3DA]">
          <h2 className="text-xs font-sans font-bold uppercase tracking-widest text-[#111111]">
            What Happens Next
          </h2>
          <span className="text-[11px] font-sans text-[#287A55] font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#287A55] animate-pulse" />
            Concierge Review In Progress
          </span>
        </div>

        <ol className="space-y-4">
          <li className="flex items-start gap-4">
            <span className="w-6 h-6 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-sans font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <div className="space-y-0.5">
              <h3 className="font-sans font-semibold text-xs sm:text-sm text-[#111111]">
                Technical Audit &amp; Keyword Validation (Within 24 Hours)
              </h3>
              <p className="font-sans text-xs text-[#5F5F5A] leading-relaxed">
                We review your competitors, verify Google/Meta partner permissions, audit your pixel/feed, and map out your initial 30-day budget allocation.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-6 h-6 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-sans font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div className="space-y-0.5">
              <h3 className="font-sans font-semibold text-xs sm:text-sm text-[#111111]">
                Kickoff Roadmap &amp; Creative Plan Approval
              </h3>
              <p className="font-sans text-xs text-[#5F5F5A] leading-relaxed">
                You receive a bespoke campaign architecture with ad hooks, search targets, and negative lists via email &amp; WhatsApp for your green-light.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-6 h-6 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-sans font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <div className="space-y-0.5">
              <h3 className="font-sans font-semibold text-xs sm:text-sm text-[#111111]">
                Engine Go-Live &amp; Live Telemetry Tracking
              </h3>
              <p className="font-sans text-xs text-[#5F5F5A] leading-relaxed">
                Campaigns launch with verified conversion tracking. Real-time inquiries start flowing directly to your WhatsApp or studio booking desk.
              </p>
            </div>
          </li>
        </ol>
      </div>

      {/* WhatsApp 1-Tap Trigger, Download & Back to Site */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <a
          href={`https://wa.me/919004001800?text=${whatsappPrefilledText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-card hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
          </svg>
          <span>Ping Sujal on WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleDownload}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F1E7F9] border border-[#E7E3DA] text-[#5D2E85] font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-2xs"
          title="Download a copy of your filled answers"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download Intake Copy (.txt)</span>
        </button>

        {onRestart && (
          <button
            type="button"
            onClick={onRestart}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-[#F1E7F9] border border-[#E7E3DA] text-[#111111] font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            Start Another Platform Flow
          </button>
        )}

        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-sans font-semibold text-[#5F5F5A] hover:text-[#111111] transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};
