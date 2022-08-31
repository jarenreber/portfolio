import React from "react";
import navStyles from "../css/nav.module.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.ulNav}>
        <li className={navStyles.navList}>
          <Link
            className={navStyles.navAnchor}
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className={navStyles.navList}>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={navStyles.navAnchor}
          >
            Skills
          </Link>
        </li>
        <li className={navStyles.navList}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={navStyles.navAnchor}
          >
            About
          </Link>
        </li>
        <li className={navStyles.navList}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={navStyles.navAnchor}
          >
            Contact
          </Link>
        </li>
        <li className={navStyles.navList}>
          <Link
            to="link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={navStyles.navAnchor}
          >
            Links
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
