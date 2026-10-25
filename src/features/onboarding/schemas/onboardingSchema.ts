import { z } from 'zod';
import type { FlowStep } from '../types/onboarding';
import { isDateTomorrowOrLater } from '../utils/timezoneUtils';
import { normalizeWebsiteUrl } from '../utils/urlUtils';

// Helper for normalizing URL
export function normalizeUrl(urlStr: string): string {
  return normalizeWebsiteUrl(urlStr);
}

// Indian mobile number regex (6, 7, 8, or 9 followed by 9 digits)
export const indianPhoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;

// Dynamic validator per step based on fields
export function validateStep(step: FlowStep, formData: Record<string, any>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  for (const field of step.fields) {
    const val = formData[field.name];

    // ── 1. Custom Validation for Competitor Repeater ──
    if (field.type === 'competitor-repeater') {
      const isOptional = step.optional || !field.required;
      if (!isOptional) {
        const researchForMe = val?.researchForMe === true;
        if (!researchForMe) {
          const rows = Array.isArray(val?.competitors) ? val.competitors : [];
          const hasValidRow = rows.some(
            (r: any) =>
              (r.name && r.name.trim().length > 0) ||
              (r.website && r.website.trim().length > 0) ||
              (r.instagram && r.instagram.trim().length > 0)
          );

          if (!hasValidRow) {
            errors[field.name] =
              "Please provide at least one competitor or enable 'I\\'m not sure, please research for me'.";
          }
        }
      }
      continue;
    }

    // ── 2. Custom Validation for Calling Slot Picker ──
    if (field.type === 'calling-slot') {
      const slot = val || {};
      const anyTime = slot.anyTimeWorks === true;
      const tz = slot.timezone || 'Asia/Kolkata';

      if (!anyTime) {
        if (!slot.preferredDate || !slot.preferredDate.trim()) {
          errors[field.name] = 'Please select your preferred kickoff date.';
        } else if (!isDateTomorrowOrLater(slot.preferredDate, tz)) {
          errors[field.name] = 'Preferred date must be tomorrow or later in your timezone.';
        }

        if (!Array.isArray(slot.timeWindows) || slot.timeWindows.length === 0) {
          errors[field.name] = errors[field.name] || 'Please select at least one preferred time window.';
        }
      }

      const cleanPhone = (slot.callPhone || formData.phone || '').replace(/\D/g, '');
      if (!cleanPhone || cleanPhone.length < 10) {
        errors[field.name] = errors[field.name] || 'Please provide a valid contact number for the call.';
      }

      if (slot.dpdpConsent !== true) {
        errors[field.name] =
          errors[field.name] || 'You must authorize data protection and intake to submit.';
      }
      continue;
    }

    // ── 3. Date Field Validation ──
    if (field.type === 'date') {
      if (field.required && (!val || typeof val !== 'string' || !val.trim())) {
        errors[field.name] = `${field.label} is required`;
        continue;
      }
      if (val && field.minDateTomorrow) {
        if (!isDateTomorrowOrLater(val)) {
          errors[field.name] = 'Date cannot be in the past or today; must be tomorrow or later.';
          continue;
        }
      }
    }

    // ── 4. Standard Required Checks ──
    if (field.required) {
      if (val === undefined || val === null || val === '') {
        errors[field.name] = `${field.label} is required`;
        continue;
      }
      if (Array.isArray(val) && val.length === 0) {
        errors[field.name] = `Please select or add at least one ${field.label.toLowerCase()}`;
        continue;
      }
    }

    // ── 5. Standard Format Checks ──
    if (val && typeof val === 'string' && val.trim() !== '') {
      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())) {
        errors[field.name] = 'Please enter a valid email address';
      }

      if (field.type === 'phone') {
        const clean = val.replace(/[\s-]/g, '');
        if (!indianPhoneRegex.test(clean)) {
          errors[field.name] = 'Please enter a valid 10-digit mobile number';
        }
      }

      if (field.type === 'url') {
        try {
          const normalized = normalizeUrl(val);
          new URL(normalized);
        } catch {
          errors[field.name] = 'Please enter a valid website or asset URL';
        }
      }

      if (field.maxLength && val.length > field.maxLength) {
        errors[field.name] = `Cannot exceed ${field.maxLength} characters`;
      }
    }

    if (field.type === 'consent' && field.required && val !== true) {
      errors[field.name] = 'You must acknowledge and accept this policy to proceed';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Full Submission Payload Schema for Server-Side Verification
export const onboardingSubmissionSchema = z.object({
  platform: z.enum(['google-ads', 'meta-ads', 'merchant-center'], {
    message: 'Valid marketing platform selection is required',
  }),
  clientName: z.string().trim().min(2, 'Full name is required'),
  designation: z.string().trim().optional(),
  businessName: z.string().trim().min(2, 'Business name is required'),
  phone: z.string().trim().min(10, 'Valid phone number is required'),
  email: z.string().trim().email('Valid email is required'),
  websiteUrl: z.string().trim().optional(),
  instagramHandle: z.string().trim().optional(),
  cityAndRadius: z.string().trim().min(2, 'City and service radius is required'),
  beautyVerticals: z.array(z.string()).min(1, 'At least one beauty vertical must be selected'),
  honeypot: z.string().max(0, 'Bot submission rejected').optional(),
  data: z.record(z.string(), z.any()),
  submittedAt: z.string().optional(),
});
