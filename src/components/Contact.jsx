import React from "react";
import contact from "../css/contact.module.css";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact" className={contact.main}>
      <div className={contact.text}>
        <h1>Contact</h1>
        <p>
          Email: <a href="mailto:rbrjaren@gmail.com">rbrjaren@gmail.com</a>
          <br />
          Or message me on Linked In:
          <br />
          <a
            href="https://www.linkedin.com/in/jaren-reber-web-developer/"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.linkedin.com/in/jaren-reber-web-developer/
          </a>
        </p>
      </div>
      <div className={contact.icon}>
        <SiMinutemailer />
      </div>
    </div>
  );
};

export default Contact;
