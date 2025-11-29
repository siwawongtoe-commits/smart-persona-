import React, { useState, useEffect } from 'react';
import "../styles/SettingAdmin.css";
import { useNavigate } from 'react-router-dom';

const mainNavigation = [
  { label: 'Saved', component: 'Name' },
  { label: 'Notification', component: 'BasicData' },
  { label: 'About', component: '/PrivacyPolicy' },
  { label: 'Help Center', component: '/Helpcenter' },
  { label: 'FAQs', component: '/FAQs' },
  { label: 'Contact Us', component: '/PrivacyPolicy2' },
];

const ResumeCreator = () => {
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [activeStep, setActiveStep] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser && storedUser.role === "Admin") {
      setCurrentAdmin(storedUser);
    }
  }, []);

  const handleNavigation = (path) => { navigate(path); };

  return (
    <div className="settings-container">
      <header className="header-bar">
        <div className="logo-section">PerFile</div>
        <button className="back-button-admin" onClick={() => navigate("/Home-Admin")}>Back</button>
      </header>

      <main className="settings-content">
        <div className="settings-title">
          <h1 className="MainTitle">Setting</h1>
        </div>

        <div className="user-profile-card">
          <div className="profile-image">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>

          <div className="user-details">
            <p className="user-name">{currentAdmin?.name}</p>
            <p className="user-email">{currentAdmin?.email}</p>
          </div>
        </div>

        <section className="profile-detail-section">
          <h3 className="detail-heading">Profile Detail</h3>
          <div className="detail-item">Joined on October 2025</div>
          <div className="detail-item">Phone : 099-xxx-xxxx</div>
        </section>

        <aside className="settings-menu" style={{marginTop: 20}}>
          {mainNavigation.map((item, idx) => (
            <div 
                key={item.label} 
                className={`setting-item ${item.label === 'Attributes' ? 'active' : ''}`}
                onClick={() => handleNavigation(item.component)} 
            >
              <div className="item-content">
                <span className="item-icon"></span>
                <div className="item-title">{item.label}</div>
              </div>
              <div className="item-arrow">›</div>
            </div>
          ))}
        </aside>

        <div className="action-buttons-group">
          <button className="action-button logout-button" onClick={() => navigate("/")}>Log Out</button>
        </div>
      </main>
    </div>
  );
};

export default ResumeCreator;
