import React, { useState } from "react";
import "../../styles/components/contenttest.scss";

const ContentTestItem = () => {
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
      <div className="upper">
        {isFocused ? (
          <video className="image-container" muted autoPlay={false}>
            <source src="/video/content1.mp4" type="video/mp4" />
          </video>
        ) : (
          <img className="image-container" src="/image/content1.jpg" />
        )}
      </div>
      <div className="lower"></div>
    </div>
  );
};

export default ContentTestItem;
