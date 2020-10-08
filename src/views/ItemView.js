import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { manClothes, womanClothes } from "../data";
import { menTheme, womenTheme } from "../theme";
import ItemDisplay from "../components/ItemDisplay";
import Disclaimer from "../components/Disclaimer";
import SimilarItems from "../components/SimilarItems";
import Footer from "../components/Footer";
import CartModule from "../components/CartModule";
import Button from "../components/Button";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const StyledNotFound = styled.div`
  height: 100%;
  padding: 50px;
  text-align: center;
`;

const clothes = [
  ...manClothes.tshirts,
  ...manClothes.pants,
  ...manClothes.shoes,
  ...womanClothes.tshirts,
  ...womanClothes.pants,
  ...womanClothes.shoes,
];

const ItemView = ({
  match,
  history,
  handleNavItemClick,
  resetParameters,
  handleAddToCart,
  cart,
  cartIsVisible,
  toggleCartIsVisible,
  handleRemoveFromCart,
}) => {
  window.scrollTo(0, 0);

  const itemId = match.params.id;
  const isMen = itemId[0] === "m" ? true : false;
  const [mainItem, setMainItem] = useState(
    clothes.find((item) => item.id === itemId)
  );

  useEffect(() => {
    const foundItem = clothes.find((item) => item.id === itemId);

    setMainItem(foundItem);
  }, [itemId]);

  const getSimilarItems = () => {
    const filteredByType = clothes.filter(
      (item) =>
        item.id.slice(0, 2) === mainItem.id.slice(0, 2) &&
        item.brand === mainItem.brand
    );

    if (filteredByType.length < 10) {
      let matchColor = clothes.filter(
        (item) =>
          item.id.slice(0, 2) === mainItem.id.slice(0, 2) &&
          item.color === mainItem.color
      );
      filteredByType.push(...matchColor);
    }

    const finalItems = filteredByType.filter(
      (item, i) => filteredByType.indexOf(item) === i
    );

    return finalItems;
  };

  return (
    <ThemeProvider theme={isMen ? menTheme : womenTheme}>
      <Navigation
        isMen={isMen}
        handleNavItemClick={handleNavItemClick}
        resetParameters={resetParameters}
        cart={cart}
        toggleCartIsVisible={toggleCartIsVisible}
      />
      <CartModule
        cart={cart}
        cartIsVisible={cartIsVisible}
        toggleCartIsVisible={toggleCartIsVisible}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <StyledWrapper>
        {mainItem ? (
          <>
            <ItemDisplay item={mainItem} handleAddToCart={handleAddToCart} />
            <Disclaimer />
            <SimilarItems similarItems={getSimilarItems()} />
            <Footer />
          </>
        ) : (
          <>
            <StyledNotFound>
              <h2>Sorry we couldn't find item with the id of ({itemId}).</h2>
              <Link to="/">
                <Button>Main Page</Button>
              </Link>
            </StyledNotFound>
            <Footer />
          </>
        )}
      </StyledWrapper>
    </ThemeProvider>
  );
};
export default ItemView;
