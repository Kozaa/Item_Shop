import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import HeroView from "./HeroView";
import MainView from "./MainView";
import ItemView from "./ItemView";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
} 

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: calc(1vw + 1vh + 2px);
}



#root {
  display: flex;
  flex-direction: row;
  width: 100%;
}

@media screen and (max-width: 768px) {
    body {
      font-size: calc(1vw + 1vh + 9px);
    }

    #root {
      flex-direction: column;
  
    }
  }

`;

const Root = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HeroView} />
        <Route path="/men" component={MainView} />
        <Route path="/women" component={MainView} />
        <Route path="/item/:id" render={ItemView} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Root;
