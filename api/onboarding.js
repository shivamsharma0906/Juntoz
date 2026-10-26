/* global process, Buffer */
/* eslint-disable no-control-regex */
/**
 * Juntoz Client Onboarding Serverless Endpoint
 * Vercel Serverless Function & Node.js Handler
 * Endpoint: POST /api/onboarding
 * Recipient: process.env.RECIPIENT_EMAIL || 'official.juntoz@gmail.com'
 */

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'official.juntoz@gmail.com';

// In-memory rate limiting map for basic spam suppression
const rateLimitMap = new Map();

// Helper to escape HTML characters in user content
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Strips Carriage Return, Line Feed, and ASCII control characters from strings
 * intended for email headers (Subject, From, To, Reply-To) to eliminate header injection attacks.
 */
function sanitizeHeader(val) {
  if (typeof val !== 'string') return '';
  return val.replace(/[\r\n\x00-\x1f\x7f]/g, '').trim();
}

const TIME_SLOT_WINDOWS = [
  { id: 'morning', label: 'Morning', istHours: '10:00 AM – 1:00 PM IST', startHour: 10, startMin: 0, endHour: 13, endMin: 0 },
  { id: 'afternoon', label: 'Afternoon', istHours: '2:00 PM – 5:00 PM IST', startHour: 14, startMin: 0, endHour: 17, endMin: 0 },
  { id: 'evening', label: 'Evening', istHours: '5:00 PM – 8:00 PM IST', startHour: 17, startMin: 0, endHour: 20, endMin: 0 },
];

/**
 * Validates whether a date is strictly tomorrow or later in the target timezone
 */
function isDateTomorrowOrLater(dateStr, timezone = 'Asia/Kolkata') {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  try {
    const now = new Date();
    const tzDateStr = now.toLocaleString('en-US', { timeZone: timezone });
    const localNow = new Date(tzDateStr);
    localNow.setDate(localNow.getDate() + 1);
    const yyyy = localNow.getFullYear();
    const mm = String(localNow.getMonth() + 1).padStart(2, '0');
    const dd = String(localNow.getDate()).padStart(2, '0');
    const minTomorrow = `${yyyy}-${mm}-${dd}`;
    return dateStr >= minTomorrow;
  } catch {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return dateStr >= tomorrow.toISOString().split('T')[0];
  }
}

/**
 * Formats time windows into both local timezone and IST
 * Automatically handles DST using native Intl.DateTimeFormat on the target date
 */
function formatTimeWindowsServer(windowIds, timezone = 'Asia/Kolkata', targetDateStr) {
  if (!Array.isArray(windowIds) || windowIds.length === 0) {
    return { localStr: 'Any available slot', istStr: 'Any available slot' };
  }

  const selected = TIME_SLOT_WINDOWS.filter((w) => windowIds.includes(w.id));
  if (selected.length === 0) {
    return { localStr: windowIds.join(', '), istStr: windowIds.join(', ') };
  }

  const istSummaries = selected.map((w) => `${w.label} (${w.istHours})`).join(' | ');

  if (timezone === 'Asia/Kolkata') {
    return { localStr: istSummaries, istStr: istSummaries };
  }

  try {
    const dateToUse = targetDateStr || new Date().toISOString().split('T')[0];
    const [year, month, day] = dateToUse.split('-').map(Number);

    const timeFmt = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    const tzNameFmt = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'short',
    });

    const localSummaries = selected
      .map((w) => {
        // Convert IST (UTC+5:30) to UTC
        const startUtcMinutes = (w.startHour * 60 + w.startMin) - (5 * 60 + 30);
        const startUtc = new Date(Date.UTC(year, month - 1, day, 0, startUtcMinutes, 0));

        const endUtcMinutes = (w.endHour * 60 + w.endMin) - (5 * 60 + 30);
        const endUtc = new Date(Date.UTC(year, month - 1, day, 0, endUtcMinutes, 0));

        const startLocal = timeFmt.format(startUtc);
        const endLocal = timeFmt.format(endUtc);

        const tzParts = tzNameFmt.formatToParts(startUtc);
        const tzAbbr = tzParts.find((p) => p.type === 'timeZoneName')?.value || timezone;

        return `${w.label} (${startLocal} – ${endLocal} ${tzAbbr})`;
      })
      .join(' | ');

    return { localStr: localSummaries, istStr: istSummaries };
  } catch {
    return { localStr: istSummaries, istStr: istSummaries };
  }
}

