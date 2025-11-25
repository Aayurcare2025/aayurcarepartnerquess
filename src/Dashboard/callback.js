// import React, { useState } from "react";
// import "../App.css"

// function CallbackForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     problemdescription: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("https://api.partner-quess.aayurcare.com/user/callback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to send callback request");
//       }

//       setSubmitted(true);
//       setFormData({ name: "", email: "", phone: "", problemdescription: "" });
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="callback-form-container">
//       <h2>Request a Callback</h2>

//       {submitted ? (
//         <p className="success-message">
//           Thank you! Our team will contact you soon.
//         </p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <label>Contact Number</label>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Enter your contact number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />

//           <label>Problem Description</label>
//           <input
//             type="text"
//             name="problemdescription"
//             placeholder="Enter your problem"
//             value={formData.problemdescription}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" className="submit-btn" disabled={loading}>
//             {loading ? "Sending..." : "Submit"}
//           </button>

//           {error && <p className="error-message">{error}</p>}
//         </form>
//       )}
//     </div>
//   );
// }

// export default CallbackForm;






import React, { useState } from "react";
import "../App.css";

function CallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    problemdescription: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // const response = await fetch("https://api.partner-quess.aayurcare.com/otp/callback", {
        const response = await fetch("https://api.partner-quess.aayurcare.com/otp/callback/otp/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send callback request");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", problemdescription: "" });
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="callback-form-container">
      <h2>Request a Callback</h2>
    
      <p className="contact-info">
        For any immediate assistance, call us at <strong>+91 8970890228</strong>
      </p>

      {submitted ? (
        <p className="success-message">
          Thank you! Our team will contact you soon.
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

          <label>Problem Description</label>
          <input
            type="text"
            name="problemdescription"
            placeholder="Enter your problem"
            value={formData.problemdescription}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default CallbackForm;
