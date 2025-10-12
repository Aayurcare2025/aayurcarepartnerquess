import React, { useState } from "react";
import "./App.css";

function Claims() {
  const [step, setStep] = useState(1);
// bcjbe
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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

      {/* Step 1 */}
      {step === 1 && (
        <div className="form-container">
          <label>Name</label>
          <input type="text" placeholder="Enter full name" />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter phone number" />

          <label>Email ID</label>
          <input type="email" placeholder="Enter email address" />

          <label>KYC Document</label>
          <select>
            <option value="">Select document</option>
            <option value="aadhar">Aadhar</option>
            <option value="pan">PAN Card</option>
            <option value="passport">Passport</option>
          </select>

          <button className="submit-btn" onClick={nextStep}>Next</button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="form-container">
          <label>Consultation Type</label>
          <div className="checkbox-group">
            <label><input type="checkbox" /> Consultation</label>
            <label><input type="checkbox" /> Prescription</label>
            <label><input type="checkbox" /> Radiology</label>
            <label><input type="checkbox" /> Pathology</label>
          </div>

          <label>Upload Documents</label>
          <input type="file" multiple />

          <div className="btn-group">
            <button className="back-btn" onClick={prevStep}>Back</button>
            <button className="submit-btn" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="form-container">
          <label>Bank Account Number</label>
          <input type="text" placeholder="Enter account number" />


          <label>Renter Bank Account Number</label>
          <input type="text" placeholder="Renter bank  account number" />



          <label>IFSC Code</label>
          <input type="text" placeholder="Enter IFSC code" />

          <label>Bank Name</label>
          <input type="text" placeholder="Enter bank name" />

          <label>Branch Name</label>
          <input type="text" placeholder="Enter branch name" />
          <div className="btn-group">
            <button className="back-btn" onClick={prevStep}>Back</button>
            <button className="submit-btn">Submit Claim</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Claims;
