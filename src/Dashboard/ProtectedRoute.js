// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const isLoggedIn = localStorage.getItem("loggedIn") === "true";

//   return isLoggedIn ? children : <Navigate to="/" />;
// }


import { Navigate } from "react-router-dom";
import { isSessionActive } from "./session";

// Sends signed-out or expired users to the sign-in screen. Home clears an
// expired session there and tells the user it ran out.
function ProtectedRoute({ children }) {
  if (!isSessionActive()) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
