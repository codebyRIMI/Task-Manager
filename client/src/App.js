import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Tasks from './pages/Tasks/Tasks';
import Projects from './pages/Projects/Projects';
import Settings from './pages/settings/settings';
import Profile from './pages/profile/profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/tasks" element={<Tasks/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/analytics" element={<Dashboard/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/profile" element={<Profile/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
