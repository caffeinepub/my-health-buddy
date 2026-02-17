# Specification

## Summary
**Goal:** Replace the current “Privacy & Safety” grown-ups page with an app-store compliant Privacy Policy for *My Health Buddy* that is legally clear, parent-readable, friendly in tone, and suitable for worldwide use.

**Planned changes:**
- Fully rewrite `frontend/src/pages/grownups/PrivacySafetyPage.tsx` to be a Privacy Policy page titled exactly “Privacy Policy – My Health Buddy”, removing all previous “Privacy & Safety” copy.
- Render the policy as clearly separated sections with headings in this exact order: No Personal Data Collection, Offline Use, Children’s Privacy, Data Storage, Medical Disclaimer, Third-Party Services, Changes, Contact, Ownership.
- Ensure the policy text explicitly includes: no personal data collection (listing names, email, location, contacts, photos, microphone recordings, health data, analytics, identifiers, cookies, tracking), fully offline use with nothing leaving the device, COPPA and GDPR-K compliance rationale (because no personal data is collected), local-only storage with reset-anytime, medical communication tool disclaimer (not medical advice), no ads/analytics SDKs/tracking/third-party sharing, update notice for feature changes, contact email `support@myhealthbuddy.app`, and the exact ownership line provided.
- Update `frontend/src/pages/grownups/GrownUpsAreaPage.tsx` so the button that navigates to `grownups-privacy` is labeled “Privacy Policy” (route/destination unchanged).

**User-visible outcome:** In the Grown-ups area, users see a “Privacy Policy” button that opens a clearly sectioned, app-store-ready Privacy Policy page for *My Health Buddy*.
