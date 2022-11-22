import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";

import Dashbord from "./components/Dashbord";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDetails />} />

      <Route path="/dashbord" element={<Dashbord />} />
    </Routes>
  );
}

export default App;
