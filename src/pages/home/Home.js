import "../../styles/pages/home.scss";
import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import ContentTest from "../../components/content/ContentTest";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <ContentTest />
    </div>
  );
};

export default Home;
