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
import "./App.css"
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
    </Routes>
    </>
  );
}

export default App;
