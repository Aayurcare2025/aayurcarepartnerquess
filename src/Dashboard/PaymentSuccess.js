// import React from "react";
// // import { useNavigate } from "react-router-dom";
// import "../App.css";

// function PaymentSuccess() {
//   const navigate = useNavigate();
  
//     useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/claims");  
//     }, 5000); // 5 seconds

//     return () => clearTimeout(timer); // cleanup
//   }, [navigate]);

//   return (
//     <div className="payment-result success">
//       <h1>🎉 Payment Successful!</h1>
//       <p>Thank you, Your payment has been processed successfully.</p>
//       <p>You will be redirected to Claims page in 5 seconds....</p>

    
  
//     </div>
//   );
// }

// export default PaymentSuccess;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { trackPurchase } from "../analytics";
import { PENDING_PURCHASE_KEY } from "./payuCheckout";

// The backend only sends people here after PayU confirms the payment, so report
// the purchase started at checkout. Once only, and not if it's hours old.
function reportPurchaseOnce() {
  try {
    const pending = JSON.parse(localStorage.getItem(PENDING_PURCHASE_KEY) || "null");
    localStorage.removeItem(PENDING_PURCHASE_KEY);
    if (pending && Date.now() - pending.startedAt < 2 * 60 * 60 * 1000) {
      trackPurchase(pending);
    }
  } catch {
    // Analytics only.
  }
}

function PaymentSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    reportPurchaseOnce();
  }, []);

  useEffect(() => {
    // countdown interval
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate("/Claims");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="payment-result success">
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you, your payment has been processed successfully.</p>
      <p>
        You will be redirected to Claims page in <b>{countdown}</b> seconds...
      </p>
    </div>
  );
}

export default PaymentSuccess;

