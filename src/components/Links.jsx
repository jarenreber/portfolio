import React from "react";
import links from "../css/links.module.css";
import { ImLink } from "react-icons/im";

const Links = () => {
  return (
    <div id="links" className={links.main}>
      <div className={links.icon}>
        <ImLink />
      </div>
      <div className={links.text}>
        <h1>Links</h1>
        <p>
          GitHub: https://github.com/jarenreber
          <br />
          LinkedIn: https://www.linkedin.com/in/jaren-reber-web-developer/
        </p>
      </div>
    </div>
  );
};

export default Links;
