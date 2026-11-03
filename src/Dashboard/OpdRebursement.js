import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import festiveBanner from "../Images/festive-offer.jpg";
import { startPayUCheckout } from "./payuCheckout";
import "./OpdRebursement.css";

// Yearly plans are bought straight from this page. productinfo must match a
// plan name the backend knows, since the backend sets the price from it.
// regularPrice is shown struck through: 12 months of the matching monthly plan
// (Basic ₹200, Premium ₹400), which is what the festive price saves ~17% on.
const YEARLY_PLANS = [
  { id: "essential", name: "Essential Care", productinfo: "Essential Care", price: 1999, regularPrice: 2400, limit: 24000, tone: "green" },
  { id: "enhanced", name: "Enhanced Care", productinfo: "Enhanced Care", price: 3999, regularPrice: 4800, limit: 48000, tone: "maroon" },
];

// Monthly plans keep their own benefit pages, which handle the purchase.
const MONTHLY_PLANS = [
  { id: "basic", name: "Basic Plan", price: 200, limit: 2000, route: "/Basicplan" },
  { id: "premium", name: "Premium Plan", price: 400, limit: 4100, route: "/PremiumPlan" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formatINR = (amount) => `₹${amount.toLocaleString("en-IN")}`;

function readApplicantEmail() {
  try {
    return JSON.parse(localStorage.getItem("applicant"))?.email_id || "";
  } catch {
    return "";
  }
}

function OpdRebursement() {
  const navigate = useNavigate();
  const festiveRef = useRef(null);
  const emailRef = useRef(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Sign-in is checked by ProtectedRoute, which wraps this page.

  // While the dialog is open: focus the email field, close on Escape and stop
  // the page behind it from scrolling.
  useEffect(() => {
    if (!selectedPlan) return undefined;

    emailRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape" && !submitting) {
        setSelectedPlan(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedPlan, submitting]);

  const openDialog = (plan) => {
    setSelectedPlan(plan);
    setEmail((current) => current || readApplicantEmail());
    setError("");
  };

  const closeDialog = () => {
    if (!submitting) setSelectedPlan(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      await startPayUCheckout({ productinfo: selectedPlan.productinfo, email: trimmedEmail });
      // The browser is now on its way to PayU, so the dialog stays in its loading state.
    } catch (checkoutError) {
      setError(checkoutError.message);
      setSubmitting(false);
    }
  };

  const scrollToFestivePlans = (event) => {
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    festiveRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <main className="opd">
      <div className="opd-inner">
        <header className="opd-hero">
          <div>
            <h1 className="opd-title">OPD reimbursement plans</h1>
            <p className="opd-lede">
              Claim back what you spend on doctor visits, medicines and tests. Pick a monthly plan,
              or pay once for the whole year with this festive offer.
            </p>
          </div>

          <a href="#festive-plans" className="opd-banner" onClick={scrollToFestivePlans}>
            <img
              src={festiveBanner}
              width="631"
              height="309"
              alt="Navratri and Diwali festive offer: Essential Care at ₹1,999 a year with up to ₹24,000 annual reimbursement, and Enhanced Care at ₹3,999 a year with up to ₹48,000"
            />
          </a>
        </header>

        <section
          id="festive-plans"
          ref={festiveRef}
          className="opd-section opd-festive"
          aria-labelledby="opd-festive-title"
        >
          <div className="opd-section-head">
            <h2 id="opd-festive-title" className="opd-section-title">Festive yearly plans</h2>
            <p className="opd-section-note">Navratri and Diwali offer, paid once a year</p>
          </div>

          <div className="opd-grid">
            {YEARLY_PLANS.map((plan) => (
              <article key={plan.id} className={`opd-card opd-card--yearly opd-card--${plan.tone}`}>
                <div className="opd-card-head">
                  <h3 className="opd-card-name">{plan.name}</h3>
                  <span className="opd-tag">Save up to 17%</span>
                </div>

                <p className="opd-figure-label">Festive price</p>
                <p className="opd-price">
                  <s className="opd-was">
                    <span className="opd-sr">Regular price </span>
                    {formatINR(plan.regularPrice)}
                  </s>
                  <span className="opd-sr">, now </span>
                  {formatINR(plan.price)}
                  <span className="opd-period">/year</span>
                </p>

                <div className="opd-perforation" aria-hidden="true" />

                <p className="opd-figure-label">Annual reimbursement limit</p>
                <p className="opd-limit">Up to {formatINR(plan.limit)}</p>
                <p className="opd-covers">Covers doctor visit, medicine, diagnostics, vision and dental</p>

                <button type="button" className="opd-btn opd-btn--festive" onClick={() => openDialog(plan)}>
                  Buy for {formatINR(plan.price)}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="opd-section opd-monthly" aria-labelledby="opd-monthly-title">
          <div className="opd-section-head">
            <h2 id="opd-monthly-title" className="opd-section-title">Monthly plans</h2>
            <p className="opd-section-note">Pay month to month</p>
          </div>

          <div className="opd-grid">
            {MONTHLY_PLANS.map((plan) => (
              <article key={plan.id} className="opd-card">
                <div className="opd-card-head">
                  <h3 className="opd-card-name">{plan.name}</h3>
                </div>

                <p className="opd-figure-label">Price</p>
                <p className="opd-price">
                  {formatINR(plan.price)}
                  <span className="opd-period">/month</span>
                </p>

                <div className="opd-perforation" aria-hidden="true" />

                <p className="opd-figure-label">Total coverage</p>
                <p className="opd-limit">Up to {formatINR(plan.limit)}</p>

                <button type="button" className="opd-btn opd-btn--secondary" onClick={() => navigate(plan.route)}>
                  View benefits
                </button>
              </article>
            ))}
          </div>
        </section>

        <p className="opd-footnote">Enrol through Hamara Benefits, powered by Quess</p>
      </div>

      {selectedPlan && (
        <div
          className="opd-dialog-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDialog();
          }}
        >
          <div className="opd-dialog" role="dialog" aria-modal="true" aria-labelledby="opd-dialog-title">
            <h2 id="opd-dialog-title" className="opd-dialog-title">Buy {selectedPlan.name}</h2>
            <p className="opd-dialog-summary">
              {formatINR(selectedPlan.price)} a year, up to {formatINR(selectedPlan.limit)} reimbursement
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="opd-email" className="opd-field-label">
                Email for your payment confirmation
              </label>
              <input
                id="opd-email"
                ref={emailRef}
                type="email"
                className="opd-input"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={submitting}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "opd-email-error" : undefined}
              />
              {error && (
                <p id="opd-email-error" className="opd-error" role="alert">
                  {error}
                </p>
              )}
              <p className="opd-dialog-hint">You'll finish the payment on PayU</p>

              <div className="opd-dialog-actions">
                <button type="button" className="opd-btn opd-btn--ghost" onClick={closeDialog} disabled={submitting}>
                  Cancel
                </button>
                <button type="submit" className="opd-btn opd-btn--festive" disabled={submitting}>
                  {submitting ? "Opening PayU…" : "Continue to payment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default OpdRebursement;