export async function processOnboarding(body, clientIp = '127.0.0.1') {
  // ── 1. Bot Honeypot Check ──
  if (body.honeypot && body.honeypot.trim() !== '') {
    return {
      success: false,
      status: 400,
      error: 'Bot submission detected.',
    };
  }

  // ── 2. Per-IP Rate Limiting (5 submissions per 10 minutes) ──
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const ipData = rateLimitMap.get(clientIp) || { count: 0, firstRequest: now };

  if (now - ipData.firstRequest > windowMs) {
    rateLimitMap.set(clientIp, { count: 1, firstRequest: now });
  } else if (ipData.count >= 5) {
    return {
      success: false,
      status: 429,
      error: 'Too many submissions from your connection. Please wait a few minutes or message us on WhatsApp.',
    };
  } else {
    ipData.count += 1;
    rateLimitMap.set(clientIp, ipData);
  }

  // ── 3. Core Field Extraction ──
  const {
    platform,
    clientName,
    designation = '',
    businessName,
    phone,
    email,
    websiteUrl = '',
    instagramHandle = '',
    cityAndRadius,
    beautyVerticals = [],
    data = {},
    submittedAt = new Date().toISOString(),
  } = body || {};

  // ── 4. Validation ──
  const errors = {};
  if (!platform) errors.platform = 'Marketing platform is required';
  if (!clientName?.trim()) errors.clientName = 'Client name is required';
  if (!businessName?.trim()) errors.businessName = 'Business name is required';
  if (!phone?.trim() || !/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
    errors.phone = 'Valid 10-digit phone number is required';
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Valid email address is required';
  }
  if (!cityAndRadius?.trim()) errors.cityAndRadius = 'City and region is required';

  // ── 4.1 Calling Slot Validation ──
  const slotData = data.callingSlotData || {};
  const anyTimeWorks = slotData.anyTimeWorks === true;
  const slotTimezone = slotData.timezone || 'Asia/Kolkata';

  if (!anyTimeWorks) {
    if (!slotData.preferredDate || !slotData.preferredDate.trim()) {
      errors.preferredDate = 'Preferred kickoff call date is required';
    } else if (!isDateTomorrowOrLater(slotData.preferredDate, slotTimezone)) {
      errors.preferredDate = 'Kickoff date must be tomorrow or later in your timezone';
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      status: 400,
      error: 'Validation failed',
      errors,
    };
  }

  // Generate Unique Submission ID
  const platformTag =
    platform === 'meta-ads'
      ? 'META'
      : platform === 'instagram-handling'
      ? 'INSTA'
      : platform === 'gmb'
      ? 'GMB'
      : platform === 'google-ads'
      ? 'GADS'
      : 'GMC';
  const submissionId = `ONB-${platformTag}-${Date.now().toString(36).toUpperCase()}-${Math.floor(
    Math.random() * 900 + 100
  )}`;

  const platformLabel =
    platform === 'meta-ads'
      ? 'Meta Ads Funnel'
      : platform === 'instagram-handling'
      ? 'Instagram Handling & Curation'
      : platform === 'gmb'
      ? 'Google My Business (GMB)'
      : platform === 'google-ads'
      ? 'Google Ads Engine'
      : 'Google Merchant Center';

  // Format verticals
  const formattedVerticals = Array.isArray(beautyVerticals)
    ? beautyVerticals.join(', ')
    : String(beautyVerticals || 'None specified');

  // Format Call Windows
  const { localStr: formattedSlotLocal, istStr: formattedSlotIST } = formatTimeWindowsServer(
    slotData.timeWindows,
    slotTimezone,
    slotData.preferredDate
  );

  const callModeLabel =
    slotData.callMode === 'whatsapp'
      ? 'WhatsApp Voice/Video Call'
      : slotData.callMode === 'google-meet'
      ? 'Google Meet Video Call'
      : 'Direct Cellular Phone Call';

  const cleanBusinessName = sanitizeHeader(businessName);
  const cleanPlatformLabel = sanitizeHeader(platformLabel);
  const cleanPreferredDate = sanitizeHeader(slotData.preferredDate || '');

  // ── 5. Email Subject Line ──
  // Subject: "New [Platform] onboarding: [Business Name], call requested [date]". Omit the date if "Any time works".
  let subjectLine = `New ${cleanPlatformLabel} onboarding: ${cleanBusinessName}`;
  if (anyTimeWorks) {
    subjectLine += ', call requested (Any time works)';
  } else if (cleanPreferredDate) {
    subjectLine += `, call requested ${cleanPreferredDate}`;
  }
  subjectLine += ` [${submissionId}]`;
  subjectLine = sanitizeHeader(subjectLine);

  // ── 6. Competitors Block Extraction ──
  const compData = data.competitorsData || {};
  const isResearchForMe = compData.researchForMe === true;
  const competitorRows = Array.isArray(compData.competitors) ? compData.competitors : [];
  const admiredRows = Array.isArray(compData.admiredBrands) ? compData.admiredBrands : [];

  // ── 7. Client Requirements Extraction ──
  const reqStartDate = data.desiredStartDate || 'Not specified';
  const reqDeliverables = Array.isArray(data.expectedDeliverables)
    ? data.expectedDeliverables.join(', ')
    : data.expectedDeliverables || 'None';
  const reqMustHaves = data.specificRequirements || 'None';
  const reqAvoid = data.thingsToAvoid || 'None';
  const reqExperience = data.pastAgencyExperience || 'None';
  const reqExperienceNotes = data.pastAgencyNotes || 'None';
  const reqCadence = data.reportingFrequency || 'Weekly';
  const reqMerchantGoal = Array.isArray(data.merchantPrimaryGoal)
    ? data.merchantPrimaryGoal.join(', ')
    : data.merchantPrimaryGoal || '';
  const reqMerchantBudget = data.merchantMonthlyAdSpend || '';

  // Other Platform Fields HTML Table Rows
  const excludedKeys = new Set([
    'honeypot',
    'declaration',
    'dpdpConsent',
    'callingSlotData',
    'competitorsData',
    'desiredStartDate',
    'expectedDeliverables',
    'specificRequirements',
    'thingsToAvoid',
    'pastAgencyExperience',
    'pastAgencyNotes',
    'reportingFrequency',
    'merchantPrimaryGoal',
    'merchantMonthlyAdSpend',
  ]);

  const otherDataRowsHtml = Object.entries(data)
    .filter(([k]) => !excludedKeys.has(k))
    .map(([k, v]) => {
      let formattedVal = v;
      if (Array.isArray(v)) formattedVal = v.join(', ');
      else if (typeof v === 'boolean') formattedVal = v ? 'Yes' : 'No';
      else if (typeof v === 'object' && v !== null) formattedVal = JSON.stringify(v);

      return `
        <tr>
          <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-family: sans-serif; font-size: 12px; color: #5F5F5A; text-transform: uppercase; font-weight: 600; width: 35%;">
            ${escapeHtml(k.replace(/([A-Z])/g, ' $1'))}
          </td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-family: sans-serif; font-size: 13px; color: #111111; word-break: break-word;">
            ${escapeHtml(String(formattedVal || '—'))}
          </td>
        </tr>
      `;
    })
    .join('');

  // Build Full HTML Email
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${escapeHtml(subjectLine)}</title>
    </head>
    <body style="margin: 0; padding: 30px 15px; background-color: #F7F6F2; font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #111111;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 680px; background-color: #FFFFFF; border-radius: 20px; border: 1px solid #E7E3DA; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
        
        <!-- Header Banner -->
        <tr>
          <td style="background-color: #111111; padding: 32px 36px; text-align: left;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="font-family: serif; font-size: 24px; font-weight: bold; color: #FFFFFF; letter-spacing: -0.5px;">Juntoz</span>
                  <span style="display: block; color: #F1E7F9; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px; font-weight: 700;">Client Onboarding Concierge Dossier</span>
                </td>
                <td align="right">
                  <span style="background-color: #5D2E85; color: #FFFFFF; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 14px; border-radius: 9999px;">
                    ${escapeHtml(submissionId)}
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Summary Bar -->
        <tr>
          <td style="padding: 20px 36px; background-color: #F1E7F9; border-bottom: 1px solid #E7E3DA;">
            <p style="margin: 0 0 4px 0; font-size: 18px; font-weight: bold; color: #5D2E85; font-family: 'Playfair Display', Georgia, serif;">
              ${escapeHtml(businessName)}
            </p>
            <p style="margin: 0; font-size: 13px; color: #111111;">
              <strong>Platform:</strong> ${escapeHtml(platformLabel)} · 
              <strong>Client:</strong> ${escapeHtml(clientName)} (${escapeHtml(designation || 'Owner')}) · 
              <strong>WhatsApp:</strong> +91 ${escapeHtml(phone)}
            </p>
          </td>
        </tr>

        <!-- ════ 1. HIGHLIGHTED CALL REQUEST BLOCK AT THE VERY TOP ════ -->
        <tr>
          <td style="padding: 24px 36px 16px 36px;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #FAF5FF; border: 2px solid #5D2E85; border-radius: 14px; overflow: hidden;">
              <tr>
                <td style="background-color: #5D2E85; padding: 10px 16px;">
                  <span style="color: #FFFFFF; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.2px;">
                    📞 Kickoff Strategy Session · Call Request
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 20px;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; line-height: 1.6; color: #111111;">
                    ${
                      anyTimeWorks
                        ? `
                        <tr>
                          <td style="padding: 4px 0; font-weight: 600; color: #5D2E85; width: 30%;">Availability:</td>
                          <td style="padding: 4px 0; font-weight: bold; color: #287A55;">Flexible / Any time works</td>
                        </tr>
                      `
                        : `
                        <tr>
                          <td style="padding: 4px 0; font-weight: 600; color: #5F5F5A; width: 30%;">Preferred Date:</td>
                          <td style="padding: 4px 0; font-weight: bold; color: #111111;">${escapeHtml(slotData.preferredDate || 'Earliest available')}</td>
                        </tr>
                        ${
                          slotData.secondChoiceDate
                            ? `
                          <tr>
                            <td style="padding: 4px 0; font-weight: 600; color: #5F5F5A;">Second Choice:</td>
                            <td style="padding: 4px 0; color: #111111;">${escapeHtml(slotData.secondChoiceDate)}</td>
                          </tr>
                        `
                            : ''
                        }
                        <tr>
                          <td style="padding: 4px 0; font-weight: 600; color: #5F5F5A;">Slot Windows:</td>
                          <td style="padding: 4px 0; color: #111111;">
                            <strong>Local (${escapeHtml(slotTimezone)}):</strong> ${escapeHtml(formattedSlotLocal)}<br>
                            <strong style="color: #5D2E85;">IST:</strong> ${escapeHtml(formattedSlotIST)}
                          </td>
                        </tr>
                      `
                    }
                    <tr>
                      <td style="padding: 4px 0; font-weight: 600; color: #5F5F5A;">Call Mode:</td>
                      <td style="padding: 4px 0; color: #111111; font-weight: bold;">${escapeHtml(callModeLabel)}</td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 0; font-weight: 600; color: #5F5F5A;">Best Number:</td>
                      <td style="padding: 4px 0; color: #111111;">
                        <a href="tel:${escapeHtml(slotData.callPhone || phone)}" style="color: #5D2E85; font-weight: bold; text-decoration: none;">
                          ${escapeHtml(slotData.callPhone || phone)}
                        </a>
                      </td>
                    </tr>
                    ${
                      slotData.callNote
                        ? `
                      <tr>
                        <td style="padding: 4px 0; font-weight: 600; color: #5F5F5A; vertical-align: top;">Client Agenda / Notes:</td>
                        <td style="padding: 4px 0; color: #5F5F5A; font-style: italic;">"${escapeHtml(slotData.callNote)}"</td>
                      </tr>
                    `
                        : ''
                    }
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ════ 2. CLIENT REQUIREMENTS SECTION ════ -->
        <tr>
          <td style="padding: 16px 36px;">
            <h3 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #5F5F5A; font-weight: bold;">
              Client Requirements &amp; Scope
            </h3>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #E7E3DA; border-radius: 12px; overflow: hidden; background-color: #FFFFFF;">
              <tr>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A; width: 35%;">Desired Start Date</td>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111; font-weight: bold;">${escapeHtml(reqStartDate)}</td>
              </tr>
              <tr>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Expected Deliverables</td>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;">${escapeHtml(reqDeliverables)}</td>
              </tr>
              <tr>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A; vertical-align: top;">Must-Haves / Requirements</td>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111; line-height: 1.5;">${escapeHtml(reqMustHaves)}</td>
              </tr>
              <tr>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A; vertical-align: top;">Things to Avoid / Constraints</td>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #5F5F5A; line-height: 1.5;">${escapeHtml(reqAvoid)}</td>
              </tr>
              <tr>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Past Agency Experience</td>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;">
                  ${escapeHtml(reqExperience)}
                  ${reqExperienceNotes !== 'None' ? `<br><span style="font-size: 12px; color: #5F5F5A;">Note: "${escapeHtml(reqExperienceNotes)}"</span>` : ''}
                </td>
              </tr>
              <tr>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Reporting Cadence</td>
                <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111; font-weight: bold;">${escapeHtml(reqCadence)}</td>
              </tr>
              ${
                reqMerchantGoal
                  ? `
                <tr>
                  <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Merchant Primary Goal</td>
                  <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111; font-weight: bold;">${escapeHtml(reqMerchantGoal)}</td>
                </tr>
                <tr>
                  <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Planned Monthly Budget</td>
                  <td style="padding: 9px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #5D2E85; font-weight: bold;">${escapeHtml(reqMerchantBudget)}</td>
                </tr>
              `
                  : ''
              }
            </table>
          </td>
        </tr>

        <!-- ════ 3. REFERENCE COMPETITORS & INSPIRATION SECTION ════ -->
        <tr>
          <td style="padding: 16px 36px;">
            <h3 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #5F5F5A; font-weight: bold;">
              Reference Competitors &amp; Benchmarks
            </h3>
            ${
              isResearchForMe
                ? `
              <div style="padding: 14px 18px; border-radius: 10px; background-color: #F1E7F9; border: 1px solid #5D2E85/20; color: #5D2E85; font-size: 13px; font-weight: 600;">
                🔍 Client requested: "I'm not sure, please research for me" (Conduct full regional competitor audit)
              </div>
            `
                : `
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #E7E3DA; border-radius: 12px; overflow: hidden; background-color: #FFFFFF; font-size: 12px;">
                <tr style="background-color: #F7F6F2;">
                  <th style="padding: 8px 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #5F5F5A;">Competitor</th>
                  <th style="padding: 8px 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #5F5F5A;">Website</th>
                  <th style="padding: 8px 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #5F5F5A;">Instagram</th>
                  <th style="padding: 8px 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #5F5F5A;">Notes / Feedback</th>
                </tr>
                ${competitorRows
                  .filter((r) => r.name || r.website || r.instagram)
                  .map(
                    (r) => `
                  <tr>
                    <td style="padding: 8px 10px; border-bottom: 1px solid #E7E3DA; font-weight: bold; color: #111111;">${escapeHtml(r.name || '—')}</td>
                    <td style="padding: 8px 10px; border-bottom: 1px solid #E7E3DA;">${r.website ? `<a href="${escapeHtml(r.website)}" target="_blank" style="color: #5D2E85;">${escapeHtml(r.website)}</a>` : '—'}</td>
                    <td style="padding: 8px 10px; border-bottom: 1px solid #E7E3DA; color: #111111;">${escapeHtml(r.instagram || '—')}</td>
                    <td style="padding: 8px 10px; border-bottom: 1px solid #E7E3DA; color: #5F5F5A;">${escapeHtml(r.notes || '—')}</td>
                  </tr>
                `
                  )
                  .join('')}
              </table>
            `
            }

            ${
              admiredRows.length > 0
                ? `
              <div style="margin-top: 12px;">
                <span style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #5F5F5A; display: block; margin-bottom: 6px;">
                  Admired Brands or Ads:
                </span>
                <ul style="margin: 0; padding-left: 20px; font-size: 12px; color: #111111;">
                  ${admiredRows
                    .map(
                      (a) => `
                    <li style="margin-bottom: 4px;">
                      <a href="${escapeHtml(a.url)}" target="_blank" style="color: #5D2E85; font-weight: 600;">${escapeHtml(a.url)}</a>
                      ${a.note ? ` — <span style="color: #5F5F5A;">${escapeHtml(a.note)}</span>` : ''}
                    </li>
                  `
                    )
                    .join('')}
                </ul>
              </div>
            `
                : ''
            }
          </td>
        </tr>

        <!-- ════ 4. BUSINESS COORDINATES ════ -->
        <tr>
          <td style="padding: 16px 36px;">
            <h3 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #5F5F5A; font-weight: bold;">
              Business Profile &amp; Contact
            </h3>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #E7E3DA; border-radius: 12px; overflow: hidden; background-color: #F7F6F2;">
              <tr>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A; width: 35%;">Client Name</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111; font-weight: bold;">${escapeHtml(clientName)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Email Address</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;"><a href="mailto:${escapeHtml(email)}" style="color: #5D2E85; text-decoration: none;">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">WhatsApp Number</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;"><a href="https://wa.me/91${escapeHtml(phone.replace(/\D/g, ''))}" style="color: #287A55; text-decoration: none; font-weight: bold;">+91 ${escapeHtml(phone)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Website URL</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;">${websiteUrl ? `<a href="${escapeHtml(websiteUrl)}" target="_blank" style="color: #5D2E85;">${escapeHtml(websiteUrl)}</a>` : '—'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Instagram Handle</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;">${instagramHandle ? escapeHtml(instagramHandle) : '—'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">City / Service Scope</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;">${escapeHtml(cityAndRadius)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-size: 12px; font-weight: 600; color: #5F5F5A;">Industry Verticals</td>
                <td style="padding: 8px 12px; font-size: 13px; color: #111111; font-weight: 600;">${escapeHtml(formattedVerticals)}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ════ 5. OTHER PLATFORM-SPECIFIC ATTRIBUTES ════ -->
        ${
          otherDataRowsHtml
            ? `
          <tr>
            <td style="padding: 16px 36px 36px 36px;">
              <h3 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #5F5F5A; font-weight: bold;">
                Platform Parameters &amp; Access Details
              </h3>
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #E7E3DA; border-radius: 12px; overflow: hidden; background-color: #FFFFFF;">
                ${otherDataRowsHtml}
              </table>
            </td>
          </tr>
        `
            : ''
        }

        <!-- Footer Notice -->
        <tr>
          <td style="padding: 24px 36px; background-color: #F7F6F2; border-top: 1px solid #E7E3DA; text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #5F5F5A; line-height: 1.5;">
              This onboarding dossier was compiled via <a href="https://juntoz.in/onboarding" style="color: #5D2E85; text-decoration: none;">juntoz.in/onboarding</a> under India DPDP Act, 2023 compliance.<br>
              Direct contact: <a href="mailto:${RECIPIENT_EMAIL}" style="color: #5D2E85;">${RECIPIENT_EMAIL}</a> · Phone: +91 90040 01800
            </p>
          </td>
        </tr>

      </table>
    </body>
    </html>
  `;

  // ── 8. Plain-text Dossier Fallback ──
  const textDossier = `
=====================================================
JUNTOZ CLIENT ONBOARDING CONCIERGE DOSSIER
ID: ${submissionId}
Platform: ${platformLabel}
Submitted: ${submittedAt}
=====================================================

1. KICKOFF CALL REQUEST:
-----------------------------------------------------
Availability: ${anyTimeWorks ? 'Flexible / Any time works' : 'Specific Slot Requested'}
Preferred Date: ${slotData.preferredDate || 'Earliest available'}
Alternative Date: ${slotData.secondChoiceDate || 'None'}
Local Slot (${slotTimezone}): ${formattedSlotLocal}
IST Slot: ${formattedSlotIST}
Call Mode: ${callModeLabel}
Contact Number: ${slotData.callPhone || phone}
Client Notes: ${slotData.callNote || 'None'}

2. CLIENT REQUIREMENTS & SCOPE:
-----------------------------------------------------
Desired Start Date: ${reqStartDate}
Expected Deliverables: ${reqDeliverables}
Must-Haves / Requirements: ${reqMustHaves}
Things to Avoid / Constraints: ${reqAvoid}
Past Agency Experience: ${reqExperience}
Experience Feedback: ${reqExperienceNotes}
Reporting Cadence: ${reqCadence}
${reqMerchantGoal ? `Merchant Primary Goal: ${reqMerchantGoal}\nMerchant Ad Spend: ${reqMerchantBudget}\n` : ''}
3. REFERENCE COMPETITORS & BENCHMARKS:
-----------------------------------------------------
Research For Me: ${isResearchForMe ? 'YES' : 'NO'}
${competitorRows
  .filter((r) => r.name || r.website || r.instagram)
  .map(
    (r, i) =>
      `Competitor #${i + 1}: Name: ${r.name || 'N/A'} | Website: ${r.website || 'N/A'} | Instagram: ${r.instagram || 'N/A'} | Notes: ${r.notes || 'N/A'}`
  )
  .join('\n')}
${
  admiredRows.length > 0
    ? `\nAdmired Brands:\n${admiredRows.map((a) => `- ${a.url} (${a.note || 'No note'})`).join('\n')}`
    : ''
}

4. BUSINESS COORDINATES:
-----------------------------------------------------
Business Name: ${businessName}
Client Name: ${clientName} (${designation || 'Owner'})
WhatsApp: +91 ${phone}
Email: ${email}
Website: ${websiteUrl || 'N/A'}
Instagram: ${instagramHandle || 'N/A'}
City/Region: ${cityAndRadius}
Verticals: ${formattedVerticals}

5. OTHER PLATFORM PARAMETERS:
-----------------------------------------------------
${Object.entries(data)
  .filter(([k]) => !excludedKeys.has(k))
  .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
  .join('\n')}

=====================================================
Target Recipient: ${RECIPIENT_EMAIL}
Direct WhatsApp: wa.me/91${phone.replace(/\D/g, '')}
`;

  // ── 9. Save copy to persistent local file (data/onboarding_submissions.jsonl) ──
  try {
    const fs = await import('fs');
    const path = await import('path');
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const logFile = path.join(dataDir, 'onboarding_submissions.jsonl');
    const record =
      JSON.stringify({
        submissionId,
        platform,
        platformLabel,
        businessName,
        clientName,
        designation,
        phone,
        email,
        websiteUrl,
        instagramHandle,
        cityAndRadius,
        beautyVerticals,
        data,
        submittedAt,
        slotDetails: {
          anyTimeWorks,
          preferredDate: slotData.preferredDate,
          secondChoiceDate: slotData.secondChoiceDate,
          timeWindows: slotData.timeWindows,
          timezone: slotTimezone,
          formattedSlotIST,
          formattedSlotLocal,
          callMode: slotData.callMode,
          callPhone: slotData.callPhone || phone,
        },
      }) + '\n';
    fs.appendFileSync(logFile, record, 'utf8');
  } catch (fileErr) {
    console.warn('[Onboarding File Storage Note]:', fileErr.message);
  }

  // ── 10. Resend Dispatch with Attached Files ──
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  let emailDeliveryResult = { status: 'mock_logged', provider: 'local' };

  if (RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Juntoz Onboarding <onboarding@juntoz.in>',
          to: [RECIPIENT_EMAIL],
          reply_to: sanitizeHeader(email),
          subject: subjectLine,
          html: emailHtml,
          text: textDossier,
          attachments: [
            {
              filename: `Onboarding-${cleanBusinessName.replace(/[^a-zA-Z0-9_-]/g, '_')}-${submissionId}.json`,
              content: Buffer.from(
                JSON.stringify(
                  {
                    submissionId,
                    platform: platformLabel,
                    businessName,
                    clientName,
                    designation,
                    phone: `+91 ${phone}`,
                    email,
                    websiteUrl,
                    instagramHandle,
                    cityAndRadius,
                    beautyVerticals,
                    onboardingData: data,
                    submittedAt,
                  },
                  null,
                  2
                ),
                'utf8'
              ).toString('base64'),
            },
            {
              filename: `Dossier-${submissionId}.txt`,
              content: Buffer.from(textDossier, 'utf8').toString('base64'),
            },
          ],
        }),
      });

      if (response.ok) {
        const resData = await response.json();
        emailDeliveryResult = {
          status: 'delivered',
          recipient: RECIPIENT_EMAIL,
          provider: 'resend',
          messageId: resData.id,
        };
      } else {
        const errText = await response.text();
        console.error('Resend onboarding delivery error:', errText);
        emailDeliveryResult = {
          status: 'resend_error',
          recipient: RECIPIENT_EMAIL,
          provider: 'resend',
          error: errText,
        };
      }
    } catch (err) {
      console.error('Email dispatch error in onboarding handler:', err);
      emailDeliveryResult = {
        status: 'dispatch_error',
        recipient: RECIPIENT_EMAIL,
        error: err.message,
      };
    }
  } else {
    console.log(`[ONBOARDING DEV LOG] Saved dossier ${submissionId} for ${businessName}.`);
  }

  return {
    success: true,
    status: 200,
    submissionId,
    businessName,
    clientName,
    platform,
    recipient: RECIPIENT_EMAIL,
    submittedAt,
    emailDelivery: emailDeliveryResult,
    textDossier,
    slotDetails: {
      anyTimeWorks,
      preferredDate: slotData.preferredDate,
      secondChoiceDate: slotData.secondChoiceDate,
      timeWindows: slotData.timeWindows,
      timezone: slotTimezone,
      formattedSlotIST,
      formattedSlotLocal,
      callMode: slotData.callMode,
      callPhone: slotData.callPhone || phone,
    },
    message: `Onboarding dossier ${submissionId} for ${businessName} successfully received.`,
  };
}

// Default export for Vercel Serverless Function
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const clientIp =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.socket?.remoteAddress ||
      '127.0.0.1';

    const result = await processOnboarding(req.body, clientIp);
    return res.status(result.status || 200).json(result);
  } catch (error) {
    console.error('Error processing onboarding in serverless handler:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to process onboarding dossier. Please retry or contact official.juntoz@gmail.com directly.',
    });
  }
}
