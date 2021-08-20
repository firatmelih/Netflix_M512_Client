import "../../styles/components/content.scss";
import { ContentItem } from "./ContentItem";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React, { useState } from "react";
export const Content = () => {
  const [slide, setSlide] = useState([0, 0, 0]);

  return (
    <div className="Content">
      <div className="content-item">
        <h2>
          <a>
            <div>Crime TV Shows</div>
          </a>
        </h2>
        <div
          onMouseDown={(e) => {
            if (slide[0] == -1892) {
              return;
            }
            setSlide({ ...slide, 0: slide[0] - 1892 });
            console.log(slide);
          }}
          className="next-button"
        >
          <NavigateNextIcon />
        </div>
        <div
          style={{
            transition: "0.9s",
            transform: `matrix(1, 0, 0, 1, ${slide[0]}, 0)`,
            zIndex: "11",
          }}
          className="cover-container"
        >
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content1.mp4"}
            src={"/image/content1.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
        </div>
        <div
          onMouseDown={(e) => {
            console.log(e);
            if (slide[0] == 0) {
              return;
            }
            setSlide({ ...slide, 0: slide[0] + 1892 });
          }}
          className="back-button"
        >
          <ArrowBackIosIcon />
        </div>
        <div className="block-button">
          <ArrowBackIosIcon />
        </div>
      </div>
      <div className="content-item">
        <h2>
          <a>
            <div>Crime TV Shows</div>
          </a>
        </h2>
        <div
          onMouseDown={(e) => {
            if (slide[1] == -1892) {
              return;
            }
            console.log(e);
            setSlide({ ...slide, 1: slide[1] - 1892 });
          }}
          className="next-button"
        >
          <NavigateNextIcon />
        </div>
        <div
          style={{
            transition: "0.9s",
            transform: `matrix(1, 0, 0, 1, ${slide[1]}, 1)`,
            zIndex: "10",
          }}
          className="cover-container"
        >
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content1.mp4"}
            src={"/image/content1.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
        </div>
        <div
          onMouseDown={(e) => {
            if (slide[1] == 0) {
              return;
            }
            console.log(e);
            setSlide({ ...slide, 1: slide[1] + 1892 });
          }}
          className="back-button"
        >
          <ArrowBackIosIcon />
        </div>
        <div className="block-button">
          <ArrowBackIosIcon />
        </div>
      </div>
      <div className="content-item">
        <h2>
          <a>
            <div>Crime TV Shows</div>
          </a>
        </h2>
        <div
          onMouseDown={(e) => {
            if (slide[2] == -1892) {
              return;
            }
            console.log(e);
            setSlide({ ...slide, 2: slide[2] - 1892 });
          }}
          className="next-button"
        >
          <NavigateNextIcon />{" "}
        </div>
        <div
          style={{
            transition: "0.9s",
            transform: `matrix(1, 0, 0, 1, ${slide[2]}, 0)`,
            zIndex: "9",
          }}
          className="cover-container"
        >
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content1.mp4"}
            src={"/image/content1.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
          <ContentItem
            movieName={"Bio Hackers"}
            srcVideo={"/video/content2.mp4"}
            src={"/image/content2.jpg"}
          />
        </div>
        <div
          onMouseDown={(e) => {
            if (slide[2] == 0) {
              return;
            }
            console.log(e);
            setSlide({ ...slide, 2: slide[2] + 1892 });
          }}
          className="back-button"
        >
          <ArrowBackIosIcon />
        </div>
        <div className="block-button">
          <ArrowBackIosIcon />
        </div>
      </div>
    </div>
  );
};
