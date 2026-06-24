import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={() => { navigate("/"); closeMenu(); }}>
        Portfolio
      </div>

      <button 
        className={`hamburger ${isOpen ? "open" : ""}`} 
        type="button" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/certification" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="nav-actions">
        <button 
          className="theme-toggle" 
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Theme"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
        </button>
      </div>
    </header>
  );
}

export default Navbar;