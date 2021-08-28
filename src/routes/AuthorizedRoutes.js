import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense, lazy, useState } from "react";
import Home from "../pages/home/Home";
import Watch from "../pages/watch/Watch";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
const HomePage = lazy(() => import("../pages/home/Home"));

function AuthorizedRoutes() {
  const [language, setLanguage] = useState(1);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watch/:id" component={Watch} />
        <Route exact path="/register">
          <Register language={language} setLanguage={setLanguage} />
        </Route>
        <Route exact path="/login">
          <Login language={language} setLanguage={setLanguage} />
        </Route>
      </Switch>
    </Router>
  );
}

export default AuthorizedRoutes;
