

import React from "react";
import { useNavigate } from "react-router-dom";
import Aayurcareicon from "../Images/aayuricon.jpg";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={Aayurcareicon} alt="logo" />
        <span className="brand-name">AayurCare</span>
      </div> 

      {/* <ul className="nav-links">
        <li onClick={() => navigate("/claims")}>Submit Your Claims</li>
      </ul> */}

      <div className="auth-links">
        <li onClick={()=>navigate("/")}>Home</li>
         <li onClick={() => navigate("/claims")}>Submit Your Claims</li>
        <li onClick={() => navigate("/signin")}>Sign In</li>
        <li onClick={() => navigate("/signup")}>Sign Up</li>
      </div>
    </nav>
  );
}

export default Navbar;
