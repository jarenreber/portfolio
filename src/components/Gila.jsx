import React from "react";
import gila from "../css/gila.module.css";

const Gila = () => {
  return (
    <div id="projects" className={gila.main}>
      <div className={gila.text}>
        <h1>Gila Outdoors</h1>
        <p>
          Gila Outdoors was the foundations capstone made during my time at
          Devmountain. It is a full stack app made for tracking mountain bike
          trails and calls an API to get the trails based off of a latitude and
          longitude. This app is built with JavaScript, HTML, and CSS.
        </p>
      </div>
      <div className={gila.video}>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/kvPfzmhB8Ec"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Gila;
