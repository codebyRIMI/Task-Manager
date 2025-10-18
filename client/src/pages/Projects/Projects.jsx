import './Projects.scss';
import Sidebar from '../../components/sidebar/sidebar.jsx';




const Projects = () => {
  return (
    <div className="projects-page">
        <Sidebar />
        <div className="projects-content">
            <h1>Projects Page</h1>
            {/* Add your projects page content here */}
        </div>
    </div>
  );
}
export default Projects;