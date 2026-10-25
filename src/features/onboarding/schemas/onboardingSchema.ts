import { z } from 'zod';
import type { FlowStep } from '../types/onboarding';

// Helper for normalizing URL
export function normalizeUrl(urlStr: string): string {
  if (!urlStr) return '';
  const trimmed = urlStr.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

// Indian mobile number regex (6, 7, 8, or 9 followed by 9 digits)
const indianPhoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;

// Common Step 1: About You & Your Business Schema
export const commonBusinessSchema = z.object({
  clientName: z.string().trim().min(2, 'Please enter your full name'),
  designation: z.string().trim().optional(),
  businessName: z.string().trim().min(2, 'Please enter your business or brand name'),
  phone: z
    .string()
    .trim()
    .refine((val) => {
      const clean = val.replace(/[\s-]/g, '');
      return indianPhoneRegex.test(clean);
    }, 'Please enter a valid 10-digit Indian WhatsApp number (+91)'),
  email: z.string().trim().email('Please enter a valid email address'),
  websiteUrl: z
    .string()
    .trim()
    .refine((val) => {
      if (!val) return true; // optional in some cases
      try {
        const normalized = normalizeUrl(val);
        new URL(normalized);
        return true;
      } catch {
        return false;
      }
    }, 'Please enter a valid website URL'),
  instagramHandle: z.string().trim().optional(),
  cityAndRadius: z.string().trim().min(2, 'Please enter your city and primary service location'),
  beautyVerticals: z.array(z.string()).min(1, 'Please select at least one primary service vertical'),
});

// Dynamic validator per step based on fields
export function validateStep(step: FlowStep, formData: Record<string, any>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  for (const field of step.fields) {
    const val = formData[field.name];

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
