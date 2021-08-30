import React, { useState } from "react";
import "../../styles/components/contenttest.scss";
import { Add, PlayArrow, ThumbUpOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
// import VolumeUpIcon from "@material-ui/icons/VolumeUp";
// import VolumeOffIcon from "@material-ui/icons/VolumeOff";

const ContentTestItem = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsFocused(true);
      }}
      onMouseLeave={() => {
        setIsFocused(false);
      }}
      className={`ContentTestItem ${isFocused}`}
    >
      <div className={`upper`}>
        {isFocused ? (
          <Link exact to={`/watch/${props.id}`}>
            <video
              autoPlay={true}
              onMouseEnter={(e) => {
                setIsFocused(true);
              }}
              className="image-container"
              muted
            >
              <source src="/video/content1.mp4" type="video/mp4" />
            </video>
          </Link>
        ) : (
          <Link exact to={`/watch/${props.id}`}>
            <img
              alt="bannerImage"
              className="image-container"
              src="/image/content1.jpg"
            />
          </Link>
        )}
      </div>
      <div
        onMouseLeave={(e) => {
          setIsFocused(false);
        }}
        className={`lower-${isFocused}`}
      >
        <div className="buttons-area">
          <div className="left">
            <div className="play-button">
              <Link exact to={`/watch/${props.id}`}>
                <PlayArrow />
              </Link>
            </div>
            <div className="left-button">
              <Add />
            </div>
            <div className="left-button">
              <ThumbUpOutlined fontSize="small" />
            </div>
            <div className="left-button">
              <ThumbDownOutlinedIcon fontSize="small" />
            </div>
          </div>
          <div className="right">
            <div className="right-button">
              <ExpandMoreOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="item-info">
          <span className="match">98% Match</span>
          <span className="age">16+</span>
          <span>2 Seasons</span>
          <span className="HD">HD</span>
        </div>
        <div className="item-categories">
          <ul>
            <li>Emotional</li>
            <li>Sci-Fi TV</li>
            <li>Thriller</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentTestItem;
