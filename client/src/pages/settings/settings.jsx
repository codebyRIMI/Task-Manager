import './settings.scss';
import Sidebar from '../../components/sidebar/sidebar.jsx';



const Settings = () => {
  return (
    <div className="settings-page">
        <Sidebar />
        <div className="settings-content">
            <h1>Settings Page</h1>
            {/* Add your settings page content here */}
        </div>
    </div>
  );
}
export default Settings;