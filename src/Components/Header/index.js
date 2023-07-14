import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h1>Portfolio</h1>
      <button className="menu-toggle" onClick={toggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <Link
          to="/"
          className="nav-link"
          style={{ "--i": 1 }}
          onClick={toggleNav}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="nav-link"
          style={{ "--i": 2 }}
          onClick={toggleNav}
        >
          About
        </Link>
        <Link
          to="/skills"
          className="nav-link"
          style={{ "--i": 3 }}
          onClick={toggleNav}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className="nav-link"
          style={{ "--i": 4 }}
          onClick={toggleNav}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="nav-link"
          style={{ "--i": 5 }}
          onClick={toggleNav}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
