// import "../App.css";
// // import Aayurcareicon from "../Images/aayuricon.jpg";
// import { useNavigate } from "react-router-dom";
// import Quess from "../Images/q1.png"
// import WhatsApp from "../Images/whatsappcion.png"
// import React,{ useState, } from "react";
// function Home() {


//   const navigate = useNavigate();
  

//    const [phone, setPhone] = useState("");
  
//   React.useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     console.log("params",params);
//       const applicantId = params.get("applicant_id");
//   const contact = params.get("contact_number");



// console.log("aplicantId:", applicantId);
// console.log("contact_number:", contact);

//     if (contact) {
//       setPhone(contact); // Autofill the number
//     }
//   }, []);
// //this is home page of quess employees




//   return (
//     <div className="App">
//       <div className="main-content">
//         <div className="left-section">
          
//           <header className="header-section">
//              {/* <img src={Aayurcareicon} alt="" /> */}
//              <img  className="quess"src={Quess} alt=""></img>
          
//             <h1>Welcome to Your Health Hub</h1>
//             <p className="subtitle">Exclusive OPD reimbursement for Quess employees</p>



// <div className="login-box">
//   <input
//     type="text"
//     value={phone}
//     onChange={(e) => setPhone(e.target.value)}
//     placeholder="Mobile Number"
//     className="mobile-input"
//   />

//   <button
//     className="login-btn"
//     onClick={() => navigate("/login?contact_no=" + phone)}
//   >
//     Login
//   </button>
// </div>

//           </header>

        
//           {/* <section className="support">
//             <p>Need help? Contact support. Connect with us to access more benefits.</p>
//             <button onClick={() => navigate("/callback")} className="callback-btn">Request a Callback</button>
//           </section> */}

//           <section className="whatsapp">
//             <img className="whatsapp" src={WhatsApp} alt="WhatsApp" 


//  onClick={() => {
//     window.open(
//       "https://wa.me/918970890228?text=Send%20%22Hi%22%20to%20this%20number",
//       "_blank"
//     );
//   }}
//             ></img>
//           </section>

//         </div>



//       </div>


      
// <footer className="footer">
//   {/* Left side */}
//   <div className="footer-left">
//     <h2 className="footer-logo">Aayur Care</h2>
//     <p >
//       Providing smart and hassle-free medical reimbursement for a healthier you.
//     </p>
//     <p>Copyright@2025 Aayurcare-All Right Reserved</p>
//     <p>Powered by Aayur Enterprises</p>
//   </div>

//       {/* <div className="footer-middle">
//        <p>Partnered with Vibe Insurance Broking </p>
//         <p>IRDAI License No. 904</p>
        
//       </div> */}

//   {/* Right side */}
//   <div className="footer-right">
//     {/* Quick Links */}
//     <div >
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
  
//     </div>
//     {/* Legal */}
//     <div className="footer-section">
//       <h3>Legal</h3>
//       <ul>
//         <li className="footer-link" onClick={() => navigate("/websiteterms")}>Website Terms</li>
//         <br></br>
//     <li className="footer-link" onClick={() =>navigate("/aayurcaretermsandcondition")}>AayurCare Terms & Condition</li>
//     <br></br>
//    <li className="footer-link" onClick={()=>navigate("refundandcancellation")}>Refund and Cancellation Policy</li>
//     <br></br>
//   <li className="footer-link" onClick={()=>navigate("disclaimer")}>Disclaimer</li>
//       <br></br> 
//         <li className="footer-link" onClick={()=>navigate("PrivacyPolicy")}>Privacy Policy</li>
//       </ul>
//     </div>


//     {/* <div className="footer-down">

    

//     </div> */}
//   </div>
// </footer>
//     </div>
//   );
// }

// export default Home;


// import "../App.css";
// import { useNavigate } from "react-router-dom";
// import Quess from "../Images/q1.png";
// import WhatsApp from "../Images/whatsappcion.png";
// import React, { useState, useEffect } from "react";


// function Home() {
//   const navigate = useNavigate();
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1); // 1 = mobile, 2 = OTP input

//   // ---------------- AUTOFILL FROM URL ----------------
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const contact = params.get("contact_number");

//     console.log("Detected contact number:", contact);

//     if (contact) {
//       setPhone(contact);
//     }
//   }, []);

//   // ---------------- SEND OTP ----------------
//   const handleSendOtp = async () => {
//     if (!phone) {
//       alert("Mobile number missing");
//       return;
//     }

