import React from 'react';
import type { FlowStep } from '../types/onboarding';

interface StepTrackerProps {
  steps: FlowStep[];
  currentIndex: number;
  onSelectStep?: (index: number) => void;
  maxAccessibleIndex: number;
  className?: string;
}

export const StepTracker: React.FC<StepTrackerProps> = ({
  steps,
  currentIndex,
  onSelectStep,
  maxAccessibleIndex,
  className = '',
}) => {
  return (
    <nav aria-label="Onboarding Progress" className={className}>
      <ol className="space-y-4">
        {steps.map((step, idx) => {
          const isCompleted = idx < currentIndex;
          const isCurrent = idx === currentIndex;
          const isUpcoming = idx > currentIndex;
          const canClick = idx <= maxAccessibleIndex && onSelectStep;

          return (
            <li key={step.id}>
              <button
                type="button"
                disabled={!canClick}
                onClick={() => canClick && onSelectStep(idx)}
                className={`group flex items-start gap-3.5 text-left w-full transition-colors ${
                  canClick ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                {/* Status Dot / Checkmark */}
                <span className="relative flex items-center justify-center w-6 h-6 shrink-0 mt-0.5">
                  {isCompleted && (
                    <span className="w-5 h-5 rounded-full bg-[#5D2E85] text-white flex items-center justify-center text-xs shadow-xs">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}

                  {isCurrent && (
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5D2E85] opacity-25" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#5D2E85] ring-4 ring-[#F1E7F9]" />
                    </span>
                  )}

                  {isUpcoming && (
                    <span className="w-4 h-4 rounded-full border border-[#DEDED7] group-hover:border-[#5D2E85]/40 transition-colors" />
                  )}
                </span>

                {/* Step Info */}
                <div className="space-y-0.5 min-w-0">
                  <span
                    className={`block text-[10px] font-sans font-bold uppercase tracking-wider transition-colors ${
                      isCurrent
                        ? 'text-[#5D2E85]'
                        : isCompleted
                        ? 'text-[#111111]/70'
                        : 'text-[#5F5F5A]/60'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`block text-xs font-sans leading-snug transition-colors truncate ${
                      isCurrent
                        ? 'font-bold text-[#111111]'
                        : isCompleted
                        ? 'font-medium text-[#111111]/85 group-hover:text-[#5D2E85]'
                        : 'font-normal text-[#5F5F5A]/70'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
