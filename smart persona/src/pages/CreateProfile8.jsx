import React from "react";
// Import CSS file
import "../styles/CreateProfile8.css"; 
// Assuming you still want to use Link for navigation
import { Link } from "react-router-dom"; 

export default function CreateResume() {
  // Define the steps for the progress bar
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
  // *** The current step is Career Goals (index 7, which is step 8) ***
  const currentStepIndex = 7; 

  // Define the items for the sidebar/menu (Order matching the visual layout)
  const sidebarItems = [
    "Data From", 
    "Photo", 
    "Basic Data",
    "Education",
    "Skills",
    "Attributes",
    "Name",
    "Career Goals",
    "Work Experience",
  ];

  return (
    <div className="resume-container">
      <header className="header">
        <div className="logo">PerFile</div>
      </header>

      <h2 className="title">Create Your Resume</h2>

      {/* Search Box with Filter Icon */}
      <div className="search-box">
        {/* Search Icon SVG */}
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        <input type="text" placeholder="Search Resume Templates" />
        <button className="filter-btn">
          {/* Filter Icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zm-3-5h10v-2H7v2zm-5-5v2h20V8H2z"/></svg>
        </button>
      </div>

      {/* Progress Steps Section */}
      <div className="steps-container">
        {steps.map((txt, i) => (
          <div 
            key={i} 
            // Highlight the current step (Career Goals)
            className={`step-item ${i === currentStepIndex ? "active" : ""}`}
          >
            <span className="step-number">{i + 1}</span>
            <span className="step-name">{txt}</span>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        
        {/* Left Sidebar / Menu Section */}
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
        {/* Right Form Section - Career Goals Content */}
        <div className="form-section career-goals-section">
          <h3 className="section-title">เป้าหมายในสายอาชีพ</h3>

          {/* Placeholder for input/textarea for career goals */}
          <div className="goal-input-area">
             <textarea 
                placeholder="กรุณาเขียนเป้าหมายในสายอาชีพของคุณให้ชัดเจน (เช่น ตำแหน่งที่ต้องการ, สิ่งที่ต้องการบรรลุใน 5 ปี)"
                rows="8"
             ></textarea>
          </div>

          <div className="action-buttons">
            <a href="/Home">
            <button className="next-btn">Success ✔</button>
            </a>
            <button className="info-btn">i</button>
          </div>
        </div>
      </div>
    </div>
  );
}