import React, { useState } from 'react';
import type { CompetitorRow, AdmiredBrandRow, CompetitorsData } from '../types/onboarding';
import { normalizeWebsiteUrl, normalizeInstagramHandle, parseBulkUrls } from '../utils/urlUtils';

interface CompetitorRepeaterProps {
  value: CompetitorsData | undefined;
  onChange: (data: CompetitorsData) => void;
  error?: string;
  isMerchantCenter?: boolean;
}

const DEFAULT_ROW: CompetitorRow = {
  name: '',
  website: '',
  instagram: '',
  notes: '',
};

export const CompetitorRepeater: React.FC<CompetitorRepeaterProps> = ({
  value,
  onChange,
  error,
  isMerchantCenter = false,
}) => {
  const [showBulkPaste, setShowBulkPaste] = useState(false);
  const [bulkText, setBulkText] = useState('');

  // Extract or initialize data
  const researchForMe = value?.researchForMe ?? false;
  const competitors = value?.competitors && value.competitors.length > 0 ? value.competitors : [{ ...DEFAULT_ROW }];
  const admiredBrands = value?.admiredBrands || [];

  const updateCompetitors = (newRows: CompetitorRow[]) => {
    onChange({
      researchForMe,
      competitors: newRows,
      admiredBrands,
    });
  };

  const updateAdmiredBrands = (newAdmired: AdmiredBrandRow[]) => {
    onChange({
      researchForMe,
      competitors,
      admiredBrands: newAdmired,
    });
  };

  const handleToggleResearch = (checked: boolean) => {
    onChange({
      researchForMe: checked,
      competitors,
      admiredBrands,
    });
  };

  const handleRowChange = (index: number, field: keyof CompetitorRow, rawVal: string) => {
    const updated = competitors.map((row, i) => {
      if (i !== index) return row;
      return { ...row, [field]: rawVal };
    });
    updateCompetitors(updated);
  };

  const handleBlurWebsite = (index: number) => {
    const row = competitors[index];
    if (row && row.website) {
      const normalized = normalizeWebsiteUrl(row.website);
      if (normalized !== row.website) {
        handleRowChange(index, 'website', normalized);
      }
    }
  };

  const handleBlurInstagram = (index: number) => {
    const row = competitors[index];
    if (row && row.instagram) {
      const normalized = normalizeInstagramHandle(row.instagram);
      if (normalized !== row.instagram) {
        handleRowChange(index, 'instagram', normalized);
      }
    }
  };

  const addCompetitorRow = () => {
    if (competitors.length < 5) {
      updateCompetitors([...competitors, { ...DEFAULT_ROW }]);
    }
  };

  const removeCompetitorRow = (index: number) => {
    if (competitors.length > 1) {
      updateCompetitors(competitors.filter((_, i) => i !== index));
    } else {
      updateCompetitors([{ ...DEFAULT_ROW }]);
    }
  };

  const handleApplyBulkUrls = () => {
    if (!bulkText.trim()) return;

    const parsedUrls = parseBulkUrls(bulkText);
    if (parsedUrls.length === 0) return;

    const newRows: CompetitorRow[] = [...competitors];

    parsedUrls.forEach((url) => {
      // Find first empty website slot or add new row if under 5
      const emptyIdx = newRows.findIndex((r) => !r.website.trim());
      if (emptyIdx !== -1) {
        newRows[emptyIdx] = {
          ...newRows[emptyIdx],
          website: url,
          name: newRows[emptyIdx].name || new URL(url).hostname.replace(/^www\./, ''),
        };
      } else if (newRows.length < 5) {
        newRows.push({
          name: new URL(url).hostname.replace(/^www\./, ''),
          website: url,
          instagram: '',
          notes: '',
        });
      }
    });

    updateCompetitors(newRows.slice(0, 5));
    setBulkText('');
    setShowBulkPaste(false);
  };

  const addAdmiredBrand = () => {
    updateAdmiredBrands([...admiredBrands, { url: '', note: '' }]);
  };

  const removeAdmiredBrand = (index: number) => {
    updateAdmiredBrands(admiredBrands.filter((_, i) => i !== index));
  };

  const updateAdmiredRow = (index: number, field: keyof AdmiredBrandRow, val: string) => {
    const updated = admiredBrands.map((row, i) => {
      if (i !== index) return row;
      return { ...row, [field]: val };
    });
    updateAdmiredBrands(updated);
  };

  const handleBlurAdmiredUrl = (index: number) => {
    const row = admiredBrands[index];
    if (row && row.url) {
      const normalized = normalizeWebsiteUrl(row.url);
      if (normalized !== row.url) {
        updateAdmiredRow(index, 'url', normalized);
      }
    }
  };

  const baseInputStyles =
    'w-full h-[48px] bg-white border border-[#E7E3DA] hover:border-[#DEDED7] focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/15 rounded-xl px-3.5 font-sans text-xs sm:text-sm text-[#111111] placeholder-[#5F5F5A]/45 transition-all duration-200 focus:outline-none';

  return (
    <div className="space-y-6">
      {/* ── Research for me Toggle ── */}
      <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-[#E7E3DA] flex items-center justify-between gap-4">
        <div className="space-y-0.5">
          <label htmlFor="research-toggle" className="text-xs sm:text-sm font-sans font-bold text-[#111111] cursor-pointer">
            I'm not sure, please research for me
          </label>
          <p className="text-[11px] text-[#5F5F5A] leading-relaxed">
            {isMerchantCenter
              ? 'Our shopping feed specialists will identify your leading benchmark stores and category price points.'
              : 'Our strategy team will reverse-engineer your local market competitors, top-bidding brands, and creative hooks.'}
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer shrink-0">
          <input
            id="research-toggle"
            type="checkbox"
            checked={researchForMe}
            onChange={(e) => handleToggleResearch(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-[#E7E3DA] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#5D2E85]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5D2E85]" />
        </label>
      </div>

      {/* ── Competitor Rows (1 to 5) ── */}
      <div className={`space-y-4 ${researchForMe ? 'opacity-40 pointer-events-none' : ''}`}>
        <div className="flex items-center justify-between pb-1">
          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#111111]">
              {isMerchantCenter ? 'Competitor Stores & Product Feeds' : 'Key Competitors (1 to 5 Brands)'}
              {!isMerchantCenter && !researchForMe && <span className="text-[#5D2E85] ml-1">*</span>}
            </h4>
            <p className="text-[11px] text-[#5F5F5A] pt-0.5">
              {isMerchantCenter
                ? 'Stores whose catalog layout, pricing sweet spot, or shopping feeds you aim to outperform.'
                : 'Brands or local studios frequently bidding on your terms or targeting your audience.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowBulkPaste(!showBulkPaste)}
            className={`px-3 py-1.5 rounded-lg border text-[11px] font-sans font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              showBulkPaste
                ? 'bg-[#F1E7F9] border-[#5D2E85]/40 text-[#5D2E85]'
                : 'bg-white border-[#E7E3DA] text-[#5F5F5A] hover:border-[#5D2E85]'
            }`}
          >
            {showBulkPaste ? 'Close Bulk' : 'Bulk Paste URLs'}
          </button>
        </div>

        {/* Bulk Paste Dropdown */}
        {showBulkPaste && (
          <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#E7E3DA] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-sans font-semibold text-[#111111]">
                Paste Competitor URLs (one per line or comma-separated)
              </span>
              <span className="text-[10px] text-[#5F5F5A]">Tracking parameters stripped automatically</span>
            </div>
            <textarea
              rows={3}
              value={bulkText}
              onChange={(e) => setBulkText(e.target.value)}
              placeholder="https://competitor1.in&#10;competitor2.com?utm_source=ad&#10;competitor3.in"
              className="w-full bg-white border border-[#E7E3DA] focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/15 rounded-xl p-3 text-xs font-mono text-[#111111]"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setBulkText('');
                  setShowBulkPaste(false);
                }}
                className="px-3 py-1 rounded-md text-xs text-[#5F5F5A] hover:text-[#111111] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApplyBulkUrls}
                className="px-4 py-1.5 rounded-md bg-[#5D2E85] text-white text-xs font-semibold hover:bg-[#4C266D] transition-colors cursor-pointer"
              >
                Import URLs
              </button>
            </div>
          </div>
        )}

        {/* Rows */}
        <div className="space-y-3">
          {competitors.map((row, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E3DA] space-y-3 relative group hover:border-[#5D2E85]/30 transition-colors shadow-2xs"
            >
              <div className="flex items-center justify-between pb-1 border-b border-[#E7E3DA]/60">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#5D2E85]">
                  Competitor 0{idx + 1}
                </span>
                {competitors.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCompetitorRow(idx)}
                    aria-label={`Remove Competitor 0${idx + 1}`}
                    className="text-xs text-[#991B1B] hover:text-[#7F1D1D] font-medium flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span>Remove</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor={`comp-name-${idx}`} className="block text-[11px] font-sans font-semibold text-[#111111] mb-1">
                    Business / Brand Name
                  </label>
                  <input
                    id={`comp-name-${idx}`}
                    type="text"
                    value={row.name}
                    onChange={(e) => handleRowChange(idx, 'name', e.target.value)}
                    placeholder="e.g. Aura Luxe Studio"
                    className={baseInputStyles}
                  />
                </div>

                <div>
                  <label htmlFor={`comp-url-${idx}`} className="block text-[11px] font-sans font-semibold text-[#111111] mb-1">
                    Website URL
                  </label>
                  <input
                    id={`comp-url-${idx}`}
                    type="url"
                    value={row.website}
                    onChange={(e) => handleRowChange(idx, 'website', e.target.value)}
                    onBlur={() => handleBlurWebsite(idx)}
                    placeholder="e.g. competitor.com"
                    className={baseInputStyles}
                  />
                </div>

                <div>
                  <label htmlFor={`comp-ig-${idx}`} className="block text-[11px] font-sans font-semibold text-[#111111] mb-1">
                    Instagram Handle or URL
                  </label>
                  <input
                    id={`comp-ig-${idx}`}
                    type="text"
                    value={row.instagram}
                    onChange={(e) => handleRowChange(idx, 'instagram', e.target.value)}
                    onBlur={() => handleBlurInstagram(idx)}
                    placeholder="e.g. @brand or full link"
                    className={baseInputStyles}
                  />
                </div>
              </div>

              <div>
                <label htmlFor={`comp-notes-${idx}`} className="block text-[11px] font-sans font-semibold text-[#111111] mb-1">
                  What do you like or dislike about them?
                </label>
                <textarea
                  id={`comp-notes-${idx}`}
                  rows={2}
                  value={row.notes}
                  onChange={(e) => handleRowChange(idx, 'notes', e.target.value)}
                  placeholder="e.g. Great reel lighting and video pacing, but pricing is too opaque. We want our offer to feel much more accessible."
                  className="w-full bg-white border border-[#E7E3DA] hover:border-[#DEDED7] focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/15 rounded-xl p-3 font-sans text-xs text-[#111111] placeholder-[#5F5F5A]/45 leading-relaxed resize-y"
                />
              </div>
            </div>
          ))}
        </div>

        {competitors.length < 5 && (
          <button
            type="button"
            onClick={addCompetitorRow}
            className="w-full py-3 rounded-xl border border-dashed border-[#5D2E85]/30 hover:border-[#5D2E85] text-[#5D2E85] text-xs font-sans font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#F1E7F9]/40 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>Add Another Competitor ({competitors.length}/5)</span>
          </button>
        )}
      </div>

      {/* ── Separate Repeatable List: Brands or Ads You Admire ── */}
      <div className="pt-4 border-t border-[#E7E3DA] space-y-4">
        <div>
          <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#111111]">
            Brands or Ads You Admire (Optional Inspiration)
          </h4>
          <p className="text-[11px] text-[#5F5F5A] pt-0.5 leading-relaxed">
            Share active ad creatives or accounts whose hooks, aesthetic, or visual style inspire your vision.
          </p>

          {/* Helper Badges pointing to Ad Libraries */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <span className="text-[10px] uppercase font-bold text-[#5F5F5A]">Explore active ads:</span>
            <a
              href="https://www.facebook.com/ads/library/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] text-[11px] font-sans font-semibold hover:bg-[#E8D4F5] transition-colors"
            >
              <span>Meta Ad Library</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://adstransparency.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E7E3DA] text-[#111111] text-[11px] font-sans font-semibold hover:border-[#5D2E85] transition-colors"
            >
              <span>Google Ads Transparency Center</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Admired List Rows */}
        <div className="space-y-3">
          {admiredBrands.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#F7F6F2] border border-[#E7E3DA] space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#5F5F5A]">
                  Inspiration #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeAdmiredBrand(idx)}
                  className="text-[11px] text-[#991B1B] hover:text-[#7F1D1D] font-medium cursor-pointer"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="url"
                  value={item.url}
                  onChange={(e) => updateAdmiredRow(idx, 'url', e.target.value)}
                  onBlur={() => handleBlurAdmiredUrl(idx)}
                  placeholder="https://... or brand URL / Ad Library link"
                  className={baseInputStyles}
                />
                <input
                  type="text"
                  value={item.note}
                  onChange={(e) => updateAdmiredRow(idx, 'note', e.target.value)}
                  placeholder="What specifically caught your eye? (e.g. typography, hook angle)"
                  className={baseInputStyles}
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addAdmiredBrand}
            className="px-4 py-2 rounded-xl bg-white border border-[#E7E3DA] hover:border-[#5D2E85] text-[#5D2E85] text-xs font-sans font-semibold tracking-wide flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>Add Brand or Ad You Admire</span>
          </button>
        </div>
      </div>

      {/* Validation Error Message */}
      {error && (
        <p className="text-xs text-[#991B1B] font-medium flex items-center gap-1.5 pt-1" aria-live="polite">
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
