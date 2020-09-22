import React, { useState } from "react";
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

const Root = () => {
  const [sortParameters, setSortParameters] = useState({
    Item: "",
    Brand: "",
    Color: "Red",
    Sort: "",
  });

  const getParameters = (event) => {
    event.persist();
    console.log(event.target.value);

    setSortParameters({
      ...sortParameters,
      [event.target.name]: event.target.value,
    });
  };

  const handleNavItemClick = (type) => {
    setSortParameters({
      Item: type,
      Brand: "",
      Color: "",
      Sort: "",
    });

    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HeroView} />
          <Route
            path="/men"
            render={(props) => (
              <MainView
                {...props}
                sortParameters={sortParameters}
                getParameters={getParameters}
                handleNavItemClick={handleNavItemClick}
              />
            )}
          />
          <Route
            path="/women"
            render={(props) => (
              <MainView
                {...props}
                sortParameters={sortParameters}
                getParameters={getParameters}
                handleNavItemClick={handleNavItemClick}
              />
            )}
          />
          <Route
            path="/item/:id"
            render={(props) => (
              <ItemView {...props} handleNavItemClick={handleNavItemClick} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Root;
