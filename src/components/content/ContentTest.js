import React, { useRef, useState, useEffect } from "react";
import "../../styles/components/contenttest.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ContentTestItem from "./ContentTestItem";
import { ArrowForwardIos } from "@material-ui/icons";

const ContentTest = () => {
  const [slide, setSlide] = useState(0);
  const [slide2, setSlide2] = useState(0);
  const [slide3, setSlide3] = useState(0);

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
      if (slide2 > 0) {
        setSlide2(0);
        return;
      }
      setSlide2(slide2 - window.innerWidth);
    } else {
      if (slide2 == 0 || slide2 > 0) {
        setSlide2(0);
        return;
      }
      setSlide2(slide2 + window.innerWidth);
    }
    if (slide2 > 0) {
      setSlide2(0);
      return;
    }
  };

  const handleScifiSlider = (direction) => {
    if (direction == "next") {
      if (slide3 > 0) {
        setSlide3(0);
        return;
      }
      setSlide3(slide3 - window.innerWidth);
    } else {
      if (slide3 == 0 || slide3 > 0) {
        setSlide3(0);
        return;
      }
      setSlide3(slide3 + window.innerWidth);
    }
    if (slide3 > 0) {
      setSlide3(0);
      return;
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
            zIndex: "12",
          }}
          className="TV-Shows"
        >
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
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
        <div
          style={{
            transition: "0.9s",
            transform: `matrix(1, 0, 0, 1, ${slide2}, 0)`,
            zIndex: "11",
          }}
          className="Comedy"
        >
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
        </div>
        <div
          style={{
            transition: "0.9s",
            transform: `matrix(1, 0, 0, 1, ${-48}, 0)`,
            zIndex: "15",
          }}
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
        <div
          style={{
            transition: "0.9s",
            transform: `matrix(1, 0, 0, 1, ${slide3}, 0)`,
            zIndex: "10",
          }}
          className="Sci-Fi"
        >
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentTestItem
            movieName={"Bio Hackers"}
            id={1}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
        </div>
        <div
          style={{
            transition: "0.9s",
            transform: `matrix(1, 0, 0, 1, ${-48}, 0)`,
            zIndex: "15",
          }}
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
