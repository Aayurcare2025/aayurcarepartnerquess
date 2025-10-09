import "./App.css";
import Aayurcareicon from "./Images/aayuricon.jpg";
import Basicplan from "./basicplan"
import { useNavigate } from "react-router-dom";
import { Routes,Route} from "react-router-dom";
function App() {
    const navigate = useNavigate();
  return (
    
    <div className="App">
      {/* Navbar */}
  
      <nav className="navbar">
        <div className="logo">
          <img src={Aayurcareicon} alt=""/>
          <span className="brand-name">AayurCare</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <header className="header-section">
            <br></br>
            <br></br>
            <br></br>
            <h1>AayurCare in Partnership with Quess</h1>
            <p className="subtitle">
              Exclusive OPD reimbursement for Quess employees
            </p>
          </header>

          {/* <section className="benefits">
            <h2>Benefits</h2>
            <ul>
              <li>User-friendly portal</li>
              <li>Easy OPD reimbursement</li>
              <li>Quick claim processing</li>
              <li>Dedicated support team</li>
            </ul>
          </section> */}

          <section className="support">
            <p>Need help? Reach out to our customer support team.</p>
            <button className="callback-btn">Request a Callback</button>
            {/* <form className="callback-form">
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Submit</button>
            </form> */}
          </section>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>OPD Reimbursement Plans</h2>

          <div className="plan-card basic">
            <h3>Basic Plan</h3>
            <p>₹200 / month</p>
      
            <button onClick={()=>navigate("/Basicplan")} >Select Plan</button>
      
          </div>

          

          <div className="plan-card premium">
            <h3>Premium Plan</h3>
            <p>₹400 / month</p>

            <button>Select Plan</button>
          </div>

        </div>

      </div>
       <Routes>
       <Route path="/Basicplan" element={<Basicplan />} />
       </Routes>
    </div>
    








  );
}

export default App;
