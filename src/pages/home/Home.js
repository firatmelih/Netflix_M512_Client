import "../../styles/pages/home.scss";
import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Content } from "../../components/content/Content";
import ContentTest from "../../components/content/ContentTest";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      {/* <Content /> */}
      <ContentTest />
    </div>
  );
};

export default Home;
