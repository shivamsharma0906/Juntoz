/**
 * Juntoz Onboarding Concierge — Declarative Flow Configuration
 * Tailored for high-ticket Indian beauty clinics, bridal artists, salons, and cosmetic brands.
 */

import type { FlowConfig, FlowStep } from '../types/onboarding';

export const COMMON_STEP_1: FlowStep = {
  id: 'business-profile',
  eyebrow: 'STEP 01 · YOUR BUSINESS',
  title: 'About You & Your Brand',
  subtitle: 'Tell us about your brand positioning, core services, and communication coordinates.',
  fields: [
    {
      name: 'clientName',
      label: 'Your Full Name',
      type: 'text',
      placeholder: 'e.g. Radhika Sharma',
      helper: 'Primary point of contact for onboarding reviews and strategy check-ins.',
      required: true,
    },
    {
      name: 'designation',
      label: 'Designation / Role',
      type: 'text',
      placeholder: 'e.g. Founder / Creative Director / Clinic Manager',
      required: false,
    },
    {
      name: 'businessName',
      label: 'Business / Brand Name',
      type: 'text',
      placeholder: 'e.g. Aura Luxe Bridal Studio',
      helper: 'Exact brand name as registered or displayed across your customer touchpoints.',
      required: true,
    },
    {
      name: 'phone',
      label: 'WhatsApp Contact Number',
      type: 'phone',
      placeholder: 'e.g. 98200 12345',
      helper: 'Used for real-time campaign approvals, weekly telemetry summaries, and direct communication.',
      required: true,
    },
    {
      name: 'email',
      label: 'Official Work Email',
      type: 'email',
      placeholder: 'e.g. radhika@auraluxe.in',
      helper: 'Where your campaign roadmaps, invoices, and analytical reports will be sent.',
      required: true,
    },
    {
      name: 'websiteUrl',
      label: 'Website URL',
      type: 'url',
      placeholder: 'e.g. auraluxe.in',
      helper: 'Leave blank if you do not have an active website yet (e.g. Instagram-only brand).',
      required: false,
    },
    {
      name: 'instagramHandle',
      label: 'Instagram Profile / Handle',
      type: 'text',
      placeholder: 'e.g. @auraluxestudio',
      helper: 'Our creative team audits your current visual grid and reel pacing before kickoff.',
      required: false,
    },
    {
      name: 'cityAndRadius',
      label: 'Primary City & Service Region',
      type: 'text',
      placeholder: 'e.g. Mumbai (Bandra to Juhu) + Destination Weddings',
      helper: 'Where your physical studio is located, or your geographic delivery scope.',
      required: true,
    },
    {
      name: 'beautyVerticals',
      label: 'Primary Industry & Practice Areas',
      type: 'chips',
      multiple: true,
      options: [
        { value: 'bridal-makeup', label: 'Bridal & Celebrity Makeup' },
        { value: 'luxury-salon', label: 'Luxury Hair & Beauty Salon' },
        { value: 'aesthetic-clinic', label: 'Dermatology & Aesthetic Clinic' },
        { value: 'academy-masterclass', label: 'Makeup / Hair Academy' },
        { value: 'cosmetics-d2c', label: 'D2C Skincare & Beauty Brand' },
        { value: 'spa-wellness', label: 'Spa, Nails & Wellness' },
      ],
      helper: 'Select all categories that apply to your current business model.',
      required: true,
    },
  ],
};

