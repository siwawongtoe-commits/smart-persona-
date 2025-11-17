import React, { useState } from "react";
import { Link } from "react-router-dom"; 

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);

  function toggleShow() {
    setShowPass((s) => !s);
  }
  return (
    <div className="page-root text-center">
      <header className="">
        <div className="container">
          <div className="header-title">PerFile</div>
        </div>
      </header>

      <main className="page-wrapper">
        <div className="container">
          <div className="card" role="region" aria-labelledby="login-title">
            <h1 id="login-title" className="card-title font-bold mb-2  ">เข้าสู่ระบบ</h1>
            <p className="mb-8 muted-small">ต้องการเข้าสู่ระบบด้วยอะไร?</p>
            
            <div className="provider-wrapper2">
              <button className="provider-btn provider-google" type="button">
                <span className="provider-left" aria-hidden>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 533.5 544.3"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                    focusable="false"
                  >
                    <path
                      fill="#4285F4"
                      d="M533.5 278.4c0-18.5-1.5-36.2-4.3-53.5H272v101.4h147.1c-6.3 34.1-25 62.9-53.4 82v68.2h86.1c50.4-46.4 81.7-115 81.7-198.1z"
                    />
                    <path
                      fill="#34A853"
                      d="M272 544.3c72.6 0 133.6-24.1 178.1-65.6l-86.1-68.2c-23.9 16-54.6 25.3-92 25.3-70.6 0-130.3-47.6-151.6-111.6H34.9v69.9C79.3 488.1 168.3 544.3 272 544.3z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M120.4 326.2c-10.9-32.8-10.9-68.3 0-101.1V155.2H34.9C12.4 198.4 0 240.4 0 272.5s12.4 74.1 34.9 117.3l85.5-63.6z"
                    />
                    <path
                      fill="#EA4335"
                      d="M272 107.2c39.5 0 75 13.6 103 40.3l77.4-77.4C403.9 24 344.9 0 272 0 168.3 0 79.3 56.2 34.9 155.2l85.5 69.9C141.7 154.8 201.4 107.2 272 107.2z"
                    />
                  </svg>
                </span>
                <span className="provider-label2">
                  ดำเนินการต่อด้วยบัญชี Google
                </span>
              </button>

              <button className="provider-btn provider-linkedin" type="button">
                <span className="provider-left" aria-hidden>
                  <span className="icon-square linkedin">in</span>
                </span>
                <span className="provider-label2">
                  ดำเนินการต่อด้วยบัญชี LinkedIn
                </span>
              </button>
            </div>

            <div class="divider-or">
              <span>หรือ</span>
            </div>

            <div className="form-field2">
              <label>อีเมล</label>
              <input type="email" placeholder="example@mail.com" />
            </div>
            <div className="form-field2">
              <label>รหัสผ่าน</label>
              <div className="password-wrapper">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="********"
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
            <p></p>
            <button type="submit" className="btn btn-brand mt-4 w-full">
              เข้าสู่ระบบ
            </button>
            {/* 🔥 เปลี่ยนจาก <a> เป็น <Link> */}
            <p className="mt-8 text-sm">
              ไม่เคยเข้าใช้งานใช่ไหม? <Link to="/register" className="link-brand font-semibold">ลงทะเบียน</Link>
            </p>

            <p className="mt-4 text-xs text-gray-500 leading-relaxed max-w-xs text-center legal" style={{ margin: '0.75rem auto 0' }}>
              การคลิกลงชื่อแสดงว่าคุณได้อ่านและยอมรับ <br />
              <a href="#" className="link-brand">ข้อตกลงผู้ใช้</a> <a href="#" className="link-brand">นโยบายเกี่ยวกับข้อมูล</a> และ <a href="#" className="link-brand">นโยบายคุกกี้</a> ของ Smart Persona
            </p>
          </div>
        </div>
      </main>

      
    </div>
  );
}
