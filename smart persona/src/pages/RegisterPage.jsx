import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);

  return (
   
   <div className="register-fullscreen">
      <div className="page-root text-center">
        <main className="page-wrapper">
          <div className="">
            <button className="back-btn" type="button" aria-label="กลับสู่หน้าหลัก">
              <span style={{display:'inline-flex',alignItems:'center',gap:8}}>
                <span style={{display:'inline-flex',width:18,height:18,alignItems:'center',justifyContent:'center',borderRadius:6,border:'1px solid rgba(0,0,0,0.06)'}}>🔙</span>
                กลับสู่หน้าหลัก
              </span>
            </button>

            <div className="brand-title">PerFile</div>

            <div
              className="card register-card"
              role="region"
              aria-labelledby="register-title"
            >
              <h1 id="register-title" className="card-title">
                ลงทะเบียน
              </h1>
              <p className="subtitle">เลือกแอพพลิเคชันเพื่อสร้าง Main Profile</p>

              <div className="provider-wrapper" style={{ marginTop: 8 }}>
                {/* Google */}
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
                  <span className="provider-label">
                    ดำเนินการต่อด้วยบัญชี Google
                  </span>
                </button>

                {/* LinkedIn */}
                <button className="provider-btn provider-linkedin" type="button">
                  <span className="provider-left" aria-hidden>
                    <span className="icon-square linkedin">in</span>
                  </span>
                  <span className="provider-label">
                    ดำเนินการต่อด้วยบัญชี LinkedIn
                  </span>
                </button>

                {/* Facebook */}
                {/* <button className="provider-btn provider-facebook" type="button">
                  <span className="provider-left" aria-hidden>
                    <span className="icon-square facebook">f</span>
                  </span>
                  <span className="provider-label">
                    ดำเนินการต่อด้วยบัญชี Facebook
                  </span>
                </button> */}
              </div>

              <div className="or-container" aria-hidden>
                <span className="or-text">หรือ</span>
              </div>

              <p className="subtitle">สร้าง Main Profile ด้วยตนเอง</p>

              <form className="form-group">
                <div className="form-field">
                  <label className="form-label" htmlFor="reg-email">อีเมล</label>
                  <input
                    id="reg-email"
                    className="form-input"
                    type="email"
                    placeholder="example@mail.com"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="reg-pass">กำหนดรหัสผ่าน</label>
                  <div className="password-wrapper">
                    <input
                      id="reg-pass"
                      className="form-input"
                      type={showPass ? "text" : "password"}
                      placeholder="********"
                    />
                    <button type="button" className="password-toggle" onClick={() => setShowPass(s => !s)} aria-label="toggle password">
                      {showPass ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn btn-submit">
                  <span className="icon" aria-hidden>✍️</span>
                  <span>สร้าง Main Profile</span>
                </button>
              </form>

              <p className="login-text">
                ยังมีบัญชีอยู่แล้วใช่ไหม? กลับไปหน้า{" "}
                <Link to="/" className="link-brand">
                  เข้าสู่ระบบ
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
