import React from "react";
import "./YoutubeComp.css";

const YoutubeComp = props => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://i.pinimg.com/564x/e4/2c/7f/e42c7fb20510c35a8471487b01054e8a.jpg"
          alt="youtube"
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">desc here</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "7.12",
  title: "Youtube",
};

export default YoutubeComp;
