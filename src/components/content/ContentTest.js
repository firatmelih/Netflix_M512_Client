import React, { useRef, useState, useEffect } from "react";
import "../../styles/components/contenttest.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ContentTestItem from "./ContentTestItem";
import { ArrowForwardIos } from "@material-ui/icons";

const ContentTest = () => {
  var tvSlider = document.querySelector(".TV-Shows");
  var comedySlider = document.querySelector(".Comedy");
  var scifiSlider = document.querySelector(".Sci-Fi");

  useEffect(() => {
    tvSlider = document.querySelector(".TV-Shows");
    comedySlider = document.querySelector(".Comedy");
    scifiSlider = document.querySelector(".Sci-Fi");
  }, []);

  const [slide, setSlide] = useState(0);

  const handleTvSlider = (direction) => {
    if (direction == "next") {
      if (slide > 0) {
        setSlide(0);
        return;
      }
      setSlide(slide - window.innerWidth);
    } else {
      if (slide == 0 || slide > 0) {
        setSlide(0);
        return;
      }
      setSlide(slide + window.innerWidth);
    }
    if (slide > 0) {
      setSlide(0);
      return;
    }
  };

  const handleComedySlider = (direction) => {
    if (direction == "next") {
      comedySlider.scrollLeft += window.innerWidth;
    } else {
      comedySlider.scrollLeft -= window.innerWidth;
    }
  };

  const handleScifiSlider = (direction) => {
    if (direction == "next") {
      scifiSlider.scrollLeft += window.innerWidth;
    } else {
      scifiSlider.scrollLeft -= window.innerWidth;
    }
  };

  return (
    <div className="ContentTest">
      <h2>TV Shows</h2>
      <div className="Content-Divider">
        <div
          onClick={(e) => {
            handleTvSlider("back");
          }}
          className="Back"
        >
          <ArrowBackIosIcon />
        </div>
        <div
          style={{
            transition: "0.9s",
            transform: `matrix(1, 0, 0, 1, ${slide}, 0)`,
            zIndex: "11",
          }}
          className="TV-Shows"
        >
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
        </div>
        <div
          style={{
            transition: "0.9s",
            transform: `matrix(1, 0, 0, 1, ${-48}, 0)`,
            zIndex: "15",
          }}
          onClick={(e) => {
            handleTvSlider("next");
          }}
          className="Next"
        >
          <ArrowForwardIos />
        </div>
      </div>
      <h2>Comedy</h2>
      <div className="Content-Divider">
        <div
          onClick={(e) => {
            handleComedySlider("back");
          }}
          className="Back"
        >
          <ArrowBackIosIcon />
        </div>
        <div className="Comedy">
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
        </div>
        <div
          onClick={(e) => {
            handleComedySlider("next");
          }}
          className="Next"
        >
          <ArrowForwardIos />
        </div>
      </div>
      <h2>Sci-Fi</h2>
      <div className="Content-Divider">
        <div
          onClick={(e) => {
            handleScifiSlider("back");
          }}
          className="Back"
        >
          <ArrowBackIosIcon />
        </div>
        <div className="Sci-Fi">
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
          <ContentTestItem />
        </div>
        <div
          onClick={(e) => {
            handleScifiSlider("next");
          }}
          className="Next"
        >
          <ArrowForwardIos />
        </div>
      </div>{" "}
    </div>
  );
};

export default ContentTest;
