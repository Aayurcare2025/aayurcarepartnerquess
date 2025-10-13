import React from "react";
function Disclaimer({ goBack }) {
  return (
   <div className="disclaimer">


      {/* <button onClick={goBack} className="back-btn">
        ← Go Back
      </button> */}

    <h1>Disclaimer</h1>
    <p> OPD Plans: Aayur Care’s OPD reimbursement plans stand apart from any of the insurance policy. Coverage, claims, and
 reimbursements under OPD plans are managed solely by Aayur Care and are not linked to any insurer.
 IPD & Insurance Plans: Information related to health, mediclaim, and accident insurance is obtained from the respective
 insurers. Aayur Care facilitates access and reimbursement but does not modify, alter, or guarantee any terms set by the
 insurer. All claims and reimbursements are governed solely by the policy documents issued by the insurers, in accordance
 with the regulations of the Insurance Regulatory and Development Authority of India (IRDAI)</p>
    </div>
  );
}

export default Disclaimer;
