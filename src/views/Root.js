import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import HeroView from "./HeroView";
import MainView from "./MainView";

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
  flex-direction: column;
  width: 100%;
  height: auto;
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
      </Switch>
    </BrowserRouter>
  </>
);

export default Root;
