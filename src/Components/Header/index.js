import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1>Portfolio</h1>
      <nav className="navbar">
        <Link to="/" style={{ "--i": 1 }} className="active">
          Home
        </Link>
        <Link to="/about" style={{ "--i": 2 }}>
          About
        </Link>
        <Link to="/skills" style={{ "--i": 3 }}>
          Skills
        </Link>
        <Link to="/projects" style={{ "--i": 4 }}>
          Projects
        </Link>
        <Link to="/contact" style={{ "--i": 5 }}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
