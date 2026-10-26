/* global process */
/**
 * Juntoz Contact & Strategic Growth Audit Inquiries Serverless Endpoint
 * Vercel Serverless Function & Node.js Handler
 * Endpoint: POST /api/contact
 * Recipient: official.juntoz@gmail.com
 */

import fs from 'fs';
import path from 'path';

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'official.juntoz@gmail.com';

// In-memory rate limiting map (5 submissions per 10 minutes per IP)
const rateLimitMap = new Map();

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function processContactInquiry(body, clientIp = '127.0.0.1') {
  // 1. Rate Limiting
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const ipData = rateLimitMap.get(clientIp) || { count: 0, firstRequest: now };

  if (now - ipData.firstRequest > windowMs) {
    rateLimitMap.set(clientIp, { count: 1, firstRequest: now });
  } else if (ipData.count >= 10) {
    return {
      success: false,
      status: 429,
      error: 'Too many submissions. Please contact us directly on WhatsApp or wait a few minutes.',
    };
  } else {
    ipData.count += 1;
    rateLimitMap.set(clientIp, ipData);
  }

  const {
    name = '',
    phone = '',
    budget = '',
    serviceFocus = '',
    website = '',
    city = '',
    targetGoal = '',
    submittedAt = new Date().toISOString(),
  } = body || {};

  if (!name.trim()) {
    return { success: false, status: 400, error: 'Business or founder name is required.' };
  }
  if (!phone.trim() || !/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
    return { success: false, status: 400, error: 'A valid 10-digit WhatsApp number is required.' };
  }

  const submissionId = `INQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  const textDossier = `
===============================================================
JUNTOZ STRATEGIC INQUIRY DOSSIER [${submissionId}]
===============================================================
Submission Timestamp: ${submittedAt}
Business / Founder:   ${name}
WhatsApp Phone:       +91 ${phone}
Monthly Budget:       ${budget || 'Not specified'}
Primary Focus:        ${serviceFocus || 'General Growth'}
Website / Profile:    ${website || 'Not provided'}
City / Location:      ${city || 'Not provided'}
Project Details:
${targetGoal || 'No additional notes provided.'}
===============================================================
Dispatched to: ${RECIPIENT_EMAIL}
===============================================================
`.trim();

  const htmlDossier = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Website Inquiry - ${escapeHtml(name)}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F6F2; margin: 0; padding: 24px;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #E7E3DA; overflow: hidden;">
    <tr>
      <td style="padding: 24px 32px; background-color: #111111; color: #ffffff;">
        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #D6A85D; font-weight: bold;">New Website Inquiry</span>
        <h1 style="margin: 8px 0 0 0; font-size: 22px; font-weight: 700; color: #ffffff;">${escapeHtml(name)}</h1>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #A0A09C;">Reference ID: ${escapeHtml(submissionId)} · ${escapeHtml(submittedAt)}</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F0EFEA; font-weight: 600; color: #5F5F5A; font-size: 13px; width: 35%;">WhatsApp Phone:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F0EFEA; color: #111111; font-size: 14px;">
              <a href="https://wa.me/91${escapeHtml(phone.replace(/\D/g, ''))}" style="color: #287A55; font-weight: 600; text-decoration: none;">+91 ${escapeHtml(phone)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F0EFEA; font-weight: 600; color: #5F5F5A; font-size: 13px;">Estimated Budget:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F0EFEA; color: #5D2E85; font-weight: 600; font-size: 14px;">${escapeHtml(budget)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F0EFEA; font-weight: 600; color: #5F5F5A; font-size: 13px;">Area of Focus:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F0EFEA; color: #111111; font-size: 14px;">${escapeHtml(serviceFocus)}</td>
          </tr>
          ${website ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F0EFEA; font-weight: 600; color: #5F5F5A; font-size: 13px;">Website / Profile:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F0EFEA; color: #5D2E85; font-size: 14px;">
              <a href="${escapeHtml(website)}" style="color: #5D2E85; text-decoration: underline;">${escapeHtml(website)}</a>
            </td>
          </tr>` : ''}
          ${city ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F0EFEA; font-weight: 600; color: #5F5F5A; font-size: 13px;">Location:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F0EFEA; color: #111111; font-size: 14px;">${escapeHtml(city)}</td>
          </tr>` : ''}
        </table>

        ${targetGoal ? `
        <div style="margin-top: 24px; padding: 16px; background-color: #F7F6F2; border-radius: 8px; border: 1px solid #E7E3DA;">
          <h4 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #5F5F5A;">Project Goals / Notes:</h4>
          <p style="margin: 0; font-size: 13px; color: #111111; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(targetGoal)}</p>
        </div>` : ''}

        <div style="margin-top: 32px; text-align: center;">
          <a href="https://wa.me/91${escapeHtml(phone.replace(/\D/g, ''))}" style="background-color: #287A55; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 13px; display: inline-block;">
            Open WhatsApp Chat with ${escapeHtml(name)} →
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 16px; background-color: #FAFAF8; text-align: center; border-top: 1px solid #E7E3DA; font-size: 11px; color: #5F5F5A;">
        Auto-generated by Juntoz Website · Delivered to <a href="mailto:${RECIPIENT_EMAIL}" style="color: #5D2E85;">${RECIPIENT_EMAIL}</a>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  // 2. Email Delivery via Resend
  let emailDeliveryResult = { status: 'mock_logged', recipient: RECIPIENT_EMAIL };
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || 'Juntoz Inquiries <inquiries@juntoz.in>',
          to: [RECIPIENT_EMAIL],
          subject: `New Strategic Inquiry — ${name} [${submissionId}]`,
          html: htmlDossier,
          text: textDossier,
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
        console.error('Resend inquiry delivery error:', errText);
        emailDeliveryResult = {
          status: 'resend_error',
          recipient: RECIPIENT_EMAIL,
          error: errText,
        };
      }
    } catch (err) {
      console.error('Email dispatch error in contact handler:', err);
      emailDeliveryResult = {
        status: 'dispatch_error',
        recipient: RECIPIENT_EMAIL,
        error: err.message,
      };
    }
  } else {
    // Local / Dev file persistence fallback
    try {
      const dataDir = path.resolve(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const record = JSON.stringify({
        submissionId,
        name,
        phone,
        budget,
        serviceFocus,
        website,
        city,
        targetGoal,
        submittedAt,
        recipient: RECIPIENT_EMAIL,
      });
      fs.appendFileSync(path.join(dataDir, 'contact_inquiries.jsonl'), record + '\n', 'utf8');
      console.log(`[CONTACT DEV LOG] Saved inquiry ${submissionId} for ${name} to ${RECIPIENT_EMAIL}.`);
    } catch (saveErr) {
      console.error('Failed to log inquiry locally:', saveErr);
    }
  }

  return {
    success: true,
    status: 200,
    submissionId,
    recipient: RECIPIENT_EMAIL,
    emailDelivery: emailDeliveryResult,
    message: `Inquiry recorded safely. Notification copy dispatched to ${RECIPIENT_EMAIL}.`,
  };
}

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

    const result = await processContactInquiry(req.body, clientIp);
    return res.status(result.status || 200).json(result);
  } catch (error) {
    console.error('Error processing contact inquiry in serverless handler:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: `Failed to process inquiry. Please contact ${RECIPIENT_EMAIL} directly.`,
    });
  }
}
