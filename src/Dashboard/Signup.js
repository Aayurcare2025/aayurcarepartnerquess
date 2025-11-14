import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function SignUp() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    // const [mobile, setMobile] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const[phonenumber,setPhonenumber]=useState("");
      const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        
        //
        // Basic validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
       
        
        try {
            const response = await fetch("https://api.partner-quess.aayurcare.com/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    email,
                    // mobile,
                    username,
                    password,
                     confirmPassword, 
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message || "Signup successful!");
                // setPage("signin");
                navigate("/signin");
            } else {
                alert(data.message || "Signup failed");
            }
        } catch (err) {
            console.log(err)
            alert("Signup failed: " + err.message);
        }
    };

    return (
        <section className="signup">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {/* <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                /> */}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />


                {/* <input type="tel"
                placeholder="Phone number"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                required
                /> */}

               
               
                <button type="submit">Sign Up</button>
            </form>
        </section>
    );
}

export default SignUp;
