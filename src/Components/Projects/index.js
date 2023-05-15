import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div id="projects">
      <div className="container">
        <h1
          className="sub-title"
          style={{ textAlign: "center", margin: "18px", fontWeight: "bold" }}
        >
          My Projects
        </h1>
        <div className="work-list">
          <div className="work">
            <img src="images/work-1.png" alt="Work 1" />
            <div className="layer">
              <h3>Social Media App</h3>
              <p>
                The app connects you to talented people around the world.
                Download it from the app store.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="images/work-2.png" alt="Work 2" />
            <div className="layer">
              <h3>Chat App</h3>
              <p>
                The app connects you to talented people around the world.
                Download it from the app store.
              </p>
              <a
                href="https://stately-rugelach-600890.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="images/work-3.png" alt="Work 3" />
            <div className="layer">
              <h3>Recipe App</h3>
              <p>
                The app connects you to talented people around the world.
                Download it from the app store.
              </p>
              <a
                href="https://animated-treacle-44ba01.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn3" style={{ fontSize: "medium" }}>
          See More
        </a>
      </div>
    </div>
  );
}

export default Projects;
