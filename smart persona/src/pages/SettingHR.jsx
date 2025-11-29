import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/SettingHR.css";

const mainNavigation = [
  { label: 'Saved', component: 'Name' },
  { label: 'Notification', component: 'BasicData' },
  { label: 'About', component: '/PrivacyPolicy' },
  { label: 'Help Center', component: '/Helpcenter' },
  { label: 'FAQs', component: '/FAQs' },
  { label: 'Contact Us', component: '/PrivacyPolicy2' },
];

const SettingHR = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("currentUserHR")) || { HR: [], Admin: [] };
    if (users.HR.length > 0) setCurrentUser(users.HR[users.HR.length - 1]);
  }, []);

  const handleNavigation = (path) => { navigate(path); };

  return (
    <div className="settings-container">
      <header className="header-bar">
        <div className="logo-section">PerFile</div>
        <a href="/Home-HR"><button className="back-button1">Back</button></a>
      </header>

      <main className="settings-content">
        <div className="user-profile-card">
          <div className="profile-image">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>

          <div className="user-details">
            <p className="user-name">{currentUser ? currentUser.name : "HR. Guest"}</p>
            <p className="user-email">{currentUser ? currentUser.email : "no-email@example.com"}</p>
          </div>

          <div className="profile-actions">
            <button className="action-button manage-button">Manage Profile</button>
          </div>
        </div>

        <aside className="settings-menu" style={{marginTop: 20}}>
          {mainNavigation.map((item, idx) => (
            <div key={idx} className="setting-item" onClick={() => handleNavigation(item.component)}>
              <div className="item-content">
                <div className="item-title">{item.label}</div>
              </div>
              <div className="item-arrow">›</div>
            </div>
          ))}
        </aside>

        <div className="action-buttons-group">
          <a href="/"><button className="action-button logout-button">Log Out</button></a>
        </div>
      </main>
    </div>
  );
};

export default SettingHR;
