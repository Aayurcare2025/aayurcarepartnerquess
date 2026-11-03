// Shared sign-in session helpers. A session is the OTP login stored in
// localStorage, and it lasts SESSION_MS from the moment the OTP was verified.
export const SESSION_MS = 10 * 60 * 1000;

// Where a signed-in user lands instead of the phone number screen.
export const SIGNED_IN_HOME = "/OpdRebursement";

const SESSION_KEYS = ["loggedIn", "loginTime", "phone", "applicant", "applicant_id"];

export function isSessionActive() {
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const loginTime = Number(localStorage.getItem("loginTime"));
  return loggedIn && loginTime > 0 && Date.now() - loginTime <= SESSION_MS;
}

// True when a login was stored but has run out, so the user can be told.
export function hasExpiredSession() {
  return localStorage.getItem("loggedIn") === "true" && !isSessionActive();
}

export function clearSession() {
  SESSION_KEYS.forEach((key) => localStorage.removeItem(key));
}
