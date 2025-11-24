import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toggleShow() {
    setShowPass((s) => !s);
  }

 function handleLogin(e) {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];
const loggedUsers = JSON.parse(localStorage.getItem("loggedUsers")) || [];
const found = users.find((u) => u.email === email);

if (!found) {
  alert("ไม่พบอีเมลนี้");
  return;
}

if (found.password !== password) {
  alert("รหัสผ่านไม่ถูกต้อง");
  return;
}

// ถ้า user ยังไม่อยู่ใน loggedUsers ก็เพิ่ม
if (!loggedUsers.some(u => u.email === found.email)) {
  loggedUsers.push(found);
}

localStorage.setItem("loggedUsers", JSON.stringify(loggedUsers));

alert("เข้าสู่ระบบสำเร็จ!");
window.location.href = "/home";
}

  return (
    <div className="page-root text-center">
      <header className="">
        <div className="container">
          <div className="header-title">PerFile</div>
        </div>
        <button className="back-btn">
          <span className="icon">⟵</span> กลับเข้าสู่หน้าหลัก
        </button>
      </header>

      <main className="page-wrapper">
        <div className="container">
          <div className="card" role="region" aria-labelledby="login-title">
            <div className="top-right-text">
              <Link to="/HRLogin">คุณเป็นผู้ประกอบการหรือเปล่า?</Link>
            </div>

            <h1 id="login-title" className="card-title font-bold mb-2">เข้าสู่ระบบ</h1>
            <p className="mb-8 muted-small">ต้องการเข้าสู่ระบบด้วยอะไร?</p>

             <div className="provider-wrapper2">
              <button className="google-btn google-login">
                <svg viewBox="0 0 48 48" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.15 30.49 0 24 0 14.65 0 6.68 5.3 3.29 13.01l7.66 5.86C12.59 13.78 17.81 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.75 24.53c0-1.54-.14-3.04-.41-4.5H24v8.52h12.55c-.56 3.84-2.88 7.03-6.14 9.17l7.66 5.86C43.51 39.15 46.75 32.32 46.75 24.53z" />
                  <path fill="#FBBC05" d="M10.95 29.17c-.52-1.54-.81-3.19-.81-4.87s.29-3.33.81-4.87L3.29 13.01C1.22 17.02 0 20.65 0 24.53s1.22 7.51 3.29 11.52l7.66-5.87z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.96-2.13 15.96-5.73l-7.66-5.86c-2.48 1.6-5.6 2.54-8.3 2.54-6.19 0-11.41-4.28-13.3-10.04l-7.66 5.86C6.68 42.7 14.65 48 24 48z" />
                </svg>
                ดำเนินการด้วยบัญชี Google
              </button>

              <button className="google-btn linkedin-login">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#0A66C2" d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                  <path fill="#fff" d="M7.09 20.45H3.56V9h3.53v11.45zM5.33 7.59A2.05 2.05 0 115.34 3.5a2.05 2.05 0 010 4.1zm15.12 12.86h-3.53v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69h-3.53V9h3.39v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33z" />
                </svg>
                ดำเนินการต่อด้วยบัญชี LinkedIn
              </button>


            </div>

            <div className="divider-or">
              <span>หรือ</span>
            </div>

            {/* Email */}
            <div className="form-field2">
              <label>อีเมล</label>
              <input
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="form-field2">
              <label>รหัสผ่าน</label>
              <div className="password-wrapper">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={toggleShow}
                  aria-label={showPass ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
                >
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-brand mt-4 w-full"
              onClick={handleLogin}
            >
              เข้าสู่ระบบ
            </button>

            <p className="mt-8 text-sm">
              ไม่เคยเข้าใช้งานใช่ไหม?{" "}
              <Link to="/" className="link-brand font-semibold">
                ลงทะเบียน
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
