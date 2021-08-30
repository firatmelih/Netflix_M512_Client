import { Info, PlayArrow } from "@material-ui/icons";
import "../../styles/components/banner.scss";
import { Link } from "react-router-dom";
import React from "react";

const Banner = (props) => {
  return (
    <div className="Banner">
      <div>
        <img alt="movieTitle" src="/image/banner1_title.webp" />
        <h2 style={props.hover ? { color: "white" } : null}>GO FOR THE KILL</h2>
        <p style={props.hover ? { color: "white" } : null}>
          After awakening from a four-year coma, a former assassin wreaks
          vengeance on the team of assassins who betrayed her.
        </p>
        <div className="buttons-div">
          <Link to="/watch/killbill">
            <button>
              <PlayArrow fontSize="large" />
              <span>Play</span>
            </button>
          </Link>

          <button>
            <Info />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
