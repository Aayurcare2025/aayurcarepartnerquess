//   import React, { useState } from 'react';
// //https://claude.ai/chat/c4ab5303-6566-4c41-80d5-0ff9fff77910
//   function Login() {
//     const [email, setEmail] = useState('');
//     const [otp, setOtp] = useState('');
//     const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//     const handleSendOtp = async (e) => {
//       e.preventDefault();
//         setLoading(true);
//       const res = await fetch('https://api.partner-quess.aayurcare.com/user/send-otp', {
//         //  const res = await fetch('http://localhost:7000/user/send-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });
//       const data = await res.json();
//       console.log("data",data);
//       setLoading(false);
//       if (res.ok) {
//         alert('OTP sent to your email!');
//         setStep(2);
//       } else {
//         alert(data.message || 'Error sending OTP');
//       }
//     };

//     const handleVerifyOtp = async (e) => {
//       e.preventDefault();
//       //https://api.partner-quess.aayurcare.com
//       const res = await fetch('https://api.partner-quess.aayurcare.com/user/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, otp }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem('token', data.access_token);
//         localStorage.setItem('userEmail', data.user.email);
//         alert('Login successful!');
//         window.location.href = '/OpdRebursement';
//       } else {
//         alert(data.message || 'Invalid OTP');
//       }
//     };

//     return (
//       <section className="signin">
//         <h1>Login via Email OTP</h1>
//         {step === 1 ? (
//           <form onSubmit={handleSendOtp}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <br />
//             {/* <button type="submit">Send OTP</button> */}
//             <button type="submit" disabled={loading}>
//     {loading ? "Sending OTP..." : "Send OTP"}
//   </button>
//           </form>
//         ) : (
//           <form onSubmit={handleVerifyOtp}>
//             <p>OTP sent to {email}</p>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               required
//             />
//             <br />
//             <button type="submit">Verify & Login</button>
//           </form>
//         )}
//       </section>
//     );
//   }

//   export default Login;


// import React, { useState, useEffect } from 'react';

// function Login() {
//   const [phone, setPhone] = useState('');
//   const [otp, setOtp] = useState('');
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [applicantId, setApplicantId] = useState('');
//   const [firstName, setFirstName] = useState('');

//   // Capture URL parameters on page load
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);

//     const applicant = urlParams.get('applicant_id');
//     const phoneParam = urlParams.get('phone');
//     const name = urlParams.get('first_name');

//     // UTM parameters for tracking
//     const utmSource = urlParams.get('utm_source');
//     const utmMedium = urlParams.get('utm_medium');
//     const utmCampaign = urlParams.get('utm_campaign');

//     if (applicant) setApplicantId(applicant);
//     if (phoneParam) setPhone(phoneParam);
//     if (name) setFirstName(name);

//     // Store UTM data for analytics
//     if (utmSource || utmMedium || utmCampaign) {
//       const utmData = { utmSource, utmMedium, utmCampaign };
//       console.log('UTM Tracking:', utmData);
//       sessionStorage.setItem('utmData', JSON.stringify(utmData));
//     }
//   }, []);

//   const handleSendOtp = async (e) => {
//     if (e && e.preventDefault) e.preventDefault();

//     if (phone.length !== 10) {
//       alert('Please enter a valid 10-digit phone number');
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch('http://localhost:7000/user/send', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           phone: phone,
//           applicant_id: applicantId,
//         }),
//       });

//       const data = await res.json();
//       console.log("Response:", data);

//       setLoading(false);

//       if (res.ok) {
//         alert(`OTP sent to ${phone}!`);
//         setStep(2);
//       } else {
//         alert(data.message || 'Error sending OTP');
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error('Error:', error);
//       alert('Failed to send OTP. Please try again.');
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();

//     if (otp.length !== 6) {
//       alert('Please enter a valid 6-digit OTP');
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch('http://localhost:7000/user/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           phone: phone,
//           otp: otp,
//           applicant_id: applicantId,
//         }),
//       });

//       const data = await res.json();
//       setLoading(false);

//       if (res.ok) {
//         localStorage.setItem('token', data.access_token);
//         localStorage.setItem('userPhone', phone);
//         localStorage.setItem('applicantId', applicantId);
//         localStorage.setItem('userName', firstName);

//         alert('Login successful!');
//         window.location.href = '/OpdRebursement';
//       } else {
//         alert(data.message || 'Invalid OTP');
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error('Error:', error);
//       alert('Failed to verify OTP. Please try again.');
//     }
//   };

//   return (
//     <section className="signin">
//       <h1>Login via Phone OTP</h1>

//       {firstName && (
//         <div
//           style={{
//             background: '#e3f2fd',
//             padding: '10px',
//             borderRadius: '5px',
//             marginBottom: '20px',
//           }}
//         >
//           <p>Welcome, <strong>{firstName}</strong>!</p>
//           {applicantId && <p>ID: {applicantId}</p>}
//         </div>
//       )}

//       {step === 1 ? (
//         <div onSubmit={handleSendOtp}>
//           <input
//             type="tel"
//             placeholder="Enter 10-digit mobile number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
//             maxLength="10"
//             required
//             readOnly={!!new URLSearchParams(window.location.search).get('phone')}
//           />
//           <br />
//           <button
//             type="button"
//             onClick={handleSendOtp}
//             disabled={loading || phone.length !== 10}
//           >
//             {loading ? "Sending OTP..." : "Send OTP"}
//           </button>
//           <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
//             Enter your registered mobile number
//           </p>
//         </div>
//       ) : (
//         <div>
//           <p>OTP sent to <strong>{phone}</strong></p>
//           <input
//             type="text"
//             placeholder="Enter 6-digit OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
//             maxLength="6"
//             style={{ textAlign: 'center', fontSize: '20px', letterSpacing: '5px' }}
//             required
//           />
//           <br />
//           <button
//             type="button"
//             onClick={handleVerifyOtp}
//             disabled={loading || otp.length !== 6}
//           >
//             {loading ? 'Verifying...' : 'Verify & Login'}
//           </button>

//           <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
//             <button
//               type="button"
//               onClick={() => setStep(1)}
//               style={{ background: 'transparent', color: '#1976d2', textDecoration: 'underline' }}
//             >
//               Change Number
//             </button>

//             <button
//               type="button"
//               onClick={handleSendOtp}
//               disabled={loading}
//               style={{ background: 'transparent', color: '#1976d2', textDecoration: 'underline' }}
//             >
//               Resend OTP
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Login;









import React, { useState } from "react";
import "../App.css";

function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit number");
      return;
    }
    setLoading(true);
    const res = await fetch("http://localhost:7000/otp/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ phone }),
      // body: JSON.stringify({ phone: `+91${phone}` })
     body: JSON.stringify({ phone: `+91${phone}` })



    });
    setLoading(false);
    const data = await res.json();
    if (res.ok) {
      alert("OTP sent successfully!");
      setStep(2);
    } else {
      alert(data.message || "Error sending OTP");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Enter valid OTP");
      return;
    }
    setLoading(true);
    const res = await fetch("http://localhost:7000/otp/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ phone, otp }),
      body: JSON.stringify({ phone: `+91${phone}`, code: otp })

    });
    setLoading(false);
    const data = await res.json();
    if (res.ok) {
      alert("Login successful!");
      window.location.href = "/OpdRebursement";
    } else {
      alert(data.message || "Invalid OTP");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login via Phone OTP</h1>

        {step === 1 ? (
          <form onSubmit={handleSendOtp}>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp}>
            <p>OTP sent to +91 {phone}</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Verifying..." : "Verify & Login"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
