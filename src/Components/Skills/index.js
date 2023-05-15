import React from 'react'
import "./skills.css";

function Skills() {
  return (
     <div className="skills" id="skills">
      <h1 className="heading">Skills</h1>
      <div className="container1">
        <div className="row">
          <div className="col-md-12">
            <div
              className="d-flex justify-content-center align-items-center flex-wrap"
            >
              <div className="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  width="150"
                  height="150"
                />
                <h1>HTML</h1>
              </div>
              <div className="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  width="150"
                  height="150"
                />
                <h1>CSS</h1>
              </div>
              <div className="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  width="140"
                  height="140"
                />
                <h1>Javascript</h1>
              </div>
              <div className="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="150"
                  height="150"
                />
                <h1>React</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="d-flex justify-content-center align-items-center flex-wrap"
            >
              <div className="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                  width="150"
                  height="180"
                />
                <h1>Bootstrap</h1>
              </div>

              <div className="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  width="150"
                  height="150"
                />
                <h1>Nodejs</h1>
              </div>
              <div className="skill">
                <img
                  src="https://wsofter.ru/wp-content/uploads/2017/12/node-express.png"
                  width="150"
                  height="150"
                />
                <h1>Express</h1>
              </div>
              <div className="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  width="150"
                  height="150"
                />
                <h1>Mongodb</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills