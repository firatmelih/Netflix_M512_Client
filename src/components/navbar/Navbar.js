import "../../styles/components/navbar.scss";
import Banner from "../banner/Banner";
import React, { useState } from "react";
import { Search, Notifications, DetailsTwoTone } from "@material-ui/icons";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  window.addEventListener("scroll", (event) => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <div className="NavbarContains">
      <div
        onClick={(e) => {
          console.log(e);
        }}
        className="Navbar"
        style={
          scrolled
            ? { background: "#141414" }
            : {
                backgroundImage: `-moz- oldlinear-gradient(top,rgba(0,0,0,.7) 100%,rgba(0,0,0,0))`,
                backgroundImage: `-o-linear-gradient(top,rgba(0,0,0,.7) 100%,rgba(0,0,0,0))`,
                backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))`,
              }
        }
      >
        <div className="left">
          <a>
            <img
              alt="Logo"
              src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
            />
          </a>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>TV Shows</a>
            </li>
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>New & Popular</a>
            </li>
            <li>
              <a>My List</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="right-element">
            <div className="search-box">
              <button>
                <Search />
              </button>
            </div>
          </div>
          <div className="right-element">
            <span>
              <a>KIDS</a>
            </span>
          </div>
          <div className="right-element">
            <button>
              <Notifications />
            </button>
          </div>
          <div className="right-element">
            <div className="profile">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
                alt=""
              />
              <DetailsTwoTone fontSize="small" />
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
