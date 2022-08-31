import React from "react";
import skillsStyles from "../css/skills.module.css";
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className={skillsStyles.skillsContainer}>
      <div className={skillsStyles.skills}>
        <h1>Skills</h1>
        <div className={skillsStyles.list}>
          <div className={skillsStyles.ul1}>
            <ul>
              <li>Javascript</li>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git</li>
            </ul>
          </div>
          <div className={skillsStyles.ul2}>
            <ul>
              <li>Express</li>
              <li>Axios</li>
              <li>PostgreSQL</li>
              <li>Tailwind CSS</li>
              <li>Heroku</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={skillsStyles.image}>
        <FaLaptopCode className={skillsStyles.computer} />
      </div>
    </div>
  );
};

export default Skills;
