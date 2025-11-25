import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoRegister from "./pages/NoRegister";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import HomeAdmin from "./pages/HomeAdmin";
import HomeHR from "./pages/HomeHR";
import HRLogin from "./pages/HRLogin";
import HRRegister from "./pages/HRRegister";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/noRegister" element={<NoRegister />} />   
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<RegisterPage />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/home-profile" element={<Home />} />
        <Route path="/home-admin" element={<HomeAdmin />} />
        <Route path="/hrLogin" element={<HRLogin />} />
        <Route path="/hrRegister" element={<HRRegister />} />
        <Route path="/home-hr" element={<HomeHR />} />
      </Routes>
    </Router>
  );
}

export default App;