// ══════════════════════════════════════════════════════════════
// FLOW 1: GOOGLE ADS
// ══════════════════════════════════════════════════════════════
export const GOOGLE_ADS_FLOW: FlowConfig = {
  id: 'google-ads',
  title: 'Google Ads Acquisition Engine',
  badge: 'High-Intent Search & Maps',
  shortDesc: 'Search, Local 3-Pack, Display, and YouTube discovery funnels for commercial client bookings.',
  icon: 'google',
  estimatedMinutes: 6,
  steps: [
    COMMON_STEP_1,
    {
      id: 'google-goals',
      eyebrow: 'STEP 02 · COMMERCIAL GOALS',
      title: 'Target KPIs & Monthly Budget',
      subtitle: 'Define your desired commercial outcomes and intended monthly media deployment.',
      fields: [
        {
          name: 'primaryGoals',
          label: 'Primary Growth Objective',
          type: 'chips',
          multiple: true,
          options: [
            { value: 'bridal-inquiries', label: 'High-Ticket Bridal Leads' },
            { value: 'salon-appointments', label: 'Direct Salon / Clinic Appointments' },
            { value: 'whatsapp-consults', label: 'Direct WhatsApp Consultations' },
            { value: 'academy-admissions', label: 'Masterclass / Course Enrollments' },
            { value: 'store-purchases', label: 'Online Product Checkout Sales' },
          ],
          required: true,
        },
        {
          name: 'monthlyAdSpend',
          label: 'Planned Monthly Ad Spend (INR)',
          type: 'select',
          options: [
            { value: 'under-30k', label: '₹20,000 – ₹35,000 / month (Pilot Tier)' },
            { value: '35k-75k', label: '₹35,000 – ₹75,000 / month (Growth Tier)' },
            { value: '75k-150k', label: '₹75,000 – ₹1,50,000 / month (Scale Tier)' },
            { value: '150k-plus', label: '₹1,50,000+ / month (Enterprise & Multi-Location)' },
          ],
          helper: 'Direct ad spend paid straight to Google. Our management fee is separate.',
          required: true,
        },
        {
          name: 'targetCpl',
          label: 'Ideal Cost Per Qualified Inquiry (Optional)',
          type: 'text',
          placeholder: 'e.g. Under ₹450 per verified bridal inquiry',
          helper: 'If you have benchmark numbers from prior agency or internal campaigns.',
          required: false,
        },
      ],
    },
    {
      id: 'google-geo',
      eyebrow: 'STEP 03 · TARGET GEOGRAPHIES',
      title: 'Audience & Location Scope',
      subtitle: 'Specify where prospective high-net-worth clients should discover your ads.',
      fields: [
        {
          name: 'targetLocations',
          label: 'Target Cities, Micro-Markets or Postal Codes',
          type: 'textarea',
          placeholder: 'e.g. South Mumbai (Colaba to Worli), Bandra West, Juhu, Lokhandwala, Powai. Exclude outer suburbs.',
          helper: 'Be as granular as possible. We configure geographic bid adjustments around affluent localities.',
          required: true,
        },
        {
          name: 'serviceRadius',
          label: 'Physical Walk-in Radius vs Travel Scope',
          type: 'select',
          options: [
            { value: 'hyperlocal-5km', label: 'Hyperlocal: Within 3–5 km radius of our studio' },
            { value: 'citywide-15km', label: 'City-wide: Entire metropolitan region (15–25 km)' },
            { value: 'pan-india-destination', label: 'Pan-India & Destination (We travel for bookings)' },
            { value: 'nationwide-ecommerce', label: 'Nationwide Delivery (Products / E-commerce)' },
          ],
          required: true,
        },
      ],
    },
    {
      id: 'google-usps',
      eyebrow: 'STEP 04 · PACKAGES & COMPETITORS',
      title: 'Pricing Tiers & Edge',
      subtitle: 'Give us your core service menu, price brackets, and competitors we must outrank.',
      fields: [
        {
          name: 'servicePricingTiers',
          label: 'Hero Packages & Pricing Sweet Spot',
          type: 'textarea',
          placeholder: 'e.g. Signature Bridal Package: ₹35,000–₹65,000\nParty Makeup: ₹8,000\nHydrafacial / Aesthetic Treatments: ₹4,500–₹12,000',
          helper: 'Helps us qualify search intent and write ad copy that filters out low-budget inquiries.',
          required: true,
        },
        {
          name: 'brandUsps',
          label: 'Your Unique Selling Points (USPs)',
          type: 'textarea',
          placeholder: 'e.g. 10+ years celebrity experience, Airbrush HD specialist, luxury international products (Charlotte Tilbury, Dior), private studio lounge.',
          required: true,
        },
        {
          name: 'competitorUrls',
          label: 'Key Competitor Websites or Search Names',
          type: 'textarea',
          placeholder: 'e.g. competitor1.in, competitor2.com\nNames of local salons/artists frequently bidding on your terms.',
          helper: 'We reverse-engineer their keywords, search volume, and auction overlaps.',
          required: false,
        },
      ],
    },
    {
      id: 'google-keywords',
      eyebrow: 'STEP 05 · SEARCH KEYWORDS',
      title: 'High-Intent Search Terms',
      subtitle: 'Enter the exact search terms your prospective clients use when ready to book.',
      fields: [
        {
          name: 'primaryKeywords',
          label: 'Seed Keywords & Search Phrases',
          type: 'tag-list',
          placeholder: 'Type a keyword and press Enter, or use the bulk paste tool below',
          helper: 'e.g. "bridal makeup artist in bandra", "hydrafacial near me", "best salon in south mumbai"',
          required: true,
        },
        {
          name: 'negativeKeywords',
          label: 'Negative Keywords to Exclude (Optional)',
          type: 'tag-list',
          placeholder: 'e.g. "free", "cheap", "jobs", "salary", "diy", "course syllabus"',
          helper: 'Search queries where you never want to waste ad spend.',
          required: false,
        },
      ],
    },
    {
      id: 'google-access',
      eyebrow: 'STEP 06 · ASSETS & ACCESS',
      title: 'Creative Assets & Account Link',
      subtitle: 'Connect your ad account via partner invitation and share high-res creative files.',
      fields: [
        {
          name: 'creativeDriveLink',
          label: 'Google Drive / Dropbox Folder (Optional)',
          type: 'url',
          placeholder: 'https://drive.google.com/drive/folders/...',
          helper: 'High-res photos of brides, studio interiors, before/after transformations, brand logos.',
          required: false,
        },
        {
          name: 'googleAdsCid',
          label: 'Your Google Ads 10-Digit Customer ID (CID)',
          type: 'text',
          placeholder: 'e.g. 123-456-7890',
          helper: 'Find this at the top right of your Google Ads dashboard. Leave blank if you need us to create a new ad account.',
          required: false,
        },
        {
          name: 'accessGuide',
          label: 'How We Connect to Your Google Ads (No Password Needed)',
          type: 'access-guide',
          guide: {
            platformName: 'Google Ads Manager Account',
            partnerIdentifier: 'Sujal.Mehta@juntoz.in',
            instructions: [
              'Log into ads.google.com and note your 10-digit Customer ID.',
              'Once this onboarding is submitted, Juntoz will send a Manager Link request to your ID.',
              'Go to Tools & Settings > Access and Security > Managers, and click Accept.',
              'You retain 100% administrative ownership and direct billing control at all times.',
            ],
            docLink: 'https://support.google.com/google-ads/answer/7459399',
          },
        },
        {
          name: 'dpdpConsent',
          label: 'Data Protection & Verification Consent',
          type: 'consent',
          helper: 'I confirm the information provided is accurate and authorize Juntoz to review these business assets under strict confidentiality (Digital Personal Data Protection Act, 2023).',
          required: true,
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════════════
// FLOW 2: META ADS (INSTAGRAM & FACEBOOK)
// ══════════════════════════════════════════════════════════════
export const META_ADS_FLOW: FlowConfig = {
  id: 'meta-ads',
  title: 'Meta & Instagram Performance Engine',
  badge: 'Scroll-Stopping Reels & DMs',
  shortDesc: 'Instagram Reels, Stories, Meta lookalike feeds, and high-converting 1-tap WhatsApp lead funnels.',
  icon: 'meta',
  estimatedMinutes: 6,
  steps: [
    COMMON_STEP_1,
    {
      id: 'meta-goals',
      eyebrow: 'STEP 02 · CAMPAIGN OBJECTIVES',
      title: 'Booking Funnel & Goals',
      subtitle: 'Choose how your prospective beauty clients will convert after seeing your ads.',
      fields: [
        {
          name: 'campaignObjective',
          label: 'Primary Conversion Destination',
          type: 'chips',
          multiple: true,
          options: [
            { value: 'whatsapp-dm', label: '1-Tap WhatsApp Direct Chat (Recommended)' },
            { value: 'instagram-dm', label: 'Instagram Direct Message Inquiries' },
            { value: 'website-booking', label: 'Website Consultation Booking Page' },
            { value: 'instant-lead-form', label: 'Meta Instant Form with Phone Verification' },
            { value: 'profile-growth', label: 'High-Intent Instagram Profile Visits' },
          ],
          helper: 'For beauty and bridal clients in India, 1-tap WhatsApp funnels generate the highest conversion rates.',
          required: true,
        },
        {
          name: 'targetMonthlyInquiries',
          label: 'Desired Monthly Qualified Inquiries',
          type: 'select',
          options: [
            { value: '30-60', label: '30 – 60 Qualified Inquiries / month' },
            { value: '60-120', label: '60 – 120 Qualified Inquiries / month' },
            { value: '120-250', label: '120 – 250 Qualified Inquiries / month' },
            { value: '250-plus', label: '250+ Inquiries / month (Multi-branch / Academy)' },
          ],
          required: true,
        },
        {
          name: 'monthlyAdSpend',
          label: 'Planned Monthly Ad Spend (INR)',
          type: 'select',
          options: [
            { value: 'under-30k', label: '₹20,000 – ₹35,000 / month' },
            { value: '35k-75k', label: '₹35,000 – ₹75,000 / month' },
            { value: '75k-150k', label: '₹75,000 – ₹1,50,000 / month' },
            { value: '150k-plus', label: '₹1,50,000+ / month' },
          ],
          required: true,
        },
      ],
    },
    {
      id: 'meta-audience',
      eyebrow: 'STEP 03 · AUDIENCE & DEMOGRAPHICS',
      title: 'Audience Persona & Regions',
      subtitle: 'Identify who needs to see your lookbooks, transformations, and offers.',
      fields: [
        {
          name: 'targetAudienceDemographics',
          label: 'Target Age Bracket & Gender Focus',
          type: 'chips',
          multiple: true,
          options: [
            { value: 'brides-20-32', label: 'Prospective Brides (Age 21–32)' },
            { value: 'brides-family-35-55', label: 'Mother of the Bride & Family (Age 38–55)' },
            { value: 'working-women-24-42', label: 'Working Women / Salon Goers (Age 24–42)' },
            { value: 'gen-z-students-18-24', label: 'Academy Applicants & Students (Age 18–25)' },
            { value: 'men-grooming-22-38', label: 'Men’s Grooming / Grooms (Age 22–38)' },
          ],
          required: true,
        },
        {
          name: 'targetGeographies',
          label: 'Specific Cities or High-Income Micro-Zones',
          type: 'textarea',
          placeholder: 'e.g. Mumbai (Western Suburbs + South Bombay), Thane, Navi Mumbai. High wedding density areas.',
          required: true,
        },
      ],
    },
    {
      id: 'meta-creative',
      eyebrow: 'STEP 04 · CREATIVE ASSETS',
      title: 'Visual Assets & Offers',
      subtitle: 'High-performing Meta ads depend on authentic, scroll-stopping 9:16 vertical video footage.',
      fields: [
        {
          name: 'creativeAssetsDriveLink',
          label: 'Google Drive / Dropbox Raw Video & Photo Folder',
          type: 'url',
          placeholder: 'https://drive.google.com/drive/folders/...',
          helper: 'Raw 4K iPhone transformation videos, bridal lookbooks, b-roll footage, and unedited clips.',
          required: true,
        },
        {
          name: 'seasonalOffers',
          label: 'Current Seasonal Offers or Early-Bird Packages',
          type: 'textarea',
          placeholder: 'e.g. "Book Q4 Bridal Dates & Receive Complimentary Pre-Bridal Skin Prep (Value ₹8,500)" or "Flat 20% off Balayage on Tuesdays".',
          helper: 'Compelling hooks and limited availability triggers drive urgent inquiry responses.',
          required: false,
        },
      ],
    },
    {
      id: 'meta-positioning',
      eyebrow: 'STEP 05 · BRAND VOICE & HOOKS',
      title: 'Copy Style & Competitors',
      subtitle: 'Shape the tone of voice and emotional appeal used in video captions and headlines.',
      fields: [
        {
          name: 'brandVoicePositioning',
          label: 'Brand Personality Tone',
          type: 'chips',
          multiple: true,
          options: [
            { value: 'luxury-haute', label: 'Quiet Luxury & Haute Couture' },
            { value: 'warm-relatable', label: 'Warm, Welcoming & Friendly' },
            { value: 'clinical-authority', label: 'Clinical Authority & Dermatological Rigor' },
            { value: 'bold-glam', label: 'High Glam, Trendsetter & Viral' },
          ],
          required: true,
        },
        {
          name: 'inspirationHandles',
          label: 'Inspiration Instagram Handles or Benchmark Competitors',
          type: 'textarea',
          placeholder: 'e.g. @hudabeauty, @artistryby..., @salon_brand\nHandles whose reel pacing, lighting, or aesthetic you admire.',
          required: false,
        },
      ],
    },
    {
      id: 'meta-access',
      eyebrow: 'STEP 06 · ASSETS & PARTNER ACCESS',
      title: 'Account Sync & Pixel Setup',
      subtitle: 'Invite Juntoz via Meta Business Manager Partner Access without sharing passwords.',
      fields: [
        {
          name: 'metaBusinessPartnerStatus',
          label: 'How We Connect to Your Meta Ad Account',
          type: 'access-guide',
          guide: {
            platformName: 'Meta Business Manager Partner Invite',
            partnerIdentifier: 'Contact: Sujal.Mehta@juntoz.in',
            instructions: [
              'Log into business.facebook.com and go to Business Settings.',
              'Click on Users > Partners > Add "Give a partner access to your assets".',
              'Enter Juntoz Business Manager Partner ID (provided by your account director).',
              'Assign access to your Ad Account, Facebook Page, Instagram Account, and Pixel with "Manage Campaigns" permission.',
              'Never share your personal Facebook password or 2FA credentials.',
            ],
            docLink: 'https://www.facebook.com/business/help/1717412048534642',
          },
        },
        {
          name: 'pixelId',
          label: 'Meta Pixel ID (Optional)',
          type: 'text',
          placeholder: 'e.g. 1234567890123456',
          helper: 'Leave blank if you do not have a Pixel installed; our team will configure it during technical setup.',
          required: false,
        },
        {
          name: 'dpdpConsent',
          label: 'Data Protection & Verification Consent',
          type: 'consent',
          helper: 'I confirm the information provided is accurate and authorize Juntoz to review these business assets under strict confidentiality (Digital Personal Data Protection Act, 2023).',
          required: true,
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════════════
// FLOW 3: GOOGLE MERCHANT CENTER (SHOPPING FEED & POLICY COMPLIANCE)
// ══════════════════════════════════════════════════════════════
export const MERCHANT_CENTER_FLOW: FlowConfig = {
  id: 'merchant-center',
  title: 'Merchant Center & Shopping Engine',
  badge: 'Product Feeds & Policy Compliance',
  shortDesc: 'Product feed architecture, Free Listings, Shopping ad sync, and Misrepresentation issue resolution.',
  icon: 'shopping',
  estimatedMinutes: 5,
  steps: [
    COMMON_STEP_1,
    {
      id: 'gmc-entity',
      eyebrow: 'STEP 02 · LEGAL BUSINESS IDENTITY',
      title: 'Store Registration & Address',
      subtitle: 'Google requires verifiable physical entity data to pass Merchant Center verification.',
      fields: [
        {
          name: 'legalEntityName',
          label: 'Registered Business / Entity Name',
          type: 'text',
          placeholder: 'e.g. Aura Luxe Cosmetics LLP / Private Limited',
          helper: 'Must match your GST certificate, business invoices, and footer contact details.',
          required: true,
        },
        {
          name: 'registeredOfficeAddress',
          label: 'Physical Registered Office Address',
          type: 'textarea',
          placeholder: 'e.g. Unit 302, Crystal Plaza, New Link Road, Andheri West, Mumbai 400053, Maharashtra',
          helper: 'Must be visibly listed on your website contact page and GMC settings (P.O. boxes are rejected by Google).',
          required: true,
        },
        {
          name: 'supportDomainEmail',
          label: 'Domain-Branded Support Email',
          type: 'email',
          placeholder: 'e.g. care@yourbrand.com or support@yourbrand.in',
          helper: 'Google often flags stores using generic @gmail.com addresses on commercial checkout websites.',
          required: true,
        },
      ],
    },
    {
      id: 'gmc-policies',
      eyebrow: 'STEP 03 · STORE POLICY AUDIT',
      title: 'Mandatory Policy Verification',
      subtitle: 'Misrepresentation suspensions frequently stem from incomplete or hidden store policy links.',
      fields: [
        {
          name: 'policyLinksVerified',
          label: 'Confirm Live Policy Pages on Your Store',
          type: 'chips',
          multiple: true,
          options: [
            { value: 'refund-policy', label: 'Clear Refund & Return Policy Page' },
            { value: 'shipping-policy', label: 'Shipping & Delivery Timelines Page' },
            { value: 'terms-of-service', label: 'Terms of Service / Conditions' },
            { value: 'privacy-policy', label: 'Privacy Policy (DPDP / GDPR Compliant)' },
            { value: 'ssl-payment-gateway', label: 'Encrypted Checkout (SSL + Razorpay/Stripe/Cashfree)' },
          ],
          helper: 'All checked pages must be directly linked in your website footer menu.',
          required: true,
        },
        {
          name: 'policyPagesUrlList',
          label: 'Links to Your Refund, Shipping & Contact Pages',
          type: 'textarea',
          placeholder: 'https://yourbrand.in/pages/refund-policy\nhttps://yourbrand.in/pages/shipping\nhttps://yourbrand.in/pages/contact-us',
          required: true,
        },
      ],
    },
    {
      id: 'gmc-feed',
      eyebrow: 'STEP 04 · E-COMMERCE INTEGRATION',
      title: 'Store Platform & Catalog',
      subtitle: 'Identify your e-commerce platform and feed synchronization method.',
      fields: [
        {
          name: 'storePlatform',
          label: 'E-Commerce Platform',
          type: 'select',
          options: [
            { value: 'shopify', label: 'Shopify' },
            { value: 'woocommerce', label: 'WooCommerce (WordPress)' },
            { value: 'magento', label: 'Magento / Adobe Commerce' },
            { value: 'custom-react-next', label: 'Custom Headless / React / Next.js' },
            { value: 'other-cart', label: 'Other E-Commerce System' },
          ],
          required: true,
        },
        {
          name: 'catalogSkuCount',
          label: 'Active Product Catalog Size (SKUs)',
          type: 'select',
          options: [
            { value: '1-25', label: '1 – 25 Boutique SKUs' },
            { value: '25-100', label: '25 – 100 Products' },
            { value: '100-500', label: '100 – 500 Products' },
            { value: '500-plus', label: '500+ Extensive Catalog' },
          ],
          required: true,
        },
        {
          name: 'pastPolicyIssues',
          label: 'Has your GMC account been suspended or warned before?',
          type: 'textarea',
          placeholder: 'e.g. Suspended for "Misrepresentation" 2 months ago, or "Account disapproved due to missing contact details".',
          helper: 'Share previous error messages or notification dates so our specialists can tailor the appeal dossier.',
          required: false,
        },
      ],
    },
    {
      id: 'gmc-access',
      eyebrow: 'STEP 05 · GMC & DOMAIN ACCESS',
      title: 'Account Invites & Documents',
      subtitle: 'Provide Standard access to Merchant Center and upload verifiable business documents.',
      fields: [
        {
          name: 'gmcAccessGuide',
          label: 'How We Connect to Your Merchant Center',
          type: 'access-guide',
          guide: {
            platformName: 'Google Merchant Center Access',
            partnerIdentifier: 'Sujal.Mehta@juntoz.in',
            instructions: [
              'Log into merchants.google.com and click the Gear icon > People and access.',
              'Click Add User and enter Sujal.Mehta@juntoz.in.',
              'Select "Standard" or "Admin" access and save.',
              'Verify that your domain is claimed under Business information > Website in GMC.',
            ],
            docLink: 'https://support.google.com/merchants/answer/1637190',
          },
        },
        {
          name: 'verificationDocumentsDriveLink',
          label: 'Google Drive Link for Legal Proof Documents (Optional)',
          type: 'url',
          placeholder: 'https://drive.google.com/drive/folders/...',
          helper: 'GST certificate, utility bill of registered address, or trademark certificate (helps resolve tough misrepresentation appeals).',
          required: false,
        },
        {
          name: 'dpdpConsent',
          label: 'Data Protection & Verification Consent',
          type: 'consent',
          helper: 'I confirm the information provided is accurate and authorize Juntoz to review these business assets under strict confidentiality (Digital Personal Data Protection Act, 2023).',
          required: true,
        },
      ],
    },
  ],
};

export const ALL_FLOWS: Record<string, FlowConfig> = {
  'google-ads': GOOGLE_ADS_FLOW,
  'meta-ads': META_ADS_FLOW,
  'merchant-center': MERCHANT_CENTER_FLOW,
};
