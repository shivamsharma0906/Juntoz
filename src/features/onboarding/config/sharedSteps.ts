/**
 * Shared Flow Steps Configuration
 * Single source of truth for the 3 shared onboarding steps across all platforms:
 * 1. Reference Competitors & Inspiration
 * 2. Client Requirements
 * 3. Calling Slot (Always last step)
 */

import type { FlowStep, PlatformId } from '../types/onboarding';

/**
 * Step A: Reference Competitors & Inspiration
 */
export function getSharedCompetitorsStep(platform: PlatformId): FlowStep {
  const isMerchant = platform === 'merchant-center';
  const isGoogle = platform === 'google-ads';
  const eyebrowNum = isGoogle ? '06' : '05';

  return {
    id: 'competitors-inspiration',
    eyebrow: isMerchant ? `STEP ${eyebrowNum} · BENCHMARKS & STORES` : `STEP ${eyebrowNum} · COMPETITORS & INSPIRATION`,
    title: isMerchant ? 'Reference Competitors & Store Inspiration' : 'Reference Competitors & Inspiration',
    subtitle: isMerchant
      ? 'Identify benchmark e-commerce stores whose product feeds, pricing tiers, and catalog layouts you admire.'
      : 'Give us 1 to 5 competitors and accounts you admire so our specialists can benchmark their aesthetics and strategy.',
    optional: isMerchant,
    fields: [
      {
        name: 'competitorsData',
        label: isMerchant ? 'Store Competitors & Inspiration' : 'Reference Competitors & Inspiration',
        type: 'competitor-repeater',
        required: !isMerchant,
        customConfig: {
          isMerchantCenter: isMerchant,
        },
      },
    ],
  };
}

/**
 * Step B: Client Requirements
 */
