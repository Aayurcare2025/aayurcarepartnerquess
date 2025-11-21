

// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import Aayurcareicon from "../Images/aayuricon.jpg";
// import "../App.css";

// function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar">
//       <div className="logo" onClick={() => navigate("/")}>
//         {/* <img src={Aayurcareicon} alt="logo" /> */}
//         {/* <span className="brand-name">AayurCare</span> */}
//       </div>

      
//       <div className="auth-links">
//         <li onClick={()=>navigate("/")}>Home</li>
//          <li onClick={() => navigate("/claims")}>Claims</li>
//          <li 
//   onClick={() => window.location.href = "https://link.mypillo.in/kckszz"} 
//   style={{ cursor: "pointer" }}
// >
//   Medicine Delivery
// </li>
// <li>Support</li>
//          {/* <li onClick={() => navigate("/Login")}>Login</li> */}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("phone")
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}></div>

      <div className="auth-links">
        <li onClick={() => navigate("/")}>Home</li>

        {/* Show these links ONLY after login */}
        {isLoggedIn && (
          <>
            {/* <li onClick={() => navigate("/profile")}>👤 Profile</li> */}
            <li onClick={() => navigate("/claims")}>Claims</li>

            <li
              onClick={() =>
                (window.location.href = "https://link.mypillo.in/kckszz")
              }
              style={{ cursor: "pointer" }}
            >
              Medicine Delivery
            </li>

            <li onClick={() => navigate("/support")}>Support</li>

            <li onClick={handleLogout}>
              Sign Out
            </li>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

