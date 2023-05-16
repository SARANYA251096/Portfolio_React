import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1>Portfolio</h1>
      <nav className="navbar">
        <a href="#home" style={{ "--i": 1 }} className="active">
          Home
        </a>
        <a href="#about" style={{ "--i": 2 }}>
          About
        </a>
        <a href="#skills" style={{ "--i": 3 }}>
          Skills
        </a>
        <a href="#projects" style={{ "--i": 4 }}>
          Projects
        </a>
        <a href="#contacts" style={{ "--i": 5 }}>
          Contact
        </a>
      </nav>
      {/* <div className="bx bx-menu" id="menu-icon"></div> */}
    </header>
  );
}

export default Header;
