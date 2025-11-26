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
import Setting from "./pages/Setting";
// import CreateProfile from "./CreateProfile/CreateProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoRegister />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home-profile" element={<Home />} />
        <Route path="/home-admin" element={<HomeAdmin />} />
        <Route path="/home-hr" element={<HomeHR />} />
        <Route path="/hrLogin" element={<HRLogin />} />
        <Route path="/hrRegister" element={<HRRegister />} />
        <Route path="/setting" element={<Setting />} />
        {/* <Route path="/CreateProfile" element={<CreateProfile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;