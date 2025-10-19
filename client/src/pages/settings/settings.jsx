import "./settings.scss";
import { FiUser, FiBell } from "react-icons/fi";
import Sidebar from "../../components/sidebar/sidebar";
import { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Project Manager",
  });

  const [emailNotifications, setEmailNotifications] = useState(true);

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
        </div>
      </div>
    </div>
  );
};

export default Settings;
