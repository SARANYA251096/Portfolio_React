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
              <h3>MERN Authentication</h3>
              <p>
                Implemented secure access and user management features. Utilized
                industry-standard authentication mechanisms such as JSON Web
                Tokens (JWT) and bcrypt for password hashing. Developed user
                registration and login forms, enabling users to create accounts
                and securely authenticate themselves. Integrated user
                authentication with the frontend using React components
              </p>
              <a
                href="https://beamish-churros-c086f5.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="images/work-2.png" alt="Work 2" />
            <div className="layer">
              <h3>MERN Chat App</h3>
              <p>
                Developed a real-time chat application using the MERN (MongoDB,
                Express, React, Node.js) stack. Implemented features such as
                real-time messaging, user authentication, chat room creation,
                message history, and notifications.
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
              <h3>MERN Recipe App</h3>
              <p>
                Developed a recipe application using the MERN stack, allowing
                users to discover, save, and share recipes. Implemented key
                features such as recipe search, user authentication, favoriting
                recipes, and creating personalized recipe collections
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
