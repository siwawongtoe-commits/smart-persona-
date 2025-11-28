import React from "react";
import "../styles/CreateProfile1.css";
// import { Link } from "react-router-dom"; // Not used in this view

// Placeholder components for social media icons (in a real app, you'd use SVGs or an icon library)
const SocialIcon = ({ type }) => <div className={`social-icon ${type}`}>{/* Icon */}</div>;

export default function createprofile1() {
    const steps = [
        "Data From", "Photo", "Basic Data", "Education", "Skills", "Attributes", "Work Experience", "Career Goals",
    ];

    // The order of items for the sidebar grid to match the image layout
    const sidebarItems = [
        { label: "Photo", className: "avatar-placeholder" }, // Placeholder for the avatar box
        { label: "Name", className: "medium" },
        { label: "Education", className: "medium" },
        { label: "Skills", className: "medium" },
        { label: "Attributes", className: "medium" },
        { label: "Basic Data", className: "small" },
        { label: "Career Goals", className: "small" },
        { label: "Work Experience", className: "large" },
    ];

    return (
        <div className="page-bg">
            <div className="resume-card">
                {/* --- Header --- */}
                <header className="card-header1">
                    <div className="logo1">PerFile</div>
                </header>

                <div className="card-body">
                    <h2 className="title">Create Your Resume</h2>

                    {/* --- Search Bar --- */}
                    <div className="search-row">
                        
                    </div>

                    {/* --- Progress Steps (1-8 Straight Line) --- */}
                    <div className="progress-wrapper">
                        <div className="steps">
                            {steps.map((txt, i) => (
                                <div
                                    key={i}
                                    className={`step-item ${i === 0 ? "active" : ""}`}
                                >
                                    <span className="step-number">{i + 1}</span>
                                    <span className="step-label">{txt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* --- Main Content: Sidebar and Panel --- */}
                    <div className="main-grid">
                        
                        {/* Left Sidebar (The Preview/Outline) */}
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
                        {/* Right Panel (Data Entry Options - No frame) */}
                        <section className="right-panel">
                            
                            {/* Social Media Data Entry */}
                            <h3 className="panel-heading">กรอกข้อมูลอัตโนมัติ</h3>
                            <div className="social-icons-row">
                                <SocialIcon type="linkedin" />
                                <SocialIcon type="facebook" />
                                <SocialIcon type="instagram" />
                                <SocialIcon type="tiktok" />
                                <SocialIcon type="youtube" />
                                <SocialIcon type="x" />
                                <SocialIcon type="pinterest" />
                            </div>
                            <p className="social-note1">*สามารถกรอกข้อมูลได้แค่บางส่วนเท่านั้น</p>

                            {/* Separator */}
                            <div className="separator">
                                <span className="separator-text">หรือ</span>
                            </div>

                            {/* Manual Data Entry */}
                            <h3 className="panel-heading">Fill the information </h3>
                            <a href="/CreateProfile2">
                            <button className="start-manual-btn">
                                Start <span className="info-icon">ⓘ</span>
                            </button>
                            </a>

                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}