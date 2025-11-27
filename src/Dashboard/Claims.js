// // import React, { useState } from "react";
// // import "./Signup";

// // function Claims() {
// //   const [step, setStep] = useState(1);
// // // bcjbe
// //   const nextStep = () => setStep(step + 1);
// //   const prevStep = () => setStep(step - 1);

// //   return (
// //     <div className="claims-container">
// //       <h2 className="form-title">Claims</h2>
// //       <p className="form-subtitle">Submit your claim in simple steps</p>

// //       <div className="steps">
// //         <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
// //         <span className="arrow">→</span>
// //         <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
// //         <span className="arrow">→</span>
// //         <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
// //       </div>

// //       {/* Step 1 */}
// //       {step === 1 && (
// //         <div className="form-container">
// //           <label>Name</label>
// //           <input type="text" placeholder="Enter full name" />

// //           <label>Phone Number</label>
// //           <input type="tel" placeholder="Enter phone number" />

// //           <label>Email ID</label>
// //           <input type="email" placeholder="Enter email address" />

// //           <label>KYC Document</label>
// //           <select>
// //             <option value="">Select document</option>
// //             <option value="aadhar">Aadhar</option>
// //             <option value="pan">PAN Card</option>
// //             <option value="bank passbook">Bank Passbook</option>
// //             {/* <option value="passport">Passport</option> */}
// //           </select>

// //           <button className="submit-btn" onClick={nextStep}>Next</button>
// //         </div>
// //       )}

// //       {/* Step 2 */}
// //       {step === 2 && (
// //         <div className="form-container">
// //           <label>Consultation Type</label>
// //           <div className="checkbox-group">
// //             <label><input type="checkbox" /> Consultation</label>
// //             <label><input type="checkbox" /> Medicine Prescription</label>
// //             <label><input type="checkbox" /> Radiology</label>
// //             <label><input type="checkbox" /> Pathology</label>
// //             <label><input type="checkbox" /> Ambulance Service</label>
           
// //           </div>

// //           <label>Upload Documents</label>
// //           <input type="file" multiple />

// //           <div className="btn-group">
// //             <button className="back-btn" onClick={prevStep}>Back</button>
// //             <button className="submit-btn" onClick={nextStep}>Next</button>
// //           </div>
// //         </div>



// //       )}

// //       {/* Step 3 */}
// //       {step === 3 && (
// //         <div className="form-container">


// //           <label>Account Holder Name</label>
// //           <input type="text" placeholder="Enter Account Holder Name"></input>

// //           <label>Bank Account  Number</label>
// //           <input type="text" placeholder="Enter account number" />


// //           <label>Re-enter  Bank Account Number</label>
// //           <input type="text" placeholder="Re-enter  bank  account number" />


// //           <label>IFSC Code</label>
// //           <input type="text" placeholder="Enter IFSC code" />

// //           <label>Bank Name</label>
// //           <input type="text" placeholder="Enter bank name" />

// //           <label>Branch Name</label>
// //           <input type="text" placeholder="Enter branch name" />


// //           <label>Branch Address</label>
// //           <input type="text" placeholder="Enter branch address"/>


// //           <div className="btn-group">
// //             <button className="back-btn" onClick={prevStep}>Back</button>
// //             <button className="submit-btn">Submit Claim</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Claims;




// import React, { useState } from "react";
// import '../App.css'

// function Claims() {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [file, setFile] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     phonenumber: "",
//     emailid: "",
//     kycdocument: "",
//     consultationtype: "",
//     accountHolderName: "",
//     bankAccountNumber: "",
//     reEnterAccountNumber: "",
//     IFSCCode: "",
//     BankName: "",
//     BankBranchName: "",
//   });

//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const data = new FormData();

//       // Append all text fields
//       Object.entries(formData).forEach(([key, value]) => {
//         data.append(key, value);
//       });

//       // Append file if available
//       if (file) data.append("file", file);
// //https://partner-quess.aayurcare.com
//       // 🔗 Update your backend URL
  
     
//         //  const res = await fetch("https://api.partner-quess.aayurcare.com/claims/apply", {
//           const res = await fetch("http://localhost:8000/claims/apply", {
//         method: "POST",
//         body: data,
//       });



//       if (!res.ok) throw new Error("Failed to submit claim");

//       const result = await res.json();
//       console.log("✅ Claim submitted:", result);
//       alert("Claim submitted successfully!");

