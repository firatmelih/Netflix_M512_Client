import "../../styles/components/content.scss";
import { ContentItem } from "./ContentItem";
import React, { useState } from "react";

export const Content = () => {
  return (
    <div className="Content">
      <h2>
        <a>
          <div>Crime TV Shows</div>
        </a>
      </h2>
      <div className="cover-container">
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
        {/* <ContentItem movieName={"Bio Hackers"} src={"/image/content2.jpg"} />
        <ContentItem movieName={"Bio Hackers"} src={"/image/content2.jpg"} />
        <ContentItem movieName={"Bio Hackers"} src={"/image/content2.jpg"} />
        <ContentItem movieName={"Bio Hackers"} src={"/image/content2.jpg"} />
        <ContentItem movieName={"Bio Hackers"} src={"/image/content2.jpg"} />
        <ContentItem movieName={"Bio Hackers"} src={"/image/content2.jpg"} /> */}
      </div>
    </div>
  );
};
