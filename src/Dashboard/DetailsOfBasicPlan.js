
import React, { useState } from "react";
import '../App.css'

function DetailsOfBasicPlan() {
  const [step, setStep] = useState(1);
  // const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    emailid: "",
    kycdocument: "",
    
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
   
    }
  
  return (
    <div className="claims-container">
      <h2 className="form-title">Basic Plan</h2>
      <p className="form-subtitle">Submit your Plans in simple steps</p>

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
       
        

          
      </form>
    </div>
  );
}

export default DetailsOfBasicPlan;
