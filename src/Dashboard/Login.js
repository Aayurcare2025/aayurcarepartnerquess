import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
 const [loading, setLoading] = useState(false);
  const handleSendOtp = async (e) => {
    e.preventDefault();
      setLoading(true);
    const res = await fetch('https://api.partner-quess.aayurcare.com/user/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      alert('OTP sent to your email!');
      setStep(2);
    } else {
      alert(data.message || 'Error sending OTP');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    //https://api.partner-quess.aayurcare.com
    const res = await fetch('https://api.partner-quess.aayurcare.com/user/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('userEmail', data.user.email);
      alert('Login successful!');
      window.location.href = '/dashboard';
    } else {
      alert(data.message || 'Invalid OTP');
    }
  };

  return (
    <section className="signin">
      <h1>Login via Email OTP</h1>
      {step === 1 ? (
        <form onSubmit={handleSendOtp}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          {/* <button type="submit">Send OTP</button> */}
          <button type="submit" disabled={loading}>
  {loading ? "Sending OTP..." : "Send OTP"}
</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <p>OTP sent to {email}</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <br />
          <button type="submit">Verify & Login</button>
        </form>
      )}
    </section>
  );
}

export default Login;
