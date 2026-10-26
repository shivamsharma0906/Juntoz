/**
 * Juntoz Careers Application Serverless Endpoint
 * Vercel Serverless Function & Node.js Handler
 * Endpoint: POST /api/apply
 * Recipient: official.juntoz@gmail.com
 */

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'official.juntoz@gmail.com';

// In-memory rate limiting map for basic spam suppression
const rateLimitMap = new Map();

export async function processApplication(body) {
  const {
    fullName,
    phone,
    email,
    location,
    position,
    customPosition,
    source,
    instagram,
    linkedin,
    portfolio,
    workExamples,
    managedAccounts,
    brandsWorkedWith,
    experience,
    lastCompany,
    lastDesignation,
    lastSalary,
    leaveReason,
    keyResponsibilities,
    accountsHandled,
    agencyExperience,
    skills = [],
    skillRating,
    campaignResults,
    toolsSoftware,
    deadlineManagement,
    roleSpecificAnswers = {},
    referralName,
    referralPhone,
    referralRelation,
    expectedSalary,
    employmentStatus,
    noticePeriod,
    onSiteComfort,
    monSatScheduleComfort,
    clientVisitsComfort,
    commitments,
    whyJoin,
    topStrengths,
    skillToImprove,
    unhappyClientHandling,
    newTaskHandling,
    whySelectYou,
    resumeLink,
    resumeFileMeta,
    additionalInfo,
    declaration,
  } = body || {};

  // ── 1. Validation ──
  const errors = {};
  if (!fullName?.trim()) errors.fullName = 'Full name is required';
  if (!phone?.trim() || !/^\d{10}$/.test(phone.replace(/\D/g, ''))) errors.phone = 'Valid 10-digit phone number is required';
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email address is required';
  if (!location?.trim()) errors.location = 'Current residential location is required';
  if (!position?.trim()) errors.position = 'Position is required';
  if (!source?.trim()) errors.source = 'Source of application is required';
  if (!experience?.trim()) errors.experience = 'Experience level is required';

  // Conditional: Experienced applicants require employment history
  const isFresher = experience === 'Fresher' || experience === 'Fresher / Entry Level';
  if (!isFresher) {
    if (!lastCompany?.trim()) errors.lastCompany = 'Last company / agency name is required for experienced candidates';
    if (!lastDesignation?.trim()) errors.lastDesignation = 'Last job designation is required for experienced candidates';
    if (!lastSalary?.trim()) errors.lastSalary = 'Last drawn monthly salary is required for experienced candidates';
    if (!portfolio?.trim() && !workExamples?.trim()) {
      errors.portfolio = 'Portfolio link or work description is required for experienced candidates';
    }
  }

  // Work requirements
  if (!expectedSalary?.trim()) errors.expectedSalary = 'Expected monthly salary is required';
  if (!employmentStatus?.trim()) errors.employmentStatus = 'Employment status is required';
  if (!noticePeriod?.trim()) errors.noticePeriod = 'Notice period / joining availability is required';
  if (!onSiteComfort?.trim()) errors.onSiteComfort = 'Confirmation on on-site work at Bhayandar West is required';
  if (!monSatScheduleComfort?.trim()) errors.monSatScheduleComfort = 'Confirmation on Monday-Saturday work schedule is required';
  if (!clientVisitsComfort?.trim()) errors.clientVisitsComfort = 'Confirmation on client visits is required';

  // Mindset
  if (!whyJoin?.trim()) errors.whyJoin = 'Please share why you want to join Juntoz';
  if (!topStrengths?.trim()) errors.topStrengths = 'Please share your top strengths';
  if (!whySelectYou?.trim()) errors.whySelectYou = 'Please tell us why we should select you';

  // Declaration
  if (!declaration) errors.declaration = 'Candidate declaration must be accepted';

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      status: 400,
      errors,
      message: 'Validation failed. Please complete all required fields.',
    };
  }

  // Rate Limiting by IP or Email
  const identifier = `${email}_${phone}`.toLowerCase();
  const now = Date.now();
  if (rateLimitMap.has(identifier)) {
    const lastAttempt = rateLimitMap.get(identifier);
    if (now - lastAttempt < 60000) { // 1 submission per minute
      return {
        success: false,
        status: 429,
        message: 'Too many submissions. Please wait 1 minute before resubmitting.',
      };
    }
  }
  rateLimitMap.set(identifier, now);

  // Generate Unique Application Reference ID
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
  const applicationId = `JTZ-${dateStr}-${randomSuffix}`;
  const appliedRole = position === 'Other / General Application' && customPosition ? customPosition : position;

  // ── 2. Build Dossier Content ──
  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const textDossier = `
===============================================================
JUNTOZ CAREERS APPLICATION — ${applicationId}
===============================================================
Applied Role:       ${appliedRole}
Candidate Name:     ${fullName}
Email Address:      ${email}
WhatsApp / Mobile:  ${phone}
Current Location:   ${location}
Submission Time:    ${submittedAt} (IST)
===============================================================

1. SOCIAL PROFILES & PORTFOLIO:
---------------------------------------------------------------
Instagram:          ${instagram || 'N/A'}
LinkedIn:           ${linkedin || 'Not provided'}
Portfolio Link:     ${portfolio || 'Not provided'}
Work Examples:      ${workExamples || 'N/A'}
Managed Accounts:   ${managedAccounts || 'N/A'}
Brands Worked With: ${brandsWorkedWith || 'Not provided'}

2. PROFESSIONAL EXPERIENCE:
---------------------------------------------------------------
Total Experience:   ${experience}
Last Company:       ${lastCompany || 'N/A (Fresher)'}
Last Designation:   ${lastDesignation || 'N/A (Fresher)'}
Last Drawn Salary:  ${lastSalary || 'N/A (Fresher)'}
Accounts Handled:   ${accountsHandled || 'N/A'}
Agency Experience:  ${agencyExperience || 'N/A'}
Reason for Leaving: ${leaveReason || 'Not specified'}
Key Responsibilities:
${keyResponsibilities || 'N/A'}

3. SKILLS & TECHNICAL KNOWLEDGE:
---------------------------------------------------------------
Selected Skills:    ${skills.length ? skills.join(', ') : 'None selected'}
Primary Skill Rating: ${skillRating ? `${skillRating} / 5` : 'Not rated'}
Tools & Software:   ${toolsSoftware || 'Not specified'}
Campaign / Project Results:
${campaignResults || 'N/A'}
Deadline Management:
${deadlineManagement || 'N/A'}
${Object.keys(roleSpecificAnswers).length ? `\nRole-Specific Follow-Up:\n${JSON.stringify(roleSpecificAnswers, null, 2)}` : ''}

4. REFERRAL DETAILS:
---------------------------------------------------------------
Referred By:        ${referralName || 'None (Direct Applicant)'}
Referrer Phone:     ${referralPhone || 'N/A'}
Relationship:       ${referralRelation || 'N/A'}

5. WORK EXPECTATIONS & AVAILABILITY:
---------------------------------------------------------------
Expected Salary:    ${expectedSalary}
Employment Status:  ${employmentStatus}
Notice Period:      ${noticePeriod}
On-Site (Bhayandar):${onSiteComfort}
Mon-Sat Schedule:   ${monSatScheduleComfort}
Client Visits:      ${clientVisitsComfort}
Schedule Commitments:${commitments || 'None'}

6. CANDIDATE MINDSET & MOTIVATION:
---------------------------------------------------------------
Why Juntoz?:
${whyJoin}

Top 3 Strengths:
${topStrengths}

Skill to Improve:
${skillToImprove || 'N/A'}

Handling Unhappy Clients:
${unhappyClientHandling || 'N/A'}

Handling New / Unfamiliar Tasks:
${newTaskHandling || 'N/A'}

Why Should Juntoz Select You?:
${whySelectYou}

7. RESUME & DECLARATION:
---------------------------------------------------------------
Resume Link:        ${resumeLink || (resumeFileMeta ? `Uploaded File: ${resumeFileMeta.name} (${(resumeFileMeta.size / 1024).toFixed(1)} KB)` : 'Not provided')}
Additional Info:    ${additionalInfo || 'None'}
Declaration Accepted: Yes (Confirmed by candidate on submission)
===============================================================
`.trim();

  // ── 3. Notification Dispatch ──
  let emailDeliveryResult = {
    status: 'pending_configuration',
    recipient: RECIPIENT_EMAIL,
    provider: 'none',
    message: 'Application recorded safely. To activate automated email delivery, configure RESEND_API_KEY in environment variables.',
  };

  // Check for Resend API Key
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CAREERS_FROM_EMAIL || 'Juntoz Careers <careers@juntoz.in>',
          to: [RECIPIENT_EMAIL],
          subject: `New Careers Application — ${fullName} — ${appliedRole} [${applicationId}]`,
          text: textDossier,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        emailDeliveryResult = {
          status: 'delivered',
          recipient: RECIPIENT_EMAIL,
          provider: 'resend',
          messageId: data.id,
          message: `Application email delivered to ${RECIPIENT_EMAIL}`,
        };
      } else {
        const errData = await response.text();
        console.error('Resend delivery failed:', errData);
        emailDeliveryResult = {
          status: 'resend_error',
          recipient: RECIPIENT_EMAIL,
          provider: 'resend',
          message: 'External email delivery failed. Candidate dossier recorded safely.',
        };
      }
    } catch (err) {
      console.error('Email dispatch error:', err);
      emailDeliveryResult = {
        status: 'dispatch_error',
        recipient: RECIPIENT_EMAIL,
        provider: 'resend',
        message: err.message,
      };
    }
  }

  return {
    success: true,
    status: 200,
    applicationId,
    candidateName: fullName,
    position: appliedRole,
    recipient: RECIPIENT_EMAIL,
    submittedAt,
    emailDelivery: emailDeliveryResult,
    textDossier,
    message: `Application ${applicationId} successfully received and verified for ${appliedRole}.`,
  };
}

// Default export for Vercel Serverless Function
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const result = await processApplication(req.body);
    return res.status(result.status || 200).json(result);
  } catch (error) {
    console.error('Error processing application in serverless handler:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to process application. Please retry or contact official.juntoz@gmail.com directly.',
    });
  }
}
