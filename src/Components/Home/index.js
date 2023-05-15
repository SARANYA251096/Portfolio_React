import React from 'react';
import "./home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-sci">
        <a href="#">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="#">
          <i className="bx bxl-github"></i>
        </a>
        <a href="#">
          <i className="bx bxl-gmail"></i>
        </a>
      </div>

      <div className="home-content">
        <h1>Hello, I'm Saranya A</h1>
        <h3>Full Stack Developer</h3>
        <p>
          I am a quick learner, a team player, and I thrive in a dynamic and
          fast-paced work environment. Have passion for creating beautiful,
          user-friendly, and functional websites.
        </p>
        <a href="#" className="btn">
          Hire Me
        </a>
      </div>
      <div className="home-img">
        <div className="glowing-circle">
          <span></span>
          <span></span>
          <div className="image">
            <img src="saran.jpg" alt="profile picture" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home

