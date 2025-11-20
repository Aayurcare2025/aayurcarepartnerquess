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


import "../App.css";
import { useNavigate } from "react-router-dom";
import Quess from "../Images/q1.png";
import WhatsApp from "../Images/whatsappcion.png";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = mobile, 2 = OTP input

  // ---------------- AUTOFILL FROM URL ----------------
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const contact = params.get("contact_number");

    console.log("Detected contact number:", contact);

    if (contact) {
      setPhone(contact);
    }
  }, []);

  // ---------------- SEND OTP ----------------
  const handleSendOtp = async () => {
    if (!phone) {
      alert("Mobile number missing");
      return;
    }

    try {
      const res = await axios.post("https://api.partner-quess.aayurcare.com/otp/send", {
        phone,
      });

      console.log("OTP Sent:", res.data);
      setStep(2); // Show OTP input
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP");
    }
  };

  // ---------------- VERIFY OTP ----------------
  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post("https://api.partner-quess.aayurcare.com/otp/verify", {
        phone,
        otp,
      });

      console.log("OTP Verified:", res.data);
      alert("Login Successful");

      navigate("/OpdRebursement");
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="App">
      <div className="main-content">
        <div className="left-section">
          <header className="header-section">
            <img className="quess" src={Quess} alt="" />

            <h1>Welcome to Your Health Hub</h1>
            <p className="subtitle">Exclusive OPD reimbursement for Quess employees</p>

            <div className="login-box">

              {/* Step 1: Mobile Number */}
              {step === 1 && (
                <>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile Number"
                    className="mobile-input"
                  />

                  <button className="login-btn" onClick={handleSendOtp}>
                    Sign In
                  </button>
                </>
              )}

              {/* Step 2: OTP Box */}
              {step === 2 && (
                <>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    maxLength={6}
                    className="mobile-input"
                  />

                  <button className="login-btn" onClick={handleVerifyOtp}>
                    Verify OTP
                  </button>
                </>
              )}
            </div>
          </header>

          <section className="whatsapp">
            <img
              className="whatsapp"
              src={WhatsApp}
              alt="WhatsApp"
              onClick={() => {
                window.open(
                  "https://wa.me/918970890228?text=Send%20Hi%20to%20this%20number",
                  "_blank"
                );
              }}
            />
          </section>
        </div>
      </div>

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
            <h3>Legal</h3>
            <ul>
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