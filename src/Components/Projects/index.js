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
              <h3>Full stack Authentication</h3>
              <p style={{ marginTop: "10px" }}>
                Implemented secure access and user management features. Utilized
                industry-standard authentication mechanisms such as JSON Web
                Tokens (JWT) and bcrypt for password hashing. Developed user
                registration and login forms, enabling users to create accounts
                and securely authenticate themselves.
              </p>
              <a
                href="https://beamish-churros-c086f5.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external"></i>
                {/* <a
                  href="https://github.com/SARANYA251096/Password_Reset_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn5"
                >
                  Frontend
                </a> */}
                {/* <a
                  href="https://github.com/SARANYA251096/Password_reset_server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn5"
                >
                  Backend
                </a> */}
              </a>
            </div>
          </div>
          <div className="work">
            <img src="images/work-2.png" alt="Work 2" />
            <div className="layer">
              <h3>Chat Application</h3>
              <p style={{ marginTop: "10px" }}>
                Implemented features such as real-time messaging, user
                authentication, chat room creation, message history, and
                notifications.Developed a real-time chat application using the
                MERN (MongoDB, Express, React, Node.js) stack.
              </p>
              <a
                href="https://stately-rugelach-600890.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="bx bx-link-external"></i>
                <a
                  href="https://github.com/SARANYA251096/Chatapp-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn5"
                >
                  Frontend
                </a>
                <a
                  href="https://github.com/SARANYA251096/Chatapp-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn5"
                >
                  Backend
                </a> */}
              </a>
            </div>
          </div>
          <div className="work">
            <img src="images/work-3.png" alt="Work 3" />
            <div className="layer">
              <h3>Recipe Application</h3>
              <p style={{ marginTop: "10px" }}>
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
                {/* <a
                  href="https://github.com/SARANYA251096/Recipe_App_Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn5"
                >
                  Frontend
                </a>
                <a
                  href="https://github.com/SARANYA251096/Recipe_App_Back"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn5"
                >
                  Backend
                </a> */}
              </a>
            </div>
          </div>
          <div className="work">
            <img src="images/work-2.png" alt="Work 4" />
            <div className="layer">
              <h3> React Contact Application</h3>
              <p style={{ marginTop: "10px" }}>
                Implemented frontend react contact application to
                create,edit,delete an contact.
              </p>
              <a
                href="https://react-contacts-app1.netlify.app/contacts/list"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external"></i>
                {/* <a
                  href="https://github.com/SARANYA251096/Contact_app_react"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn5"
                >
                  Frontend
                </a> */}
              </a>
            </div>
          </div>
        </div>

        {/* <a href="#" className="btn3" style={{ fontSize: "medium" }}>
          See More
        </a> */}
      </div>
    </div>
  );
}

export default Projects;
