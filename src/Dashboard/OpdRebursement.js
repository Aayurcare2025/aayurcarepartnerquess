// // import React from "react"
// // // import navigate from "react-router-dom" 
// // import { useNavigate } from "react-router-dom";

// // function OpdRebursement()
// // {
// //      const navigate = useNavigate();
// //     return (
// //    <div className="right-section">

// //           <h2>OPD Reimbursement Plans</h2>
// //           <div className="plan-card basic">
// //             <h3>Basic Plan</h3>
// //             <p>₹200 /- month</p>
// //             <p>Total coverage upto ₹2000 /-</p>
// //             <button className="b1"onClick={() => navigate("/Basicplan")}>Select Plan</button>
// //           </div>


// //           <div className="plan-card premium">
// //             <h3>Premium Plan</h3>
// //             <p>₹400 /- month</p>
// //             <p>Total coverage upto ₹4100/-</p>
// //             <button className="b1" onClick={()=>navigate("/PremiumPlan")}>Select Plan</button>
// //           </div>


          
// //         </div>



     

// //     )

// // }
// // export default OpdRebursement



// import React from "react";
// import { useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import "../App.css"; // make sure this CSS file is imported

// function OpdRebursement() {
//   const navigate = useNavigate();
// useEffect(() => {
//   const loggedIn = localStorage.getItem("loggedIn");
//   const loginTime = localStorage.getItem("loginTime");

//   // if no login found → redirect to login page
//   if (!loggedIn || !loginTime) {
//     //remove applicant data 
//     navigate("/");
//     return;
//   }

//   const now = Date.now();
//   const diff = now - Number(loginTime);

//   // 30 minutes expiry = 30 * 60 * 1000 = 1800000 ms
//   const expiryTime = 30 * 60 * 1000;

//   if (diff > expiryTime) {
//     // login expired → clear storage
//     localStorage.removeItem("loggedIn");
//     localStorage.removeItem("loginTime");
//     localStorage.removeItem("phone");

//     navigate("/"); // go back to login:
//   }
// }, []);

//   return (
//     <div className="right-section">
//       <h2>OPD Reimbursement Plans</h2>


//       {/* Flex container for side-by-side cards */}
//       <div className="plan-container">
//         <div className="plan-card basic">
//           <h3>Basic Plan</h3>
//           <p>₹200 /- month</p>
//           <p>Total coverage upto ₹2000 /-</p>
//           <button className="b1" onClick={() => navigate("/Basicplan")}>
//             Select Plan
//           </button>
//         </div>

//         <div className="plan-card premium">
//           <h3>Premium Plan</h3>
//           <p>₹400 /- month</p>
//           <p>Total coverage upto ₹4100 /-</p>
//           <button className="b1" onClick={() => navigate("/PremiumPlan")}>
//             Select Plan
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OpdRebursement;


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function OpdRebursement() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const loginTime = localStorage.getItem("loginTime");

    // If no login found → redirect to login page
    if (!loggedIn || !loginTime) {
      navigate("/");
      return;
    }

    const now = Date.now();
    const diff = now - Number(loginTime);

    // 30 minutes expiry = 1800000 ms
    const expiryTime = 30 * 60 * 1000;

    if (diff > expiryTime) {
      // login expired → clear storage
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("loginTime");
      localStorage.removeItem("phone");

      navigate("/"); // go back to login
    }
  }, [navigate]);  // ✅ FIXED: Added navigate dependency

  return (
    <div className="right-section">
      <h2>OPD Reimbursement Plans</h2>

      <div className="plan-container">
        <div className="plan-card basic">
          <h3>Basic Plan</h3>
          <p>₹200 /- month</p>
          <p>Total coverage upto ₹2000 /-</p>
          <button className="b1" onClick={() => navigate("/Basicplan")}>
            Select Plan
          </button>
        </div>

        <div className="plan-card premium">
          <h3>Premium Plan</h3>
          <p>₹400 /- month</p>
          <p>Total coverage upto ₹4100 /-</p>
          <button className="b1" onClick={() => navigate("/PremiumPlan")}>
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpdRebursement;
