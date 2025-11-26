import React, { useState } from 'react';
import "../styles/CreateProfile5.css";
import { Link } from "react-router-dom";

// NOTE: Import the styled components from the CSS file (assuming styled-components is used)
// import { AppContainer, PerFileHeader, ContentBox, ... } from './styles.js';

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

const skillTags = {
  language: ['ภาษา', 'พูด', 'อ่าน', 'เขียน'],
  microsoft: ['Word', 'Excel', 'PowerPoint'],
  adobe: ['Photoshop', 'Illustrator', 'Lightroom', 'InDesign', 'Premiere Pro', 'After Effects', 'Audition'],
  designSoftware: ['Canva', 'DaVinci Resolve', 'AutoCAD', 'โปรแกรมอื่น'],
  generalSkills: ['การวิเคราะห์ข้อมูล (Data Analysis)', 'การบริหารโครงการ (Project Management)', 'การจัดการการสื่อสาร', 'การเงิน/บัญชี'],
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Angular'],
  backend: ['Python', 'Java', 'PHP', 'Go (Golang)'],
};

// --- Main Component ---
const ResumeCreator = () => {
  const [activeStep, setActiveStep] = useState(4); // 'Skills' step
  const [selectedSkills, setSelectedSkills] = useState(new Set(['InDesign', 'JavaScript', 'Python']));

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skill)) {
        newSet.delete(skill);
      } else {
        newSet.add(skill);
      }
      return newSet;
    });
  };

  const renderSkillGroup = (title, tags, className = '') => (
    // Replace SkillGroup with a generic <div> and use className for styling
    <div className={`SkillGroup ${className}`}>
      <div className="SkillTitle">{title}</div>
      <div className="TagContainer">
        {tags.map((tag) => (
          // Replace SkillTag with a generic <div>
          <div
            key={tag}
            className={`SkillTag ${selectedSkills.has(tag) ? 'active' : ''}`}
            onClick={() => toggleSkill(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    // Assuming AppContainer, ContentBox, etc., are standard HTML elements 
    // styled with the CSS provided below (using class names or styled-components)
    <div className="AppContainer">
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
                className={`NavLink ${item.label === 'Skills' ? 'active' : ''}`}
              >
                {item.label}
              </div>
            ))}
          </div>
          
          {/* Right Content */}
          <div className="RightContent">
            <div className="ContentHeader">
              <h2 className="HeaderTitle">ทักษะ/ความสามารถ</h2>
              <span className="HeaderSubtitle">คีย์หลักฐานความสามารถ</span>
            </div>
            
            <div className="SkillsSection">
              
              {/* Language Skills */}
              {renderSkillGroup('ทักษะภาษาต่างประเทศ', skillTags.language)}
              <button className="AddButton">+ ทักษะภาษาต่างประเทศเพิ่มเติม</button>
              
              {/* Computer Skills */}
              <div className="SkillTitle">อ่านโปรแกรมคอมพิวเตอร์</div>
              
              {/* Microsoft Office */}
              {renderSkillGroup('Microsoft', skillTags.microsoft, 'microsoft-group')}
              
              {/* Adobe Creative Suite */}
              {renderSkillGroup('Adobe', skillTags.adobe, 'adobe-group')}
              
              {/* Other Design/Software */}
              {renderSkillGroup('อื่นๆ', skillTags.designSoftware, 'other-group')}
              
              {/* General Professional Skills */}
              <div className="SkillTitle">ทักษะวิชาชีพ</div>
              {renderSkillGroup('ทักษะวิชาชีพ', skillTags.generalSkills, 'professional-group')}
              
              {/* Frontend */}
              <div className="SkillTitle">Front - end</div>
              {renderSkillGroup('Front - end', skillTags.frontend, 'frontend-group')}
              
              {/* Backend */}
              <div className="SkillTitle">Back - end</div>
              {renderSkillGroup('Back - end', skillTags.backend, 'backend-group')}

              <button className="AddButton">+ ทักษะเฉพาะทางเพิ่มเติม</button>

            </div>
<a href="/CreateProfile6">
            <button className="NextButton">Next ➜</button>
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCreator;