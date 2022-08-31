import React from "react";
import about from "../css/about.module.css";
import aboutHero from "../images/about.jpg";

const About = () => {
  return (
    <div id="about" className={about.main}>
      <div className={about.photo}>
        <img src={aboutHero} alt="Jaren Reber" className={about.aboutHero} />
      </div>
      <div className={about.text}>
        <h1>About Me</h1>
        <p>
          Having spent time studying generals at Utah Valley University and Utah
          Tech University I found I really like technology and building
          applications. When I learned about Devmountain I jumped at the
          opportunity to work hard in the bootcamp and signed up within a month.
          I love working hard, and solving problems. Thanks for checking my
          portfolio out.
        </p>
      </div>
    </div>
  );
};

export default About;
