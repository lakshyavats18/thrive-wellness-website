# 📋 Website Compliance Snippets — Copy & Paste Guide

Each section below has the **exact HTML** you need to add or replace in the corresponding file in your `Thrive website` folder. I've marked **FIND** (what to locate) and **REPLACE/ADD** (what to paste).

---

## A1. 🔴 Fix Background Location Contradiction

**Files:** `privacy.html` (line ~114) AND `privacy-policy.html` (line ~144)

### FIND this line:

```html
<li>
  Location data is collected <strong>ONLY</strong> when you actively start a
  workout session and grant location permissions. We do not track your location
  in the background outside of active workout sessions.
</li>
```

### REPLACE with:

```html
<li>
  Precise GPS location data is collected during active workout sessions
  (running, walking, cycling) to map your route, calculate distance, pace, and
  elevation in real-time.
</li>
<li>
  <strong>Background Location Access:</strong> When you start a workout session
  and grant location permissions, Thrive continues to collect your GPS location
  data
  <strong
    >even when the app is closed, running in the background, or your screen is
    locked</strong
  >. This is necessary to accurately record your complete workout route without
  interruption. Background location tracking
  <strong>automatically stops</strong> when you end your workout session or when
  the app is terminated. You can revoke background location access at any time
  in your device settings or within the app under
  <em>Settings → Privacy &amp; Security</em>.
</li>
<li>
  GPS coordinates are stored securely in your account and are never shared with
  third parties or used for advertising.
</li>
```

> ⚠️ This replaces the 3 `<li>` items under Section 3D (Location & GPS Data) with corrected versions.

---

## A2. 🔴 Add Medical Disclaimer Section

**Files:** `privacy.html` AND `privacy-policy.html`

### FIND this (the Section 7 / Contact section):

```html
<h2>7. Contact &amp; Privacy Officer</h2>
```

### ADD this entire block BEFORE that line:

```html
<div class="legal-section">
  <h2>8. Medical &amp; Health Information Disclaimer</h2>
  <div
    class="legal-box"
    style="background: rgba(251, 191, 36, 0.08); border-color: rgba(251, 191, 36, 0.25);"
  >
    <p style="color: #fbbf24; font-weight: 600; margin-bottom: 8px;">
      ⚕️ Important Health Notice
    </p>
    <p>
      Thrive Wellness is a general health and fitness tracking platform designed
      for informational and educational purposes only. The content, AI coaching
      recommendations, wellness scores, and nutritional analyses provided by
      Thrive and its Haven AI Coach are <strong>NOT</strong> intended to be a
      substitute for professional medical advice, diagnosis, or treatment.
    </p>
    <p>
      Always seek the advice of your physician or other qualified healthcare
      provider with any questions you may have regarding a medical condition.
      Never disregard professional medical advice or delay in seeking it because
      of information provided by Thrive.
    </p>
    <p>
      If you are experiencing a medical emergency, call your local emergency
      services immediately. Thrive does not provide emergency medical services.
    </p>
    <p>
      By using Thrive, you acknowledge that the app's wellness recommendations
      are algorithmically generated and should be considered as general guidance
      only, not personalized medical prescriptions.
    </p>
  </div>
</div>
```

