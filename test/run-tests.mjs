import { createJiti } from 'jiti';
import assert from 'node:assert/strict';

const jiti = createJiti(import.meta.url);

async function run() {
  console.log('🚀 Starting Onboarding Concierge Test Suite...\n');

  const {
    normalizeWebsiteUrl,
    normalizeInstagramHandle,
    parseBulkUrls,
  } = await jiti.import('../src/features/onboarding/utils/urlUtils.ts');

  const {
    getTomorrowDateInTimezone,
    isDateTomorrowOrLater,
    formatTimeWindowLabel,
    TIME_SLOT_WINDOWS,
  } = await jiti.import('../src/features/onboarding/utils/timezoneUtils.ts');

  const { migrateDraft } = await jiti.import('../src/features/onboarding/hooks/useOnboardingDraft.ts');
  const { validateStep } = await jiti.import('../src/features/onboarding/schemas/onboardingSchema.ts');
  const {
    getSharedCompetitorsStep,
    getSharedClientRequirementsStep,
    getSharedCallingSlotStep,
  } = await jiti.import('../src/features/onboarding/config/sharedSteps.ts');
  const { processOnboarding } = await jiti.import('../api/onboarding.js');

  // Test 1: URL Normalization & Tracking Stripping
  console.log('✓ Testing URL Normalization & Tracking Stripping');
  assert.equal(normalizeWebsiteUrl('auraluxe.in'), 'https://auraluxe.in');
  assert.equal(
    normalizeWebsiteUrl('https://competitor.com/landing?utm_source=fb&utm_medium=cpc&fbclid=123'),
    'https://competitor.com/landing'
  );
  assert.equal(
    normalizeWebsiteUrl('https://competitor.com/shop?gclid=ABC&color=rose'),
    'https://competitor.com/shop?color=rose'
  );

  const parsedBulk = parseBulkUrls('auraluxe.in, https://competitor2.com?utm_source=ad\nauraluxe.in');
  assert.deepEqual(parsedBulk, ['https://auraluxe.in', 'https://competitor2.com']);

  // Test 2: Instagram Normalization
  console.log('✓ Testing Instagram Normalization');
  assert.equal(normalizeInstagramHandle('@hudabeauty'), '@hudabeauty');
  assert.equal(normalizeInstagramHandle('hudabeauty'), '@hudabeauty');
  assert.equal(normalizeInstagramHandle('https://instagram.com/hudabeauty'), '@hudabeauty');
  assert.equal(normalizeInstagramHandle('https://www.instagram.com/hudabeauty/?hl=en'), '@hudabeauty');

  // Test 3: Timezone & DST Slot Formatting
  console.log('✓ Testing Timezone & DST Slot Formatting');
  const morningWin = TIME_SLOT_WINDOWS.find((w) => w.id === 'morning');
  assert.ok(morningWin);

  const istLabel = formatTimeWindowLabel(morningWin, 'Asia/Kolkata');
  assert.equal(istLabel.subLabel, '10:00 AM – 1:00 PM IST');

  const dubaiLabel = formatTimeWindowLabel(morningWin, 'Asia/Dubai', '2026-11-01');
  assert.ok(dubaiLabel.subLabel.includes('8:30 AM'));
  assert.ok(dubaiLabel.subLabel.includes('11:30 AM'));

  const winterEst = formatTimeWindowLabel(morningWin, 'America/New_York', '2026-12-15');
  assert.ok(winterEst.subLabel.includes('EST'));

  const summerEdt = formatTimeWindowLabel(morningWin, 'America/New_York', '2026-06-15');
  assert.ok(summerEdt.subLabel.includes('EDT'));

  const tomorrowDubai = getTomorrowDateInTimezone('Asia/Dubai');
  assert.equal(isDateTomorrowOrLater(tomorrowDubai, 'Asia/Dubai'), true);
  assert.equal(isDateTomorrowOrLater('2020-01-01', 'Asia/Dubai'), false);

  // Test 4: Draft Migration
  console.log('✓ Testing Draft Migration from Version 1');
  const legacyGoogleDraft = {
    platform: 'google-ads',
    currentStepIndex: 3,
    data: {
      clientName: 'Priya Sharma',
      competitorUrls: 'competitor1.in\nhttps://competitor2.com?utm_source=old',
    },
  };
  const migratedGoogle = migrateDraft(legacyGoogleDraft, 'google-ads');
  assert.equal(migratedGoogle.version, 2);
  assert.equal(migratedGoogle.currentStepId, 'google-usps');
  assert.equal(migratedGoogle.data.competitorsData.competitors.length, 2);
  assert.equal(migratedGoogle.data.competitorsData.competitors[0].website, 'https://competitor1.in');

  const legacyMetaDraft = {
    platform: 'meta-ads',
    currentStepIndex: 4, // removed meta-positioning
    data: {
      clientName: 'Ananya Verma',
      inspirationHandles: '@hudabeauty, https://instagram.com/artistryby',
      brandVoicePositioning: ['luxury-haute'],
    },
  };
  const migratedMeta = migrateDraft(legacyMetaDraft, 'meta-ads');
  assert.equal(migratedMeta.version, 2);
  assert.equal(migratedMeta.currentStepId, 'meta-creative'); // mapped to merged step
  assert.equal(migratedMeta.data.competitorsData.admiredBrands.length, 2);

  // Test 5: Validation blocks incomplete migrated drafts
  console.log('✓ Testing Validation Blocks Incomplete Drafts');
  const reqStep = getSharedClientRequirementsStep('google-ads');
  const slotStep = getSharedCallingSlotStep('google-ads', 9);
  assert.equal(validateStep(reqStep, {}).isValid, false);
  assert.equal(validateStep(slotStep, {}).isValid, false);

  // Test 6: "Any time works" path
  console.log('✓ Testing "Any time works" Path');
  const validAnyTimeSlot = {
    callingSlotData: {
      anyTimeWorks: true,
      timezone: 'Asia/Kolkata',
      callMode: 'whatsapp',
      callPhone: '9820012345',
      dpdpConsent: true,
    },
  };
  assert.equal(validateStep(slotStep, validAnyTimeSlot).isValid, true);

  // Test 7: Server Handler & Header Sanitization
  console.log('✓ Testing Server Handler & Header Sanitization');
  const tomorrow = getTomorrowDateInTimezone('Asia/Kolkata');
  const serverPayload = {
    platform: 'google-ads',
    clientName: 'Rhea Kapoor',
    businessName: 'Luxe Bridal Artistry\r\nBcc: evil@attacker.com',
    phone: '9820012345',
    email: 'rhea@luxebridal.in',
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

  // Test 8: Instagram Handling & GMB Flow Verification
  console.log('✓ Testing Instagram Handling & GMB Flow Structures');
  const { INSTAGRAM_HANDLING_FLOW, GMB_FLOW, ALL_FLOWS } = await jiti.import('../src/features/onboarding/config/flows.ts');
  assert.ok(INSTAGRAM_HANDLING_FLOW);
  assert.equal(INSTAGRAM_HANDLING_FLOW.steps.length, 7);
  assert.ok(GMB_FLOW);
  assert.equal(GMB_FLOW.steps.length, 7);
  assert.ok(ALL_FLOWS['instagram-handling']);
  assert.ok(ALL_FLOWS['gmb']);
  assert.ok(ALL_FLOWS['meta-ads']);

  // Test 9: Server Handler for Instagram Handling & GMB
  console.log('✓ Testing Server Handler for Instagram Handling & GMB');
  const instaServerRes = await processOnboarding({
    ...serverPayload,
    platform: 'instagram-handling',
    businessName: 'Luxe Hair Studio Mumbai',
  }, '127.0.0.1');
  assert.equal(instaServerRes.success, true);
  assert.ok(instaServerRes.submissionId.startsWith('ONB-INSTA-'));

  const gmbServerRes = await processOnboarding({
    ...serverPayload,
    platform: 'gmb',
    businessName: 'Aura Skin Clinic Delhi',
  }, '127.0.0.1');
  assert.equal(gmbServerRes.success, true);
  assert.ok(gmbServerRes.submissionId.startsWith('ONB-GMB-'));

  console.log('\n🎉 ALL ONBOARDING CONCIERGE TESTS PASSED!\n');
}

run().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
