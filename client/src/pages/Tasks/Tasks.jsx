import "./Tasks.scss";
import { Plus, MoreHorizontal, Search, ChevronDown } from "lucide-react";
import Sidebar from "../../components/sidebar/sidebar";
import { useState } from "react";

const Tasks = () => {
  const [activeColumn, setActiveColumn] = useState("To Do");
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [selectedPriority, setSelectedPriority] = useState("All Priorities");
  const [showProjectMenu, setShowProjectMenu] = useState(false);
  const [showPriorityMenu, setShowPriorityMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const tasks = [
    {
      id: 1,
      title: "User Authentication System",
      description: "Implement secure login and registration functionality",
      priority: "high",
      project: "Mobile App",
      assignee: "Mike Johnson",
      date: "3/20/2024",
      status: "To Do",
      tags: ["backend", "security"],
    },
    {
      id: 2,
      title: "Database Design",
      description: "Create database schema and relationships",
      priority: "high",
      project: "Mobile App",
      assignee: "John Doe",
      date: "3/25/2024",
      status: "To Do",
      tags: ["database", "backend"],
    },
    {
      id: 3,
      title: "Content Creation",
      description: "Develop marketing blog posts and visuals",
      priority: "medium",
      project: "Marketing Campaign",
      assignee: "Emily Brown",
      date: "3/22/2024",
      status: "In Progress",
      tags: ["content", "marketing"],
    },
    {
      id: 4,
      title: "UI Redesign",
      description: "Revamp dashboard layout for better UX",
      priority: "low",
      project: "Website Redesign",
      assignee: "Sarah Wilson",
      date: "3/18/2024",
      status: "Completed",
      tags: ["frontend", "ui"],
    },
  ];

  const projects = ["All Projects", "Mobile App", "Marketing Campaign", "Website Redesign"];
  const priorities = ["All Priorities", "high", "medium", "low"];
  const columns = ["To Do", "In Progress", "Completed"];

  // --- Filter logic ---
  const filteredTasks = tasks.filter(
    (task) =>
      task.status === activeColumn &&
      (selectedProject === "All Projects" || task.project === selectedProject) &&
      (selectedPriority === "All Priorities" || task.priority === selectedPriority) &&
      (task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.assignee.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="task-board">
      <Sidebar />

      {/* Header */}
      <div className="task-board__header">
        <div className="task-board__title">
          <h1>Task Board</h1>
          <p>Manage your tasks with a Kanban-style board</p>
        </div>
        <button className="add-task">
          <Plus size={18} />
          Add Task
        </button>
      </div>

      {/* Filters */}
      <div className="task-board__filters">
        {/* Search */}
        <div className="search-bar">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Project Filter */}
        <div className="filter-dropdown">
          <div
            className="filter-selected"
            onClick={() => setShowProjectMenu(!showProjectMenu)}
          >
            <span>{selectedProject}</span>
            <ChevronDown size={16} />
          </div>
          {showProjectMenu && (
            <ul className="dropdown-menu">
              {projects.map((proj, index) => (
                <li
                  key={index}
                  className={`dropdown-item ${proj === selectedProject ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedProject(proj);
                    setShowProjectMenu(false);
                  }}
                >
                  <span>{proj}</span>
                  {proj === selectedProject && <span className="checkmark">✓</span>}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Priority Filter */}
        <div className="filter-dropdown">
          <div
            className="filter-selected"
            onClick={() => setShowPriorityMenu(!showPriorityMenu)}
          >
            <span>{selectedPriority}</span>
            <ChevronDown size={16} />
          </div>
        {showPriorityMenu && (
          <ul className="dropdown-menu">
            {priorities.map((pri, index) => (
              <li
                key={index}
                className={`dropdown-item ${pri === selectedPriority ? "selected" : ""}`}
                onClick={() => {
                  setSelectedPriority(pri);
                  setShowPriorityMenu(false);
                }}
              >
                <span>{pri}</span>
                {pri === selectedPriority && <span className="checkmark">✓</span>}
              </li>
            ))}
          </ul>
        )}
        </div>
      </div>

      {/* Clickable Tabs */}
      <div className="task-tabs">
        {columns.map((col) => (
          <div
            key={col}
            className={`tab ${activeColumn === col ? "active" : ""}`}
            onClick={() => setActiveColumn(col)}
          >
            <span>{col}</span>
            <span className="count">{tasks.filter((t) => t.status === col).length}</span>
          </div>
        ))}
      </div>

      {/* Task Cards */}
      <div className="task-board__columns">
        <div className="task-column">
          <div className="task-cards">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <div key={task.id} className="task-card">
                  <div className="card-header">
                    <h3>{task.title}</h3>
                    <MoreHorizontal size={18} />
                  </div>
                  <p className="description">{task.description}</p>
                  <div className="meta">
                    <span className={`priority ${task.priority}`}>{task.priority}</span>
                    <span className="project">{task.project}</span>
                  </div>
                  <div className="footer">
                    <span className="assignee">{task.assignee}</span>
                    <span className="date">{task.date}</span>
                  </div>
                  <div className="tags">
                    {task.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="no-tasks">No tasks match the selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
