import "../../styles/pages/watch.scss";
import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const Watch = () => {
  const [visible, setVisible] = useState(false);
  const id = window.location.pathname.substr(
    window.location.pathname.lastIndexOf("/") + 1,
    window.location.pathname.length
  );
  return (
    <div className="Watch">
      <Link to="/">
        <div
          onMouseEnter={() => {
            setVisible(true);
          }}
          onMouseLeave={() => {
            setVisible(false);
          }}
          className="back"
        >
          <ArrowBackIcon fontSize="large" />
          {visible ? <div className="text">Back to Browse</div> : null}
        </div>
      </Link>

      <video autoPlay={true} controls>
        <source src={`/video/content${id}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default Watch;