export function getSharedClientRequirementsStep(platform: PlatformId): FlowStep {
  const isMerchant = platform === 'merchant-center';
  const isGoogle = platform === 'google-ads';
  const isInsta = platform === 'instagram-handling';
  const isGmb = platform === 'gmb';

  // Platform-tailored deliverables
  let deliverableOptions = [
    { value: 'campaign-setup', label: 'Campaign Setup & Architecture' },
    { value: 'creatives', label: 'Ad Creatives & Video Hook Editing' },
    { value: 'landing-page', label: 'High-Converting Landing Page / CRO' },
    { value: 'reporting', label: 'Custom Telemetry & Weekly Reporting' },
    { value: 'ongoing-management', label: 'Ongoing Management & Bid Scaling' },
    { value: 'audit', label: 'Comprehensive Account Audit & Hygiene' },
  ];

  if (isInsta) {
    deliverableOptions = [
      { value: 'grid-curation', label: 'Aesthetic Grid Planning & Curation' },
      { value: 'reels-editing', label: 'Viral Reels Scripting & 4K Video Editing' },
      { value: 'story-funnels', label: 'Daily Interactive Story Sequences & Polls' },
      { value: 'dm-triage', label: 'Inbound DM Lead Qualification & Booking' },
      { value: 'bio-highlights', label: 'Bio Optimization & Signature Highlight Covers' },
      { value: 'growth-telemetry', label: 'Monthly Aesthetic & Reach Telemetry' },
    ];
  } else if (isGmb) {
    deliverableOptions = [
      { value: 'local-3pack', label: 'Local 3-Pack Maps Geo-Keyword Optimization' },
      { value: 'gmb-audit', label: 'Google Business Profile Audit & Hygiene' },
      { value: 'geotagged-posts', label: 'Weekly Geotagged Visual Uploads & Updates' },
      { value: 'review-defense', label: '5-Star Review Generation & Defense Playbook' },
      { value: 'citations-sync', label: 'NAP Citation Consistency & Map Pin Accuracy' },
      { value: 'calls-telemetry', label: 'Monthly Calls & Direction Inquiries Telemetry' },
    ];
  }

  const baseFields = [
    {
      name: 'desiredStartDate',
      label: 'Desired Kickoff & Start Date',
      type: 'date' as const,
      helper: 'Earliest start date is tomorrow. Our onboarding audit commences immediately upon confirmation.',
      minDateTomorrow: true,
      required: true,
    },
    {
      name: 'expectedDeliverables',
      label: 'Expected Deliverables & Scope',
      type: 'chips' as const,
      multiple: true,
      options: deliverableOptions,
      helper: 'Select all key services you expect delivered under this engagement.',
      required: true,
    },
    {
      name: 'specificRequirements',
      label: 'Specific Requirements or Must-Haves (Limit 500 Chars)',
      type: 'textarea' as const,
      placeholder: 'e.g. Must highlight our clinical certifications, prioritize bridal packages above ₹40,000, and ensure all copy strictly aligns with our luxury brand tone.',
      maxLength: 500,
      helper: 'Mandatory brand guidelines, certifications, or commercial criteria our team must honor.',
      required: true,
    },
    {
      name: 'thingsToAvoid',
      label: 'Things to Avoid or Hard Constraints (Optional)',
      type: 'textarea' as const,
      placeholder: 'e.g. Do not bid on cheap/discount keywords, avoid casual emojis in captions, no before/after imagery that could trigger policy flags.',
      required: false,
    },
    {
      name: 'pastAgencyExperience',
      label: 'Past Agency or Media Buying Experience',
      type: 'select' as const,
      options: [
        { value: 'first-time', label: 'First time hiring a dedicated growth agency' },
        { value: 'prior-agency-positive', label: 'Worked with an agency before (positive experience)' },
        { value: 'prior-agency-mixed', label: 'Worked with an agency before (mixed results)' },
        { value: 'prior-agency-burned', label: 'Worked with an agency before (poor experience / burned)' },
        { value: 'in-house', label: 'Managed ad campaigns internally in-house' },
        { value: 'freelancer', label: 'Collaborated with freelance media buyers' },
      ],
      required: true,
    },
    {
      name: 'pastAgencyNotes',
      label: 'What worked or did not work in prior engagements? (Optional)',
      type: 'textarea' as const,
      placeholder: 'e.g. Creative turnarounds were too slow, reporting lacked clear ROAS telemetry, or lead quality was unqualified.',
      required: false,
    },
    {
      name: 'reportingFrequency',
      label: 'Preferred Telemetry & Reporting Cadence',
      type: 'chips' as const,
      multiple: false,
      options: [
        { value: 'weekly', label: 'Weekly Telemetry & Video Review' },
        { value: 'fortnightly', label: 'Fortnightly Strategic Review' },
        { value: 'monthly', label: 'Monthly Comprehensive Performance Audit' },
      ],
      helper: 'How frequently you want scheduled performance reviews with our team.',
      required: true,
    },
  ];

  // Include primary goal and budget range ONLY for Merchant Center
  // (Google Ads, Meta Ads, Instagram Handling, and GMB flows collect their specific goals in Steps 2-3)
  if (isMerchant) {
    const merchantGoalFields = [
      {
        name: 'merchantPrimaryGoal',
        label: 'Primary Merchant Center Goal',
        type: 'chips' as const,
        multiple: true,
        options: [
          { value: 'shopping-scale', label: 'Scale Google Shopping & PMax Revenue' },
          { value: 'free-listings', label: 'Verify Free Google Product Listings' },
          { value: 'fix-suspension', label: 'Resolve Misrepresentation Suspension' },
          { value: 'catalog-sync', label: 'Feed Architecture & Attribute Sync' },
        ],
        helper: 'What is your core commercial goal for Google Merchant Center?',
        required: true,
      },
      {
        name: 'merchantMonthlyAdSpend',
        label: 'Planned Monthly Ad Spend (INR)',
        type: 'select' as const,
        options: [
          { value: '5k-10k', label: '₹5,000 – ₹10,000 / month' },
          { value: '10k-20k', label: '₹10,000 – ₹20,000 / month' },
          { value: '20k-35k', label: '₹20,000 – ₹35,000 / month' },
          { value: '35k-75k', label: '₹35,000 – ₹75,000 / month' },
          { value: '75k-150k', label: '₹75,000 – ₹1,50,000 / month' },
          { value: '150k-plus', label: '₹1,50,000+ / month' },
        ],
        helper: 'Direct ad spend paid to Google Shopping. Feed optimization fee is separate.',
        required: true,
      },
    ];

    return {
      id: 'client-requirements',
      eyebrow: 'STEP 07 · SCOPE & DELIVERABLES',
      title: 'Client Requirements',
      subtitle: 'Define your primary goals, monthly media budget, start date, and deliverables.',
      fields: [...merchantGoalFields, ...baseFields],
    };
  }

  const reqEyebrowNum = isGoogle ? '08' : isInsta || isGmb ? '06' : '06';

  return {
    id: 'client-requirements',
    eyebrow: `STEP ${reqEyebrowNum} · SCOPE & DELIVERABLES`,
    title: 'Client Requirements',
    subtitle: 'Define key timelines, expected deliverables, must-haves, and communication cadence.',
    fields: baseFields,
  };
}

/**
 * Step C: Calling Slot (Always the last step before submit)
 */
export function getSharedCallingSlotStep(platform: PlatformId, totalSteps: number): FlowStep {
  const stepNum = String(totalSteps).padStart(2, '0');

  return {
    id: 'calling-slot',
    eyebrow: `STEP ${stepNum} · KICKOFF CALL REQUEST`,
    title: 'Calling Slot & Availability',
    subtitle: "Request your preferred strategy kickoff slot. We'll confirm via WhatsApp or email.",
    fields: [
      {
        name: 'callingSlotData',
        label: 'Calling Slot Request',
        type: 'calling-slot',
        required: true,
      },
    ],
  };
}
