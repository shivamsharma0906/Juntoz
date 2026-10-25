import { useState, useEffect, useCallback, useRef } from 'react';
import type { PlatformId, OnboardingFormState, CompetitorRow, AdmiredBrandRow } from '../types/onboarding';
import { ALL_FLOWS } from '../config/flows';
import { DRAFT_STORAGE_PREFIX, DRAFT_SCHEMA_VERSION } from '../config/constants';
import { normalizeWebsiteUrl, normalizeInstagramHandle } from '../utils/urlUtils';

const DEFAULT_INITIAL_STATE: OnboardingFormState = {
  version: DRAFT_SCHEMA_VERSION,
  platform: null,
  currentStepIndex: 0,
  currentStepId: 'business-profile',
  data: {},
  lastUpdated: Date.now(),
};

/**
 * Migrates a version-1 (or unversioned) draft into the version-2 schema:
 * - Migrates Google competitorUrls into competitorsData rows
 * - Migrates Meta inspirationHandles into competitorsData admiredBrands
 * - Maps the removed 'meta-positioning' step ID into 'meta-creative'
 * - Resolves step index using step IDs rather than obsolete indices
 */
export function migrateDraft(parsed: any, platform: PlatformId): OnboardingFormState {
  const data: Record<string, any> = { ...(parsed?.data || {}) };
  const flow = ALL_FLOWS[platform];
  const steps = flow ? flow.steps : [];

  // 1. Google competitorUrls migration
  if (data.competitorUrls && !data.competitorsData) {
    const rawLines = String(data.competitorUrls)
      .split(/[\n,]+/)
      .map((s) => s.trim())
      .filter(Boolean);

    const migratedRows: CompetitorRow[] = [];

    for (const line of rawLines) {
      if (line.includes('.') || line.startsWith('http')) {
        const norm = normalizeWebsiteUrl(line);
        let domainName = '';
        try {
          domainName = new URL(norm).hostname.replace(/^www\./, '');
        } catch {
          domainName = line;
        }
        migratedRows.push({
          name: domainName,
          website: norm,
          instagram: '',
          notes: 'Imported from previous draft',
        });
      } else {
        migratedRows.push({
          name: line,
          website: '',
          instagram: '',
          notes: '',
        });
      }
    }

    data.competitorsData = {
      researchForMe: false,
      competitors:
        migratedRows.length > 0
          ? migratedRows.slice(0, 5)
          : [{ name: String(data.competitorUrls), website: '', instagram: '', notes: '' }],
      admiredBrands: [],
    };
  }

  // 2. Meta inspirationHandles migration
  if (data.inspirationHandles) {
    if (!data.competitorsData) {
      data.competitorsData = {
        researchForMe: false,
        competitors: [{ name: '', website: '', instagram: '', notes: '' }],
        admiredBrands: [],
      };
    }
    const rawHandles = String(data.inspirationHandles)
      .split(/[\n,]+/)
      .map((s) => s.trim())
      .filter(Boolean);

    const admired: AdmiredBrandRow[] = rawHandles.map((h) => ({
      url: normalizeInstagramHandle(h),
      note: 'Imported inspiration handle',
    }));

    data.competitorsData.admiredBrands = [
      ...(data.competitorsData.admiredBrands || []),
      ...admired,
    ];
  }

  // 3. Map legacy step index / step ID
  let targetStepId = parsed?.currentStepId;

  if (targetStepId === 'meta-positioning') {
    targetStepId = 'meta-creative';
  }

  if (!targetStepId && typeof parsed?.currentStepIndex === 'number') {
    // Map old 6-step indices to old step IDs
    const legacyGoogleIds = ['business-profile', 'google-goals', 'google-geo', 'google-usps', 'google-keywords', 'google-access'];
    const legacyMetaIds = ['business-profile', 'meta-goals', 'meta-audience', 'meta-creative', 'meta-positioning', 'meta-access'];
    const legacyGmcIds = ['business-profile', 'gmc-entity', 'gmc-policies', 'gmc-feed', 'gmc-access'];

    const oldIds = platform === 'google-ads' ? legacyGoogleIds : platform === 'meta-ads' ? legacyMetaIds : legacyGmcIds;
    targetStepId = oldIds[parsed.currentStepIndex] || 'business-profile';
    if (targetStepId === 'meta-positioning') {
      targetStepId = 'meta-creative';
    }
  }

  // 4. Resolve index in new flow
  let stepIndex = 0;
  if (targetStepId && steps.length > 0) {
    const foundIdx = steps.findIndex((s) => s.id === targetStepId);
    stepIndex = foundIdx !== -1 ? foundIdx : 0;
  }

  return {
    version: DRAFT_SCHEMA_VERSION,
    platform,
    currentStepIndex: stepIndex,
    currentStepId: targetStepId || steps[stepIndex]?.id || 'business-profile',
    data,
    lastUpdated: parsed?.lastUpdated || Date.now(),
  };
}

