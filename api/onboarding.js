/**
 * Juntoz Client Onboarding Serverless Endpoint
 * Vercel Serverless Function & Node.js Handler
 * Endpoint: POST /api/onboarding
 * Recipient: process.env.RECIPIENT_EMAIL || 'Sujal.Mehta@juntoz.in'
 */

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'Sujal.Mehta@juntoz.in';

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
    platform === 'google-ads' ? 'GADS' : platform === 'meta-ads' ? 'META' : 'GMC';
  const submissionId = `ONB-${platformTag}-${Date.now().toString(36).toUpperCase()}-${Math.floor(
    Math.random() * 900 + 100
  )}`;

  // ── 5. Build Grouped HTML & Plain Text Dossier ──
  const platformLabel =
    platform === 'google-ads'
      ? 'Google Ads Engine'
      : platform === 'meta-ads'
      ? 'Meta & Instagram Engine'
      : 'Google Merchant Center';

  // Format verticals
  const formattedVerticals = Array.isArray(beautyVerticals)
    ? beautyVerticals.join(', ')
    : String(beautyVerticals || 'None specified');

  // Format all data key-values
  const dataRowsHtml = Object.entries(data)
    .filter(([k]) => !['honeypot', 'declaration', 'dpdpConsent'].includes(k))
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

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New ${platformLabel} Onboarding: ${escapeHtml(businessName)}</title>
    </head>
    <body style="margin: 0; padding: 30px 15px; background-color: #F7F6F2; font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #111111;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 650px; background-color: #FFFFFF; border-radius: 20px; border: 1px solid #E7E3DA; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
        
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
                  <span style="background-color: #5D2E85; color: #FFFFFF; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 14px; rounded-full: 9999px; border-radius: 9999px;">
                    ${escapeHtml(submissionId)}
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Summary Bar -->
        <tr>
          <td style="padding: 24px 36px 16px 36px; background-color: #F1E7F9; border-bottom: 1px solid #E7E3DA;">
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

        <!-- Quick Contact Card -->
        <tr>
          <td style="padding: 24px 36px;">
            <h3 style="margin: 0 0 14px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #5F5F5A; font-weight: bold;">
              Business Coordinates
            </h3>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #E7E3DA; border-radius: 12px; overflow: hidden; background-color: #F7F6F2;">
              <tr>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A; width: 35%;">Client Name</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111; font-weight: bold;">${escapeHtml(clientName)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Email Address</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;"><a href="mailto:${escapeHtml(email)}" style="color: #5D2E85; text-decoration: none;">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">WhatsApp Number</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;"><a href="https://wa.me/91${escapeHtml(phone.replace(/\D/g, ''))}" style="color: #287A55; text-decoration: none; font-weight: bold;">+91 ${escapeHtml(phone)} (Chat)</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Website URL</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;">${websiteUrl ? `<a href="${escapeHtml(websiteUrl)}" target="_blank" style="color: #5D2E85;">${escapeHtml(websiteUrl)}</a>` : '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">Instagram</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;">${instagramHandle ? escapeHtml(instagramHandle) : '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 12px; font-weight: 600; color: #5F5F5A;">City / Service Scope</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #E7E3DA; font-size: 13px; color: #111111;">${escapeHtml(cityAndRadius)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; font-size: 12px; font-weight: 600; color: #5F5F5A;">Industry Verticals</td>
                <td style="padding: 10px 14px; font-size: 13px; color: #111111; font-weight: 600;">${escapeHtml(formattedVerticals)}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Detailed Field Responses Table -->
        <tr>
          <td style="padding: 0 36px 36px 36px;">
            <h3 style="margin: 0 0 14px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #5F5F5A; font-weight: bold;">
              Tailored Campaign &amp; Account Parameters
            </h3>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #E7E3DA; border-radius: 12px; overflow: hidden; background-color: #FFFFFF;">
              ${dataRowsHtml}
            </table>
          </td>
        </tr>

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

  // Plain-text Fallback
  const textDossier = `
=====================================================
JUNTOZ CLIENT ONBOARDING CONCIERGE DOSSIER
ID: ${submissionId}
Platform: ${platformLabel}
Submitted: ${submittedAt}
=====================================================

CLIENT & BUSINESS DETAILS:
Business Name: ${businessName}
Client Name: ${clientName} (${designation || 'Owner'})
WhatsApp: +91 ${phone}
Email: ${email}
Website: ${websiteUrl || 'N/A'}
Instagram: ${instagramHandle || 'N/A'}
City/Region: ${cityAndRadius}
Verticals: ${formattedVerticals}

CAMPAIGN PARAMETERS & DETAILS:
${Object.entries(data)
  .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
  .join('\n')}

=====================================================
Target Recipient: ${RECIPIENT_EMAIL}
Direct WhatsApp: wa.me/91${phone.replace(/\D/g, '')}
`;

  // ── 5.5. Save copy to persistent local file (data/onboarding_submissions.jsonl) ──
  try {
    const fs = await import('fs');
    const path = await import('path');
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const logFile = path.join(dataDir, 'onboarding_submissions.jsonl');
    const record = JSON.stringify({
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
    }) + '\n';
    fs.appendFileSync(logFile, record, 'utf8');
  } catch (fileErr) {
    // In serverless environments where local filesystem might be read-only, safely ignore
    console.warn('[Onboarding File Storage Note]:', fileErr.message);
  }

  // ── 6. Resend Dispatch with Attached Files ──
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
          reply_to: email,
          subject: `New ${platformLabel} onboarding: ${businessName} [${submissionId}]`,
          html: emailHtml,
          text: textDossier,
          attachments: [
            {
              filename: `Onboarding-${businessName.replace(/[^a-zA-Z0-9_-]/g, '_')}-${submissionId}.json`,
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
        const data = await response.json();
        emailDeliveryResult = {
          status: 'delivered',
          recipient: RECIPIENT_EMAIL,
          provider: 'resend',
          messageId: data.id,
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
      message: 'Failed to process onboarding dossier. Please retry or contact Sujal.Mehta@juntoz.in directly.',
    });
  }
}
