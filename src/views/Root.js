import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeroView from "./HeroView";
import MainView from "./MainView";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HeroView} />
      <Route path="/men" component={MainView} />
      <Route path="/women" component={MainView} />
    </Switch>
  </BrowserRouter>
);

export default Root;
