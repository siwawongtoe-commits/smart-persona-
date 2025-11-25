import React from "react";
import "./createResume.css";

export default function CreateResume() {
  return (
    <div className="resume-container">
      <header className="header">
        <div className="logo">PerFile</div>
      </header>

      <h2 className="title">Create Your Resume</h2>

      <div className="search-box">
        <input type="text" placeholder="Search Resume Templates" />
        <button className="filter-btn">⚙️</button>
      </div>

      <div className="steps">
        {["Data From","Photo","Basic Data","Education","Skills","Attributes","Work Experience","Career Goals"].map((txt, i)=>(
          <div key={i} className="step-item">
            <span className="step-number">{i+1}</span>
            <span>{txt}</span>
          </div>
        ))}
      </div>

      <div className="main-content">
        <div className="sidebar">
          {[
            "Name",
            "Basic Data",
            "Education",
            "Career Goals",
            "Skills",
            "Work Experience",
            "Attributes"
          ].map((item, i) => (
            <div key={i} className="sidebar-item">{item}</div>
          ))}
        </div>

        <div className="form-section">
          <h3>กรอกข้อมูลอัตโนมัติ</h3>

          <div className="social-row">
            {["linkedin","facebook","instagram","tiktok","youtube","x"].map((s,i)=>(
              <button key={i} className="social-btn">{s}</button>
            ))}
          </div>

          <p className="note">*สามารถกรอกข้อมูลได้ในด้านข้อมูลส่วนเท่านั้น</p>

          <div className="divider">หรือ</div>

          <button className="manual-btn">เริ่มกรอก</button>
        </div>
      </div>
    </div>
  );
}
