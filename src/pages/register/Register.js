import "../../styles/pages/register.scss";
import { Select, MenuItem, TextField } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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

const Register = () => {
  const [input, setInput] = useState({
    language: 1,
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="Register">
      <div className="Navbar">
        <div className="left">
          <img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" />
        </div>
        <div className="right">
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
        </div>
      </div>

      <div className="image-wrapper">
        <img src={`/image/${localize[input.language - 1].locale}.jpg`} />
      </div>
      <div className="inputs-area">
        <h1>{localize[input.language - 1].h1}</h1>
        <h2>{localize[input.language - 1].h2}</h2>
        <h3>{localize[input.language - 1].h3}</h3>
        <div className="email-area">
          <TextField
            className="Input"
            id="filled-basic"
            label={localize[input.language - 1].label}
            variant="filled"
          />
          <div className="button">
            {localize[input.language - 1].get_started} <ChevronRightIcon />
          </div>
        </div>
      </div>
      <div className="Footer">footer</div>
    </div>
  );
};

export default Register;
