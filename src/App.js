import { Routes, Route } from "react-router-dom";
import Home from "./Dashboard/Home";
import Basicplan from "./Dashboard/basicplan"
import PremiumPlan from "./Dashboard/premiumplan"
import Claims from "./Dashboard/Claims"
import AayurcareTerms from "./Aayurcaretermsandcondition";
import WebisteTerms from "./Footer/webisteterms";
import Disclaimer from "./Footer/Disclaimer";
import RefundPolicy from "./Footer/Refundpolicy";
import PrivacyPolicy from "./Footer/Privacypolicy";
import SignUp from "./Dashboard/Signup";
import Navbar from "./Dashboard/Navbar";
import SignIn from "./Dashboard/SignIn";
import ForgotPassword from "./Dashboard/ForgotPassword";
import ResetPassword from "./Dashboard/ResetPassword";
import CallbackForm from "./Dashboard/callback";
import "./App.css"
// import Login from "./Dashboard/Login";
// import DetailsOfBasicPlan from ".Dashboard/"
// import DetailsOfBasicPlan from "./Dashboard/DetailsOfBasicPlan"
import OpdRebursement from "./Dashboard/OpdRebursement";  
import PaymentFailure from "./Dashboard/PaymentFailure";
import PaymentSuccess from "./Dashboard/PaymentSuccess";
function App() {
  return (
   <>

   
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Basicplan" element={<Basicplan />} />
      <Route path="/PremiumPlan" element={<PremiumPlan/>}></Route>
      <Route path="/Claims" element={<Claims/>}></Route>
      <Route path="/Disclaimer" element={<Disclaimer/>}></Route>
      <Route path="/aayurcaretermsandcondition" element={<AayurcareTerms/>}></Route>
      <Route path="/refundandcancellation" element={<RefundPolicy/>}></Route>
      <Route path="/WebsiteTerms" element={<WebisteTerms/>}></Route>
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
       <Route path="/reset-password" element={<ResetPassword />} />
       <Route path="/callback" element={<CallbackForm/>}/>
       {/* <Route path="/Login" element={<Login/>}></Route> */}
       {/* <Route path="/DetailsOfBasicPlan"  element={<DetailsOfBasicPlan/>}></Route> */}
      <Route path="/OpdRebursement"  element={<OpdRebursement/>} ></Route>
       {/* <Route path="/DetailsOfBasicPlan"  element={<DetailsOfBasicPlan/>}></Route> */}
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
    </Routes>
    </>
  );

}

export default App;

