import React from "react";
import { Link } from "react-router-dom";
import aayurMark from "../Images/aayur-mark.png";
import "./SiteFooter.css";

const LEGAL_LINKS = [
  { label: "Website Terms", to: "/WebsiteTerms" },
  { label: "AayurCare Terms", to: "/aayurcaretermsandcondition" },
  { label: "Refund Policy", to: "/refundandcancellation" },
  { label: "Disclaimer", to: "/Disclaimer" },
  { label: "Privacy Policy", to: "/PrivacyPolicy" },
];

// Contact details as published in the AayurCare Terms (contact and grievance
// sections) and the site's WhatsApp support number.
const CONTACT_LINKS = [
  { label: "contact@aayurcare.com", href: "mailto:contact@aayurcare.com" },
  { label: "+91 73381 46712", href: "tel:+917338146712" },
  { label: "WhatsApp +91 89708 90228", href: "https://wa.me/918970890228?text=Hi", external: true },
  { label: "Grievances: grievance@aayurcare.com", href: "mailto:grievance@aayurcare.com" },
];

function SiteFooter() {
  return (
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-brand">
          <p className="ft-name">
            <span className="ft-mark">
              <img src={aayurMark} alt="" width="24" height="24" />
            </span>
            Aayurcare
          </p>
          <p className="ft-tagline">
            Providing smart and hassle-free medical reimbursement for a healthier you.
          </p>
        </div>

        <nav className="ft-col" aria-labelledby="ft-legal">
          <h2 id="ft-legal" className="ft-heading">Legal</h2>
          <ul className="ft-list">
            {LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link className="ft-link" to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ft-col">
          <h2 className="ft-heading">Contact</h2>
          <ul className="ft-list">
            {CONTACT_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="ft-link"
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ft-bottom">
        <p>© {new Date().getFullYear()} Aayurcare. Powered by Aayur Enterprises</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
