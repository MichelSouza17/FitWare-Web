import React from "react";

import classes from "./BackgroundVideo.module.css";

const BackgroundVideo = () => {
  const videoSource = "../../assets/video/FitwareVideo";
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <h1>Fitware</h1>
          <p>Sistema de controle para academias</p>
          <button type="button" className="btn btn-outline-dark">
            Assinar agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
