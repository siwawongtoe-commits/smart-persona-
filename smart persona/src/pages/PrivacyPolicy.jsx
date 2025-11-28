import React from 'react';
import './PrivacyPolicy.css'; // นำเข้าไฟล์ CSS

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      {/* Header Bar */}
      <header className="privacy-header">
        <h1 className="header-title">Privacy Policy</h1>
        <button className="header-button">กลับไปหน้าใช้งานของฉัน</button>
      </header>

      {/* Main Content Area */}
      <main className="privacy-content">
        <section className="section introduction-section">
          <h2 className="section-title">Introduction</h2>
          <p>
            Welcome to Perfrile, your smart and intuitive resume-building platform designed to make job applications effortless and effective. Perfrile lets you create and manage multiple personalized resume profiles, allowing you to tailor each one for different career paths or job opportunities. With our job filtering system, you can easily explore roles that match your skills, interests, and professional goals. And with Perfrile's powerful AI Profile Generator, you can instantly craft polished, compelling content that highlights your strengths and helps you stand out.
          </p>
          <p>
            Discover a seamless way to build your future—professionally, clearly, and confidently.
          </p>
          <hr className="divider" />
          <p className="policy-intro-text">
            This Policy will help you understand the following:
          </p>
          <ol className="policy-list-main">
            <li>How Your Personal Information is Collected and Used</li>
            <li>How to entrust the processing, sharing, transfer, and disclosure of your personal information</li>
            <li>How do you manage your personal information?</li>
            <li>How your personal information is stored</li>
            <li>How to update this policy</li>
            <li>How to contact us</li>
          </ol>
        </section>

        {/* Section 1: How Your Personal Information is Collected and Used */}
        <section className="section">
          <h2 className="section-title">1. How Your Personal Information is Collected and Used</h2>
          <ol className="policy-list-sub">
            <li>
              <span className="list-heading">Personal Information Collection</span><br />
              We collect information you provide, such as your name, contact information, work history, education, and skills solely for the purpose of generating resume profiles and improving your user experience.
            </li>
            <li>
              <span className="list-heading">Purpose of Data Usage</span><br />
              Your data is primarily used to create customized resume templates, generate AI-powered profile contents, and provide job recommendations that match your background and interests.
            </li>
            {/* ... เพิ่มรายการย่อยที่เหลือ (3-6) ตามภาพ ... */}
            <li>
              <span className="list-heading">Data Storage and Recommendations</span><br />
              The data you provide enables you to build and manage multiple resume profiles, each tailored for different job positions or industries.
            </li>
            <li>
              <span className="list-heading">User Interaction Data</span><br />
              This data includes interactions with AI capabilities, as well as selection of desired profile settings, such as color schemes, font choices, and skills highlights—based on the information you choose to include.
            </li>
            <li>
              <span className="list-heading">Job Filtering and Recommendations</span><br />
              We use your past experience, education, chosen skills, and experience to filter job categories and suggest relevant opportunities that align with your profile.
            </li>
            <li>
              <span className="list-heading">Data Storage and Security</span><br />
              We keep your data carefully stored securely using encrypted systems to ensure your data remains private and protected from unauthorized access.
            </li>
          </ol>
        </section>

        {/* Section 2: How to entrust the processing, sharing, transfer, and disclosure of your personal information */}
        <section className="section">
          <h2 className="section-title">2. How to entrust the processing, sharing, transfer, and disclosure of your personal information</h2>
          <p className="policy-intro-text">
            How We Ensure Trust in Processing, Sharing, Transferring, and Disclosing Your Personal Information:
          </p>
          <ol className="policy-list-sub">
            <li>
              <span className="list-heading">Transparent Data Practices</span><br />
              We will inform you whenever your information is processed, used, and protected, ensuring full transparency at every step.
            </li>
            <li>
              <span className="list-heading">Purpose-Limited Sharing</span><br />
              Your personal data is processed only for functions you actively use—such as resume creation, AI profile generation, and job filtering—never for unrelated or unlisted purposes.
            </li>
            {/* ... เพิ่มรายการย่อยที่เหลือ (3-9) ตามภาพ ... */}
            <li>
              <span className="list-heading">Access Control Measures</span><br />
              Only authorized systems and personnel have access to your information, ensuring it is handled responsibly and securely.
            </li>
            <li>
              <span className="list-heading">Compliance with Standards</span><br />
              We are committed to operating within applicable data protection laws and industry standards.
            </li>
            <li>
              <span className="list-heading">Protected Data Transfers</span><br />
              We encrypt all transmitted information, whether within the platform or to approved services, to guarantee protection against industry-standard security protocols.
            </li>
            <li>
              <span className="list-heading">Legal Disclosure</span><br />
              Personal data is disclosed only when necessary (e.g., legal compliance) and never without a valid reason or explicit authorization.
            </li>
            <li>
              <span className="list-heading">Consent and Authorization</span><br />
              Perfrile requires permission before sharing or transferring data for optional features, resulting in your full control of your information.
            </li>
            <li>
              <span className="list-heading">Security Compliance</span><br />
              The platform undergoes continuous monitoring and periodic audits to maintain high standards of data protection and trustworthiness.
            </li>
          </ol>
        </section>

        {/* Section 3: How do you manage your personal information? */}
        <section className="section">
          <h2 className="section-title">3. How do you manage your personal information?</h2>
          <p className="policy-intro-text">
            How You Manage Your Personal Information
          </p>
          <ol className="policy-list-sub">
            <li>
              <span className="list-heading">Viewing and Editing</span><br />
              You can view all personal information stored in your Perfrile account at any time, including resume details, profile data, and saved preferences.
            </li>
            <li>
              <span className="list-heading">Updating Information</span><br />
              Perfrile allows you to freely edit, update, or correct any information—such as work experience, skills, or personal details—to keep your profiles accurate and up to date.
            </li>
            {/* ... เพิ่มรายการย่อยที่เหลือ (3-9) ตามภาพ ... */}
            <li>
              <span className="list-heading">Data Accuracy Control</span><br />
              You can ensure that all data in your resume template remains accurate.
            </li>
            <li>
              <span className="list-heading">Resume Download and Export</span><br />
              You can instantly download your resume data into various file formats.
            </li>
            <li>
              <span className="list-heading">Deletion Rights</span><br />
              You have the right to permanently delete specific profiles or your entire account. When deleted, your personal information is removed from Perfrile's active systems.
            </li>
            <li>
              <span className="list-heading">Sharing Preferences</span><br />
              You can manage preferences related to data sharing, AI usage, and job-matching features directly through your account settings.
            </li>
            <li>
              <span className="list-heading">Opt-out of Marketing</span><br />
              You may opt-out of receiving promotional content or targeted marketing at any time.
            </li>
            <li>
              <span className="list-heading">Activity Tracking Review</span><br />
              You can review your activity history, such as profile creation or updates, to better understand your information is being used within the platform.
            </li>
          </ol>
        </section>
        
        {/* Scroll down indicator for context */}
        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;