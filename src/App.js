/* eslint-disable eqeqeq */
import "./styles/main.scss";
import React, { useState, useEffect } from "react";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";
import UnAuthorizedRoutes from "./routes/UnAuthorizedRoutes";

const App = () => {
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth") == "true") {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, []);
  if (authorized) {
    return (
      <AuthorizedRoutes authorized={authorized} setAuthorized={setAuthorized} />
    );
  } else {
    return <UnAuthorizedRoutes setAuthorized={setAuthorized} />;
  }
};

export default App;
