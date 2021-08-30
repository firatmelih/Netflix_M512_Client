import "../../styles/pages/register2.scss";

import { Select, MenuItem, TextField } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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
    end_up: "Finish Up",
    almost_done: "2/2 Almost Done",
    set_password: "Now set a password",
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
    end_up: "Kaydı Tamamla",
    almost_done: "2/2 Neredeyse Tamam",
    set_password: "Şimdi bir parola oluşturun",
  },
];

const Register2 = (props) => {
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
      props.email != "" &&
      props.email.includes("@") &&
      (props.email.includes(".com") ||
        props.email.includes(".org") ||
        props.email.includes(".io")) &&
      input.password.length > 3
    ) {
      props.setAuthorized(true);
      localStorage.setItem("auth", true);
      <Redirect to="/"></Redirect>;
    }
  };
  return (
    <div style={{ background: "white" }} className="Register2">
      <div className="Navbar">
        <div className="left">
          <img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" />
        </div>
        <div className="right">
          <Link to="/login">
            <div className="button">{localize[props.language - 1].sign_in}</div>
          </Link>
        </div>
      </div>
      <div className="inputs-area1">
        <div className="login-form">
          <p>{localize[props.language - 1].almost_done}</p>
          <h3>{localize[props.language - 1].set_password}</h3>
          <TextField
            className="Input"
            id="filled-basic"
            label={localize[props.language - 1].email}
            variant="outlined"
            autoComplete="off"
            name="email"
            value={props.email}
            onChange={(e) => {
              props.setEmail(e.target.value);
            }}
          />
          <br />
          <TextField
            className="Input"
            type="password"
            id="filled-basic"
            label={localize[props.language - 1].password}
            variant="outlined"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <div onClick={handleLogin} className="button">
            {localize[props.language - 1].end_up}
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

export default Register2;
