

import React from "react";
import { useNavigate } from "react-router-dom";
// import Aayurcareicon from "../Images/aayuricon.jpg";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        {/* <img src={Aayurcareicon} alt="logo" /> */}
        {/* <span className="brand-name">AayurCare</span> */}
      </div>

      
      <div className="auth-links">
        <li onClick={()=>navigate("/")}>Home</li>
         <li onClick={() => navigate("/claims")}>Claims</li>
         <li 
  onClick={() => window.location.href = "https://link.mypillo.in/kckszz"} 
  style={{ cursor: "pointer" }}
>
  Medicine Delivery
</li>
<li>Callback</li>
         {/* <li onClick={() => navigate("/Login")}>Login</li> */}
      </div>
    </nav>
  );
}

export default Navbar;
