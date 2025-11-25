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
    { email: "siwawong.toe@spumail.net", password: "67122203", name: "67122203" },
    { email: "admin2@company.com", password: "admin123", name: "Admin2" },
    { email: "admin3@company.com", password: "admin123", name: "Admin3" },
    { email: "admin4@company.com", password: "admin123", name: "Admin4" },
    { email: "admin5@company.com", password: "admin123", name: "Admin5" },
  ];

  // ดึง HR users จาก localStorage
  const hrUsers = JSON.parse(localStorage.getItem("hrUsers")) || [];

  function handleLogin(e) {
    e.preventDefault();

    const foundHR = hrUsers.find(u => u.email.trim() === email.trim() && u.password === password);
    const foundAdmin = admins.find(a => a.email.trim() === email.trim() && a.password === password);

    // โหลด currentUsers แค่ครั้งเดียว
    let currentUsers = JSON.parse(localStorage.getItem("currentUserHR")) || { HR: [], Admin: [] };

    const addUser = (role, user) => {
      // เพิ่ม user ใหม่ ถ้า email ยังไม่มี
      if (!currentUsers[role].some(u => u.email === user.email)) {
        const newUser = {
          id: currentUsers[role].length + 1,
          role,
          ...user
        };
        currentUsers[role].push(newUser);

        // เก็บกลับ localStorage
        localStorage.setItem("currentUserHR", JSON.stringify(currentUsers));
      }
    };

    if (foundHR) {
      addUser("HR", foundHR);
      navigate("/home-hr");
      return;
    }

    if (foundAdmin) {
      addUser("Admin", foundAdmin);
      navigate("/home-admin");
      return;
    }

    alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง หรือไม่ใช่ HR/Admin");
  }
  return (
    <div className="login-page">
      <button className="back-btn">
        <span className="icon">⟵</span> กลับหน้าหลัก
      </button>

      <h1 className="title">PerFile</h1>

      <div className="top-right-text2">
        <Link to="/">คุณเป็นผู้หางานหรือเปล่า?</Link>
      </div>

      <div className="login-box">
        <p className="login-title">เข้าสู่ระบบ HR/Admin</p>

        <div className="form-group">
          <label>อีเมล</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        </div>

        <div className="form-group">
          <label>รหัสผ่าน</label>
          <div className="password-wrapper">
            <input type={showPass ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button type="button" className="password-toggle" onClick={() => setShowPass(!showPass)}>
              {showPass ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <button className="submit-btn" onClick={handleLogin}>เข้าสู่ระบบ</button>

        <p className="register-text">
          ยังไม่มีบัญชี HR? <Link to="/HRRegister">ลงทะเบียนเลย</Link>
        </p>
      </div>
    </div>
  );
}