//     try {
//       const res = await axios.post("https://4lxmjt45zon6pu5yrlcuouu6.200.234.44.53.sslip.io/otp/send", {
//         phone,
//       });

//       console.log("OTP Sent:", res.data);
//       setStep(2); // Show OTP input
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       alert("Failed to send OTP");
//     }
//   };

//   // ---------------- VERIFY OTP ----------------
//   const handleVerifyOtp = async () => {
//     try {
//       const res = await axios.post("https://4lxmjt45zon6pu5yrlcuouu6.200.234.44.53.sslip.io/otp/verify", {
//         phone,
//         otp,
//       });

//       console.log("OTP Verified:", res.data);
// localStorage.setItem("loggedIn", "true");
//       navigate("/OpdRebursement");
//     } catch (error) {
//       alert("Invalid OTP");
//     }
//   };

//   return (
//     <div className="App">
//       <div className="main-content">
//         <div className="left-section">
//           <header className="header-section">
//             <img className="quess" src={Quess} alt="" />

//             <h1>Welcome to Your Health Hub</h1>
//             <p className="subtitle">Exclusive OPD reimbursement for Quess employees</p>

//             <div className="login-box">

//               {/* Step 1: Mobile Number */}
//               {step === 1 && (
//                 <>
//                   <input
//                     type="text"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     placeholder="Mobile Number"
//                     className="mobile-input"
//                   />

//                   <button className="login-btn" onClick={handleSendOtp}>
//                     Sign In
//                   </button>
//                 </>
//               )}

//               {/* Step 2: OTP Box */}
//               {step === 2 && (
//                 <>
//                   <input
//                     type="text"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     placeholder="Enter OTP"
//                     maxLength={6}
//                     className="mobile-input"
//                   />

//                   <button className="login-btn" onClick={handleVerifyOtp}>
//                     Verify OTP
//                   </button>
//                 </>
//               )}
//             </div>
//           </header>

//           <section className="whatsapp">
//             <img
//               className="whatsapp"
//               src={WhatsApp}
//               alt="WhatsApp"
//               onClick={() => {
//                 window.open(
//                   "https://wa.me/918970890228?text=Send%20Hi%20to%20this%20number",
//                   "_blank"
//                 );
//               }}
//             />
//           </section>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-left">
//           <h2 className="footer-logo">Aayur Care</h2>
//           <p>Providing smart and hassle-free medical reimbursement for a healthier you.</p>
//           <p>Copyright © 2025</p>
//           <p>Powered by Aayur Enterprises</p>
//         </div>

//         <div className="footer-right">
//           <div className="footer-section">
//             <h3>Legal</h3>
//             <ul>
//               <li onClick={() => navigate("/websiteterms")}>Website Terms</li>
//               <li onClick={() => navigate("/aayurcaretermsandcondition")}>AayurCare Terms</li>
//               <li onClick={() => navigate("refundandcancellation")}>Refund Policy</li>
//               <li onClick={() => navigate("disclaimer")}>Disclaimer</li>
//               <li onClick={() => navigate("PrivacyPolicy")}>Privacy Policy</li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
// export default Home;

//   import "../App.css";
//   import { useNavigate } from "react-router-dom";
//   import Quess from "../Images/q1.png";
//   import WhatsApp from "../Images/whatsappcion.png";
//   import React, { useState, useEffect } from "react";

//   function Home() {
//     const navigate = useNavigate();
//     const [phone, setPhone] = useState("");
//     const [otp, setOtp] = useState("");
//     const [step, setStep] = useState(1); // 1 = mobile, 2 = OTP input
// const [applicant_id, setApplicantId] = useState("");
//     // ---------------- AUTOFILL FROM URL ----------------
//     useEffect(() => {
//       const params = new URLSearchParams(window.location.search);
//       const contact = params.get("contact_number");
//       const id=params.get("applicant_id");

      
//       console.log("Detected contact number:", contact);

//       if (contact) {
//         setPhone(contact);
//       }

//       if (id) setApplicantId(id);
//     }, []);

//     // ---------------- SEND OTP (FETCH) ----------------
//     const handleSendOtp = async () => {
//       if (!phone) {
//         alert("Mobile number missing");
//         return;
//       }

