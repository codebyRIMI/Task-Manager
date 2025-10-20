import './profile.scss';
import { FiUser, FiCalendar } from "react-icons/fi";
import Sidebar from "../../components/sidebar/sidebar";

const Profile = () => {
    const user = {
        name: "Rimi",
        role: "Project Manager",
        department: "Engineering",
        joined: "January 2024",
        tasksCompleted: 1,
        activeProjects: 0,
        completionRate: 17,
    };

    return (
        <div className="profile-page">
            <Sidebar />
            <div className="profile-content">
                <h1>Profile</h1>
                <p className="subtitle">Manage your account settings and preferences</p>

                <div className="profile-card">
                    <div className="avatar">
                        <FiUser size={48} />
                    </div>
                    <h2>{user.name.toUpperCase()}</h2>
                    <p className="role">{user.role}</p>
                    <p className="department">{user.department}</p>
                    <div className="joined">
                        <FiCalendar />
                        <span>Joined {user.joined}</span>
                    </div>

                    <div className="stats">
                        <div className="stat">
                            <span className="label">Tasks Completed</span>
                            <span className="value">{user.tasksCompleted}</span>
                        </div>
                        <div className="stat">
                            <span className="label">Active Projects</span>
                            <span className="value">{user.activeProjects}</span>
                        </div>
                        <div className="stat">
                            <span className="label">Completion Rate</span>
                            <span className="value">{user.completionRate}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
