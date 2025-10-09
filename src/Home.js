import "./App.css";
import Aayurcareicon from "./Images/aayuricon.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src={Aayurcareicon} alt="" />
          <span className="brand-name">AayurCare</span>
        </div>
      </nav>

      <div className="main-content">
        <div className="left-section">
          <header className="header-section">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>AayurCare in Partnership with Quess</h1>
            <p className="subtitle">Exclusive OPD reimbursement for Quess employees</p>
          </header>
          <section className="support">
            <p>Need help? Reach out to our customer support team.</p>
            <button className="callback-btn">Request a Callback</button>
          </section>
        </div>

        <div className="right-section">
          <h2>OPD Reimbursement Plans</h2>

          <div className="plan-card basic">
            <h3>Basic Plan</h3>
            <p>₹200 / month</p>
            <button onClick={() => navigate("/Basicplan")}>Select Plan</button>
          </div>

          <div className="plan-card premium">
            <h3>Premium Plan</h3>
            <p>₹400 / month</p>
            <button onClick={()=>navigate("/PremiumPlan")}>Select Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
