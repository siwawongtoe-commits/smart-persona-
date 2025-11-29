import React, { useState } from "react";
import "../styles/HRLogin.css";
import { Link, useNavigate } from "react-router-dom";

export default function HRLogin() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ตัวอย่าง admin 5 คน
  const admins = [
    { email: "admin1@company.com", password: "123456", name: "armin" },
    { email: "admin3@company.com", password: "admin123", name: "wave" },
    { email: "admin4@company.com", password: "admin123", name: "phat" },
    { email: "admin5@company.com", password: "admin123", name: "Q" },
    { email: "admin6@company.com", password: "admin123", name: "toon" },
  ];

  // ดึง HR users จาก localStorage
  const hrUsers = JSON.parse(localStorage.getItem("hrUsers")) || [];

  function handleLogin(e) {
  e.preventDefault();

  // เช็กว่าใส่ email และ password หรือยัง
  if (!email.trim() || !password) {
    alert("กรุณากรอกอีเมลและรหัสผ่าน");
    return;
  }

  const foundHR = hrUsers.find(
    (u) => u.email.trim() === email.trim() && u.password === password
  );
  const foundAdmin = admins.find(
    (a) => a.email.trim() === email.trim() && a.password === password
  );

  let currentUsers = JSON.parse(localStorage.getItem("currentUserHR")) || { HR: [], Admin: [] };

  const addUser = (role, user) => {
    if (!currentUsers[role].some((u) => u.email === user.email)) {
      const newUser = {
        id: currentUsers[role].length + 1,
        role,
        ...user
      };
      currentUsers[role].push(newUser);
      localStorage.setItem("currentUserHR", JSON.stringify(currentUsers));
    }
  };

  if (foundHR) {
  addUser("HR", foundHR);
  localStorage.setItem("currentUser", JSON.stringify({ role: "HR", ...foundHR }));
  navigate("/home-hr");
  return;
}

if (foundAdmin) {
  addUser("Admin", foundAdmin);
  localStorage.setItem("currentUser", JSON.stringify({ role: "Admin", ...foundAdmin }));
  navigate("/home-admin");
  return;
}

  

  alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง หรือไม่ใช่ HR/Admin");
}

  return (
    <div className="login-page">
      

      <h1 className="perfiletitle">PerFile</h1>

      <div className="top-right-text2">
        <Link to="/">คุณเป็นผู้หางานหรือเปล่า?</Link>
      </div>

      <div className="login-box">
        <p className="login-title">เข้าสู่ระบบ HR/Admin</p>
          <button className="google-btn">
          {/* ⬇️ โค้ด SVG ไอคอน Google ใหม่ ⬇️ */}
          <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.15 30.49 0 24 0 14.65 0 6.68 5.3 3.29 13.01l7.66 5.86C12.59 13.78 17.81 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.75 24.53c0-1.54-.14-3.04-.41-4.5H24v8.52h12.55c-.56 3.84-2.88 7.03-6.14 9.17l7.66 5.86C43.51 39.15 46.75 32.32 46.75 24.53z" />
            <path fill="#FBBC05" d="M10.95 29.17c-.52-1.54-.81-3.19-.81-4.87s.29-3.33.81-4.87L3.29 13.01C1.22 17.02 0 20.65 0 24.53s1.22 7.51 3.29 11.52l7.66-5.87z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.96-2.13 15.96-5.73l-7.66-5.86c-2.48 1.6-5.6 2.54-8.3 2.54-6.19 0-11.41-4.28-13.3-10.04l-7.66 5.86C6.68 42.7 14.65 48 24 48z" />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          {/* ⬆️ โค้ด SVG ไอคอน Google ใหม่ ⬆️ */}
          ดำเนินการด้วยบัญชี Google
        </button>
        
            <div className="divider-or">
              <span>หรือ</span>
            </div>

        <div className="form-group">
         อีเมล
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        </div>

        <div className="form-group">
          รหัสผ่าน
          <div className="password-wrapper">
            <input type={showPass ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button type="button" className="password-toggle" onClick={() => setShowPass(!showPass)}>
              {showPass ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <button className="submit-btn1" onClick={handleLogin}>เข้าสู่ระบบ</button>

        <p className="register-text">
          ยังไม่มีบัญชี HR? <Link to="/HRRegister">ลงทะเบียนเลย</Link>
        </p>
      </div>
    </div>
  );
}
