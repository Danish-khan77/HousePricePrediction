import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Predict from "./pages/Predict";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/predict" element={<Predict />} />
    </Routes>
  );
}

export default App;