> 📝 After adding this, rename "7. Contact & Privacy Officer" to **"9. Contact & Privacy Officer"** (since you're adding Section 8).

---

## A3. 🟠 Index.html — Medical Disclaimer Banner

**File:** `index.html`

### FIND the opening of `<main>` or the first section after the nav/header.

### ADD this banner right after the nav/header closes:

```html
<!-- Medical Disclaimer Banner — Store Compliance -->
<div
  style="background: rgba(251, 191, 36, 0.06); border-bottom: 1px solid rgba(251, 191, 36, 0.15); padding: 10px 20px; text-align: center; font-size: 0.82rem; color: #fbbf24;"
>
  ⚕️ <strong>Health Notice:</strong> Thrive is a wellness tracking platform for
  informational purposes only. It is not a substitute for professional medical
  advice, diagnosis, or treatment. Always consult your healthcare provider
  before making health decisions.
</div>
```

---

## A5. 🟠 Terms.html — Location Data Clause

**File:** `terms.html`

### FIND Section "5. Community Guidelines" (or whichever section comes after subscriptions):

```html
<h2>5. Community Guidelines &amp; Acceptable Use</h2>
```

### ADD this new section BEFORE it:

```html
<div class="legal-section">
  <h2>4A. Location Data &amp; GPS Tracking</h2>
  <p>
    Thrive collects precise GPS location data during active workout sessions
    (running, walking, cycling) to provide real-time route mapping, distance
    calculation, pace tracking, and elevation profiles.
  </p>
  <ul>
    <li>
      <strong>Background Location:</strong> When you start a workout and grant
      location permissions, Thrive may continue to access your device's GPS
      location even when the app is running in the background, closed, or your
      screen is locked. This is required to record your complete workout route
      accurately.
    </li>
    <li>
      <strong>Automatic Cessation:</strong> Background location tracking
      automatically stops when you end your workout session or when the app
      process is terminated.
    </li>
    <li>
      <strong>User Control:</strong> You can revoke location permissions at any
      time through your device's system settings or within the app under
      <em>Settings → Privacy &amp; Security</em>.
    </li>
    <li>
      <strong>Data Usage:</strong> GPS coordinates are stored securely in your
      account for your personal use. Location data is never shared with third
      parties, sold to advertisers, or used for purposes beyond your personal
      workout records.
    </li>
  </ul>
</div>
```

---

## A6. 🟠 Terms.html — Update Effective Date

**File:** `terms.html` (line 75)

### FIND:

```html
<p class="effective-date">Last Updated & Effective: August 18, 2026</p>
```

### REPLACE with:

```html
<p class="effective-date">Last Updated & Effective: October 3, 2026</p>
```

---

## A7. 🟠 Support.html — Health Disclaimer

**File:** `support.html`

### FIND the first `<div class="legal-section">` (the main support content area).

### ADD this health notice at the TOP of the support content (right after the page heading/intro):

```html
<div
  class="legal-box"
  style="background: rgba(251, 191, 36, 0.06); border: 1px solid rgba(251, 191, 36, 0.2); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;"
>
  <p
    style="color: #fbbf24; font-weight: 600; font-size: 0.88rem; margin-bottom: 4px;"
  >
    ⚕️ Health & Safety Notice
  </p>
  <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">
    Thrive provides general wellness tracking and AI coaching for informational
    purposes only. It is not a substitute for professional medical advice,
    diagnosis, or treatment. If you have a medical concern, please consult a
    qualified healthcare provider.
  </p>
</div>
```

---

## A8. 🟠 Footer Health Disclaimer — ALL Pages

**Files:** `index.html`, `privacy.html`, `privacy-policy.html`, `terms.html`, `support.html`, `refund.html`

### FIND the `footer-bottom` div on EACH page:

```html
<div class="footer-bottom">
  <span>Ac 2026 Thrive Wellness. All rights reserved.</span>
  <span>Designed for holistic wellness & human vitality.</span>
</div>
```

### REPLACE with:

```html
<div class="footer-bottom">
  <span
    style="display: block; font-size: 0.75rem; color: #94a3b8; margin-bottom: 6px;"
    >⚕️ Thrive is a wellness platform and does not provide medical advice,
    diagnosis, or treatment. Always consult a healthcare professional before
    making health decisions.</span
  >
  <span>© 2026 Thrive Wellness. All rights reserved.</span>
  <span>Designed for holistic wellness &amp; human vitality.</span>
</div>
```

> 📝 Also fixes the "Ac" typo → "©" on all pages.

---

## A9. 🟡 Standalone delete-account.html (Optional — Recommended)

Your `support.html#account-deletion` section already covers account deletion well. However, if you want a standalone page that Google/Apple can link to directly, create a new file `delete-account.html` in the website folder with this content. **This is optional** since the support page already has it.

If you want me to generate this full standalone page, let me know.

---

## ✅ Quick Checklist After Applying

After applying all snippets, verify:

- [ ] `privacy.html` line 114 area — no longer says "We do not track in background"
- [ ] `privacy-policy.html` line 144 area — same fix applied
- [ ] `privacy.html` + `privacy-policy.html` — new Medical Disclaimer section visible
- [ ] `index.html` — medical disclaimer banner visible below nav
- [ ] `terms.html` — Location Data section added
- [ ] `terms.html` — Effective date says October 3, 2026
- [ ] `support.html` — Health notice box visible at top of content
- [ ] ALL 6 pages — Footer shows health disclaimer + "©" (not "Ac")
