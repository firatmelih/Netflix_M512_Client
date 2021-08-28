import "../../styles/pages/login.scss";
import "../../styles/pages/register.scss";

import { Select, MenuItem, TextField } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const localize = [
  {
    locale: "en",
    sign_in: "Sign In",
    h1: "Unlimited movies, TV shows, and more.",
    h2: "Watch anywhere. Cancel anytime.",
    h3: "Ready to watch? Enter your email to create or restart your membership.",
    label: "Email adress",
    get_started: "Get Started",
  },
  {
    locale: "tr",
    sign_in: "Oturum Aç",
    h1: "Sınırsız film, dizi ve çok daha fazlası.",
    h2: "İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.",
    h3: "İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.",
    label: "E-posta adresi",
    get_started: "Başlayın",
  },
];

const Login = (props) => {
  const [input, setInput] = useState({
    language: 1,
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleLanguageChange = (e) => {
    props.setLanguage(e.target.value);
  };
  return (
    <div className="Login Register">
      <div className="Navbar">
        <div className="left">
          <img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" />
        </div>
        {/* <div className="right">
          <LanguageIcon fontSize="small" />
          <Select
            native
            className="Select"
            labelId="drop-down"
            name="language"
            id="demo-simple-select-filled"
            value={input.language}
            onChange={handleChange}
          >
            <option value={1}>English</option>
            <option value={2}>Türkçe</option>
          </Select>

          <div className="button">{localize[input.language - 1].sign_in}</div>
        </div> */}
      </div>

      <div className="image-wrapper">
        <img src={`/image/${localize[props.language - 1].locale}.jpg`} />
      </div>
      <div className="inputs-area">
        <div className="login-form">
          <h2>Sign In</h2>
          <TextField
            className="Input"
            id="filled-basic"
            label={localize[props.language - 1].label}
            variant="filled"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <br />
          <TextField
            className="Input"
            id="filled-basic"
            label="Password"
            variant="filled"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <div className="button">{localize[props.language - 1].sign_in}</div>
        </div>
        <div className="links">
          <div className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <div className="need-help">
            <span>Need help?</span>
          </div>
        </div>
        <div className="register">
          New to Netflix? <Link to="/register">Sign up now.</Link>
        </div>
      </div>

      <div className="Footer">
        <div className="footer-items">
          <p>Questions? Call 1234-5678-000</p>

          <div className="footer-elements">
            <ul>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div className="right">
            {" "}
            <LanguageIcon fontSize="small" />
            <Select
              native
              className="Select"
              labelId="drop-down"
              name="language"
              id="demo-simple-select-filled"
              value={props.language}
              onChange={handleLanguageChange}
            >
              <option value={1}>English</option>
              <option value={2}>Türkçe</option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
