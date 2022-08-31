import React from "react";
import canyon from "../css/canyon.module.css";

const CanyonSocial = () => {
  return (
    <div className={canyon.main}>
      <div className={canyon.video}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mQP79_BEac0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={canyon.text}>
        <h1>Canyon Social</h1>
        <p>
          Canyon Social is an app made for sharing your experience after
          canyoneering a canyon. This social media app has a backend and
          database to store the posts made by users. It is built using the
          framework ReactJS and Tailwind CSS. This was my final project for
          Devmountain.
        </p>
      </div>
    </div>
  );
};

export default CanyonSocial;
