import React, { useState } from 'react';
import "../styles/CreateProfile6.css";
import { Link } from "react-router-dom";

// --- Static Data ---
const resumeSections = [
  'Data From', 'Photo', 'Basic Data', 'Education', 
  'Skills', 'Attributes', 'Work Experience', 'Career Goals'
];

const mainNavigation = [
  { label: 'Name', component: 'Name' },
  { label: 'Basic Data', component: 'BasicData' },
  { label: 'Education', component: 'Education' },
  { label: 'Career Goals', component: 'CareerGoals' },
  { label: 'Skills', component: 'Skills' },
  { label: 'Work Experience', component: 'WorkExperience' },
  { label: 'Attributes', component: 'Attributes' },
];

// --- Main Component ---
const ResumeCreator = () => {
  // Step 6: Attributes is the active step
  const [activeStep, setActiveStep] = useState(6); 

  return (
    // Assuming AppContainer, ContentBox, etc., are standard HTML elements 
    // styled with the CSS provided below (using class names)
    <div className="AppContainer attributes-page">
      <div className="PerFileHeader">PerFile</div>
      <div className="ContentBox">
        <h1 className="MainTitle">Create Your Resume</h1>
        
        {/* Search Bar */}
        

        {/* Steps Navigation */}
        <div className="StepsContainer">
          {resumeSections.map((section, index) => (
            <div key={section} className={`StepItem ${index === activeStep - 1 ? 'active' : ''}`}>
              <div className={`StepNumber ${index === activeStep - 1 ? 'active' : ''}`}>{index + 1}</div>
              <div className="StepLabel">{section}</div>
            </div>
          ))}
        </div>

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
  );
};

export default ResumeCreator;