import React, { useState } from 'react';

interface BulkTagInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  helper?: string;
  error?: string;
}

export const BulkTagInput: React.FC<BulkTagInputProps> = ({
  value = [],
  onChange,
  placeholder = 'Type an item and press Enter...',
  helper,
  error,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showBulkPaste, setShowBulkPaste] = useState(false);
  const [bulkText, setBulkText] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(inputValue);
    }
  };

  const addTag = (text: string) => {
    const clean = text.trim().replace(/^,+|,+$/g, '');
    if (!clean) return;

    if (!value.includes(clean)) {
      onChange([...value, clean]);
    }
    setInputValue('');
  };

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  const handleApplyBulk = () => {
    if (!bulkText.trim()) return;

    // Split on newlines or commas
    const parsed = bulkText
      .split(/[\n,]+/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    // Merge and deduplicate
    const merged = Array.from(new Set([...value, ...parsed]));
    onChange(merged);
    setBulkText('');
    setShowBulkPaste(false);
  };

  return (
    <div className="space-y-3">
      {/* Input Row */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              if (inputValue.trim()) addTag(inputValue);
            }}
            placeholder={placeholder}
            className="w-full h-[52px] bg-white border border-[#E7E3DA] focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/15 rounded-xl px-4 font-sans text-sm text-[#111111] placeholder-[#5F5F5A]/45 transition-all duration-200"
          />
        </div>
        <button
          type="button"
          onClick={() => addTag(inputValue)}
          className="h-[52px] px-5 rounded-xl bg-white border border-[#E7E3DA] hover:border-[#5D2E85] hover:text-[#5D2E85] text-[#111111] font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-98"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => setShowBulkPaste(!showBulkPaste)}
          className={`h-[52px] px-4 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
            showBulkPaste
              ? 'bg-[#F1E7F9] border-[#5D2E85]/40 text-[#5D2E85]'
              : 'bg-white border-[#E7E3DA] hover:border-[#5D2E85] text-[#5F5F5A]'
          }`}
          title="Paste multiple items in bulk"
        >
          {showBulkPaste ? 'Hide Bulk' : 'Bulk Paste'}
        </button>
      </div>

      {/* Bulk Paste Area (Collapsible) */}
      {showBulkPaste && (
        <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#E7E3DA] space-y-2.5 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#111111]">
              Paste in bulk (comma or newline separated)
            </span>
            <span className="text-[11px] text-[#5F5F5A]">Duplicates automatically removed</span>
          </div>
          <textarea
            value={bulkText}
            onChange={(e) => setBulkText(e.target.value)}
            rows={4}
            placeholder="bridal makeup in mumbai, best makeup artist bandra&#10;wedding look artist, celebrity makeup artist"
            className="w-full bg-white border border-[#E7E3DA] focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/15 rounded-lg p-3 font-sans text-xs text-[#111111] leading-relaxed resize-y"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                setBulkText('');
                setShowBulkPaste(false);
              }}
              className="px-3.5 py-1.5 rounded-lg text-xs text-[#5F5F5A] hover:text-[#111111] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleApplyBulk}
              className="px-4 py-1.5 rounded-lg bg-[#5D2E85] text-white text-xs font-semibold tracking-wide hover:bg-[#4C266D] transition-colors cursor-pointer"
            >
              Add All
            </button>
          </div>
        </div>
      )}

      {/* Rendered Chips */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {value.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F1E7F9]/80 border border-[#5D2E85]/20 text-xs font-sans font-medium text-[#5D2E85] animate-scaleIn"
            >
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => removeTag(tag)}
                aria-label={`Remove ${tag}`}
                className="hover:text-[#111111] p-0.5 rounded-full transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Helper text or Error */}
      {error ? (
        <p className="text-xs text-[#991B1B] font-medium flex items-center gap-1.5" aria-live="polite">
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </p>
      ) : helper ? (
        <p className="text-xs text-[#5F5F5A] leading-relaxed">{helper}</p>
      ) : null}
    </div>
  );
};
