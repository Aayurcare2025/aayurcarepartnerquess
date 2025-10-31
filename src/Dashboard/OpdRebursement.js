import React from "react"
// import navigate from "react-router-dom" 
import { useNavigate } from "react-router-dom";

function OpdRebursement()
{
     const navigate = useNavigate();
    return (
   <div className="right-section">

          <h2>OPD Reimbursement Plans</h2>
          <div className="plan-card basic">
            <h3>Basic Plan</h3>
            <p>₹200 /- month</p>
            <p>Total coverage upto ₹2000 /-</p>
            <button className="b1"onClick={() => navigate("/Basicplan")}>Select Plan</button>
          </div>


          <div className="plan-card premium">
            <h3>Premium Plan</h3>
            <p>₹400 /- month</p>
            <p>Total coverage upto ₹4100/-</p>
            <button className="b1" onClick={()=>navigate("/PremiumPlan")}>Select Plan</button>
          </div>


          
        </div>



     

    )

}
export default OpdRebursement