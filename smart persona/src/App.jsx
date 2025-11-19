import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoRegister from "./pages/NoRegister";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HRLogin from "./pages/HRLogin";
import HRRegister from "./pages/HRRegister";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/noRegister" element={<NoRegister />} />   
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/hrLogin" element={<HRLogin />} />
         <Route path="/hrRegister" element={<HRRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
