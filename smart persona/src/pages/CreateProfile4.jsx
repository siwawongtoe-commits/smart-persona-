import React from "react";
import "../styles/CreateProfile4.css";
import { Link } from "react-router-dom";

export default function CreateProfile2() {
    const steps = [
        "Data From",
        "Photo",
        "Basic Data",
        "Education", // Active Step Index = 3
        "Skills",
        "Attributes",
        "Work Experience",
        "Career Goals",
    ];

    const sidebarItems = [
        "Name",
        "Basic Data",
        "Education", // Active Sidebar Index = 2
        "Career Goals",
        "Skills",
        "Work Experience",
        "Attributes",
    ];

    // กำหนดให้ขั้นตอนปัจจุบันคือ Education (Index 3)
    const currentStepIndex = 3;
    // กำหนดให้ Sidebar ที่ active คือ Education (Index 2)
    const currentSidebarIndex = 2;

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

                        {/* Right Panel (Education Form) */}
                        <section className="right-panel1">
                            <h3 className="panel-title1">การศึกษา</h3>

                            <div className="form-content education-form">
                                
                                {/* 1st Row: ระดับการศึกษา, จบการศึกษาเมื่อ, คณะ, สาขา (ใช้ select ทั้งหมด) */}
                                <div className="form-group quadruple-row education-row-1">
                                    <div className="input-with-label">
                                        <label>ระดับการศึกษา</label>
                                        <select className="select-input"><option>ระดับการศึกษา</option></select>
                                    </div>
                                    <div className="input-with-label">
                                        <label>จบการศึกษาเมื่อ</label>
                                        <select className="select-input"><option>จบการศึกษาเมื่อปี</option></select>
                                    </div>
                                    <div className="input-with-label">
                                        <label>คณะ</label>
                                        <input type="text" className="text-input" />
                                    </div>
                                    <div className="input-with-label">
                                        <label>สาขา</label>
                                        <input type="text" className="text-input" />
                                    </div>
                                </div>

                                {/* 2nd Row: มหาวิทยาลัย/วิทยาลัย/โรงเรียน, ประเภท, เกรดเฉลี่ย */}
                                <div className="form-group triple-row education-row-2">
                                    <div className="input-with-label">
                                        <label>มหาวิทยาลัย/วิทยาลัย/โรงเรียน</label>
                                        <input type="text" className="text-input" />
                                    </div>
                                    <div className="input-with-label">
                                        <label>ประเภท</label>
                                        <select className="select-input"><option>ประเภท</option></select>
                                    </div>
                                    <div className="input-with-label">
                                        <label>เกรดเฉลี่ย</label>
                                        <input type="text" className="text-input" />
                                    </div>
                                </div>

                                {/* Add Education Button */}
                                <div className="add-education-row">
                                    <button className="add-education-btn">
                                        <i className="add-icon">+</i> เพิ่มระดับการศึกษา
                                    </button>
                                </div>
                                
                                {/* Navigation Buttons */}
                                <div className="navigation-buttons1">
                                    <a href="/CreateProfile3">
                                    <button className="nav-btn prev-btn">
                                        <i className="arrow-icon">←</i> Back
                                    </button>
                                    </a>
                                    <a href="/CreateProfile5">
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