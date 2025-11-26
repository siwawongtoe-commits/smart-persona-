import React from "react";
import { Link } from "react-router-dom";
import "../CreateProfileCSS/CreateProfile1.css";

export default function CreateProfile1() {
  const steps = [
    "Data From",
    "Photo",
    "Basic Data",
    "Education",
    "Skills",
    "Attributes",
    "Work Experience",
    "Career Goals",
  ];

  const sidebarItems = [
    "Name",
    "Basic Data",
    "Education",
    "Career Goals",
    "Skills",
    "Work Experience",
    "Attributes",
  ];

  // กำหนด Step ปัจจุบัน (หน้าแรก = 0)
  const currentStepIndex = 0;

  return (
    <div className="page-bg">
      <div className="resume-card full-card">

        <header className="card-header">
          <div className="logo">PerFile</div>
        </header>

        <div className="card-body">

          <h2 className="title">Create Your Resume</h2>

          <div className="search-row">
            <div className="search-pill">
              <input className="search-input" type="text" placeholder="Search Resume Templates" />
              <button className="filter-btn">⚙️</button>
            </div>
          </div>

          {/* Step Bar */}
          <div className="progress-wrapper">
            <div className="progress-line" />
            <div className="steps">
              {steps.map((txt, i) => (
                <div
                  key={i}
                  className={`step-item 
                    ${i === currentStepIndex ? "active" : ""} 
                    ${i < currentStepIndex ? "completed" : ""}
                  `}
                >
                  <span className="step-number">{i + 1}</span>
                  <span className="step-label">{txt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="main-grid">
            <aside className="left-sidebar">
              <div className="sidebar-card">
                <div className="sidebar-list">
                  {sidebarItems.map((item, i) => (
                    <div key={i} className={`sidebar-item ${i === 0 ? "big" : ""}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <section className="right-panel">
              <h3 className="panel-title">กรอกข้อมูลอัตโนมัติ</h3>

              <div className="social-row">
                {["linkedin", "facebook", "instagram", "tiktok", "youtube", "x"].map((s, i) => (
                  <button key={i} className="social-btn">{s}</button>
                ))}
              </div>

              <p className="note">*กรอกข้อมูลได้เฉพาะข้อมูลส่วนตัว</p>

              <div className="divider">หรือ</div>

              <Link to="/create-profile" className="manual-btn">เริ่มกรอก</Link>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
