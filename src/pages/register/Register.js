import "../../styles/pages/register.scss";
import { Select, TextField } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import React from "react";

const localize = [
  {
    locale: "en",
    sign_in: "Sign In",
    h1: "Unlimited movies, TV shows, and more.",
    h2: "Watch anywhere. Cancel anytime.",
    h3: "Ready to watch? Enter your email to create or restart your membership.",
    label: "Email adress",
    get_started: "Get Started",

    h22: "This App is For Learning",
    p1: "Reason I code this app was for warming myself up and learning new features of React Js and also showing employers what I can make.",
    p2: "This App does not make any profit.",
    p3: "All the contents you will see in this App are actually trailer videos imported from YouTube.",
    p4: "If you want to contact feel free to visit my",
    p5: "by Melih Fırat aka M512 to you",
  },
  {
    locale: "tr",
    sign_in: "Oturum Aç",
    h1: "Sınırsız film, dizi ve çok daha fazlası.",
    h2: "İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.",
    h3: "İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.",
    label: "E-posta adresi",
    get_started: "Başlayın",

    h22: "Bu Uygulama Öğrenim Amaçlıdır",
    p1: "Bu uygulamayı yazmaktaki neden paslanmamak, React Js'in yeni özelliklerini öğrenmek ve iş görüşmelerinde ne yapabileceğimi göstermektir.",
    p2: "Bu uygulama kâr amacı gütmemektedir.",
    p3: "Aslında bu uygulamada göreceğiniz bütün içerikler YouTube'dan yüklenmiş fragman videolarıdır.",
    p4: "Eğer iletişime geçmek isterseniz çekinmeyin",
    p44: "hesabımı ziyaret edin.",
    p5: "Melih 'M512' Fırat tarafından sizlere ",
  },
];

const Register = (props) => {
  const handleChange = (e) => {
    props.setEmail(e.target.value);
  };
  const handleLanguageChange = (e) => {
    props.setLanguage(e.target.value);
  };
  return (
    <div className="Register">
      <div className="Navbar">
        <div className="left">
          <img
            alt="logo"
            src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
          />
        </div>
        <div className="right">
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

          <Link to="/login">
            <div className="button">{localize[props.language - 1].sign_in}</div>
          </Link>
        </div>
      </div>

      <div className="image-wrapper">
        <img
          alt="background"
          src={`/image/${localize[props.language - 1].locale}.jpg`}
        />
      </div>
      <div className="inputs-area">
        <h1>{localize[props.language - 1].h1}</h1>
        <h2>{localize[props.language - 1].h2}</h2>
        <h3>{localize[props.language - 1].h3}</h3>
        <div className="email-area">
          <TextField
            className="Input"
            autoComplete="off"
            id="filled-basic"
            label={localize[props.language - 1].label}
            variant="filled"
            name="email"
            value={props.email}
            onChange={handleChange}
          />

          {
            // eslint-disable-next-line eqeqeq
            props.email != "" &&
            props.email.includes("@") &&
            (props.email.includes(".com") ||
              props.email.includes(".org") ||
              props.email.includes(".io")) ? (
              <Link to="/register/2">
                <div className="button">
                  {localize[props.language - 1].get_started}{" "}
                  <ChevronRightIcon fontSize="large" />
                </div>
              </Link>
            ) : (
              <div className="button">
                {localize[props.language - 1].get_started}{" "}
                <ChevronRightIcon fontSize="large" />
              </div>
            )
          }
        </div>
      </div>
      <div className="register-footer">
        <h2>{localize[props.language - 1].h22}</h2>
        <p>{localize[props.language - 1].p1}</p>

        <p>{localize[props.language - 1].p2}</p>
        <p>{localize[props.language - 1].p3}</p>

        <p>
          {localize[props.language - 1].p4}{" "}
          <a href="https://github.com/firatmelih">Github</a>
          {
            // eslint-disable-next-line eqeqeq
            localize[props.language - 1].locale == "en"
              ? null
              : " " + localize[props.language - 1].p44
          }
        </p>
        <p>{localize[props.language - 1].p5}</p>
      </div>
    </div>
  );
};

export default Register;
