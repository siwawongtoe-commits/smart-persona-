import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import HomeAdmin from "./pages/HomeAdmin";
import HomeHR from "./pages/HomeHR";
import HRLogin from "./pages/HRLogin";
import HRRegister from "./pages/HRRegister";
import Setting from "./pages/Setting";
import CreateProfile1 from "./pages/CreateProfile1";
import CreateProfile2 from "./pages/CreateProfile2";
import CreateProfile3 from "./pages/CreateProfile3";
import CreateProfile4 from "./pages/CreateProfile4";
import CreateProfile5 from "./pages/CreateProfile5";
import CreateProfile6 from "./pages/CreateProfile6";
import CreateProfile7 from "./pages/CreateProfile7";
import CreateProfile8 from "./pages/CreateProfile8";
import DashboardAdmin from "./pages/DashboardAdmin";
import UserProfile from "./pages/UserProfile";
import SettingAdmin from "./pages/SettingAdmin";
import DashboardHR from "./pages/DashboardHR";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home-profile" element={<Home />} />
        <Route path="/home-admin" element={<HomeAdmin />} />
        <Route path="/home-hr" element={<HomeHR />} />
        <Route path="/hrLogin" element={<HRLogin />} />
        <Route path="/hrRegister" element={<HRRegister />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/createprofile1" element={<CreateProfile1 />} />
        <Route path="/createprofile2" element={<CreateProfile2 />} />
        <Route path="/createprofile3" element={<CreateProfile3 />} />
        <Route path="/createprofile4" element={<CreateProfile4 />} />
        <Route path="/createprofile5" element={<CreateProfile5 />} />
        <Route path="/createprofile6" element={<CreateProfile6 />} />
        <Route path="/createprofile7" element={<CreateProfile7 />} />
        <Route path="/createprofile8" element={<CreateProfile8 />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/setting-admin" element={<SettingAdmin />} />
        <Route path="/dashboardhr" element={<DashboardHR />} /> 
      </Routes>
    </Router>
  );
}

export default App;