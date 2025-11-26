import React from "react";
import "./StepBar.css";

export default function StepBar({ currentStep }) {
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

  return (
    <div className="progress-wrapper">
      <div className="progress-line" />
      <div className="steps">
        {steps.map((txt, i) => (
          <div
            key={i}
            className={`step-item 
              ${i === currentStep ? "active" : ""} 
              ${i < currentStep ? "completed" : ""}
            `}
          >
            <span className="step-number">{i + 1}</span>
            <span className="step-label">{txt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
