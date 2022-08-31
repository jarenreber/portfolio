import React from "react";
import contact from "../css/contact.module.css";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact" className={contact.main}>
      <div className={contact.text}>
        <h1>Contact</h1>
        <p>
          Email: rbrjaren@gmail.com
          <br />
          Or message me on Linked In:
          <br />
          https://www.linkedin.com/in/jaren-reber-web-developer/
        </p>
      </div>
      <div className={contact.icon}>
        <SiMinutemailer />
      </div>
    </div>
  );
};

export default Contact;
