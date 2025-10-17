// import React, { useState } from "react";
// import "./Signup";

// function Claims() {
//   const [step, setStep] = useState(1);
// // bcjbe
//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   return (
//     <div className="claims-container">
//       <h2 className="form-title">Claims</h2>
//       <p className="form-subtitle">Submit your claim in simple steps</p>

//       <div className="steps">
//         <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
//         <span className="arrow">→</span>
//         <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
//         <span className="arrow">→</span>
//         <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
//       </div>

//       {/* Step 1 */}
//       {step === 1 && (
//         <div className="form-container">
//           <label>Name</label>
//           <input type="text" placeholder="Enter full name" />

//           <label>Phone Number</label>
//           <input type="tel" placeholder="Enter phone number" />

//           <label>Email ID</label>
//           <input type="email" placeholder="Enter email address" />

//           <label>KYC Document</label>
//           <select>
//             <option value="">Select document</option>
//             <option value="aadhar">Aadhar</option>
//             <option value="pan">PAN Card</option>
//             <option value="bank passbook">Bank Passbook</option>
//             {/* <option value="passport">Passport</option> */}
//           </select>

//           <button className="submit-btn" onClick={nextStep}>Next</button>
//         </div>
//       )}

//       {/* Step 2 */}
//       {step === 2 && (
//         <div className="form-container">
//           <label>Consultation Type</label>
//           <div className="checkbox-group">
//             <label><input type="checkbox" /> Consultation</label>
//             <label><input type="checkbox" /> Medicine Prescription</label>
//             <label><input type="checkbox" /> Radiology</label>
//             <label><input type="checkbox" /> Pathology</label>
//             <label><input type="checkbox" /> Ambulance Service</label>
           
//           </div>

//           <label>Upload Documents</label>
//           <input type="file" multiple />

//           <div className="btn-group">
//             <button className="back-btn" onClick={prevStep}>Back</button>
//             <button className="submit-btn" onClick={nextStep}>Next</button>
//           </div>
//         </div>



//       )}

//       {/* Step 3 */}
//       {step === 3 && (
//         <div className="form-container">


//           <label>Account Holder Name</label>
//           <input type="text" placeholder="Enter Account Holder Name"></input>

//           <label>Bank Account  Number</label>
//           <input type="text" placeholder="Enter account number" />


//           <label>Re-enter  Bank Account Number</label>
//           <input type="text" placeholder="Re-enter  bank  account number" />


//           <label>IFSC Code</label>
//           <input type="text" placeholder="Enter IFSC code" />

//           <label>Bank Name</label>
//           <input type="text" placeholder="Enter bank name" />

//           <label>Branch Name</label>
//           <input type="text" placeholder="Enter branch name" />


//           <label>Branch Address</label>
//           <input type="text" placeholder="Enter branch address"/>


//           <div className="btn-group">
//             <button className="back-btn" onClick={prevStep}>Back</button>
//             <button className="submit-btn">Submit Claim</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Claims;




import React, { useState } from "react";


function Claims() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    emailid: "",
    kycdocument: "",
    consultationtype: "",
    accountHolderName: "",
    bankAccountNumber: "",
    reEnterAccountNumber: "",
    IFSCCode: "",
    BankName: "",
    BankBranchName: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();

      // Append all text fields
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      // Append file if available
      if (file) data.append("file", file);
//https://partner-quess.aayurcare.com
      // 🔗 Update your backend URL
      const res = await fetch("https://api.partner-quess.aayurcare.com/claims/apply", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to submit claim");

      const result = await res.json();
      console.log("✅ Claim submitted:", result);
      alert("Claim submitted successfully!");

      // Reset after success
      setFormData({
        name: "",
        phonenumber: "",
        emailid: "",
        kycdocument: "",
        consultationtype: "",
        accountHolderName: "",
        bankAccountNumber: "",
        reEnterAccountNumber: "",
        IFSCCode: "",
        BankName: "",
        BankBranchName: "",
      });
      setFile(null);
      setStep(1);
    } catch (err) {
      console.error("❌ Error submitting claim:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="claims-container">
      <h2 className="form-title">Claims</h2>
      <p className="form-subtitle">Submit your claim in simple steps</p>

      <div className="steps">
        <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
        <span className="arrow">→</span>
        <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
        <span className="arrow">→</span>
        <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* STEP 1 */}
        {step === 1 && (
          <div className="form-container">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />

            <label>Email ID</label>
            <input
              type="email"
              name="emailid"
              value={formData.emailid}
              onChange={handleChange}
              placeholder="Enter email"
            />

            <label>KYC Document</label>
            <select
              name="kycdocument"
              value={formData.kycdocument}
              onChange={handleChange}
              required
            >
              <option value="">Select document</option>
              <option value="Aadhar">Aadhar</option>
              <option value="PAN">PAN</option>
              <option value="Bank Passbook">Bank Passbook</option>
            </select>

            <button type="button" className="submit-btn" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="form-container">
            <label>Consultation Type</label>
            <select
              name="consultationtype"
              value={formData.consultationtype}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Consultation">Consultation</option>
              <option value="Medicine Prescription">Medicine Prescription</option>
              <option value="Radiology">Radiology</option>
              <option value="Pathology">Pathology</option>
              <option value="Ambulance Service">Ambulance Service</option>
            </select>

            <label>Upload Documents</label>
            <input type="file" onChange={handleFileChange} required />

            <div className="btn-group">
              <button type="button" className="back-btn" onClick={prevStep}>
                Back
              </button>
              <button type="button" className="submit-btn" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="form-container">
            <label>Account Holder Name</label>
            <input
              type="text"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleChange}
              required
            />

            <label>Bank Account Number</label>
            <input
              type="text"
              name="bankAccountNumber"
              value={formData.bankAccountNumber}
              onChange={handleChange}
              required
            />

            <label>Re-enter Bank Account Number</label>
            <input
              type="text"
              name="reEnterAccountNumber"
              value={formData.reEnterAccountNumber}
              onChange={handleChange}
              required
            />

            <label>IFSC Code</label>
            <input
              type="text"
              name="IFSCCode"
              value={formData.IFSCCode}
              onChange={handleChange}
              required
            />

            <label>Bank Name</label>
            <input
              type="text"
              name="BankName"
              value={formData.BankName}
              onChange={handleChange}
              required
            />

            <label>Branch Name</label>
            <input
              type="text"
              name="BankBranchName"
              value={formData.BankBranchName}
              onChange={handleChange}
              required
            />

            <div className="btn-group">
              <button type="button" className="back-btn" onClick={prevStep}>
                Back
              </button>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit Claim"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Claims;
