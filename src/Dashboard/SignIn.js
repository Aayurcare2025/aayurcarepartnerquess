import { useState } from "react";
import { useNavigate } from "react-router-dom";
// function SignIn({ setPage }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/user/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message || "Login successful!");

//         // if backend sends a token, save it
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }
        

//         // redirect to home/dashboard

//         setPage("services");
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (err) {
//       alert("Login failed: " + err.message);
//     }
//   };

//   return (
//     <section className="signin">
//       <h1>Sign In</h1>
//       <form onSubmit={handleSignin}>
//         <input
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//             console.log("Username typing:", e.target.value);
//           }}
//         />
    
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//             console.log("Password typing:", e.target.value);
//           }}
//         />
//         <button>Sign In</button>
//       </form>
//     </section>
//   );
// }
function SignIn({setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.aayurcare.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Login successful!");

        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // ✅ set login status
        setIsLoggedIn(true);
          //  navigate("/");  
          navigate("/services/individual");

        // ✅ redirect after login
        // setPage("services");
        // setPage("services")
        // navigate("/services")
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <section className="signin">
      <h1>Sign In</h1>
      <form onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}

export default SignIn;
