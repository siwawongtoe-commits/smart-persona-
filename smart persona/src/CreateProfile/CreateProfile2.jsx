import React from "react";
import "../createResume.css";

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
				<header className="card-header">
					<div className="logo">PerFile</div>
				</header>

				<div className="card-body">
					<h2 className="title">Create Your Resume</h2>

					<div className="search-row">
						<div className="search-pill">
							<input
								className="search-input"
								type="text"
								placeholder="Search Resume Templates"
							/>
							<button className="filter-btn">⚙️</button>
						</div>
					</div>

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

					<div className="main-grid">
						<aside className="left-sidebar">
							<div className="sidebar-card">
								<div className="avatar-placeholder"> </div>
								<div className="sidebar-list">
									{sidebarItems.map((item, i) => (
										<div key={i} className={`sidebar-item ${i === 0 ? "big" : ""}`}>
											{item}
										</div>
									))}
								</div>
							</div>
						</aside>

						<section className="right-panel">
							<h3 className="panel-title">รูปภาพในรูปแบบ</h3>

							<div className="photo-box">
								<div className="photo-placeholder">📷</div>
								<div className="photo-actions">
									<button className="upload-btn">เพิ่มรูปภาพในรูปแบบ</button>
									<button className="next-btn">ถัดไป →</button>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}

