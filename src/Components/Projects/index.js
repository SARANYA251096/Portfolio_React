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

        <p style={{ fontSize: "17px", marginTop: "2px" }}>
          User Id : user123 || user123@gmail.com, Password : user@123
        </p>
        <p style={{ fontSize: "17px", marginTop: "2px" }}>
          Admin Id : admin123 || admin123@gmail.com, Password : admin@123
        </p>

        <div className="work-list">


          <div className="work">
            <img src="images/work-1.png!bw700" alt="Work 1" />
            <div className="layer">
              <h3>Shawarma World</h3>
              <p style={{ marginTop: "10px" }}>
                Developed a shawarma delivery application using the MERN stack,
                allowing users to select their favourite varieties and added to
                cart. Implemented key features such as search,filter, user
                authentication,admin and used stripe payment gateway integration
              </p>
              <div className="projectt">
                <a
                  href="https://github.com/SARANYA251096/Shawarma_world_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Frontend</button>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://github.com/SARANYA251096/Shawarma_world_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Backend</button>
                </a>
                <a
                  href="https://shawarma-world-frontend.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    style={{ marginTop: "10px", width: "50px", height: "40px" }}
                  >
                    Live
                  </button>
                </a>
              </div>
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
              <div className="projectt">
                <a
                  href="https://github.com/SARANYA251096/Chatapp-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Frontend</button>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://github.com/SARANYA251096/Chatapp-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Backend</button>
                </a>
                <a
                  href="https://stately-rugelach-600890.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    style={{ marginTop: "10px", width: "50px", height: "40px" }}
                  >
                    Live
                  </button>
                </a>
              </div>
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

              <div className="projectt">
                <a
                  href="https://github.com/SARANYA251096/Recipe_App_Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Frontend</button>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://github.com/SARANYA251096/Recipe_App_Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Backend</button>
                </a>
                <a
                  href="https://animated-treacle-44ba01.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    style={{ marginTop: "10px", width: "50px", height: "40px" }}
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="work">
            <img src="images/work-4.avif" alt="Work 4" />
            <div className="layer">
              <h3>StackOverflow Clone</h3>
              <p style={{ marginTop: "10px" }}>
                By incorporating Firebase's real-time database, authentication,
                and hosting capabilities, we provide a secure and scalable
                environment for users to register, login, and actively
                participate in the community. The implementation of Redux
                ensures efficient state management, enhancing the overall user
                experience.
              </p>
              <div className="projectt">
                <a
                  href="https://github.com/SARANYA251096/stackoverflow-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Frontend</button>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://github.com/SARANYA251096/stackoverflow-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Backend</button>
                </a>
                <a
                  href="https://aquamarine-klepon-0842ee.netlify.app/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    style={{ marginTop: "10px", width: "50px", height: "40px" }}
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="work">
            <img src="images/work-5.jpg" alt="Work 5" />
            <div className="layer">
              <h3> React Contact Application</h3>
              <p style={{ marginTop: "10px" }}>
                Implemented frontend react contact application to create,edit,
                and delete contact.
              </p>
              <div className="projectt">
                <a
                  href="https://github.com/SARANYA251096/Contact_app_react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Frontend</button>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://react-contacts-app1.netlify.app/contacts/list"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    style={{ marginTop: "10px", width: "50px", height: "40px" }}
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
