/**
 * Juntoz Onboarding Architecture — Type Definitions
 * Schema-driven, typed contracts for concierge intake flows.
 */

export type PlatformId =
  | 'meta-ads'
  | 'instagram-handling'
  | 'gmb'
  | 'google-ads'
  | 'merchant-center';

export type FieldType =
  | 'text'
  | 'email'
  | 'phone'
  | 'url'
  | 'date'
  | 'select'
  | 'chips'
  | 'tag-list'
  | 'textarea'
  | 'access-guide'
  | 'consent'
  | 'competitor-repeater'
  | 'calling-slot';

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
  maxLength?: number;
  minDateTomorrow?: boolean;
  customConfig?: Record<string, any>;
}

export interface FlowStep {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  fields: FormField[];
  optional?: boolean;
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

export interface CompetitorRow {
  name: string;
  website: string;
  instagram: string;
  notes: string;
}

export interface AdmiredBrandRow {
  url: string;
  note: string;
}

export interface CompetitorsData {
  researchForMe: boolean;
  competitors: CompetitorRow[];
  admiredBrands?: AdmiredBrandRow[];
}

export interface CallingSlotData {
  anyTimeWorks: boolean;
  preferredDate?: string;
  secondChoiceDate?: string;
  timeWindows: string[];
  timezone: string;
  callMode: string;
  callPhone: string;
  callNote?: string;
  dpdpConsent: boolean;
}

export interface OnboardingFormState {
  version?: number;
  platform: PlatformId | null;
  currentStepIndex: number;
  currentStepId?: string;
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
  slotDetails?: {
    anyTimeWorks: boolean;
    preferredDate?: string;
    secondChoiceDate?: string;
    timeWindows: string[];
    timezone: string;
    formattedSlotIST: string;
    formattedSlotLocal: string;
    callMode: string;
    callPhone: string;
  };
}
