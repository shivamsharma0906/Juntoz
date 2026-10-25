/**
 * Juntoz Onboarding Architecture — Type Definitions
 * Schema-driven, typed contracts for concierge intake flows.
 */

export type PlatformId = 'google-ads' | 'meta-ads' | 'merchant-center';

export type FieldType =
  | 'text'
  | 'email'
  | 'phone'
  | 'url'
  | 'select'
  | 'chips'
  | 'tag-list'
  | 'textarea'
  | 'access-guide'
  | 'consent';

export interface FieldOption {
  value: string;
  label: string;
  description?: string;
}

export interface AccessGuideData {
  platformName: string;
  partnerIdentifier: string;
  instructions: string[];
  docLink?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  helper?: string;
  required?: boolean;
  options?: FieldOption[];
  multiple?: boolean;
  guide?: AccessGuideData;
  validationRule?: string;
}

export interface FlowStep {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  fields: FormField[];
}

export interface FlowConfig {
  id: PlatformId;
  title: string;
  badge: string;
  shortDesc: string;
  icon: 'google' | 'meta' | 'shopping';
  estimatedMinutes: number;
  steps: FlowStep[];
}

export interface OnboardingFormState {
  platform: PlatformId | null;
  currentStepIndex: number;
  data: Record<string, any>;
  lastUpdated: number;
}

export interface OnboardingSubmissionResult {
  success: boolean;
  status?: number;
  submissionId?: string;
  businessName?: string;
  platform?: PlatformId;
  clientName?: string;
  recipient?: string;
  message?: string;
  error?: string;
  textDossier?: string;
  submittedAt?: string;
}
