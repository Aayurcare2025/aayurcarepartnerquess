import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Basicplan from "./basicplan"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Basicplan" element={<Basicplan />} />
    </Routes>
  );
}

export default App;
