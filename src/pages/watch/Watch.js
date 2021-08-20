import "../../styles/pages/watch.scss";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const Watch = () => {
  const id = window.location.pathname.substr(
    window.location.pathname.lastIndexOf("/") + 1,
    window.location.pathname.length
  );
  console.log(id);
  return (
    <div className="Watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon fontSize="large" />
        </div>
      </Link>

      <video autoPlay={true} controls>
        <source src={`/video/content${id}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default Watch;
