import React, { useState } from 'react';
import "./CreateProfile5.css";

const resumeSections = [
  'Data Form', 'Photo', 'Basic Data', 'Education', 
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

const ResumeCreator = () => {
  const [activeStep, setActiveStep] = useState(5); // Step ปัจจุบันคือ Skills
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

  const renderSkillGroup = (title, tags) => (
    <div className="SkillGroup">
      <div className="SkillTitle">{title}</div>
      <div className="TagContainer">
        {tags.map(tag => (
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
    <div className="AppContainer">
      <div className="PerFileHeader">PerFile</div>
      <div className="ContentBox">
        <h1 className="MainTitle">Create Your Resume</h1>

        {/* Steps Navigation */}
        <div className="StepsContainer">
          {resumeSections.map((section, index) => {
            const isCompleted = index < activeStep - 1;
            const isActive = index === activeStep - 1;
            return (
              <div key={section} className={`StepItem ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}>
                <div className="StepNumber">{index + 1}</div>
                <div className="StepLabel">{section}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="BodyContent">
          <div className="LeftNav">
            <div className="ProfileIconBox">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            {mainNavigation.map(item => (
              <div key={item.label} className={`NavLink ${item.label === 'Skills' ? 'active' : ''}`}>
                {item.label}
              </div>
            ))}
          </div>

          <div className="RightContent">
            <div className="ContentHeader">
              <h2 className="HeaderTitle">ทักษะ/ความสามารถ</h2>
              <span className="HeaderSubtitle">คีย์หลักฐานความสามารถ</span>
            </div>

            <div className="SkillsSection">
              {renderSkillGroup('ทักษะภาษาต่างประเทศ', skillTags.language)}
              {renderSkillGroup('Microsoft', skillTags.microsoft)}
              {renderSkillGroup('Adobe', skillTags.adobe)}
              {renderSkillGroup('อื่นๆ', skillTags.designSoftware)}
              {renderSkillGroup('ทักษะวิชาชีพ', skillTags.generalSkills)}
              {renderSkillGroup('Front - end', skillTags.frontend)}
              {renderSkillGroup('Back - end', skillTags.backend)}
            </div>

            <button className="NextButton">ถัดไป ➜</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCreator;