export function useOnboardingDraft(initialPlatform: PlatformId | null = null) {
  const [formState, setFormState] = useState<OnboardingFormState>(() => {
    if (initialPlatform) {
      try {
        const saved = localStorage.getItem(`${DRAFT_STORAGE_PREFIX}${initialPlatform}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          return migrateDraft(parsed, initialPlatform);
        }
      } catch (e) {
        console.warn('Failed to parse onboarding draft from localStorage', e);
      }
    }
    return {
      ...DEFAULT_INITIAL_STATE,
      platform: initialPlatform,
    };
  });

  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounced save to localStorage whenever formState changes
  useEffect(() => {
    if (!formState.platform) return;

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      try {
        const flow = ALL_FLOWS[formState.platform!];
        const stepId = flow?.steps[formState.currentStepIndex]?.id || formState.currentStepId;

        const payloadToSave: OnboardingFormState = {
          version: DRAFT_SCHEMA_VERSION,
          platform: formState.platform,
          currentStepIndex: formState.currentStepIndex,
          currentStepId: stepId,
          data: formState.data,
          lastUpdated: Date.now(),
        };
        localStorage.setItem(
          `${DRAFT_STORAGE_PREFIX}${formState.platform}`,
          JSON.stringify(payloadToSave)
        );
      } catch (e) {
        console.warn('Failed to save onboarding draft to localStorage', e);
      }
    }, 400);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [formState]);

  // Select or switch platform with draft resumption & migration
  const setPlatform = useCallback((platformId: PlatformId | null) => {
    if (!platformId) {
      setFormState((prev) => ({
        ...prev,
        platform: null,
        currentStepIndex: 0,
        currentStepId: 'business-profile',
      }));
      return;
    }

    try {
      const existing = localStorage.getItem(`${DRAFT_STORAGE_PREFIX}${platformId}`);
      if (existing) {
        const parsed = JSON.parse(existing);
        const migrated = migrateDraft(parsed, platformId);
        setFormState(migrated);
        return;
      }
    } catch (e) {
      console.warn('Could not read existing draft', e);
    }

    setFormState((prev) => {
      const flow = ALL_FLOWS[platformId];
      const initialStepId = flow?.steps[0]?.id || 'business-profile';

      return {
        version: DRAFT_SCHEMA_VERSION,
        platform: platformId,
        currentStepIndex: 0,
        currentStepId: initialStepId,
        data: prev.data.clientName
          ? {
              clientName: prev.data.clientName,
              designation: prev.data.designation,
              businessName: prev.data.businessName,
              phone: prev.data.phone,
              email: prev.data.email,
              websiteUrl: prev.data.websiteUrl,
              instagramHandle: prev.data.instagramHandle,
              cityAndRadius: prev.data.cityAndRadius,
              beautyVerticals: prev.data.beautyVerticals,
            }
          : {},
        lastUpdated: Date.now(),
      };
    });
  }, []);

  // Update a single field
  const updateField = useCallback((name: string, value: any) => {
    setFormState((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
      lastUpdated: Date.now(),
    }));
  }, []);

  // Update multiple fields
  const updateFields = useCallback((fields: Record<string, any>) => {
    setFormState((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        ...fields,
      },
      lastUpdated: Date.now(),
    }));
  }, []);

  // Step navigation by index or step ID
  const setStepIndex = useCallback((index: number) => {
    setFormState((prev) => {
      const flow = prev.platform ? ALL_FLOWS[prev.platform] : null;
      const targetIndex = Math.max(0, Math.min(index, (flow?.steps.length || 1) - 1));
      const stepId = flow?.steps[targetIndex]?.id;

      return {
        ...prev,
        currentStepIndex: targetIndex,
        currentStepId: stepId || prev.currentStepId,
        lastUpdated: Date.now(),
      };
    });
  }, []);

  // Clear draft on submission
  const clearDraft = useCallback((platformId?: PlatformId) => {
    const id = platformId || formState.platform;
    if (id) {
      try {
        localStorage.removeItem(`${DRAFT_STORAGE_PREFIX}${id}`);
      } catch (e) {
        console.warn('Failed to clear draft', e);
      }
    }
    setFormState({
      ...DEFAULT_INITIAL_STATE,
      platform: null,
      currentStepIndex: 0,
      currentStepId: 'business-profile',
      data: {},
      lastUpdated: Date.now(),
    });
  }, [formState.platform]);

  return {
    formState,
    setPlatform,
    updateField,
    updateFields,
    setStepIndex,
    clearDraft,
  };
}
