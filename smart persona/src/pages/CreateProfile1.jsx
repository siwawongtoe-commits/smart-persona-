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
                <header className="card-header">
                    <div className="logo">PerFile</div>
                </header>

                <div className="card-body">
                    <h2 className="title">Create Your Resume</h2>

                    {/* --- Search Bar --- */}
                    <div className="search-row">
                        <div className="search-pill">
                            <span className="search-icon">🔍</span> 
                            <input
                                className="search-input"
                                type="text"
                                placeholder="Search Resume Templates"
                            />
                            <button className="filter-btn">☰</button>
                        </div>
                    </div>

                    {/* --- Progress Steps (1-8 Straight Line) --- */}
                    <div className="progress-wrapper">
                        <div className="progress-line" />
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
                        <aside className="left-sidebar">
                            <div className="sidebar-grid">
                                {sidebarItems.map((item, i) => (
                                    <div 
                                        key={i} 
                                        // The class names are used to define the grid layout in CSS
                                        className={`sidebar-item ${item.className}`}
                                    >
                                        {/* Special content for the Photo/Avatar block */}
                                        {item.label === "Photo" && <span className="photo-icon">📷</span>}
                                        {/* Content for other blocks */}
                                        {item.label !== "Photo" && item.label}
                                    </div>
                                ))}
                            </div>
                        </aside>

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
                            <p className="social-note">*สามารถกรอกข้อมูลได้แค่บางส่วนเท่านั้น</p>

                            {/* Separator */}
                            <div className="separator">
                                <span className="separator-text">หรือ</span>
                            </div>

                            {/* Manual Data Entry */}
                            <h3 className="panel-heading">กรอกข้อมูลเอง</h3>
                            <a href="/CreateProfile2">
                            <button className="start-manual-btn">
                                เริ่มกรอก <span className="info-icon">ⓘ</span>
                            </button>
                            </a>

                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}