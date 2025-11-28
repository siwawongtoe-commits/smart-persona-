import React from "react";
// Import CSS file
import "../styles/CreateProfile7.css"; 
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
  // The current step is Work Experience (index 6, which is step 7)
  const currentStepIndex = 6; 

  // Define the items for the sidebar/menu
  // Note: The order in the array doesn't matter much since we use CSS Grid for layout
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
      

      {/* Progress Steps Section */}
      <div className="steps-container">
        {steps.map((txt, i) => (
          <div 
            key={i} 
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

        {/* Right Form Section - Work Experience Content */}
        <div className="form-section">
          <h3 className="section-title">ประสบการณ์ทำงาน</h3>

          <div className="work-exp-inputs">
            
            <div className="date-input-group">
              <label htmlFor="start-date">เริ่ม</label>
              <div className="input-with-icon">
                <input type="text" id="start-date" placeholder="DD/MM/YYYY" />
                {/* Calendar Icon SVG */}
                <svg className="calendar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM5 7V6h14v1H5zm2 5h10v2H7v-2zm0 4h10v2H7v-2z"/></svg>
              </div>
            </div>

            <div className="date-input-group">
              <label htmlFor="end-date">จบ</label>
              <div className="input-with-icon">
                <input type="text" id="end-date" placeholder="DD/MM/YYYY" />
                {/* Calendar Icon SVG */}
                <svg className="calendar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM5 7V6h14v1H5zm2 5h10v2H7v-2zm0 4h10v2H7v-2z"/></svg>
              </div>
            </div>

          </div>

          <div className="action-buttons">
            <a href="/CreateProfile8">
            <button className="next-btn">Next ➜</button>
            </a>
            <button className="info-btn">i</button>
          </div>
        </div>
      </div>
    </div>
  );
}