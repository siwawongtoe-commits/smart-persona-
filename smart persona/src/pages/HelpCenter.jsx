import React from 'react';
import "../styles/HelpCenter.css";

const HelpCenter = () => {
  return (
    <div className="help-container">
      {/* Header Bar */}
      <header className="help-header">
        <h1 className="header-title">Help Center ( Support )</h1>
        <a href="/Setting">
        <button className="header-button">กลับไปหน้าใช้งานของฉัน</button>
        </a>
      </header>

      {/* Main Content Area */}
      <main className="help-content">
        <h2 className="main-title">Help Center</h2>
        
        <section className="help-section">
          <h3 className="help-section-title">Perfile Help Center</h3>
          
          {/* Main List of Topics */}
          <ol className="help-topic-list-main">
            
            {/* 1. Getting started */}
            <li>
              <span className="list-heading">Getting started</span>
              <ul className="help-topic-list-sub">
                <li>Creating an Account</li>
                <li>Step-by-step instructions on signing up, verifying your email, and setting up your first profile.</li>
                <li>Navigating the Dashboard</li>
                <li>Understanding the features: different sections, manage multiple profiles, and use main features effectively.</li>
                <li>System Requirements</li>
                <li>Compatible browsers, devices, and internet speed to ensure smooth operation of the platform.</li>
              </ul>
            </li>
            
            {/* 2. Resume and Profile Management */}
            <li>
              <span className="list-heading">Resume and Profile Management</span>
              <ul className="help-topic-list-sub">
                <li>Creating Multiple Profiles</li>
                <li>Instructions for creating, duplicating, and customizing multiple resume profiles for different job applications.</li>
                <li>Editing and Updating Profiles</li>
                <li>How to manage personal information, work experience, education, skills, and other profile elements.</li>
                <li>Deleting Profiles</li>
                <li>Steps to permanently delete or unlisted profiles permanently.</li>
                <li>Downloading & Exporting Resumes</li>
                <li>Tips for downloading & exporting resumes in various formats (PDF, DOCX, etc.).</li>
              </ul>
            </li>

            {/* 3. AI-Powered Profile Generation */}
            <li>
              <span className="list-heading">AI-Powered Profile Generation</span>
              <ul className="help-topic-list-sub">
                <li>Using the AI Assistant</li>
                <li>Instructions on generating summaries, skill highlights, and experience descriptions using the AI tool.</li>
                <li>Reviewing AI-Generated Content</li>
                <li>Tips for reviewing and customizing AI-generated content to ensure accuracy and alignment with your career goals.</li>
                <li>AI Data Usage Policy</li>
                <li>How Perfile uses your data for AI features and your control over AI-generated content.</li>
              </ul>
            </li>
            
            {/* 4. Job Search and Recommendations */}
            <li>
              <span className="list-heading">Job Search and Recommendations</span>
              <ul className="help-topic-list-sub">
                <li>Using Career Filters</li>
                <li>Guide to customizing filters for industries, roles, locations, and experience levels.</li>
                <li>Saving Job Preferences</li>
                <li>Setting and managing preferences for personalized recommendations.</li>
                <li>Maximizing Job Chances</li>
                <li>Tips for aligning specific profiles with job opportunities to maximize your chances of success.</li>
              </ul>
            </li>

            {/* 5. Account and Security Settings */}
            <li>
              <span className="list-heading">Account and Security Settings</span>
              <ul className="help-topic-list-sub">
                <li>Updating Personal Information</li>
                <li>How to edit name, address, contact details, login information, and other personal data.</li>
                <li>Changing Passwords</li>
                <li>Best practices for updating passwords and enabling secure login practices.</li>
                <li>Two-Factor Authentication (2FA)</li>
                <li>Steps and requirements for additional account security.</li>
                <li>Managing Privacy Settings</li>
                <li>Control settings for how information is shared, AI usage permissions, and notification preferences.</li>
              </ul>
            </li>
            
            {/* 6. Troubleshooting & Common Issues */}
            <li>
              <span className="list-heading">Troubleshooting & Common Issues</span>
              <ul className="help-topic-list-sub">
                <li>Login and Access Issues</li>
                <li>Solutions for password resets, account recovery, and access issues.</li>
                <li>Error Messages</li>
                <li>Common platform errors and their recommended fixes.</li>
                <li>Export and Format Issues</li>
                <li>Tips for resume layout, font, or compatibility problems during exports.</li>
              </ul>
            </li>

            {/* 7. Contacting Support */}
            <li>
              <span className="list-heading">Contacting Support</span>
              <ul className="help-topic-list-sub">
                <li>Email, live chat, contact forms, and social media channels for reaching Perfile support.</li>
                <li>Response Time</li>
                <li>Typical response times for inquiries and escalation procedures for urgent issues.</li>
                <li>Feature Requests/Bugs</li>
                <li>How to provide suggestions, report bugs, or request new features.</li>
              </ul>
            </li>
            
          </ol>
        </section>

        <p className="copyright-text">
          &copy; 2025 All rights reserved. _Perfile
        </p>
      </main>
    </div>
  );
};

export default HelpCenter;