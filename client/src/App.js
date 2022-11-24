import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute/PrivateRoutes";
import Listing from "./components/Listing";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      azdazdazdazdazd
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDetails />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* <Route element={<PrivateRoute />}>
        <Route path="/product" element={<ProductDetails />} />
      </Route> */}
    </Routes>
  );
}

export default App;