//       try {
//         // const res = await fetch("https://4lxmjt45zon6pu5yrlcuouu6.200.234.44.53.sslip.io/otp/send", {
//           const res = await fetch("https://4lxmjt45zon6pu5yrlcuouu6.200.234.44.53.sslip.io/otp/send", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ phone }),
//         });

//         const data = await res.json();
//         console.log("OTP Sent:", data);

//         if (!res.ok) throw new Error("OTP send failed");

//         setStep(2); // Show OTP input
//       } catch (error) {
//         console.error("Error sending OTP:", error);
//         alert("Failed to send OTP");
//       }
//     };

//     // ---------------- VERIFY OTP (FETCH) ----------------
//     const handleVerifyOtp = async () => {
//       try {
//         const res = await fetch("https://4lxmjt45zon6pu5yrlcuouu6.200.234.44.53.sslip.io/otp/verify", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ phone, otp }),
//         });

//         const data = await res.json();
        
//         // console.log("OTP Verified:", data);

//         // --------- FIX START ----------
//       // if (data?.status !== "success") {
//       //   alert(data?.message || "Invalid OTP");
//       //   return;
//       // }

//       if (!data.success && data.status !== "success") {
//         alert(data?.message || "Invalid OTP");
//         return;
//       }


//       //in localstorage even if u reopened 
//         localStorage.setItem("loggedIn", "true");
//         localStorage.setItem("phone", phone)
//         // localStorage.setItem("loginTime", Date.now().toString());
//         localStorage.setItem("loginTime", Date.now());
//         // --------- FIX END ----------
//         navigate("/OpdRebursement");


//        // calling applicant ai to fetch details:

//          if (applicant_id) {
//       try {
//         const dashRes = await fetch(
//           `https://4lxmjt45zon6pu5yrlcuouu6.200.234.44.53.sslip.io/dash/applicant?applicant_id=${applicant_id}`
//         );

//         const dashData = await dashRes.json();
//         console.log("DASH API SAVE RESPONSE:", dashData);
//       } catch (dashErr) {
//         console.error("Error calling DASH API:", dashErr);
//       }
//     } else {
//       console.warn("No applicant_id.");
//     }




        
//       } catch (error) {
//         alert("Invalid OTP");
//       }
//     };

//     return (
//       <div className="App">

//         <div className="main-content">
//           <div className="left-section">
//             <header className="header-section">
//               <img className="quess" src={Quess} alt="" />

//               <h1>Welcome to Your Health Hub</h1>
//               <p className="subtitle">Exclusive OPD reimbursement for Quess employees</p>

//               <div className="login-box">

//                 {/* Step 1: Mobile Number */}
//                 {step === 1 && (
//                   <>
//                     <input
//                       type="text"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       placeholder="Mobile Number"
//                       className="mobile-input"
//                     />

//                     <button className="login-btn" onClick={handleSendOtp}>
//                       Sign In
//                     </button>




//                   </>
//                 )}

//                 {/* Step 2: OTP Box */}
//                 {step === 2 && (
//                   <>
//                     <input
//                       type="text"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       placeholder="Enter OTP"
//                       maxLength={6}
//                       className="mobile-input"
//                     />

//                     <button className="login-btn" onClick={handleVerifyOtp}>
//                       Verify OTP
//                     </button>
//                   </>
//                 )}
//               </div>
//             </header>

//             <section className="whatsapp">
//               <img
//                 className="whatsapp"
//                 src={WhatsApp}
//                 alt="WhatsApp"
//                 onClick={() => {
//                   window.open(
//                     "https://wa.me/918970890228?text=Hi",
//                     "_blank"
//                   );
//                 }}
//               />
//             </section>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="footer">
//           <div className="footer-left">
//             <h2 className="footer-logo">Aayur Care</h2>
//             <p>Providing smart and hassle-free medical reimbursement for a healthier you.</p>
//             <p>Copyright © 2025</p>
//             <p>Powered by Aayur Enterprises</p>
//           </div>

//           <div className="footer-right">
//             <div className="footer-section">
      
//               <ul>
//                 <h3>Legal</h3>
//                 <li onClick={() => navigate("/websiteterms")}>Website Terms</li>
//                 <li onClick={() => navigate("/aayurcaretermsandcondition")}>AayurCare Terms</li>
//                 <li onClick={() => navigate("refundandcancellation")}>Refund Policy</li>
//                 <li onClick={() => navigate("disclaimer")}>Disclaimer</li>
//                 <li onClick={() => navigate("PrivacyPolicy")}>Privacy Policy</li>
//               </ul>
//             </div>
//           </div>
//         </footer>
//       </div>
//     );
//   }

