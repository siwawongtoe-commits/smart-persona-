import React from 'react';
import "../styles/FAQs.css";

const FAQs = () => {
  return (
    <div className="faqs-container">
      {/* Header Bar */}
      <header className="faqs-header">
        <h1 className="header-title">FAQs</h1>
        <a href="/Home">
        <button className="header-button">กลับไปหน้าใช้งานของฉัน</button>
        </a>
      </header>

      {/* Main Content Area */}
      <main className="faqs-content">
        <h2 className="main-title">Perfile FAQs ?</h2>
        
        <section className="faqs-section">
          
          {/* Main List of Topics */}
          <ol className="faqs-topic-list-main">
            
            {/* 1. Account & Registration */}
            <li>
              <span className="list-heading">Account & Registration</span>
              <ul className="faqs-topic-list-sub">
                <li>
                  <span className="question">Q: How do I create a Perfile account?</span>
                  <span className="answer">A: Click the "Sign Up" button on the homepage, enter your email, create a password, and verify your email address. Once verified, you can start building your career profile.</span>
                </li>
                <li>
                  <span className="question">Q: Can I have multiple accounts?</span>
                  <span className="answer">A: Yes, Perfile is optimized to recommend using a single account to manage multiple profiles efficiently and avoid confusion.</span>
                </li>
                <li>
                  <span className="question">Q: I forgot my password. What should I do?</span>
                  <span className="answer">A: Click "Forgot Password" on the login page. You'll receive an email with instructions to reset your password securely.</span>
                </li>
              </ul>
            </li>
            
            {/* 2. Resume & Profile Management */}
            <li>
              <span className="list-heading">Resume & Profile Management</span>
              <ul className="faqs-topic-list-sub">
                <li>
                  <span className="question">Q: How many profiles can I create?</span>
                  <span className="answer">A: Perfile allows you to create multiple profiles, each tailored for different job applications or industries. There is no strict limit, but account storage capacity may vary.</span>
                </li>
                <li>
                  <span className="question">Q: Can I edit or update my profile later?</span>
                  <span className="answer">A: Yes. You can freely edit your personal information, work experience, skills, and other sections at any time to keep your profiles current.</span>
                </li>
                <li>
                  <span className="question">Q: Can I delete a profile permanently?</span>
                  <span className="answer">A: If you decide that you no longer need a profile, the data will be permanently deleted from the platform's active systems.</span>
                </li>
                <li>
                  <span className="question">Q: Can I download or export my resume?</span>
                  <span className="answer">A: Yes, Perfile allows downloading resumes in PDF and DOCX formats, ready to submit to employers.</span>
                </li>
              </ul>
            </li>

            {/* 3. AI-Powered Profile */}
            <li>
              <span className="list-heading">AI-Powered Profile</span>
              <ul className="faqs-topic-list-sub">
                <li>
                  <span className="question">Q: How does the AI Profile Generator work?</span>
                  <span className="answer">A: The AI analyzes your self-curated data (work experience, education, skills) and generates polished summaries, descriptions, and skill highlights for your resumes.</span>
                </li>
                <li>
                  <span className="question">Q: Can I make edits to the AI-generated content?</span>
                  <span className="answer">A: No. AI-generated content is optional. You can review, edit, or completely rewrite the suggestions to fit your personal style.</span>
                </li>
                <li>
                  <span className="question">Q: Is my data protected when used by the AI?</span>
                  <span className="answer">A: Yes. Data processed by the AI is securely handled and not shared outside the platform without your permission.</span>
                </li>
              </ul>
            </li>
            
            {/* 4. Job Search & Recommendations */}
            <li>
              <span className="list-heading">Job Search & Recommendations</span>
              <ul className="faqs-topic-list-sub">
                <li>
                  <span className="question">Q: How does Perfile suggest jobs?</span>
                  <span className="answer">A: Perfile analyzes your background information, skills, and career preferences to filter and recommend jobs that align with your background and goals.</span>
                </li>
                <li>
                  <span className="question">Q: Can I customize job recommendations?</span>
                  <span className="answer">A: Yes, you can set filters based on industry, roles, experience level, and location to refine the recommendations.</span>
                </li>
                <li>
                  <span className="question">Q: Are the job suggestions guaranteed?</span>
                  <span className="answer">A: The suggestions are based on calculations based on your profile. We do not guarantee job placement but aim to provide the most relevant opportunities.</span>
                </li>
              </ul>
            </li>

            {/* 5. Security & Privacy */}
            <li>
              <span className="list-heading">Security & Privacy</span>
              <ul className="faqs-topic-list-sub">
                <li>
                  <span className="question">Q: How is my personal data stored?</span>
                  <span className="answer">A: Your data is protected by secure, encrypted servers with strict access controls and regular backups to prevent loss.</span>
                </li>
                <li>
                  <span className="question">Q: Can I delete my data from Perfile?</span>
                  <span className="answer">A: Yes, you can permanently delete your entire account, and the platform will remove your personal data from active systems.</span>
                </li>
                <li>
                  <span className="question">Q: Does Perfile share my data with third parties?</span>
                  <span className="answer">A: We share data only with trusted third-party service providers under strict agreements or as required by law.</span>
                </li>
                <li>
                  <span className="question">Q: How do I control my privacy settings?</span>
                  <span className="answer">A: You can manage privacy settings in your account dashboard, including data sharing preferences, AI usage, and notifications.</span>
                </li>
              </ul>
            </li>
            
            {/* 6. Technical & Platform Issues */}
            <li>
              <span className="list-heading">Technical & Platform Issues</span>
              <ul className="faqs-topic-list-sub">
                <li>
                  <span className="question">Q: What should I do if I encounter an error?</span>
                  <span className="answer">A: Check the Help Center for common troubleshooting steps. If the issue persists, contact our support team through email or live chat.</span>
                </li>
                <li>
                  <span className="question">Q: Is Perfile optimized for mobile use?</span>
                  <span className="answer">A: Yes, Perfile is optimized for desktop and mobile devices, allowing you to create and manage profiles on the go.</span>
                </li>
                <li>
                  <span className="question">Q: What if I lose a profile?</span>
                  <span className="answer">A: Once a profile is permanently deleted, it cannot be recovered. Make sure to download any important information before deletion.</span>
                </li>
              </ul>
            </li>

            {/* 7. Support & Contacts */}
            <li>
              <span className="list-heading">Support & Contacts</span>
              <ul className="faqs-topic-list-sub">
                <li>
                  <span className="question">Q: How can I contact customer support?</span>
                  <span className="answer">A: You can reach support via email, live chat, or the contact form on the platform. Response times are typically within 24–48 business hours.</span>
                </li>
                <li>
                  <span className="question">Q: Can I suggest new features or report bugs?</span>
                  <span className="answer">A: Yes. Use the feedback form in the Help Center or contact support directly. We value user suggestions to improve the platform.</span>
                </li>
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

export default FAQs;