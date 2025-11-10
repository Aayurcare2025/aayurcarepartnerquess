import React from "react";
// import { useNavigate } from "react-router-dom";
import "../App.css";

function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="payment-result success">
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you, Your payment has been processed successfully.</p>

    
      {/* <button className="home-btn" onClick={() => navigate("/")}>
        Go Back to Home
      </button> */}
    </div>
  );
}

export default PaymentSuccess;
