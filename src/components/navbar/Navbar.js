import "../../styles/components/navbar.scss";
import Banner from "../banner/Banner";
import React, { useState } from "react";
import {
  Search,
  Notifications,
  DetailsTwoTone,
  ArrowDropDown,
  VolumeOff,
  VolumeUp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid black",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({}))(MenuItem);

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mute, setMute] = useState(true);
  window.addEventListener("scroll", (event) => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="NavbarContains"
      // style={hover?backgroundImage:{}}
    >
      {hover ? (
        <div>
          <video className="backGround" muted={mute} autoPlay={true} loop>
            <source src={`/video/banner.mp4`} type="video/mp4" />
          </video>
          <div
            style={{ cursor: "pointer" }}
            className="mute-button-banner"
            onClick={() => {
              setMute(!mute);
            }}
          >
            {mute ? (
              <VolumeOff fontSize="large" />
            ) : (
              <VolumeUp fontSize="large" />
            )}
          </div>
        </div>
      ) : (
        <img
          className="backGround"
          src="/image/banner.jpg"
          style={{ zIndex: "-1" }}
        />
      )}
      <div
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
            <div className="profile" onClick={handleClick}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
                alt=""
              />
              <ArrowDropDown
                style={
                  anchorEl == null
                    ? { fontSize: "large" }
                    : { transform: "rotate(180deg)", fontSize: "large" }
                }
                fontSize="large"
              />
            </div>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className="profile-dropdown"
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </StyledMenuItem>
              <a style={{ textDecoration: "none" }} href="/register">
                <StyledMenuItem
                  onClick={() => {
                    localStorage.setItem("auth", false);
                  }}
                >
                  <ListItemIcon>
                    <InboxIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </StyledMenuItem>
              </a>
            </StyledMenu>
          </div>
        </div>
      </div>
      <Banner hover={hover} />
    </div>
  );
};
