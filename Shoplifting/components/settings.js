import React, { useState } from "react";
import { Link } from "react-router-dom";
import './settings.css';
import SecuritySettings from './security';

export default function Settings() {
  const navItems = ["home", "settings", "history", "bookmark"];
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'notifications':
        return <NotificationSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <section className="page">
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <header>
          <button type="button" className="sidebar-burger" onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </header>
        <nav>
          {navItems.map((item) => (
            <div key={item} className="link-container">
              <Link to={`/${item}`} key={item}>
                <button type="button">
                  <span className="material-symbols-outlined">{item}</span>
                  <p>{item}</p>
                </button>
              </Link>
            </div>
          ))}
        </nav>
      </aside>
      <div className="main-content">
        <div className="titles">
          <h1>Settings</h1>
        </div>
        <div className="co">
        <header className="tabs">
          <button onClick={() => setActiveTab('general')} className={activeTab === 'general' ? 'active' : ''}>General</button>
          <button onClick={() => setActiveTab('security')} className={activeTab === 'security' ? 'active' : ''}>Security</button>
          <button onClick={() => setActiveTab('notifications')} className={activeTab === 'notifications' ? 'active' : ''}>Notifications</button>
        </header>
        <div className="content">
          {renderContent()}
        </div>
        </div>
      </div>
    </section>
  );
}

function GeneralSettings() {
  return (
    <div>
      <h2>General Settings</h2>
      <div>
        <label>Language:</label>
        <select>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
      <div>
        <label>Theme:</label>
        <select>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div>
        <label>Time Zone:</label>
        <select>
          <option>GMT-5</option>
          <option>GMT</option>
          <option>GMT+1</option>
        </select>
      </div>
    </div>
  );
}
function NotificationSettings() {
  return (
    <div>
      <h2>Notification Settings</h2>
      <div>
        <label>Email Notifications:</label>
        <input type="checkbox" checked /> Receive email notifications
      </div>
      <div>
        <label>Push Notifications:</label>
        <input type="checkbox" /> Enable push notifications
      </div>
      <div>
        <label>SMS Notifications:</label>
        <input type="checkbox" /> Receive SMS notifications
      </div>
    </div>
  );
}
