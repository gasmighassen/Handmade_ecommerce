import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute/PrivateRoutes";

function App() {
  return (
    <Routes>
      azdazdazdazdazd
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
