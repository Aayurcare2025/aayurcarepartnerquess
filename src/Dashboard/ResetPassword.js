import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function ResetPassword() {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");
  const id = query.get("id");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://api.partner-quess.aayurcare.com/user/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          token,
          newPassword,
          confirmPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Password reset successfully!");
        setTimeout(() => navigate("/signin"), 2000); // redirect after success
      } else {
        setMessage(data.message || "Failed to reset password.");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // If no token/id in URL
  useEffect(() => {
    if (!token || !id) {
      setMessage("Invalid or expired password reset link.");
    }
  }, [token, id]);

  return (
    <div className="reset-container">
      <h2>Reset Password</h2>
      {message && <p>{message}</p>}

      {token && id && (
        <form onSubmit={handleReset}>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
