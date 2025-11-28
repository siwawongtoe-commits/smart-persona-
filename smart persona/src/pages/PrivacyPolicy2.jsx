import React from 'react';
import './PrivacyPolicy2.css'; // ใช้ไฟล์ CSS เดียวกันกับส่วนแรก

const PrivacyPolicyPart2 = () => {
  return (
    <div className="privacy-container">
      {/* Header Bar */}
      <header className="privacy-header">
        <h1 className="header-title">Privacy Policy 2 & Contact Us</h1>
        <button className="header-button">กลับไปหน้าใช้งานของฉัน</button>
      </header>

      {/* Main Content Area */}
      <main className="privacy-content">
        
        {/* Section 4: How your personal information is stored */}
        <section className="section">
          <h2 className="section-title">4. How your personal information is stored</h2>
          <p className="policy-intro-text">
            How Your Personal Information Is Stored
          </p>
          <ol className="policy-list-sub">
            <li>
              <span className="list-heading">Secure Cloud Storage</span><br />
              All personal data is stored in secure, encrypted cloud servers designed to protect against unauthorized access and data breaches.
            </li>
            <li>
              <span className="list-heading">Encryption During Storage and Transit</span><br />
              All information is encrypted both while stored ("at rest") and while being transferred ("in transit") to ensure maximum protection.
            </li>
            <li>
              <span className="list-heading">Access Control Measures</span><br />
              Stored data is accessible only to authorized systems and personnel who require it to operate platform features, following strict access-control policies.
            </li>
            <li>
              <span className="list-heading">Auditing and Logs</span><br />
              We continuously audit system logs to proactively monitor access to your information and detect any suspicious activities or incidents.
            </li>
            <li>
              <span className="list-heading">Aggregated Data Storage</span><br />
              We may securely store anonymized system logs and analytics information to optimize risk and maintain clean data boundaries.
            </li>
            <li>
              <span className="list-heading">Data Preservation and Management</span><br />
              Storage methods follow approved data security standards and best practices, ensuring your information remains protected and well-managed.
            </li>
            <li>
              <span className="list-heading">Continuous Security Monitoring</span><br />
              Continuous system monitoring helps identify, prevent, and respond to any suspicious activity or security threats that may affect stored data.
            </li>
            <li>
              <span className="list-heading">Legal Requirements</span><br />
              Your information is stored only for as long as necessary to provide platform services, comply with legal requirements, or until you choose to delete it.
            </li>
          </ol>
        </section>

        {/* Section 5: How to update this policy */}
        <section className="section">
          <h2 className="section-title">5. How to update this policy</h2>
          <p className="policy-intro-text">
            How This Policy Is Updated
          </p>
          <ol className="policy-list-sub">
            <li>
              <span className="list-heading">Periodic Review</span><br />
              We review and update this policy regularly to ensure it remains accurate, compliant with applicable laws, and aligned with our current data handling practices.
            </li>
            <li>
              <span className="list-heading">Notification of Changes</span><br />
              If we make significant changes—such as changes to how your data is processed, stored, or shared—we will notify you through the platform, email, or other appropriate channels.
            </li>
            <li>
              <span className="list-heading">Effective Date Changes</span><br />
              Each update will include an effective date so you can readily understand when the new terms apply.
            </li>
            <li>
              <span className="list-heading">Acceptance of Revised Terms</span><br />
              By continuing to use Perfrile after an updated policy takes effect, you acknowledge and accept the revised terms.
            </li>
            <li>
              <span className="list-heading">Access to Previous Versions</span><br />
              We maintain previous versions of this policy to outline the history of updates for your reference.
            </li>
            <li>
              <span className="list-heading">Encouragement to Review Regularly</span><br />
              Users are encouraged to review this policy periodically to stay informed about how their information is protected and managed.
            </li>
          </ol>
        </section>

        {/* Section 6: How to contact us */}
        <section className="section">
          <h2 className="section-title">6. How to contact us</h2>
          <p className="policy-intro-text">
            How To Contact Us
          </p>
          <ol className="policy-list-sub">
            <li>
              <span className="list-heading">General Support Email</span><br />
              You may contact our support team at [your support email] for questions about your account, data usage, or any concerns regarding this policy.
            </li>
            <li>
              <span className="list-heading">Complaint Form</span><br />
              We maintain an online contact form within the platform where you can submit inquiries, report issues, or request assistance.
            </li>
            <li>
              <span className="list-heading">Response Time</span><br />
              Our team aims to respond to all inquiries within a reasonable timeframe, typically within [your standard response time] business days.
            </li>
            <li>
              <span className="list-heading">Data Protection Officer (DPO)</span><br />
              For matters related specifically to privacy, data access, or data deletion, you may contact our Data Protection Officer at [your DPO or privacy email].
            </li>
            <li>
              <span className="list-heading">Regulatory Bodies</span><br />
              We provide contact information on our main correspondence to [the company’s physical address].
            </li>
            <li>
              <span className="list-heading">Additional Support Channels</span><br />
              If you prefer direct communication, access the [live chat, phone number, or social media handles] based on the Perfrile website.
            </li>
          </ol>
        </section>

        <p className="copyright-text">
          &copy; 2025 All rights reserved. _Perfrile
        </p>

      </main>
    </div>
  );
};

export default PrivacyPolicyPart2;