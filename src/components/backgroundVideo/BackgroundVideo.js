import React from "react";

import classes from "./BackgroundVideo.module.css";
import videoFit from "../../assets/video/FitwareVideo.mp4";

const BackgroundVideo = () => {
  const videoSource = videoFit;
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={videoSource} type="video/mp4" />
        <div className={classes.Transparente} />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <h1>Fitware</h1>
          <p>Sistema de controle para academias</p>
          <a href="/registerAcademy">
            <button type="button" className="btn btn-outline-dark">
              Assinar agora
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
