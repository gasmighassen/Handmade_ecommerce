import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute/PrivateRoutes";

function App() {
  return (
    <Routes>
      azdazdazdazdazd
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDetails />} />
      {/* <Route element={<PrivateRoute />}>
        <Route path="/product" element={<ProductDetails />} />
      </Route> */}
    </Routes>
  );
}

export default App;
