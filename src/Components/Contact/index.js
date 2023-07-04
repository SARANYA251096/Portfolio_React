import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
  useEffect(() => {
    emailjs.init("GJIOnUrVlj9HWT45P");
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();

    const params = {
      from_name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_zpe4bup", "template_ecq5gyi", params).then((res) => {
      alert("Message sent successfully!!!");
    });
  };

  return (
    <div className="container" id="contacts">
      <div className="row">
        <div className="col-md-6 contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p>
            <i className="bx bx-send"></i>saranyaayyamuthu96@gmail.com
          </p>
          <p>
            <i className="bx bxs-phone-call"></i>(+91)9600559993
          </p>
          <div className="contact-sci">
            <a
              href="https://www.linkedin.com/in/saranya2596/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/SARANYA251096"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 contact-right">
          <h1>
            Get In<span>Touch</span>
          </h1>
          <form>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              id="name"
              required
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="Message"
              id="message"
              rows="3"
              placeholder="Your Message"
            ></textarea>
            <button id="sendBtn" onClick={sendEmail} className="btn btn2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
