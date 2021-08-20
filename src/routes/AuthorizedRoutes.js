import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Home from "../pages/home/Home";
import Watch from "../pages/watch/Watch";
const HomePage = lazy(() => import("../pages/home/Home"));

function AuthorizedRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watch/:id" component={Watch} />
      </Switch>
    </Router>
  );
}

export default AuthorizedRoutes;
