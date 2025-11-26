import React from "react";
// Import CSS file
import "../CreateProfileCSS/CreateProfile1.css"; 
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
        <div className="sidebar">
          {/* Top-left image upload placeholder */}
          <div className="photo-placeholder-box">
            {/* User Icon SVG */}
            <svg className="user-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            {/* Crop corners (for styling) */}
            <span className="crop-border top-left"></span>
            <span className="crop-border top-right"></span>
            <span className="crop-border bottom-left"></span>
            <span className="crop-border bottom-right"></span>
          </div>

          {/* Sidebar Navigation Items Grid */}
          <div className="sidebar-grid">
            {/* Active sidebar item is now Career Goals */}
            <div className="sidebar-item">Data From</div>
            <div className="sidebar-item">Name</div>
            <div className="sidebar-item">Photo</div>
            <div className="sidebar-item">Basic Data</div>
            <div className="sidebar-item">Education</div>
            <div className="sidebar-item active-sidebar">Career Goals</div>
            <div className="sidebar-item">Skills</div>
            <div className="sidebar-item">Work Experience</div>
            <div className="sidebar-item">Attributes</div>
          </div>
        </div>

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
            <button className="next-btn">ต่อไป</button>
            <button className="info-btn">i</button>
          </div>
        </div>
      </div>
    </div>
  );
}