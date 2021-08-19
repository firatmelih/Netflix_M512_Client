import "../../styles/pages/home.scss";
import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Content } from "../../components/content/Content";

export const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Content />
    </div>
  );
};
