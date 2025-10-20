import "./settings.scss";
import { FiUser, FiBell, FiLock, FiAlertTriangle  } from "react-icons/fi";
import Sidebar from "../../components/sidebar/sidebar";
import { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Project Manager",
  });

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [push, setPush] = useState(true);
  const [taskReminder, setTaskReminder] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    alert("Profile saved (mock). Replace with API call later!");
  };

  return (
    <div className="settings-page">
      <Sidebar />

      <div className="settings-content">
        <h1>Settings</h1>
        <p className="subtitle">
          Manage your account preferences and application settings
        </p>

        {/* Profile Section */}
        <div className="settings-section">
          <div className="section-header">
            <FiUser size={22} />
            <h2>Profile</h2>
          </div>
          <p className="section-desc">
            Manage your personal information and account details
          </p>

          <div className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Role</label>
                <select
                  name="role"
                  value={profile.role}
                  onChange={handleProfileChange}
                >
                  <option>Project Manager</option>
                  <option>Developer</option>
                  <option>Designer</option>
                  <option>Tester</option>
                </select>
              </div>
            </div>

            <button className="save-btn" onClick={handleSaveProfile}>
              Save Profile
            </button>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="settings-section">
          <div className="section-header">
            <FiBell size={22} />
            <h2>Notifications</h2>
          </div>
          <p className="section-desc">
            Configure how and when you want to receive notifications
          </p>

          <div className="notification-setting">
            <div className="notification">
            <div>
              <h4>Email Notifications</h4>
              <p>Receive notifications via email</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
              />
              <span className="slider"></span>
            </label>
            </div>

            <div className="notification">
            <div>
              <h4>Push Notifications</h4>
              <p>Receive push notifications in your browser</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={push}
                onChange={() => setPush(!push)}
              />
              <span className="slider"></span>
            </label>
            </div>

            <div className="notification">
            <div>
              <h4>Task Reminders</h4>
              <p>Get reminded about upcoming task deadlines</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={taskReminder}
                onChange={() => setTaskReminder(!taskReminder)}
              />
              <span className="slider"></span>
            </label>
            </div>
          </div>
        </div>


       {/* security section  */}
       <div className="settings-section">
        <div className="section-header">
          <FiLock size={22} />
          <h2>Security Settings</h2>
        </div>
        <p className="section-desc">Manage your security preferences and account protection</p>

        <div className="password">
          <h2>Current Password</h2>
          <input type="password" placeholder="Enter current password" />

          <h2>New Password</h2>
          <input type="password" 
          placeholder="Enter new password"
           />
           <span>Must be at least 8 Charecters</span>

           <h2>Confirm New Password</h2>
          <input type="password" 
          placeholder="Re-enter new password"
           />

          <button className="update-btn">Change Password</button>

        </div>
       </div>

        {/* Danger Zone Section  */}
       <div className="settings-section">
        <div className="section-header">
          <FiAlertTriangle size={22} />
          <h2>Danger Zone</h2>
        </div>
        <p className="section-desc">Irreversible and destructive actions</p>

        <div className="Delete">
          <div className="delete-text">
            <h3>Delete Account</h3>
            <p>Permanently delete your account and all associated data</p>
          </div>
          <button className="delete-btn">Delete My Account</button>
        </div>        
       </div>
      </div>
    </div>
  );
};

export default Settings;
