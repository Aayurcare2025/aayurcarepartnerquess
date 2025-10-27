import "../App.css";
// import Aayurcareicon from "../Images/aayuricon.jpg";
import { useNavigate } from "react-router-dom";
import Quess from "../Images/q1.png"

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">

      <div className="main-content">
        <div className="left-section">
          <header className="header-section">
             {/* <img src={Aayurcareicon} alt="" /> */}
             <img  className="quess"src={Quess} alt=""></img>
             
            <h1>Welcome to Your Health Hub</h1>
            <p className="subtitle">Exclusive OPD reimbursement for Quess employees</p>
          </header>
          <section className="support">
            <p>Need help? Reach out to our customer support team.</p>
            <button onClick={() => navigate("/callback")} className="callback-btn">Request a Callback</button>
          </section>
        </div>

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
            <p>Total coverage upto ₹4100 /-</p>
            <button className="b1" onClick={()=>navigate("/PremiumPlan")}>Select Plan</button>
          </div>
        </div>
      </div>


      
<footer className="footer">
  {/* Left side */}
  <div className="footer-left">
    <h2 className="footer-logo">Aayur Care</h2>
    <p >
      Providing smart and hassle-free medical reimbursement for a healthier you.
    </p>
    <p>Copyright@2025 Aayurcare-All Right Reserved</p>
    <p>Powered by Aayur Enterprises</p>
  </div>

      {/* <div className="footer-middle">
       <p>Partnered with Vibe Insurance Broking </p>
        <p>IRDAI License No. 904</p>
        
      </div> */}

  {/* Right side */}
  <div className="footer-right">
    {/* Quick Links */}
    <div >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  
    </div>
    {/* Legal */}
    <div className="footer-section">
      <h3>Legal</h3>
      <ul>
        <li className="footer-link" onClick={() => navigate("/websiteterms")}>Website Terms</li>
        <br></br>
    <li className="footer-link" onClick={() =>navigate("/aayurcaretermsandcondition")}>AayurCare Terms & Condition</li>
    <br></br>
   <li className="footer-link" onClick={()=>navigate("refundandcancellation")}>Refund and Cancellation Policy</li>
    <br></br>
  <li className="footer-link" onClick={()=>navigate("disclaimer")}>Disclaimer</li>
      <br></br> 
        <li className="footer-link" onClick={()=>navigate("PrivacyPolicy")}>Privacy Policy</li>
      </ul>
    </div>


    {/* <div className="footer-down">

    

    </div> */}
  </div>
</footer>
    </div>
  );
}

export default Home;
