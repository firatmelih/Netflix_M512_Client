import { Info, PlayArrow } from "@material-ui/icons";
import "../../styles/components/banner.scss";
import React from "react";

const Banner = () => {
  return (
    <div className="Banner">
      <div>
        <img src="/image/banner1_title.webp" />
        <h2>GO FOR THE KILL</h2>
        <p>
          After awakening from a four-year coma, a former assassin wreaks
          vengeance on the team of assassins who betrayed her.
        </p>
        <div className="buttons-div">
          <button>
            <PlayArrow fontSize="large" />
            <span>Play</span>
          </button>
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
