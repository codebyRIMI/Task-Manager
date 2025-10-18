import './Tasks.scss';
import Sidebar from '../../components/sidebar/sidebar.jsx';



const Tasks = () => {
  return (
    <div className="tasks-page">
        <Sidebar />
        <div className="tasks-content">
            <h1>Tasks Page</h1>
            {/* Add your tasks page content here */}
        </div>
    </div>
  );
}
export default Tasks;