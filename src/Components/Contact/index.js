import React from "react";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
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
    <div className="text-center" id="contacts">
      {/* <!-- <div className="container text-center"> --> */}
      <div className="row text-center">
        <div className="contact-left">
          <h1 className="sub-title text-center">Contact Me</h1>
          <p>
            <i className="bx bx-send"></i>saranyaayyamuthu96@gmail.com
          </p>
          <p>
            <i className="bx bxs-phone-call text-center"></i>(+91)9600559993
          </p>
        </div>
        <div className="contact-right">
          <h1>Get In Touch</h1>
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
        {/* <!-- </div> --> */}
      </div>
    </div>
  );
}

export default Contact;
