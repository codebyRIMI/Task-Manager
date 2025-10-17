import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">TaskMaster</div>

      <div className="navbar__links">
        <a href="/" className="navbar__link">Home</a>
        <a href="/about" className="navbar__link">Features</a>
        <a href="/contact" className="navbar__link">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;
