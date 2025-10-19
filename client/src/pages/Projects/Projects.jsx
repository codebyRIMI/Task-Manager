import "./Projects.scss";
import { FiPlus, FiMoreVertical, FiCheckCircle, FiCalendar, FiAlertCircle } from "react-icons/fi";
import Sidebar from "../../components/sidebar/sidebar";

const Projects = () => {
  // Dummy Data
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      color: "#2563eb",
      description: "Complete overhaul of company website",
      completed: 1,
      inProgress: 1,
      overdue: 2,
      totalTasks: 3,
      recentTasks: ["Update UI mockups", "Integrate feedback form", "Fix responsive layout"],
    },
    {
      id: 2,
      name: "Mobile App",
      color: "#10b981",
      description: "Develop mobile application for iOS and Android",
      completed: 0,
      inProgress: 0,
      overdue: 2,
      totalTasks: 2,
      recentTasks: ["Set up Firebase auth", "Design app icons"],
    },
    {
      id: 3,
      name: "Website Redesign",
      color: "#2563eb",
      description: "Complete overhaul of company website",
      completed: 1,
      inProgress: 1,
      overdue: 2,
      totalTasks: 3,
      recentTasks: ["Update UI mockups", "Integrate feedback form", "Fix responsive layout"],
    },
    {
      id: 4,
      name: "Mobile App",
      color: "#10b981",
      description: "Develop mobile application for iOS and Android",
      completed: 0,
      inProgress: 0,
      overdue: 2,
      totalTasks: 2,
      recentTasks: ["Set up Firebase auth", "Design app icons"],
    },
  ];

  const totalProjects = projects.length;
  const totalTasks = projects.reduce((sum, p) => sum + p.totalTasks, 0);
  const completionRate = Math.round(
    (projects.reduce((sum, p) => sum + p.completed, 0) / totalTasks) * 100 || 0
  );

  return (
    <div className="projects-page">
      <Sidebar/>
      {/* ===== Header ===== */}
      <div className="projects-header">
        <div>
          <h1>Projects</h1>
          <p>Manage your projects and track their progress</p>
        </div>
        <button className="new-project-btn">
          <FiPlus /> New Project
        </button>
      </div>

      {/* ===== Stats Cards ===== */}
      <div className="project-stats">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <h2>{totalProjects}</h2>
          <p>Active projects</p>
        </div>
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <h2>{totalTasks}</h2>
          <p>Across all projects</p>
        </div>
        <div className="stat-card">
          <h3>Completion Rate</h3>
          <h2>{completionRate}%</h2>
          <p>Overall progress</p>
        </div>
      </div>

      {/* ===== Project Cards ===== */}
      <div className="projects-grid">
        {projects.map((project) => {
          const progressPercent = Math.round((project.completed / project.totalTasks) * 100 || 0);
          return (
            <div key={project.id} className="project-card">
              <div className="card-header">
                <div className="title">
                  <span
                    className="dot"
                    style={{ backgroundColor: project.color }}
                  ></span>
                  <h3>{project.name}</h3>
                </div>
                <FiMoreVertical className="menu-icon" />
              </div>

              <p className="description">{project.description}</p>

              <div className="progress-section">
                <div className="progress-info">
                  <p>Progress</p>
                  <span>
                    {project.completed}/{project.totalTasks} tasks
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>

              <div className="task-status">
                <div className="status-item">
                  <FiCheckCircle className="icon completed" />
                  <span>{project.completed}</span>
                  <p>Completed</p>
                </div>
                <div className="status-item">
                  <FiCalendar className="icon inprogress" />
                  <span>{project.inProgress}</span>
                  <p>In Progress</p>
                </div>
                <div className="status-item">
                  <FiAlertCircle className="icon overdue" />
                  <span>{project.overdue}</span>
                  <p>Overdue</p>
                </div>
              </div>

              <div className="recent-tasks">
                <h4>Recent Tasks</h4>
                <ul>
                  {project.recentTasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
