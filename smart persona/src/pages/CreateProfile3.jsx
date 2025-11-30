import React from "react";
import "../styles/CreateProfile3.css";
import { Link } from "react-router-dom";

export default function CreateProfile3() {
    const steps = [
        "Data From",
        "Photo",
        "Basic Data", // Active Step Index = 2
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

    // กำหนดให้ขั้นตอนปัจจุบันคือ Basic Data (Index 2)
    const currentStepIndex = 2;
    // กำหนดให้ Sidebar ที่ active คือ Basic Data (Index 1)
    const currentSidebarIndex = 1;

    return (
        <div className="page-bg">
            <div className="resume-card">
                <header className="card-header1">
                    <div className="logo1">PerFile</div>
                </header>

                <div className="card-body">
                    <h2 className="title">Create Your Resume</h2>

                    <div className="search-row">
                        
                    </div>

                    {/* Step Indicator */}
                    <div className="progress-wrapper">
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
                        {/* Left Sidebar (Navigation/Preview) */}
                        <section className="left-column">
          <div className="grid-container">
            <div className="grid-item item-photo">
              <div className="photo-placeholder">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>

            <div className="grid-item item-name">Name</div>
            <div className="grid-item item-education">Education</div>
            <div className="grid-item item-career-goals">Career Goals</div>
            <div className="grid-item item-skills">Skills</div>
            <div className="grid-item item-work-experience">Work Experience</div>
            <div className="grid-item item-attributes">Attributes</div>
          </div>
        </section>

                        {/* Right Panel (Basic Data Form) */}
                        <section className="right-panel1">
                            <h3 className="panel-title1">ข้อมูลพื้นฐาน</h3>
                            <div className="form-content1">
                                {/* 1. Name */}
                                <div className="form-group row">
                                    <label htmlFor="name">ชื่อ-นามสกุล</label>
                                    <input type="text" id="name" placeholder="Name - Lastname" className="text-input1" />
                                </div>

                                {/* 2. Gender, Age, Phone */}
                                <div className="form-group triple-row">
                                    <div className="input-with-label">
                                       เพศ
                                        <div className="inline-group">
                                            <select className="select-input">
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-with-label">
                                        อายุ
                                        <input type="text" defaultValue="00" className="small-input" maxLength="2" />
                                    </div>
                                    <div className="input-with-label phone-group">
                                        เบอร์โทร
                                        <div className="input-mask-group">
                                            {Array(10).fill(0).map((_, i) => (
                                                <input key={i} type="text" className="mask-input" maxLength="1" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Email, Line ID */}
                                <div className="form-group double-row">
                                    <div className="input-with-label">
                                        Email
                                        <input type="email" id="email" className="text-input1" />
                                    </div>
                                    <div className="input-with-label">
                                       ID Line
                                        <input type="text" id="lineId" className="text-input1" />
                                    </div>
                                </div>

                                {/* 4. Address */}
                                <h4 className="address-header">ที่อยู่</h4>
                                <div className="form-group quadruple-row">
                                    <select className="select-input address-select"><option>เลขที่บ้าน/อาคาร, หมู่/ซอย, ถนน</option></select>
                                    <select className="select-input address-select"><option>แขวง/ตำบล</option></select>
                                    <select className="select-input address-select"><option>เขต/อำเภอ</option></select>
                                    <select className="select-input address-select"><option>จังหวัด</option></select>
                                </div>

                                {/* 5. Postal Code */}
                                <div className="form-group postal-code-row">
                                    รหัสไปรษณีย์
                                    <div className="input-mask-group">
                                        {Array(5).fill(0).map((_, i) => (
                                            <input key={i} type="text" className="mask-input" maxLength="1" />
                                        ))}
                                    </div>
                                </div>

                                {/* Navigation Buttons */}
                                <div className="navigation-buttons1">
                                    <a href="/CreateProfile2">
                                    <button className="nav-btn prev-btn">
                                        <i className="arrow-icon">←</i> Back
                                    </button>
                                    </a>
                                    <a href="/CreateProfile4">
                                    <button className="nav-btn next-btn">
                                        Next <i className="arrow-icon">→</i>
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}