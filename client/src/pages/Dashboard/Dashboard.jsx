import "./Dashboard.scss";

const Dashboard = () => {
  const tasks = [
    {
      title: "Social Media Strategy",
      priority: "medium",
      project: "Marketing Campaign",
      date: "3/10/2024",
      assignee: "Sarah Wilson",
      status: "in progress",
    },
    {
      title: "Design Homepage Layout",
      priority: "high",
      project: "Website Redesign",
      date: "3/15/2024",
      assignee: "John Doe",
      status: "in progress",
    },
    {
      title: "User Authentication System",
      priority: "high",
      project: "Mobile App",
      date: "3/20/2024",
      assignee: "Mike Johnson",
      status: "todo",
    },
    {
      title: "Database Design",
      priority: "high",
      project: "Mobile App",
      date: "3/25/2024",
      assignee: "John Doe",
      status: "todo",
    },
    {
      title: "Content Creation",
      priority: "low",
      project: "Website Redesign",
      date: "3/30/2024",
      assignee: "Emily Brown",
      status: "completed",
    },
  ];

  const activities = [
    {
      title: "Database Design",
      project: "Mobile App",
      date: "2/25/2024",
      status: "todo",
      color: "green",
    },
    {
      title: "Content Creation",
      project: "Website Redesign",
      date: "2/23/2024",
      status: "todo",
      color: "blue",
    },
    {
      title: "User Authentication System",
      project: "Mobile App",
      date: "2/22/2024",
      status: "todo",
      color: "green",
    },
    {
      title: "Design Homepage Layout",
      project: "Website Redesign",
      date: "2/20/2024",
      status: "in progress",
      color: "blue",
    },
    {
      title: "Social Media Strategy",
      project: "Marketing Campaign",
      date: "2/18/2024",
      status: "in progress",
      color: "orange",
    },
  ];

  //  Dynamic Stats
  const totalTasks = tasks.length || 0;
  const inProgress = tasks.filter((t) => t.status === "in progress").length || 0;
  const overdue = tasks.filter((t) => new Date(t.date) < new Date()).length || 0;
  const projects = new Set(tasks.map((t) => t.project)).size || 0;

  const statsData = [
    { title: "Total Tasks", value: totalTasks },
    { title: "In Progress", value: inProgress },
    { title: "Overdue", value: overdue },
    { title: "Projects", value: projects },
  ];

  // Dynamic Chart Data
  const projectProgress = [
    {
      name: "Website Redesign",
      completed: tasks.filter(
        (t) => t.project === "Website Redesign" && t.status === "completed"
      ).length,
      total: tasks.filter((t) => t.project === "Website Redesign").length,
    },
    {
      name: "Mobile App",
      completed: tasks.filter(
        (t) => t.project === "Mobile App" && t.status === "completed"
      ).length,
      total: tasks.filter((t) => t.project === "Mobile App").length,
    },
    {
      name: "Marketing Campaign",
      completed: tasks.filter(
        (t) => t.project === "Marketing Campaign" && t.status === "completed"
      ).length,
      total: tasks.filter((t) => t.project === "Marketing Campaign").length,
    },
  ];

  const progressPercentage = (completed, total) =>
    total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="dashboard">
      {/*  Dynamic Stats Section */}
      <section className="dashboard__stats">
        {statsData.map((stat, i) => (
          <div className="stat-card" key={i}>
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Dynamic Charts Section */}
      <section className="dashboard__charts">
        <h2>Project Progress</h2>
        <div className="chart-grid">
          {projectProgress.map((project, i) => (
            <div className="chart-card" key={i}>
              <h3>{project.name}</h3>
              <div className="chart-bar">
                <div
                  className="chart-progress"
                  style={{
                    width: `${progressPercentage(
                      project.completed,
                      project.total
                    )}%`,
                  }}
                ></div>
              </div>
              <p>
                {progressPercentage(project.completed, project.total)}% Complete
              </p>
            </div>
          ))}
        </div>
        <div className="view-more">
          <a href="/projects">View More Projects</a>
        </div>
      </section>

      {/* Upcoming Tasks Section */}
      <div className="upcoming">
        <h1>Upcoming Tasks</h1>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <div className="task-left">
                <h3>{task.title}</h3>
                <div className="task-meta">
                  <span className={`priority ${task.priority}`}>
                    {task.priority}
                  </span>
                  <span className="project">{task.project}</span>
                </div>
              </div>
              <div className="task-right">
                <span className="task-date">{task.date}</span>
                <span className="task-user">{task.assignee}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="view-more">
          <a href="/tasks">View all tasks →</a>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="recent">
        <h1>Recent Activity</h1>

        <ul className="activity-list">
          {activities.map((item, index) => (
            <li key={index} className="activity-item">
              <div className="activity-left">
                <div className={`dot ${item.color}`}></div>
                <div className="activity-info">
                  <h3>{item.title}</h3>
                  <p>
                    Created in <span>{item.project}</span> • {item.date}
                  </p>
                </div>
              </div>
              <div className={`status ${item.status.replace(" ", "-")}`}>
                {item.status}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
