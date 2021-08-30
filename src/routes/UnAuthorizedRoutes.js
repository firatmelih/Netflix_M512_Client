import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Register2 from "../pages/register/Register2";

function UnAuthorizedRoutes(props) {
  const [language, setLanguage] = useState(1);
  const [email, setEmail] = useState("");
  return (
    <Router>
      <Switch>
        <Route exact path="/register">
          <Register
            language={language}
            setLanguage={setLanguage}
            email={email}
            setEmail={setEmail}
          />
        </Route>
        <Route exact path="/register/2">
          <Register2
            authorized={props.authorized}
            setAuthorized={props.setAuthorized}
            language={language}
            setLanguage={setLanguage}
            email={email}
            setEmail={setEmail}
          />
        </Route>
        <Route exact path="/login">
          <Login
            authorized={props.authorized}
            setAuthorized={props.setAuthorized}
            language={language}
            setLanguage={setLanguage}
            email={email}
            setEmail={setEmail}
          />
        </Route>
        <Route exact path="/*">
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default UnAuthorizedRoutes;
