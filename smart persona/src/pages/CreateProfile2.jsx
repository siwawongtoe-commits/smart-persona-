import React from "react";
import "../styles/CreateProfile2.css";
import { Link } from "react-router-dom";

export default function CreateProfile2() {
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

	const sidebarItems = [
		"Name",
		"Basic Data",
		"Education",
		"Career Goals",
		"Skills",
		"Work Experience",
		"Attributes",
	];

	return (
		<div className="page-bg">
			<div className="resume-card">
				<header className="card-header1">
					<div className="logo1">PerFile</div>
				</header>

				<div className="card-body">
					<h2 className="title">Create Your Resume</h2>

					<div className="search-row">
						
					</div>

					<div className="progress-wrapper">
						<div className="steps">
							{steps.map((txt, i) => (
								<div
									key={i}
									className={`step-item 
        ${i === 0 ? "completed" : ""}     /* step 1: green */
        ${i === 1 ? "active-blue" : ""}  /* step 2: blue w/ ring */
      `}
								>
									<span className="step-number">{i + 1}</span>
									<span className="step-label">{txt}</span>
								</div>
							))}
						</div>



					</div>

					<div className="main-grid">
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
						<section className="right-panel">
							<h3 className="panel-title1">รูปภาพในรูปแบบ</h3>
							<div className="photo-box">
								<div className="photo-placeholder">📷</div>
								<div className="photo-actions">
									<button className="upload-btn">Add Photo</button>
									<a href="/CreateProfile3">
										<button className="next-btn">Next →</button>
									</a>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}

