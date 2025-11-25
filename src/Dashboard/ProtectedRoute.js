// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const isLoggedIn = localStorage.getItem("loggedIn") === "true";

//   return isLoggedIn ? children : <Navigate to="/" />;
// }


import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("loggedIn");
  const loginTime = localStorage.getItem("loginTime");

  if (!loggedIn || !loginTime) {
    return <Navigate to="/" replace />;
  }

  const tenMinutes = 10 * 60 * 1000;
  const now = Date.now();

  if (now - loginTime > tenMinutes) {
    // session expired
    localStorage.clear();
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
