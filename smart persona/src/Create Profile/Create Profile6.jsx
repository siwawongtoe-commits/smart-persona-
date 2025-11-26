import React, { useState } from 'react';

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
        <div className="SearchContainer">
          <span className="SearchIcon">🔍</span>
          <input className="SearchInput" placeholder="Search Resume Templates" />
          <div className="FilterIcon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
          </div>
        </div>

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
          <div className="LeftNav">
            <div className="ProfileIconBox">
              <div className="ProfileIcon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
            </div>
            {mainNavigation.map(item => (
              <div 
                key={item.label} 
                className={`NavLink ${item.label === 'Attributes' ? 'active' : ''} ${item.label === 'Work Experience' ? 'larger' : ''}`}
              >
                {item.label}
              </div>
            ))}
          </div>
          
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
            
            <button className="NextButton">
              ถัดไป <span className="arrow">➜</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCreator;