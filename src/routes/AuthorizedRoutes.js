import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Suspense, lazy, useState } from "react";
import Home from "../pages/home/Home";
import Watch from "../pages/watch/Watch";

function AuthorizedRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watch/:id" component={Watch} />
        <Route exact path="/*">
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default AuthorizedRoutes;
