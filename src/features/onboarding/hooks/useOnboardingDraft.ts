import { useState, useEffect, useCallback, useRef } from 'react';
import type { PlatformId, OnboardingFormState } from '../types/onboarding';

const STORAGE_PREFIX = 'juntoz_onboarding_draft_';

const DEFAULT_INITIAL_STATE: OnboardingFormState = {
  platform: null,
  currentStepIndex: 0,
  data: {},
  lastUpdated: Date.now(),
};

export function useOnboardingDraft(initialPlatform: PlatformId | null = null) {
  const [formState, setFormState] = useState<OnboardingFormState>(() => {
    // If a platform is specified, check for an existing draft
    if (initialPlatform) {
      try {
        const saved = localStorage.getItem(`${STORAGE_PREFIX}${initialPlatform}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            platform: initialPlatform,
            currentStepIndex: typeof parsed.currentStepIndex === 'number' ? parsed.currentStepIndex : 0,
            data: parsed.data || {},
            lastUpdated: parsed.lastUpdated || Date.now(),
          };
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

  // Debounced save to localStorage whenever formState changes and platform is selected
  useEffect(() => {
    if (!formState.platform) return;

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      try {
        const payloadToSave = {
          platform: formState.platform,
          currentStepIndex: formState.currentStepIndex,
          data: formState.data,
          lastUpdated: Date.now(),
        };
        localStorage.setItem(
          `${STORAGE_PREFIX}${formState.platform}`,
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

  // Select or switch platform with draft resumption
  const setPlatform = useCallback((platformId: PlatformId) => {
    try {
      const existing = localStorage.getItem(`${STORAGE_PREFIX}${platformId}`);
      if (existing) {
        const parsed = JSON.parse(existing);
        setFormState({
          platform: platformId,
          currentStepIndex: typeof parsed.currentStepIndex === 'number' ? parsed.currentStepIndex : 0,
          data: parsed.data || {},
          lastUpdated: parsed.lastUpdated || Date.now(),
        });
        return;
      }
    } catch (e) {
      console.warn('Could not read existing draft', e);
    }

    setFormState((prev) => ({
      platform: platformId,
      currentStepIndex: 0,
      data: prev.data.clientName ? {
        // Carry over common business fields if client previously filled them
        clientName: prev.data.clientName,
        designation: prev.data.designation,
        businessName: prev.data.businessName,
        phone: prev.data.phone,
        email: prev.data.email,
        websiteUrl: prev.data.websiteUrl,
        instagramHandle: prev.data.instagramHandle,
        cityAndRadius: prev.data.cityAndRadius,
        beautyVerticals: prev.data.beautyVerticals,
      } : {},
      lastUpdated: Date.now(),
    }));
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

  // Step navigation
  const setStepIndex = useCallback((index: number) => {
    setFormState((prev) => ({
      ...prev,
      currentStepIndex: Math.max(0, index),
      lastUpdated: Date.now(),
    }));
  }, []);

  // Clear draft on submission
  const clearDraft = useCallback((platformId?: PlatformId) => {
    const id = platformId || formState.platform;
    if (id) {
      try {
        localStorage.removeItem(`${STORAGE_PREFIX}${id}`);
      } catch (e) {
        console.warn('Failed to clear draft', e);
      }
    }
    setFormState({
      platform: null,
      currentStepIndex: 0,
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
