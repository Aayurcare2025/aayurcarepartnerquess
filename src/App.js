import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Basicplan from "./basicplan"
import PremiumPlan from "./premiumplan"
import Claims from "./Claims"
import AayurcareTerms from "./Aayurcaretermsandcondition";
import WebisteTerms from "./webisteterms";
import Disclaimer from "./Disclaimer";
import RefundPolicy from "./Refundpolicy";
import PrivacyPolicy from "./Privacypolicy";
function App() {
  return (
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
    </Routes>
  );
}

export default App;
