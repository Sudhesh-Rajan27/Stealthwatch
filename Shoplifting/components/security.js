import React, { useState } from "react";
import './securitySettings.css';

function SecuritySettings() {
  const [password, setPassword] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handlePasswordChange = () => {
    // Add logic to handle password change
    alert("Password changed successfully!");
  };

  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <div>
      <h2>Security Settings</h2>
      <div className="form-group">
        <label>Change Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter new password" 
          className="input-field"
        />
        <button onClick={handlePasswordChange} className="action-button">Change Password</button>
      </div>
      <div className="form-group">
        <label>Two-Factor Authentication:</label>
        <button onClick={handleTwoFactorToggle} className="toggle-button">
          {twoFactorEnabled ? "Disable" : "Enable"}
        </button>
      </div>
      <div className="form-group">
        <label>User Access Control:</label>
        <button className="action-button">Manage</button>
      </div>
    </div>
  );
}

export default SecuritySettings;
