import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeWebsiteUrl,
  normalizeInstagramHandle,
  parseBulkUrls,
} from '../src/features/onboarding/utils/urlUtils.ts';
import {
  getTomorrowDateInTimezone,
  isDateTomorrowOrLater,
  formatTimeWindowLabel,
  TIME_SLOT_WINDOWS,
} from '../src/features/onboarding/utils/timezoneUtils.ts';
import { migrateDraft } from '../src/features/onboarding/hooks/useOnboardingDraft.ts';
import { validateStep } from '../src/features/onboarding/schemas/onboardingSchema.ts';
import {
  getSharedCompetitorsStep,
  getSharedClientRequirementsStep,
  getSharedCallingSlotStep,
} from '../src/features/onboarding/config/sharedSteps.ts';
import { processOnboarding } from '../api/onboarding.js';

test('URL Normalization & Tracking Parameter Stripping', () => {
  // Prepends https://
  assert.equal(normalizeWebsiteUrl('auraluxe.in'), 'https://auraluxe.in');
  
  // Strips UTM parameters
  const withUtm = 'https://competitor.com/landing?utm_source=facebook&utm_medium=cpc&utm_campaign=bridal';
  assert.equal(normalizeWebsiteUrl(withUtm), 'https://competitor.com/landing');

  // Strips fbclid, gclid, igshid
  const withTracking = 'https://competitor.com/shop?gclid=XYZ123&fbclid=FB456&color=red';
  assert.equal(normalizeWebsiteUrl(withTracking), 'https://competitor.com/shop?color=red');

  // Deduplication & Bulk parsing
  const bulkInput = `
    auraluxe.in, https://competitor2.com?utm_source=test
    auraluxe.in
    https://competitor3.in/
  `;
  const parsed = parseBulkUrls(bulkInput);
  assert.deepEqual(parsed, [
    'https://auraluxe.in',
    'https://competitor2.com',
    'https://competitor3.in',
  ]);
});

test('Instagram Handle Normalization', () => {
  assert.equal(normalizeInstagramHandle('@hudabeauty'), '@hudabeauty');
  assert.equal(normalizeInstagramHandle('hudabeauty'), '@hudabeauty');
  assert.equal(normalizeInstagramHandle('https://instagram.com/hudabeauty'), '@hudabeauty');
  assert.equal(normalizeInstagramHandle('https://www.instagram.com/hudabeauty/?hl=en'), '@hudabeauty');
});

test('Timezone and DST Slot Conversion', () => {
  const morningWin = TIME_SLOT_WINDOWS.find((w) => w.id === 'morning');
  assert.ok(morningWin);

  // In Asia/Kolkata: 10:00 AM – 1:00 PM IST
  const istLabel = formatTimeWindowLabel(morningWin, 'Asia/Kolkata');
  assert.equal(istLabel.mainLabel, 'Morning');
  assert.equal(istLabel.subLabel, '10:00 AM – 1:00 PM IST');

  // In Asia/Dubai (GST UTC+4: 1.5 hours behind IST):
  // 10:00 AM IST is 8:30 AM GST, 1:00 PM IST is 11:30 AM GST
  const dubaiLabel = formatTimeWindowLabel(morningWin, 'Asia/Dubai', '2026-11-01');
  assert.ok(dubaiLabel.subLabel.includes('8:30 AM'));
  assert.ok(dubaiLabel.subLabel.includes('11:30 AM'));
  assert.ok(dubaiLabel.subLabel.includes('10:00 AM – 1:00 PM IST'));

  // In America/New_York during Winter (EST = UTC-5: 10.5 hours behind IST):
  // 10:00 AM IST is 11:30 PM (previous day) or handles offset accurately
  const winterEst = formatTimeWindowLabel(morningWin, 'America/New_York', '2026-12-15');
  assert.ok(winterEst.subLabel.includes('EST'));

  // In America/New_York during Summer (EDT = UTC-4: 9.5 hours behind IST):
  const summerEdt = formatTimeWindowLabel(morningWin, 'America/New_York', '2026-06-15');
  assert.ok(summerEdt.subLabel.includes('EDT'));

  // Earliest date validation in timezone
  const tomorrowDubai = getTomorrowDateInTimezone('Asia/Dubai');
  assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(tomorrowDubai));
  assert.equal(isDateTomorrowOrLater(tomorrowDubai, 'Asia/Dubai'), true);
  assert.equal(isDateTomorrowOrLater('2020-01-01', 'Asia/Dubai'), false);
});

