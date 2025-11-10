import React from "react";
// import { useNavigate } from "react-router-dom";
import "../App.css";

function PaymentFailure() {
  // const navigate = useNavigate();

  return (
    <div className="payment-result failure">
      <h1>❌ Payment Failed</h1>
      <p>Unfortunately, your payment could not be processed.</p>
      <p>Please try again or contact support if the issue persists.</p>

      {/* <button className="home-btn" onClick={() => navigate("/")}>
        Try Again
      </button> */}
    </div>
  );
}

export default PaymentFailure;
