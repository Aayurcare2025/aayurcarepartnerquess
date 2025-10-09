import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Basicplan from "./basicplan"
import PremiumPlan from "./premiumplan"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Basicplan" element={<Basicplan />} />
      <Route path="/PremiumPlan" element={<PremiumPlan/>}></Route>
    </Routes>
  );
}

export default App;
