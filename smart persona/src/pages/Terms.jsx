import React from 'react';
import "../styles/Terms.css";

const TermsOfUse = () => {
  return (
    <div className="terms-container">
      {/* Header Bar */}
      <header className="terms-header">
        <h1 className="header-title">Terms</h1>
        <a href="/Setting">
        <button className="header-button">กลับไปหน้าใช้งานของฉัน</button>
        </a>
      </header>

      {/* Main Content Area */}
      <main className="terms-content">
        <h2 className="main-title">Terms of use</h2>
        
        {/* Overview Section */}
        <section className="section overview-section">
          <h3 className="section-title">Overview</h3>
          <p>
            Perfile is a smart, user-friendly platform designed to simplify the process of creating professional resumes and managing your career profiles. By combining intuitive tools with advanced AI capabilities, Perfile empowers you to build multiple tailored resumes, discover job opportunities that match your skills, and present your qualifications with confidence.
          </p>
          <p>
            The Terms of Use ("Terms") govern your access and use of the Perfile platform, its services, and all associated content. These Terms constitute a legal agreement between you and Perfile and set out the overall user agreement. Please read these Terms carefully before proceeding with the use of the services.
          </p>
          <p>
            This policy outlines how your information is collected, used, stored, shared, and protected. It also explains your rights, how you can manage your data, and how we keep you informed about changes to this policy. Perfile's mission is to help you take control of your career journey while ensuring your Personal Information remains safe, private, and fully within your control.
          </p>
        </section>

        {/* Use Service Section */}
        <section className="section">
          <h3 className="section-title">Use Sevice</h3>
          <ol className="terms-list-sub">
            <li>
              <span className="list-heading">Eligibility</span><br />
              You must be of legal age in your jurisdiction and capable of forming a binding agreement to use Perfile's services.
            </li>
            <li>
              <span className="list-heading">Account Creation</span><br />
              Some platform features—such as creating multiple profiles or using AI generation—you need to register for an account and provide accurate, up-to-date information.
            </li>
            <li>
              <span className="list-heading">Permitted Usage</span><br />
              You agree to use Perfile only for lawful purposes, including creating resumes, managing career profiles, and exploring job opportunities.
            </li>
            <li>
              <span className="list-heading">User Responsibility and Accuracy</span><br />
              You may create, customize, and manage multiple resume profiles. You are responsible for ensuring the accuracy and truthfulness of the information you include.
            </li>
            <li>
              <span className="list-heading">AI Generated Content</span><br />
              Perfile uses AI-generated content to support your resume building. You remain responsible for reviewing and verifying the accuracy of all AI-created information before use.
            </li>
            <li>
              <span className="list-heading">No Unauthorized Activities</span><br />
              You must not interfere with the platform by attempting to access restricted areas, modify system functionality, upload harmful content, or engage in any behavior that disrupts service operations.
            </li>
            <li>
              <span className="list-heading">Intellectual Property</span><br />
              All tools, design elements, and technology provided by Perfile remain the property of the platform. Generated resumes belong to you, but you may not reproduce or distribute platform elements or coding outside of use.
            </li>
            <li>
              <span className="list-heading">Termination Rights</span><br />
              Perfile reserves the right to suspend or terminate your access if any misuse, fraudulent activity, or violation of these terms is detected.
            </li>
            <li>
              <span className="list-heading">Service Availability</span><br />
              While we strive to maintain smooth and stable service, Perfile may occasionally undergo maintenance or experience interruptions. We are not liable for temporary service unavailability.
            </li>
          </ol>
        </section>

        {/* Security and data privacy Section */}
        <section className="section">
          <h3 className="section-title">Security and data privacy</h3>
          <ol className="terms-list-sub">
            <li>
              <span className="list-heading">Data Encryption</span><br />
              All personal information is encrypted both in transit and at rest, ensuring your data is protected from unauthorized access.
            </li>
            <li>
              <span className="list-heading">Access Control</span><br />
              Only authorized personnel with a legitimate need can access your data, and strict access policies are enforced to protect privacy.
            </li>
            <li>
              <span className="list-heading">Secure Storage</span><br />
              Your information is stored on secure servers that follow industry-standard security protocols, including firewalls and intrusion detection systems.
            </li>
            <li>
              <span className="list-heading">Regular Backup</span><br />
              Data is regularly backed up and stored securely to ensure data recovery in case of system failures.
            </li>
            <li>
              <span className="list-heading">Monitoring and Threat Detection</span><br />
              The platform continuously monitors and responds to potential security threats, minimizing risk of data breaches.
            </li>
            <li>
              <span className="list-heading">User Control Over Data</span><br />
              You can view, edit, or delete your personal information and resume profiles at any time, giving you full control over your data.
            </li>
            <li>
              <span className="list-heading">Third-Party Trust</span><br />
              Any trusted partners involved in supporting Perfile's services are required to follow strict confidentiality and data protection agreements.
            </li>
            <li>
              <span className="list-heading">Legal Compliance</span><br />
              Personal data is shared or disclosed only when necessary for service delivery, legal compliance, or with your explicit consent.
            </li>
            <li>
              <span className="list-heading">AI Data Handling</span><br />
              Data used for AI-generated profiles is processed securely and is not shared outside the platform without permission.
            </li>
            <li>
              <span className="list-heading">Audit Policy</span><br />
              Security and privacy measures are regularly reviewed and updated to ensure compliance with best practices and applicable laws.
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

export default TermsOfUse;