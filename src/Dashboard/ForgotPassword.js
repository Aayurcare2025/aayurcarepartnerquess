import { useState } from "react";
import "../App.css"

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://4lxmjt45zon6pu5yrlcuouu6.200.234.44.53.sslip.io/user/forgot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailOrUsername: email,
          frontendResetUrl: "https://4lxmjt45zon6pu5yrlcuouu6.200.234.44.53.sslip.io/reset-password"
        }),
      });

      const data = await response.json();
      setMessage(data.message || "If an account exists, a reset link has been sent.");
    } catch (err) {
      setMessage("Failed to send reset link: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgot}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPassword;
