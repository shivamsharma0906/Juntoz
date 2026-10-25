import React from 'react';
import type { FormField } from '../types/onboarding';
import { BulkTagInput } from './BulkTagInput';

interface FieldRendererProps {
  field: FormField;
  value: any;
  onChange: (value: any) => void;
  error?: string;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  field,
  value,
  onChange,
  error,
}) => {
  const baseInputStyles =
    'w-full h-[52px] bg-white border border-[#E7E3DA] hover:border-[#DEDED7] focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/15 rounded-xl px-4 font-sans text-sm text-[#111111] placeholder-[#5F5F5A]/45 transition-all duration-200 focus:outline-none';
  const errorInputStyles =
    'border-[#991B1B] focus:border-[#991B1B] focus:ring-[#991B1B]/15 text-[#991B1B]';

  // Toggle selection for multiple choice chips
  const handleChipToggle = (optValue: string) => {
    const currentList: string[] = Array.isArray(value) ? value : [];
    if (field.multiple) {
      if (currentList.includes(optValue)) {
        onChange(currentList.filter((v) => v !== optValue));
      } else {
        onChange([...currentList, optValue]);
      }
    } else {
      onChange(optValue);
    }
  };

  return (
    <div className="space-y-1.5">
      {/* Label and Required indicator */}
      {field.type !== 'consent' && (
        <label
          htmlFor={field.name}
          className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#111111]"
        >
          {field.label}
          {field.required && <span className="text-[#5D2E85] ml-1">*</span>}
        </label>
      )}

      {/* Render by field type */}
      {field.type === 'text' && (
        <input
          id={field.name}
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className={`${baseInputStyles} ${error ? errorInputStyles : ''}`}
        />
      )}

      {field.type === 'email' && (
        <input
          id={field.name}
          type="email"
          autoComplete="email"
          inputMode="email"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className={`${baseInputStyles} ${error ? errorInputStyles : ''}`}
        />
      )}

      {field.type === 'phone' && (
        <div className="relative flex items-center">
          <div className="absolute left-3.5 flex items-center gap-1.5 text-xs font-semibold text-[#5F5F5A] select-none pointer-events-none">
            <span>🇮🇳</span>
            <span>+91</span>
            <span className="h-4 w-px bg-[#E7E3DA] ml-1" />
          </div>
          <input
            id={field.name}
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            value={value || ''}
            onChange={(e) => {
              // Strip non-numeric
              const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
              onChange(digits);
            }}
            placeholder={field.placeholder || '98200 12345'}
            className={`${baseInputStyles} pl-20 ${error ? errorInputStyles : ''}`}
          />
        </div>
      )}

      {field.type === 'url' && (
        <div className="relative">
          <input
            id={field.name}
            type="url"
            inputMode="url"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder || 'https://...'}
            className={`${baseInputStyles} ${error ? errorInputStyles : ''}`}
          />
        </div>
      )}

      {field.type === 'select' && (
        <div className="relative">
          <select
            id={field.name}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInputStyles} appearance-none pr-10 cursor-pointer ${
              error ? errorInputStyles : ''
            }`}
          >
            <option value="" disabled>
              {field.placeholder || 'Select an option...'}
            </option>
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#5F5F5A]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      )}

      {field.type === 'textarea' && (
        <textarea
          id={field.name}
          rows={3}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className={`w-full bg-white border border-[#E7E3DA] hover:border-[#DEDED7] focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/15 rounded-xl p-4 font-sans text-sm text-[#111111] placeholder-[#5F5F5A]/45 leading-relaxed resize-y min-h-[96px] transition-all duration-200 focus:outline-none ${
            error ? errorInputStyles : ''
          }`}
        />
      )}

      {field.type === 'chips' && (
        <div className="space-y-2 pt-1">
          <div className="flex flex-wrap gap-2.5">
            {field.options?.map((opt) => {
              const selectedList: string[] = Array.isArray(value) ? value : value ? [value] : [];
              const isSelected = selectedList.includes(opt.value);

              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleChipToggle(opt.value)}
                  className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer active:scale-98 ${
                    isSelected
                      ? 'bg-[#F1E7F9] border border-[#5D2E85] text-[#5D2E85] shadow-xs'
                      : 'bg-white border border-[#E7E3DA] hover:border-[#5D2E85]/40 text-[#5F5F5A] hover:text-[#111111]'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#5D2E85] text-white' : 'border border-[#DEDED7] group-hover:border-[#5D2E85]/50'
                    }`}
                  >
                    {isSelected && (
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {field.type === 'tag-list' && (
        <BulkTagInput
          value={Array.isArray(value) ? value : []}
          onChange={onChange}
          placeholder={field.placeholder}
          helper={field.helper}
          error={error}
        />
      )}

      {field.type === 'access-guide' && field.guide && (
        <div className="p-5 rounded-2xl bg-[#F7F6F2] border border-[#E7E3DA] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#287A55]" />
              <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-[#111111]">
                {field.guide.platformName} · Security &amp; Access Protocol
              </h4>
            </div>
            <span className="text-[11px] font-sans font-medium text-[#5D2E85] bg-[#F1E7F9] px-2.5 py-0.5 rounded-full">
              Zero Passwords Needed
            </span>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E7E3DA]/80 flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#5F5F5A] block">Juntoz Partner Identifier</span>
              <span className="text-xs font-mono font-semibold text-[#111111]">{field.guide.partnerIdentifier}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(field.guide?.partnerIdentifier || '');
              }}
              className="text-[11px] font-semibold text-[#5D2E85] hover:underline cursor-pointer"
            >
              Copy
            </button>
          </div>

          <ol className="space-y-1.5 text-xs text-[#5F5F5A] list-decimal list-inside leading-relaxed pt-1">
            {field.guide.instructions.map((step, idx) => (
              <li key={idx} className="pl-1">
                <span>{step}</span>
              </li>
            ))}
          </ol>

          {field.guide.docLink && (
            <a
              href={field.guide.docLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold text-[#5D2E85] hover:underline pt-1"
            >
              <span>Official Google / Meta Partner Guide</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      )}

      {field.type === 'consent' && (
        <label className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F6F2] border border-[#E7E3DA] hover:border-[#5D2E85]/40 transition-colors cursor-pointer select-none">
          <input
            type="checkbox"
            checked={value === true}
            onChange={(e) => onChange(e.target.checked)}
            className="w-4 h-4 mt-0.5 rounded border-[#E7E3DA] text-[#5D2E85] focus:ring-[#5D2E85]/20 cursor-pointer"
          />
          <div className="space-y-1 text-xs text-[#5F5F5A] leading-relaxed">
            <span className="font-semibold text-[#111111] block">
              {field.label} {field.required && <span className="text-[#5D2E85]">*</span>}
            </span>
            <span>{field.helper}</span>
          </div>
        </label>
      )}

      {/* Helper text (only if not a consent or tag-list which handles its own helper) */}
      {field.type !== 'consent' && field.type !== 'tag-list' && (
        <>
          {error ? (
            <p className="text-xs text-[#991B1B] font-medium flex items-center gap-1.5 pt-0.5" aria-live="polite">
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{error}</span>
            </p>
          ) : field.helper ? (
            <p className="text-xs text-[#5F5F5A] leading-relaxed">{field.helper}</p>
          ) : null}
        </>
      )}
    </div>
  );
};
