import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hello, I'm Saranya A</h1>
        <h3>Full Stack Developer</h3>
        <p>
          I am a quick learner, a team player, and I thrive in a dynamic and
          fast-paced work environment. Have passion for creating beautiful,
          user-friendly, and functional websites.
        </p>
        {/* <button className="btn">Hire Me</button> */}
        <Link to="/contact" className="btn">
          Hire Me
        </Link>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="home-img">
            <div className="glowing-circle">
              <span></span>
              <span></span>
              <div className="image">
                <img src="saran.jpg" alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
