import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";

import Listing from "./components/Listing";

import Dashbord from "./components/Dashbord";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDetails />} />

      <Route path="/listing/:id" element={<Listing />} />

      <Route path="/dashbord" element={<Dashbord />} />

      {/* <Route element={<PrivateRoute />}>
        <Route path="/product" element={<ProductDetails />} />
      </Route> */}
    </Routes>
  );
}

export default App;
