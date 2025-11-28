import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CreateProfile6.css";

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
    const currentStepIndex = 5;
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

{/* Main Content */}
        <div className="BodyContent">
          {/* Left Navigation */}
          <section className="left-column6">
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
          
          {/* Right Content (Attributes Section) */}
          <div className="RightContent attributes-section">
            <div className="ContentHeader">
              <h2 className="HeaderTitle">คุณสมบัติในการทำงาน</h2>
            </div>
            
            <div className="InputRow">
              <input type="text" className="AttributeInput" placeholder="กรอก" />
              <button className="AddAttributeButton">
                <span className="plus-icon">+</span> คุณสมบัติ
              </button>
            </div>
            <a href="/CreateProfile7">
            <button className="NextButton">
              Next <span className="arrow">➜</span>
            </button>
            </a>
          </div>
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}