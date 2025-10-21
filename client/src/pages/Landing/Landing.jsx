import { useState } from 'react';
import './Landing.scss';
import Navbar from '../../components/Navbar/Navbar';
import task from '../../assets/task.png';
import track from '../../assets/track.png';
import collab from '../../assets/collab.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Landing = () => {
  const [activeTab, setActiveTab] = useState('signin');
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  

  //for register
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/register", inputs);
    } catch (err) {
      setErr(err);
    }
  };

  //for login
  const navigate = useNavigate()

  const handleLoginChange = (e) => {
    setLoginInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register/login", loginInput);

      if (res.data.error) {
        // backend sent an error message
        setErr(res.data.error);
        return;
      }

      localStorage.setItem("accessToken", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setErr(err.response?.data?.error || "Something went wrong. Please try again.");
    }
  };



  return (
    <div className="landing">
        <Navbar />
      {/* Hero Section */}
      <section className="landing__hero">
        <h1>Welcome to TaskMaster</h1>
        <p>Organize your tasks efficiently, track progress, and achieve your goals effortlessly.</p>
      </section>

      <div className="stats">
        <div className="stat">
          <h3>10K+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat">
          <h3>500K+</h3>
          <p>Tasks Completed</p>
        </div>
        <div className="stat">
          <h3>99.9%</h3>
          <p>Uptime</p>
        </div>
      </div>

      {/* Features Section */}
      <section className="landing__features">
        <h2>Why TaskMaster?</h2>
        <div className="features__grid">
          <div className="feature">
            <img src= {task} alt="err" />
            <h3>Easy Task Management</h3>
            <p>Create, update, and delete tasks with a simple interface.</p>
          </div>
          <div className="feature">
            <img src= {track} alt="err" />
            <h3>Track Progress</h3>
            <p>Monitor your daily and weekly progress efficiently.</p>
          </div>
          <div className="feature">
            <img src= {collab} alt="err" />
            <h3>Collaborate</h3>
            <p>Share tasks and collaborate with your team seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section className="landing__auth">
        <div className="auth__card">
          <h2>Welcome</h2>
          <p>Sign in to your account or create a new one to get started</p>

          {/* Tab Toggle */}
          <div className="auth__tabs">
            <button
              className={activeTab === 'signin' ? 'active' : ''}
              onClick={() => setActiveTab('signin')}
            >
              Sign In
            </button>
            <button
              className={activeTab === 'signup' ? 'active' : ''}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
          </div>

          {/* Forms */}
          {activeTab === 'signin' ? (
            <form className="auth__form">
              <label>Email</label>
              <input 
              type="email" placeholder="name@example.com" 
              name='email'
              value={loginInput.email}
              onChange={handleLoginChange}
              required />

              <label>Password</label>
              <input type="password" placeholder="********" 
              name='password'
              value={loginInput.password}
              onChange={handleLoginChange}
              required />
              { err && <p style={{color:"red", fontSize:"12px"}}>{err}</p>}
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>Sign In</button>
            </form>
          ) : (
            <form className="auth__form">
              <label>Full Name</label>
              <input 
              type="text" 
              placeholder="John Doe" 
              value={inputs.username}
              name="username" 
              onChange={handleChange}
              required />


              <label>Email</label>
              <input 
              type="email" 
              placeholder="name@example.com" 
              value={inputs.email}
              name="email" 
              onChange={handleChange}
              required />


              <label>Password</label>
              <input 
              type="password"
              placeholder="********" 
              value={inputs.password}
              name="password" 
              onChange={handleChange}
              required />

              { err && <p style={{color:"red", fontSize:"12px"}}>{err}</p>}

              <button type="submit" className="btn btn-primary" onClick={handleClick}>Sign Up</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Landing;
