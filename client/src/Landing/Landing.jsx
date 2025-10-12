import { useState } from 'react';
import './Landing.scss';
import Navbar from '../components/Navbar/Navbar';

const Landing = () => {
  const [activeTab, setActiveTab] = useState('signin');

  return (
    <div className="landing">
        <Navbar />
      {/* Hero Section */}
      <section className="landing__hero">
        <h1>Welcome to TaskMaster</h1>
        <p>Organize your tasks efficiently, track progress, and achieve your goals effortlessly.</p>
      </section>

      {/* Features Section */}
      <section className="landing__features">
        <h2>Why TaskMaster?</h2>
        <div className="features__grid">
          <div className="feature">
            <h3>Easy Task Management</h3>
            <p>Create, update, and delete tasks with a simple interface.</p>
          </div>
          <div className="feature">
            <h3>Track Progress</h3>
            <p>Monitor your daily and weekly progress efficiently.</p>
          </div>
          <div className="feature">
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
              <input type="email" placeholder="name@example.com" required />
              <label>Password</label>
              <input type="password" placeholder="********" required />
              <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
          ) : (
            <form className="auth__form">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
              <label>Email</label>
              <input type="email" placeholder="name@example.com" required />
              <label>Password</label>
              <input type="password" placeholder="********" required />
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Landing;
