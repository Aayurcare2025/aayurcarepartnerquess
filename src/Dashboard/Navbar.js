import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import aayurMark from "../Images/aayur-mark.png";
import { clearSession, isSessionActive, SIGNED_IN_HOME } from "./session";
import "./Navbar.css";

const MEDICINE_DELIVERY_URL = "https://link.mypillo.in/kckszz";

// Shown only when signed in. Medicine delivery is a partner site, so it is a
// plain link rather than an app route.
const SIGNED_IN_LINKS = [
  { label: "Home", to: SIGNED_IN_HOME },
  { label: "Claims", to: "/Claims" },
  { label: "Medicine delivery", href: MEDICINE_DELIVERY_URL },
  { label: "Support", to: "/callback" },
];

function lastFourDigits(phone) {
  const digits = (phone || "").replace(/\D/g, "");
  return digits.length >= 4 ? digits.slice(-4) : "";
}

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Read on every render: the navbar re-renders on each route change, which is
  // when signing in, signing out and session expiry take effect.
  const signedIn = isSessionActive();
  const phoneEnding = signedIn ? lastFourDigits(localStorage.getItem("phone")) : "";

  // Close the mobile menu after navigating.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close the mobile menu on Escape or a tap outside it.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setIsMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [isMenuOpen]);

  const handleSignOut = () => {
    clearSession();
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="topbar" ref={headerRef}>
      <div className="topbar-inner">
        <Link to={signedIn ? SIGNED_IN_HOME : "/"} className="topbar-brand" aria-label="Aayurcare and Quess, home">
          <span className="topbar-mark">
            <img src={aayurMark} alt="" width="28" height="28" />
          </span>
          <span className="topbar-name">
            Aayurcare
            <span className="topbar-x" aria-hidden="true">×</span>
            Quess
          </span>
        </Link>

        {signedIn && (
          <>
            <nav
              id="topbar-menu"
              className={`topbar-menu${isMenuOpen ? " is-open" : ""}`}
              aria-label="Main"
            >
              <ul className="topbar-links">
                {SIGNED_IN_LINKS.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a className="topbar-link" href={link.href}>
                        {link.label}
                        <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                      </a>
                    ) : (
                      <NavLink
                        to={link.to}
                        className={({ isActive }) => `topbar-link${isActive ? " is-active" : ""}`}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>

              <div className="topbar-account">
                {phoneEnding && (
                  <span className="topbar-phone">
                    <span className="topbar-sr">Signed in, number ending </span>
                    <span aria-hidden="true">•••• </span>
                    {phoneEnding}
                  </span>
                )}
                <button type="button" className="topbar-signout" onClick={handleSignOut}>
                  Sign out
                </button>
              </div>
            </nav>

            <button
              type="button"
              className="topbar-toggle"
              aria-expanded={isMenuOpen}
              aria-controls="topbar-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X size={20} strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
              )}
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
