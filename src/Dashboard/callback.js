// CallbackForm.js
import React, { useState } from "react";
import "./CallbackForm.css";

function CallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can integrate an API call here (like sending data via email or backend)
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="callback-form-container">
      <h2>Request a Callback</h2>

      {submitted ? (
        <p className="success-message">
          ✅ Thank you! Our team will contact you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Contact Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your contact number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default CallbackForm;
