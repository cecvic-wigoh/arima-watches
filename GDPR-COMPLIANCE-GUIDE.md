# GDPR Compliance Guide for Arsenyo

Your landing page is now GDPR compliant! This guide explains what has been implemented and what you need to customize.

## What Has Been Implemented

### 1. Cookie Consent Banner
- **Location**: `/src/components/gdpr/CookieConsent.tsx`
- **Features**:
  - Appears on first visit
  - Three consent options: Accept All, Necessary Only, Manage Preferences
  - Stores user preferences in localStorage
  - Fully customizable preferences modal
  - Links to Privacy Policy

### 2. Privacy Policy Page
- **URL**: `/privacy-policy`
- **Location**: `/src/app/privacy-policy/page.tsx`
- **Covers**:
  - Data collection practices
  - Legal basis for processing (GDPR Article 6)
  - User rights (access, rectification, erasure, etc.)
  - Cookie usage
  - Data security and retention
  - International transfers
  - Contact information

### 3. Terms of Service Page
- **URL**: `/terms-of-service`
- **Location**: `/src/app/terms-of-service/page.tsx`
- **Covers**:
  - Use license
  - Product information
  - Pre-orders and crowdfunding terms
  - Email newsletter terms
  - Intellectual property
  - Disclaimers and limitations of liability

### 4. GDPR-Compliant Email Form
- **Features**:
  - Explicit consent checkbox (required)
  - Clear explanation of data usage
  - Link to Privacy Policy
  - Consent timestamp recorded
  - Unsubscribe information
  - Form validation

### 5. Footer with Legal Links
- Privacy Policy link
- Terms of Service link
- Cookie Settings (allows users to change preferences)
- Copyright information

## What You Need to Customize

### 1. Contact Information (High Priority)
Replace placeholder text in both Privacy Policy and Terms of Service:

**Privacy Policy** (`/src/app/privacy-policy/page.tsx`):
```
Line ~25: [Your Contact Email]
Line ~220: [Your Contact Email]
Line ~221: [Your Business Address]
```

**Terms of Service** (`/src/app/terms-of-service/page.tsx`):
```
Line ~246: [Your Contact Email]
Line ~247: [Your Business Address]
```

### 2. Email Service Integration (High Priority)
The email form currently simulates submission. You need to integrate with your email service provider.

**File**: `/src/app/page.tsx` (around line 56-78)

Replace the simulated API call with your actual service:

#### Option A: Mailchimp
```typescript
const response = await fetch('/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email,
    consentGiven: true,
    consentTimestamp: new Date().toISOString(),
  }),
});
```

#### Option B: ConvertKit
```typescript
const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    api_key: 'YOUR_API_KEY',
    email,
    fields: {
      consent_timestamp: new Date().toISOString(),
    },
  }),
});
```

#### Option C: SendGrid
Create a Next.js API route at `/src/app/api/subscribe/route.ts`

### 3. Cookie Policy Details (Medium Priority)
If you plan to use analytics (Google Analytics, etc.), update the Privacy Policy to specify which cookies are used.

### 4. Data Retention Periods (Medium Priority)
Update Privacy Policy section 9 with specific retention periods for different types of data.

### 5. Supervisory Authority (Medium Priority)
Add information about the relevant data protection supervisory authority in your jurisdiction (Privacy Policy section 14).

## Additional Recommendations

### 1. Double Opt-In Email System
For maximum GDPR compliance, implement a double opt-in system:
1. User submits email
2. Confirmation email sent
3. User clicks confirmation link
4. Subscription activated

### 2. Data Processing Agreement
If using third-party email services, ensure you have a Data Processing Agreement (DPA) in place.

### 3. Regular Policy Updates
- Review policies annually
- Update "Last Updated" date when making changes
- Keep records of policy versions

### 4. User Data Export
Consider implementing a feature that allows users to:
- Request their data (GDPR Article 15)
- Download their data in a portable format (GDPR Article 20)

### 5. Analytics Compliance
If adding Google Analytics or similar:
- Add it to the cookie consent options
- Only load analytics after user consent
- Consider using Google Analytics 4 with IP anonymization

## Testing Checklist

- [ ] Cookie banner appears on first visit
- [ ] Preferences are saved and respected on return visits
- [ ] Email form requires consent checkbox
- [ ] Email form validates input
- [ ] Privacy Policy page loads correctly
- [ ] Terms of Service page loads correctly
- [ ] Footer links work properly
- [ ] Cookie Settings button clears preferences and shows banner again
- [ ] Forms are disabled during submission
- [ ] Success/error messages display correctly

## Legal Disclaimer

While this implementation follows GDPR best practices, **you should have these documents reviewed by a legal professional** familiar with:
- EU GDPR regulations
- Swiss data protection laws (if applicable)
- Your specific business requirements
- Your target markets' regulations

## Support Resources

- **GDPR Official Text**: https://gdpr-info.eu/
- **Swiss FDPIC**: https://www.edoeb.admin.ch/
- **EU Data Protection Board**: https://edpb.europa.eu/
- **Cookie Consent Guidelines**: https://gdpr.eu/cookies/

## Questions?

For questions about implementation, contact your development team.
For legal questions, consult with a data protection lawyer.

---

**Last Updated**: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