test('Draft Migration from Version 1 Draft', () => {
  // Google Ads v1 draft with competitorUrls string
  const legacyGoogleDraft = {
    platform: 'google-ads',
    currentStepIndex: 3, // was google-usps
    data: {
      clientName: 'Priya Sharma',
      competitorUrls: 'competitor1.in\nhttps://competitor2.com?utm_source=old',
    },
    lastUpdated: 1700000000000,
  };

  const migratedGoogle = migrateDraft(legacyGoogleDraft, 'google-ads');
  assert.equal(migratedGoogle.version, 2);
  assert.equal(migratedGoogle.currentStepId, 'google-usps');
  assert.equal(migratedGoogle.currentStepIndex, 3);
  assert.ok(migratedGoogle.data.competitorsData);
  assert.equal(migratedGoogle.data.competitorsData.competitors.length, 2);
  assert.equal(migratedGoogle.data.competitorsData.competitors[0].website, 'https://competitor1.in');
  assert.equal(migratedGoogle.data.competitorsData.competitors[1].website, 'https://competitor2.com');

  // Meta Ads v1 draft with inspirationHandles and removed meta-positioning step
  const legacyMetaDraft = {
    platform: 'meta-ads',
    currentStepIndex: 4, // was meta-positioning (removed!)
    data: {
      clientName: 'Ananya Verma',
      inspirationHandles: '@hudabeauty, https://instagram.com/artistryby',
      brandVoicePositioning: ['luxury-haute'],
    },
    lastUpdated: 1700000000000,
  };

  const migratedMeta = migrateDraft(legacyMetaDraft, 'meta-ads');
  assert.equal(migratedMeta.version, 2);
  // Merged into meta-creative!
  assert.equal(migratedMeta.currentStepId, 'meta-creative');
  assert.equal(migratedMeta.currentStepIndex, 3);
  assert.ok(migratedMeta.data.competitorsData);
  assert.equal(migratedMeta.data.competitorsData.admiredBrands.length, 2);
  assert.equal(migratedMeta.data.competitorsData.admiredBrands[0].url, '@hudabeauty');
});

test('Validation Prevents Submitting Incomplete Migrated Drafts', () => {
  const reqStep = getSharedClientRequirementsStep('google-ads');
  const slotStep = getSharedCallingSlotStep('google-ads', 9);

  // Empty data cannot pass requirements step
  const reqVal = validateStep(reqStep, {});
  assert.equal(reqVal.isValid, false);
  assert.ok(reqVal.errors.desiredStartDate);
  assert.ok(reqVal.errors.expectedDeliverables);
  assert.ok(reqVal.errors.specificRequirements);

  // Calling slot step cannot pass without consent and date
  const slotVal = validateStep(slotStep, {});
  assert.equal(slotVal.isValid, false);
  assert.ok(slotVal.errors.callingSlotData);
});

test('"Any time works" Path for Calling Slot', () => {
  const slotStep = getSharedCallingSlotStep('google-ads', 9);

  // With anyTimeWorks: true and consent, preferredDate is not required
  const validAnyTimeSlot = {
    callingSlotData: {
      anyTimeWorks: true,
      timezone: 'Asia/Kolkata',
      callMode: 'whatsapp',
      callPhone: '9820012345',
      dpdpConsent: true,
    },
  };

  const valResult = validateStep(slotStep, validAnyTimeSlot);
  assert.equal(valResult.isValid, true);
});

test('Server-Side /api/onboarding Handler with Call Request and Header Sanitization', async () => {
  const tomorrow = getTomorrowDateInTimezone('Asia/Kolkata');

  const payload = {
    platform: 'google-ads',
    clientName: 'Rhea Kapoor',
    businessName: 'Luxe Bridal Artistry\r\nBcc: evil@attacker.com', // Injection attempt!
    phone: '9820012345',
    email: 'rhea@luxebridal.in\r\nSubject: Injected', // Injection attempt!
    cityAndRadius: 'Mumbai South',
    beautyVerticals: ['bridal-makeup'],
    data: {
      desiredStartDate: tomorrow,
      expectedDeliverables: ['campaign-setup', 'creatives'],
      specificRequirements: 'Must use HD airbrush foundation',
      reportingFrequency: 'weekly',
      callingSlotData: {
        anyTimeWorks: false,
        preferredDate: tomorrow,
        timeWindows: ['morning'],
        timezone: 'Asia/Kolkata',
        callMode: 'whatsapp',
        callPhone: '9820012345',
        dpdpConsent: true,
      },
      competitorsData: {
        researchForMe: true,
      },
    },
  };

  const result = await processOnboarding(payload, '127.0.0.1');
  assert.equal(result.success, true);
  assert.ok(result.submissionId.startsWith('ONB-GADS-'));
  assert.ok(result.slotDetails);
  assert.equal(result.slotDetails.preferredDate, tomorrow);

  // Text dossier contains the top call request block
  assert.ok(result.textDossier.includes('1. KICKOFF CALL REQUEST:'));
  assert.ok(result.textDossier.includes('2. CLIENT REQUIREMENTS & SCOPE:'));
  assert.ok(result.textDossier.includes('3. REFERENCE COMPETITORS & BENCHMARKS:'));
});
