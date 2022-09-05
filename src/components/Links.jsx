import React from "react";
import links from "../css/links.module.css";
import { ImLink } from "react-icons/im";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Links = () => {
  return (
    <div id="links" className={links.main}>
      <div className={links.icon}>
        <ImLink />
      </div>
      <div className={links.text}>
        <h1>Links</h1>
        <p>
          <a
            className={links.anchor}
            href="https://github.com/jarenreber"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillGithub className={links.links} />
            <p>Github</p>
          </a>
          <a
            className={links.anchor}
            href="https://www.linkedin.com/in/jaren-reber-web-developer/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillLinkedin className={links.links} />
            <p>LinkedIn</p>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Links;