//       // Reset after success
//       setFormData({
//         name: "",
//         phonenumber: "",
//         emailid: "",
//         kycdocument: "",
//         consultationtype: "",
//         accountHolderName: "",
//         bankAccountNumber: "",
//         reEnterAccountNumber: "",
//         IFSCCode: "",
//         BankName: "",
//         BankBranchName: "",
//       });
//       setFile(null);
//       setStep(1);
//     } catch (err) {
//       console.error("❌ Error submitting claim:", err);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

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

//       <form onSubmit={handleSubmit}>
//         {/* STEP 1 */}
//         {step === 1 && (
//           <div className="form-container">
//             <label>Name</label>
          
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter full name"
//               required
//             />

//             <label>Phone Number</label>
//             <input
//               type="tel"
//               name="phonenumber"
//               value={formData.phonenumber}
//               onChange={handleChange}
//               placeholder="Enter phone number"
//               required
//             />

//             <label>Email ID</label>
//             <input
//               type="email"
//               name="emailid"
//               value={formData.emailid}
//               onChange={handleChange}
//               placeholder="Enter email"
//             />

//             <label>Upload Bank Document</label>
//               <input type="file" onChange={handleFileChange} required />
//             {/* <select
//               name="kycdocument"
//               value={formData.kycdocument}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select document</option>
            
//               <option value="Bank Passbook">Bank Passbook</option>
//             </select> */}

//             <button type="button" className="submit-btn" onClick={nextStep}>
//               Next
//             </button>
//           </div>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <div className="form-container">
//             <label>Service Type</label>
//             <select
//               name="consultationtype"
//               value={formData.consultationtype}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select</option>
//               <option value="Consultation">Consultation</option>
//               <option value="Medicine Prescription">Medicine Prescription</option>
//               <option value="Radiology">Radiology</option>
//               <option value="Pathology">Pathology</option>
//               <option value="Ambulance Service">Ambulance Service</option>
//             </select>

//             <label>Upload Documents</label>
//             <input type="file" onChange={handleFileChange} required />

//             <div className="btn-group">
//               <button type="button" className="back-btn" onClick={prevStep}>
//                 Back
//               </button>
//               <button type="button" className="submit-btn" onClick={nextStep}>
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {/* STEP 3 */}
//         {step === 3 && (
//           <div className="form-container">
//             <label>Account Holder Name</label>
//             <input
//               type="text"
//               name="accountHolderName"
//               value={formData.accountHolderName}
//               onChange={handleChange}
//               required
//             />

//             <label>Bank Account Number</label>
//             <input
//               type="text"
//               name="bankAccountNumber"
//               value={formData.bankAccountNumber}
//               onChange={handleChange}
//               required
//             />

//             <label>Re-enter Bank Account Number</label>
//             <input
//               type="text"
//               name="reEnterAccountNumber"
//               value={formData.reEnterAccountNumber}
//               onChange={handleChange}
//               required
//             />

//             <label>IFSC Code</label>
//             <input
//               type="text"
//               name="IFSCCode"
//               value={formData.IFSCCode}
//               onChange={handleChange}
//               required
//             />

//             <label>Bank Name</label>
//             <input
//               type="text"
//               name="BankName"
//               value={formData.BankName}
//               onChange={handleChange}
//               required
//             />

//             <label>Branch Name</label>
//             <input
//               type="text"
//               name="BankBranchName"
//               value={formData.BankBranchName}
//               onChange={handleChange}
//               required
//             />

//             <div className="btn-group">
//               <button type="button" className="back-btn" onClick={prevStep}>
//                 Back
//               </button>
//               <button type="submit" className="submit-btn" disabled={loading}>
//                 {loading ? "Submitting..." : "Submit Claim"}
//               </button>
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }

// export default Claims;


import React, { useState } from "react";

