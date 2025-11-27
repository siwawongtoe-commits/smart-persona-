import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CreateProfile5.css";

// Component สำหรับหน้ากรอกข้อมูล Skills (ทักษะความสามารถ)
export default function CreateProfile5() {
    // กำหนดรายการขั้นตอนทั้งหมดใน Progress Bar
    const steps = [
        "Data From",
        "Photo",
        "Basic Data",
        "Education",
        "Skills", // Active Step Index = 4
        "Attributes",
        "Work Experience",
        "Career Goals",
    ];

    // กำหนดรายการเมนูใน Sidebar Navigation
    const sidebarItems = [
        "Name",
        "Basic Data",
        "Education",
        "Career Goals",
        "Skills", // Active Sidebar Index = 4
        "Work Experience",
        "Attributes",
    ];

    // กำหนดให้ขั้นตอนปัจจุบันคือ Skills (Index 4)
    const currentStepIndex = 4;
    // กำหนดให้ Sidebar ที่ active คือ Skills (Index 4)
    const currentSidebarIndex = 4;

    // State สำหรับการจัดการ Tab: 'skills' หรือ 'languages'
    const [activeTab, setActiveTab] = useState('skills');

    // ข้อมูลทักษะจำลอง
    const softSkills = ["การสื่อสาร", "การทำงานร่วมกัน", "การเป็นผู้นำ", "การแก้ปัญหา", "การบริหารเวลา", "การจัดการความขัดแย้ง"];
    const profSkills = ["การวิเคราะห์ข้อมูล (Data Analysis)", "การบริหารจัดการโครงการ (Project Management)", "การจัดซื้อจัดจ้าง", "การเงิน/บัญชี"];
    const techSkills = {
        "Microsoft": ["Word", "Excel", "PowerPoint", "Outlook", "Teams"],
        "Adobe": ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Audition", "InDesign", "Lightroom"],
        "Design & Tools": ["Canva", "DaVinci Resolve", "AutoCAD", "Figma", "Sketch", "Blender"],
        "Front-end": ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular", "Tailwind CSS"],
        "Back-end": ["Python", "Java", "PHP", "Go (Golang)", "Node.js", "C#", "SQL"],
    };
    
    // State สำหรับจำลองการเลือก Tag
    const [selectedTags, setSelectedTags] = useState(["JavaScript", "React", "Photoshop", "การสื่อสาร"]);

    // Function สำหรับการเลือก/ยกเลิกการเลือก Tag
    const toggleTag = (tag) => {
        setSelectedTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag) 
                : [...prev, tag]
        );
    };

    // Component สำหรับแสดงกลุ่มทักษะ
    const SkillGroup = ({ title, skills }) => (
        <div className="skill-section">
            <h4 className="skill-section-title">{title}</h4>
            <div className="skill-tag-container">
                {skills.map((skill) => (
                    <span 
                        key={skill} 
                        className={`skill-tag ${selectedTags.includes(skill) ? 'selected' : ''}`}
                        onClick={() => toggleTag(skill)}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );

    return (
        <div className="page-bg">
            <div className="resume-card">
                <header className="card-header1">
                    <div className="logo1">PerFile</div>
                </header>

                <div className="card-body">
                    <h2 className="title">Create Your Resume</h2>

                    {/* Search Bar (นำมาจากโค้ดเดิม) */}
                    <div className="search-row">
                        <div className="search-pill">
                            <i className="search-icon">🔍</i> 
                            <input
                                className="search-input"
                                type="text"
                                placeholder="Search Resume Templates"
                            />
                            <button className="filter-btn">
                                <i className="filter-icon">&#x2630;</i>
                            </button>
                        </div>
                    </div>

                    {/* Step Indicator */}
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
                        {/* Left Sidebar (Navigation/Preview) */}
                        <aside className="left-sidebar">
                            <div className="sidebar-card">
                                {/* Avatar/Photo Section */}
                                <div className="avatar-placeholder"> 
                                    <i className="avatar-icon">👤</i>
                                </div> 
                                
                                {/* Sidebar Navigation List */}
                                <div className="sidebar-list">
                                    {sidebarItems.map((item, i) => (
                                        <div 
                                            key={i} 
                                            className={`sidebar-item 
                                                ${i === 0 || i === 4 || i === 5 || i === 6 ? "big" : ""} 
                                                ${i === currentSidebarIndex ? "highlight" : ""}
                                            `}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* Right Panel (Skills Form) */}
                        <section className="right-panel">
                            <h3 className="panel-title">ทักษะและความสามารถ</h3>

                            {/* Tab Navigation */}
                            <div className="tab-navigation">
                                <div 
                                    className={`tab-item ${activeTab === 'skills' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('skills')}
                                >
                                    ทักษะความสามารถ
                                </div>
                                <div 
                                    className={`tab-item ${activeTab === 'languages' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('languages')}
                                >
                                    ทักษะภาษาต่างประเทศ
                                </div>
                            </div>

                            {activeTab === 'skills' && (
                                <div className="form-content skills-form">
                                    
                                    {/* 1. Soft/General Skills */}
                                    <SkillGroup 
                                        title="ทั่วไปในองค์กร / Soft Skills" 
                                        skills={softSkills} 
                                    />

                                    {/* 2. Professional Skills */}
                                    <SkillGroup 
                                        title="ทักษะวิชาชีพ" 
                                        skills={profSkills} 
                                    />
                                    
                                    {/* 3. Tech/Software Skills (Dynamic Categories) */}
                                    {Object.entries(techSkills).map(([category, skills]) => (
                                        <SkillGroup 
                                            key={category}
                                            title={category} 
                                            skills={skills} 
                                        />
                                    ))}

                                    {/* Custom Skill Input Row */}
                                    <div className="add-custom-skill-row">
                                        <input type="text" placeholder="พิมพ์ทักษะที่ต้องการเพิ่ม" className="custom-skill-input" />
                                        <button className="add-skill-btn">
                                            <i className="add-icon">+</i> เพิ่มทักษะเอง
                                        </button>
                                    </div>
                                    
                                    {/* Navigation Buttons */}
                                    <div className="navigation-buttons">
                                        <Link to="/CreateProfile4">
                                            <button className="nav-btn prev-btn">
                                                <i className="arrow-icon">←</i> Back
                                            </button>
                                        </Link>
                                        <Link to="/CreateProfile6">
                                            <button className="nav-btn next-btn">
                                                Next <i className="arrow-icon">→</i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'languages' && (
                                <div className="form-content language-form">
                                    <h3 className="panel-title-sub">ทักษะภาษาต่างประเทศ</h3>
                                    <p className="placeholder-text">
                                        ในส่วนนี้คุณสามารถระบุความสามารถทางภาษา (เช่น อังกฤษ จีน ญี่ปุ่น) และระดับความเชี่ยวชาญ 
                                        <br/>
                                        (เช่น ดีเยี่ยม พอใช้ หรือคะแนนสอบ เช่น TOEIC, HSK)
                                    </p>
                                    {/* Add language input fields here later */}
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}