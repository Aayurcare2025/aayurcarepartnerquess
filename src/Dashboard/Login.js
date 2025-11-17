import React, { useState } from "react";
import "../App.css";

function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // ---------------- SEND OTP ----------------
  const handleSendOtp = async (e) => {
    e.preventDefault();

    console.log("📩 SEND OTP CLICKED");
    console.log("Phone entered:", phone);

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit number");
      return;
    }

    const reqBody = { phone: `+91${phone}` };
    console.log("📤 Sending Body:", reqBody);

    setLoading(true);

    const res = await fetch("http://localhost:7000/otp/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });

    console.log("📥 Response Status:", res.status);

    const data = await res.json();
    console.log("📥 Response Data:", data);

    setLoading(false);

    if (res.ok) {
      alert("OTP sent successfully!");
      setStep(2);
    } else {
      alert(data.message || "Error sending OTP");
    }
  };

  // ---------------- VERIFY OTP ----------------
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    console.log("🔐 VERIFY OTP CLICKED");

    if (otp.length !== 6) {
      alert("Enter valid OTP");
      return;
    }

    const reqBody = { phone: `+91${phone}`, otp: otp };
    console.log("📤 Sending Verify Body:", reqBody);

    setLoading(true);
//https://api.partner-quess.aayurcare.com
    const res = await fetch("http://localhost:7000/otp/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });

    console.log("📥 Verify Status:", res.status);

    const data = await res.json();
    console.log("📥 Verify Response:", data);

    setLoading(false);

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
        <h1>Login</h1>

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