function Claims() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    emailid: "",
    bankDocument: null,
    accountHolderName: "",
    bankAccountNumber: "",
    reEnterAccountNumber: "",
    IFSCCode: "",
    BankName: "",
    BankBranchName: "",
  });

  const nextStep = () => {
    if (step === 2 && services.length === 0) {
      alert("Please add at least one service");
      return;
    }
    setStep((prev) => prev + 1);
  };
  
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBankDocChange = (e) => {
    setFormData((prev) => ({ ...prev, bankDocument: e.target.files[0] }));
  };

  const addService = () => {
    setServices([...services, { type: "", file: null }]);
  };

  const removeService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const updateServiceType = (index, value) => {
    const updated = [...services];
    updated[index].type = value;
    setServices(updated);
  };

  const updateServiceFile = (index, file) => {
    const updated = [...services];
    updated[index].file = file;
    setServices(updated);
  };

  const handleSubmit = async () => {
    // Validation
    if (formData.bankAccountNumber !== formData.reEnterAccountNumber) {
      alert("Account numbers do not match!");
      return;
    }

    const incompleteService = services.find(s => !s.type || !s.file);
    if (incompleteService) {
      alert("Please complete all service details before submitting");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();

      // Append text fields
      data.append("name", formData.name);
      data.append("phonenumber", formData.phonenumber);
      data.append("emailid", formData.emailid);
      data.append("accountHolderName", formData.accountHolderName);
      data.append("bankAccountNumber", formData.bankAccountNumber);
      data.append("IFSCCode", formData.IFSCCode);
      data.append("BankName", formData.BankName);
      data.append("BankBranchName", formData.BankBranchName);

      // Append bank document
      if (formData.bankDocument) {
        data.append("bankDocument", formData.bankDocument);
      }

      // Append services as JSON
      data.append("services", JSON.stringify(services.map(s => ({ type: s.type }))));

      // Append service files
      services.forEach((service, index) => {
        if (service.file) {
          data.append(`serviceFile_${index}`, service.file);
        }
      });

      const res = await fetch("http://localhost:8000/claims/apply", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to submit claim");

      const result = await res.json();
      console.log("✅ Claim submitted:", result);
      alert("Claim submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        phonenumber: "",
        emailid: "",
        bankDocument: null,
        accountHolderName: "",
        bankAccountNumber: "",
        reEnterAccountNumber: "",
        IFSCCode: "",
        BankName: "",
        BankBranchName: "",
      });
      setServices([]);
      setStep(1);
    } catch (err) {
      console.error("❌ Error submitting claim:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Claims</h2>
      <p style={styles.subtitle}>Submit your claim in simple steps</p>

      <div style={styles.steps}>
        <div style={{...styles.step, ...(step >= 1 ? styles.stepActive : {})}}>1</div>
        <span style={styles.arrow}>→</span>
        <div style={{...styles.step, ...(step >= 2 ? styles.stepActive : {})}}>2</div>
        <span style={styles.arrow}>→</span>
        <div style={{...styles.step, ...(step >= 3 ? styles.stepActive : {})}}>3</div>
      </div>

      <div>
        {/* STEP 1: Personal Details */}
        {step === 1 && (
          <div style={styles.formContainer}>
            <label style={styles.label}>Name *</label>
            <input
              style={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />

            <label style={styles.label}>Phone Number *</label>
            <input
              style={styles.input}
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Enter 10-digit phone number"
            />

            <label style={styles.label}>Email ID</label>
            <input
              style={styles.input}
              type="email"
              name="emailid"
              value={formData.emailid}
              onChange={handleChange}
              placeholder="Enter email (optional)"
            />

            <label style={styles.label}>Upload Bank Document *</label>
            <input
              style={styles.fileInput}
              type="file"
              onChange={handleBankDocChange}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <small style={styles.hint}>Accepted: PDF, JPG, PNG (Max 5MB)</small>
            {formData.bankDocument && (
              <small style={styles.fileName}>✓ {formData.bankDocument.name}</small>
            )}

            <button type="button" style={styles.nextBtn} onClick={nextStep}>
              Next →
            </button>
          </div>
        )}

        {/* STEP 2: Services */}
        {step === 2 && (
          <div style={styles.formContainer}>
            <h3 style={styles.sectionTitle}>Add Services & Documents</h3>
            
            {services.map((service, index) => (
              <div key={index} style={styles.serviceCard}>
                <div style={styles.serviceHeader}>
                  <span style={styles.serviceNumber}>Service {index + 1}</span>
                  <button
                    type="button"
                    style={styles.removeBtn}
                    onClick={() => removeService(index)}
                  >
                    ✕ Remove
                  </button>
                </div>

                <label style={styles.label}>Service Type *</label>
                <select
                  style={styles.input}
                  value={service.type}
                  onChange={(e) => updateServiceType(index, e.target.value)}
                >
                  <option value="">Select Service</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Medicine Prescription">Medicine Prescription</option>
                  <option value="Radiology">Radiology</option>
                  <option value="Pathology">Pathology</option>
                  <option value="Ambulance Service">Ambulance Service</option>
                </select>
<br></br>
                <label style={styles.label}>Upload Document *</label>
                <input
                  style={styles.fileInput}
                  type="file"
                  onChange={(e) => updateServiceFile(index, e.target.files[0])}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                {service.file && (
                  <small style={styles.fileName}>✓ {service.file.name}</small>
                )}
              </div>
            ))}

            <button type="button" style={styles.addBtn} onClick={addService}>
              + Add Another Service
            </button>

            <div style={styles.btnGroup}>
              <button type="button" style={styles.backBtn} onClick={prevStep}>
                ← Back
              </button>
              <button type="button" style={styles.nextBtn} onClick={nextStep}>
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Bank Details */}
        {step === 3 && (
          <div style={styles.formContainer}>
            <h3 style={styles.sectionTitle}>Bank Account Details</h3>

            <label style={styles.label}>Account Holder Name *</label>
            <input
              style={styles.input}
              type="text"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleChange}
              placeholder="As per bank records"
            />

            <label style={styles.label}>Bank Account Number *</label>
            <input
              style={styles.input}
              type="text"
              name="bankAccountNumber"
              value={formData.bankAccountNumber}
              onChange={handleChange}
              placeholder="Enter account number"
            />

            <label style={styles.label}>Re-enter Bank Account Number *</label>
            <input
              style={styles.input}
              type="text"
              name="reEnterAccountNumber"
              value={formData.reEnterAccountNumber}
              onChange={handleChange}
              placeholder="Confirm account number"
            />

            <label style={styles.label}>IFSC Code *</label>
            <input
              style={styles.input}
              type="text"
              name="IFSCCode"
              value={formData.IFSCCode}
              onChange={handleChange}
              placeholder="e.g., SBIN0001234"
              maxLength="11"
            />

            <label style={styles.label}>Bank Name *</label>
            <input
              style={styles.input}
              type="text"
              name="BankName"
              value={formData.BankName}
              onChange={handleChange}
              placeholder="Enter bank name"
            />

            <label style={styles.label}>Branch Name *</label>
            <input
              style={styles.input}
              type="text"
              name="BankBranchName"
              value={formData.BankBranchName}
              onChange={handleChange}
              placeholder="Enter branch name"
            />

            <div style={styles.btnGroup}>
              <button type="button" style={styles.backBtn} onClick={prevStep}>
                ← Back
              </button>
              <button 
                type="button" 
                style={{...styles.submitBtn, ...(loading ? styles.submitBtnDisabled : {})}} 
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Submitting..." : "✓ Submit Claim"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "30px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
    border: "2px solid #002b80",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    color: "#002b80",
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "32px",
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "16px",
    color: "#555",
  },
  steps: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  },
  step: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: "18px",
    transition: "all 0.3s ease",
  },
  stepActive: {
    background: "#002b80",
    transform: "scale(1.1)",
  },
  arrow: {
    margin: "0 15px",
    fontSize: "20px",
    color: "#999",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  sectionTitle: {
    color: "#002b80",
    fontSize: "20px",
    marginBottom: "10px",
    paddingBottom: "8px",
    borderBottom: "2px solid #e0e0e0",
  },
  label: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
    transition: "border-color 0.3s",
    outline: "none",
  },
  fileInput: {
    padding: "10px",
    border: "2px dashed #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    background: "#fafafa",
  },
  hint: {
    fontSize: "12px",
    color: "#666",
    marginTop: "-10px",
  },
  fileName: {
    fontSize: "13px",
    color: "#28a745",
    fontWeight: "600",
    display: "block",
    marginTop: "5px",
  },
  serviceCard: {
    background: "linear-gradient(135deg, #f8f9ff 0%, #e8eeff 100%)",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #c5d3ff",
    marginBottom: "15px",
    boxShadow: "0 2px 8px rgba(0,43,128,0.08)",
  },
  serviceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  serviceNumber: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#002b80",
  },
  removeBtn: {
    background: "#ff4444",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  addBtn: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
    transition: "all 0.3s ease",
    boxShadow: "0 3px 10px rgba(40,167,69,0.3)",
  },
  btnGroup: {
    display: "flex",
    gap: "15px",
    marginTop: "25px",
  },
  backBtn: {
    flex: 1,
    padding: "12px",
    background: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  nextBtn: {
    flex: 1,
    padding: "12px",
    background: "linear-gradient(135deg, #002b80 0%, #0047cc 100%)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 3px 10px rgba(0,43,128,0.3)",
  },
  submitBtn: {
    flex: 1,
    padding: "12px",
    background: "linear-gradient(135deg, #002b80 0%, #002b80 100%)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 3px 10px rgba(40,167,69,0.3)",
  },
  submitBtnDisabled: {
    background: "#ccc",
    cursor: "not-allowed",
    boxShadow: "none",
  },
};



export default Claims;