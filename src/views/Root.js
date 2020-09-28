import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import HeroView from "./HeroView";
import MainView from "./MainView";
import ItemView from "./ItemView";
import ChceckoutView from "./CheckoutView";

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
    Color: "",
    Sort: "",
  });

  const [cart, setCart] = useState([]);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleAddToCart = (item, size) => {
    const cartItem = Object.assign({}, item); //brake of object reference
    cartItem.size = size;

    setCart([...cart, cartItem]);
  };

  const handleRemoveFromCart = (index) => {
    let helperArr = cart;

    helperArr.splice(index, 1);

    setCart([...helperArr]);
  };

  const toggleCartIsVisible = () => {
    setCartIsVisible(!cartIsVisible);
  };

  const getParameters = (event) => {
    event.persist();

    setSortParameters({
      ...sortParameters,
      [event.target.name]: event.target.value,
    });
  };

  const resetParameters = () => {
    setSortParameters({
      Item: "",
      Brand: "",
      Color: "",
      Sort: "",
    });
  };

  const handleNavItemClick = (type) => {
    setSortParameters({
      Item: type,
      Brand: "",
      Color: "",
      Sort: "",
    });

    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0.9,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HeroView} />
          <Route
            path={["/men", "/women"]}
            render={(props) => (
              <MainView
                {...props}
                sortParameters={sortParameters}
                getParameters={getParameters}
                handleNavItemClick={handleNavItemClick}
                resetParameters={resetParameters}
                cart={cart}
                toggleCartIsVisible={toggleCartIsVisible}
                cartIsVisible={cartIsVisible}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            )}
          />
          <Route
            path="/item/:id"
            render={(props) => (
              <ItemView
                {...props}
                handleNavItemClick={handleNavItemClick}
                resetParameters={resetParameters}
                handleAddToCart={handleAddToCart}
                cart={cart}
                toggleCartIsVisible={toggleCartIsVisible}
                cartIsVisible={cartIsVisible}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            )}
          />
          <Route
            path="/checkout"
            render={(props) => (
              <ChceckoutView
                {...props}
                cart={cart}
                toggleCartIsVisible={toggleCartIsVisible}
                cartIsVisible={cartIsVisible}
                handleRemoveFromCart={handleRemoveFromCart}
                handleNavItemClick={handleNavItemClick}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Root;