//   export default Home;





import "../App.css";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import WhatsApp from "../Images/whatsappcion.png";
import React, { useState, useEffect, useRef } from "react";
import Quess from "../Images/t1.png"
import QuessPortrait from "../Images/signin-portrait.webp";
import { clearSession, hasExpiredSession, isSessionActive, SIGNED_IN_HOME } from "./session";

import { API_BASE } from "../apiBase";
const RESEND_SECONDS = 30;

// Keeps digits only, so a pasted "+91 98765 43210" becomes "9876543210".
function toMobileDigits(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length > 10 ? digits.slice(-10) : digits;
}

const isValidMobile = (digits) => /^[6-9]\d{9}$/.test(digits);

const formatMobile = (digits) => `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;

async function postJson(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

function Home() {
  const navigate = useNavigate();
  const otpRef = useRef(null);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = mobile, 2 = OTP input
  const [applicant_id, setApplicantId] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [resendIn, setResendIn] = useState(0);

  // ---------------- AUTOFILL FROM URL ----------------
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const contact = params.get("contact_number");
    const id = params.get("applicant_id");
    if (contact) setPhone(toMobileDigits(contact));
    if (id) setApplicantId(id);
  }, []);

  // ---------------- LOGIN SESSION CHECK (10 MINUTES) ----------------
  useEffect(() => {
    if (hasExpiredSession()) {
      clearSession();
      setNotice("Your session expired. Sign in again");
      setStep(1);
      return;
    }

    // Already signed in: skip the phone number screen. A Quess link carrying
    // an applicant's details still shows it, so that person can sign in fresh.
    const params = new URLSearchParams(window.location.search);
    const hasQuessLink = params.has("contact_number") || params.has("applicant_id");
    if (isSessionActive() && !hasQuessLink) {
      navigate(SIGNED_IN_HOME, { replace: true });
    }
  }, [navigate]);

  // Count down to when the OTP can be resent.
  useEffect(() => {
    if (resendIn <= 0) return undefined;
    const timer = setTimeout(() => setResendIn((seconds) => seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendIn]);

  // Put the cursor in the OTP field as soon as it appears.
  useEffect(() => {
    if (step === 2) otpRef.current?.focus();
  }, [step]);

  // ---------------- SEND OTP ----------------
  const sendOtp = async () => {
    if (!isValidMobile(phone)) {
      setError("Enter a valid 10-digit mobile number");
      return false;
    }

    setError("");
    setNotice("");
    setBusy(true);
    try {
      const { ok, data } = await postJson("/otp/send", { phone });
      if (!ok) {
        setError(data.message || "Couldn't send the OTP. Try again in a minute");
        return false;
      }
      setResendIn(RESEND_SECONDS);
      return true;
    } catch {
      setError("Couldn't reach the server. Check your connection and try again");
      return false;
    } finally {
      setBusy(false);
    }
  };

  const handleSendOtp = async (event) => {
    event.preventDefault();
    if (await sendOtp()) {
      setOtp("");
      setStep(2);
    }
  };

  const handleResend = async () => {
    setOtp("");
    await sendOtp();
    otpRef.current?.focus();
  };

  const changeNumber = () => {
    setStep(1);
    setOtp("");
    setError("");
  };

  // ---------------- VERIFY OTP ----------------
  const verifyOtp = async (code) => {
    if (!/^\d{6}$/.test(code)) {
      setError("Enter the 6-digit OTP");
      return;
    }

    setError("");
    setBusy(true);
    try {
      const { ok, data } = await postJson("/otp/verify", {
        phone,
        otp: code,
        applicant_id: applicant_id || undefined,
      });

      if (!ok || !data.success) {
        setError(data.message || "Couldn't verify the OTP. Try again");
        setOtp("");
        otpRef.current?.focus();
        return;
      }

      // SAVE LOGIN SESSION (10 MIN COUNT STARTS HERE)
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("phone", phone);
      localStorage.setItem("loginTime", String(Date.now()));
      // Employee details come back only for Quess links whose number matches.
      if (data.applicant) {
        localStorage.setItem("applicant", JSON.stringify(data.applicant));
      } else {
        localStorage.removeItem("applicant");
      }

      navigate(SIGNED_IN_HOME);
    } catch {
      setError("Couldn't reach the server. Check your connection and try again");
    } finally {
      setBusy(false);
    }
  };

  // Digits only; verifies automatically once all 6 are in (typed, pasted or
  // filled in from the SMS by the phone).
  const handleOtpChange = (event) => {
    const code = event.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(code);
    setError("");
    if (code.length === 6 && !busy) verifyOtp(code);
  };

  return (
    <div className="App">
      <main className="si-page">
        {/* Wide banner above the form on phones; tall artwork beside it on
            desktop. Each screen downloads only the image it shows. */}
        <picture className="si-art">
          <source media="(min-width: 960px)" srcSet={QuessPortrait} />
          <img
            className="si-banner"
            src={Quess}
            alt="Aayur Care and Quess: doctor consultations, lab tests, blood tests, scans and X-rays"
          />
        </picture>

        <section className="si-card" aria-labelledby="si-title">
          {step === 1 ? (
            <form onSubmit={handleSendOtp} noValidate>
              <h1 id="si-title" className="si-title">Sign in</h1>
              <p className="si-lede">Exclusive OPD reimbursement for Quess employees</p>

              {notice && (
                <p className="si-notice" role="status">
                  {notice}
                </p>
              )}

              <label htmlFor="si-phone" className="si-label">
                Mobile number
              </label>
              <div className={`si-phone${error ? " is-invalid" : ""}`}>
                <span className="si-prefix" aria-hidden="true">+91</span>
                <input
                  id="si-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(event) => {
                    setPhone(toMobileDigits(event.target.value));
                    setError("");
                  }}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "si-error" : "si-phone-hint"}
                />
              </div>
              {error ? (
                <p id="si-error" className="si-error" role="alert">{error}</p>
              ) : (
                <p id="si-phone-hint" className="si-hint">We'll send a 6-digit OTP to this number</p>
              )}

              <button type="submit" className="si-btn" disabled={busy}>
                {busy ? "Sending OTP…" : "Send OTP"}
              </button>

              <p className="si-legal">
                By continuing, you agree to the <Link to="/aayurcaretermsandcondition">AayurCare Terms</Link> and{" "}
                <Link to="/PrivacyPolicy">Privacy Policy</Link>
              </p>
            </form>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                verifyOtp(otp);
              }}
              noValidate
            >
              <h1 id="si-title" className="si-title">Enter OTP</h1>
              <p className="si-lede">
                Sent to <span className="si-number">{formatMobile(phone)}</span>{" "}
                <button type="button" className="si-link" onClick={changeNumber}>
                  Change
                </button>
              </p>

              <label htmlFor="si-otp" className="si-label">
                6-digit OTP
              </label>
              <input
                id="si-otp"
                ref={otpRef}
                className={`si-otp${error ? " is-invalid" : ""}`}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={otp}
                onChange={handleOtpChange}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "si-error" : undefined}
              />
              {error && (
                <p id="si-error" className="si-error" role="alert">{error}</p>
              )}

              <button type="submit" className="si-btn" disabled={busy}>
                {busy ? "Verifying…" : "Verify and sign in"}
              </button>

              <p className="si-resend">
                {resendIn > 0 ? (
                  <>Didn't get it? Resend OTP in 0:{String(resendIn).padStart(2, "0")}</>
                ) : (
                  <>
                    Didn't get it?{" "}
                    <button type="button" className="si-link" onClick={handleResend} disabled={busy}>
                      Resend OTP
                    </button>
                  </>
                )}
              </p>
            </form>
          )}
        </section>
      </main>

      <a
        href="https://wa.me/918970890228?text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aayur Care on WhatsApp"
      >
        <img className="whatsapp" src={WhatsApp} alt="" />
      </a>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <h2 className="footer-logo">Aayur Care</h2>
          <p>Providing smart and hassle-free medical reimbursement for a healthier you.</p>
          <p>Copyright © 2025</p>
          <p>Powered by Aayur Enterprises</p>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <ul>
              <h3>Legal</h3>
              <li onClick={() => navigate("/websiteterms")}>Website Terms</li>
              <li onClick={() => navigate("/aayurcaretermsandcondition")}>AayurCare Terms</li>
              <li onClick={() => navigate("refundandcancellation")}>Refund Policy</li>
              <li onClick={() => navigate("disclaimer")}>Disclaimer</li>
              <li onClick={() => navigate("PrivacyPolicy")}>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
