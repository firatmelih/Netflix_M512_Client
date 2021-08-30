import "../../styles/pages/login.scss";
import "../../styles/pages/register.scss";

import { Select, TextField } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import { Link, Redirect } from "react-router-dom";
import React, { useState } from "react";

const localize = [
  {
    locale: "en",
    sign_in: "Sign In",
    email: "Email or phone number",
    password: "Password",
    remember_me: "Remember me",
    need_help: "Need help?",
    new: "New to Netflix?",
    sign_up: "Sign up now",
    question: "Questions? Call 1234-567-000",
    faq: "FAQ",
    help_center: "Help Center",
    terms: "Terms of Use",
    privacy: "Privacy",
    cookies: "Cookie Preferences",
    ci: "Corporate Information",
  },
  {
    locale: "tr",
    sign_in: "Oturum Aç",
    email: "E‑posta veya telefon numarası",
    password: "Parola",
    remember_me: "Beni hatırla",
    need_help: "Yardım ister misiniz?",
    new: "Netflix'e katılmak ister misiniz?",
    sign_up: "Şimdi kaydolun",
    question: "Sorularınız mı var? 1234-567-000",
    faq: "SSS",
    help_center: "Yardım Merkezi",
    terms: "Kullanım Koşulları",
    privacy: "Gizlilik",
    cookies: "Çerez Tercihleri",
    ci: "Kurumsal Bilgiler",
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
  const handleLogin = (e) => {
    if (
      // eslint-disable-next-line eqeqeq
      input.email != "" &&
      input.email.includes("@") &&
      (input.email.includes(".com") ||
        input.email.includes(".org") ||
        input.email.includes(".io")) &&
      input.password.length > 3
    ) {
      props.setAuthorized(true);
      localStorage.setItem("auth", true);
      <Redirect to="/"></Redirect>;
    }
  };
  return (
    <div className="Login Register">
      <div className="Navbar">
        <div className="left">
          <img
            alt="logo"
            src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
          />
        </div>
      </div>

      <div className="image-wrapper">
        <img
          alt="background"
          src={`/image/${localize[props.language - 1].locale}.jpg`}
        />
      </div>
      <div className="inputs-area">
        <div className="login-form">
          <h2>{localize[props.language - 1].sign_in}</h2>
          <TextField
            className="Input"
            autoComplete="off"
            id="filled-basic"
            label={localize[props.language - 1].email}
            variant="filled"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <br />
          <TextField
            className="Input"
            id="filled-basic"
            type="password"
            label={localize[props.language - 1].password}
            variant="filled"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <div onClick={handleLogin} className="button">
            {localize[props.language - 1].sign_in}
          </div>
          <div className="links">
            <div className="remember-me">
              <input type="checkbox" />
              <span>{localize[props.language - 1].remember_me}</span>
            </div>
            <div className="need-help">
              <span>{localize[props.language - 1].need_help}</span>
            </div>
          </div>
          <div className="register">
            {localize[props.language - 1].new}
            <Link to="/register">{localize[props.language - 1].sign_up}</Link>.
          </div>
        </div>
      </div>

      <div className="Footer">
        <div className="footer-items">
          <p>{localize[props.language - 1].question}</p>

          <div className="footer-elements">
            <ul>
              <li>{localize[props.language - 1].faq}</li>
              <li>{localize[props.language - 1].help_center}</li>
              <li>{localize[props.language - 1].terms}</li>
              <li>{localize[props.language - 1].privacy}</li>
              <li>{localize[props.language - 1].cookies}</li>
              <li>{localize[props.language - 1].ci}</li>
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
