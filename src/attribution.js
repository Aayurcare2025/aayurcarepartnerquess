import { API_BASE } from "./apiBase";

// Landing parameters: Quess link details (contact_number = phone,
// applicant_id = employee id) and campaign parameters (utm_*). They're read
// once when the app first loads, before any redirect can drop them from the
// address bar.

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const STORE_KEY = "attribution";
const CAMPAIGN_DAYS = 30; // how long a campaign gets credit for a later payment

const landingParams = new URLSearchParams(window.location.search);
const landingPath = window.location.pathname;

function readUtm(params) {
  const utm = {};
  UTM_KEYS.forEach((key) => {
    const value = (params.get(key) || "").trim();
    if (value) utm[key] = value.slice(0, 255);
  });
  return utm;
}

// Call once at startup. Remembers the campaign for later payments and tells
// the backend about the visit, so the phone and employee id are saved even if
// the person never signs in.
export function captureAttribution() {
  const utm = readUtm(landingParams);
  const contactNumber = landingParams.get("contact_number") || "";
  const applicantId = landingParams.get("applicant_id") || "";

  if (Object.keys(utm).length) {
    // The latest campaign wins, so a payment is credited to the click that
    // brought the person back.
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ ...utm, capturedAt: Date.now() }));
    } catch {
      // Storage can be unavailable (private mode); tracking just skips it.
    }
  }

  if (Object.keys(utm).length || contactNumber || applicantId) {
    fetch(`${API_BASE}/track/landing`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...utm,
        contact_number: contactNumber,
        applicant_id: applicantId,
        landing_path: landingPath,
      }),
      keepalive: true,
    }).catch(() => {});
  }
}

// The campaign to credit a payment to, if one was seen in the last 30 days.
export function getAttribution() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (!stored) return {};
    if (Date.now() - stored.capturedAt > CAMPAIGN_DAYS * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(STORE_KEY);
      return {};
    }
    const { capturedAt, ...utm } = stored;
    return utm;
  } catch {
    return {};
  }
}
