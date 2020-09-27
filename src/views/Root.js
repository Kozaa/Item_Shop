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

  const [cart, setCart] = useState([
    {
      id: "mt1",
      title: "blue nike t-shirt (mt1)",
      desc:
        "The best-fitting and flattering T-shirt. This basic tee especially has just the right weight to make it feel like a real shirt and not something sloppy. This one is not a workout tee per say, but you can't go wrong with one of those options, either.",
      price: 167.68,
      brand: "nike",
      color: "blue",
      photo: "manshirt1",
      onSale: false,
      size: "M",
    },
    {
      id: "mt2",
      title: "blue nike t-shirt (mt2)",
      desc:
        "The best-fitting and flattering T-shirt. This basic tee especially has just the right weight to make it feel like a real shirt and not something sloppy. This one is not a workout tee per say, but you can't go wrong with one of those options, either.",
      price: 190.44,
      brand: "nike",
      color: "blue",
      photo: "manshirt2",
      onSale: false,
      size: "M",
    },
    {
      id: "wt3",
      title: "blue nike t-shirt (wt3)",
      desc:
        "The best-fitting and flattering T-shirt. This basic tee especially has just the right weight to make it feel like a real shirt and not something sloppy. This one is not a workout tee per say, but you can't go wrong with one of those options, either.",
      price: 183.06,
      brand: "nike",
      color: "blue",
      photo: "manshirt3",
      onSale: false,
      size: "M",
    },
    {
      id: "wt4",
      title: "red nike t-shirt (wt4)",
      desc:
        "The best-fitting and flattering T-shirt. This basic tee especially has just the right weight to make it feel like a real shirt and not something sloppy. This one is not a workout tee per say, but you can't go wrong with one of those options, either.",
      price: 166.08,
      brand: "nike",
      color: "red",
      photo: "manshirt4",
      onSale: false,
      size: "M",
    },
    {
      id: "mt5",
      title: "red nike t-shirt (mt5)",
      desc:
        "The best-fitting and flattering T-shirt. This basic tee especially has just the right weight to make it feel like a real shirt and not something sloppy. This one is not a workout tee per say, but you can't go wrong with one of those options, either.",
      price: 133.52,
      brand: "nike",
      color: "red",
      photo: "manshirt5",
      onSale: false,
      size: "M",
    },
    {
      id: "mt6",
      title: "yellow nike t-shirt (mt6)",
      desc:
        "The best-fitting and flattering T-shirt. This basic tee especially has just the right weight to make it feel like a real shirt and not something sloppy. This one is not a workout tee per say, but you can't go wrong with one of those options, either.",
      price: 61.45,
      brand: "nike",
      color: "yellow",
      photo: "manshirt6",
      onSale: false,
      size: "M",
    },
  ]);
  const [cartIsVisible, setCartIsVisible] = useState(true);

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
