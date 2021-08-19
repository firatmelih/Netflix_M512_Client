import React, { useState } from "react";
import { Add, PlayArrow, ThumbUpOutlined } from "@material-ui/icons";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
export const ContentItem = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      onMouseEnter={(e) => {
        setIsFocused(true);
      }}
      onMouseLeave={(e) => {
        setIsFocused(false);
      }}
      className={`container-item ${isFocused}`}
    >
      {isFocused ? (
        <video autoPlay={true}>
          <source src={props.srcVideo} type="video/mp4" />
        </video>
      ) : (
        <img src={props.src} />
      )}
      <div className={`item-data-${isFocused}`}>
        <div className="buttons-area">
          <div className="left">
            <div className="play-button">
              <PlayArrow />
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
