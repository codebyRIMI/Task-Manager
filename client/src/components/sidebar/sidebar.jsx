import { NavLink } from "react-router-dom";
import { Home, CheckSquare, Folder, Clock, Settings, LogOut } from "lucide-react";
import "./sidebar.scss";

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", path: "/dashboard" },
    { icon: <CheckSquare size={20} />, label: "Tasks", path: "/tasks" },
    { icon: <Folder size={20} />, label: "Projects", path: "/projects" },
    { icon: <Clock size={20} />, label: "Analytics", path: "/analytics" },
    // { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="sidebar">
      {/* Top Logo Section */}
      <div className="sidebar__top">
        <div className="sidebar__logo">
          <span className="logo-icon">🧩</span>
          <h1>TaskMaster</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar__menu">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `sidebar__link ${isActive ? "active" : ""}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Logout Section */}
      <div className="sidebar__bottom">
        <div className="sidebar__menu">
        <NavLink
            to= "/settings"
            className={({ isActive }) =>
              `sidebar__link ${isActive ? "active" : ""}`
            }
          >
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
          </div>
          
        <NavLink to="/" className="sidebar__link logout">
          <LogOut size={20} />
          <span>Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
