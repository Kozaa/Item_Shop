import React, { useState, useEffect } from "react";
import { menTheme, womenTheme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
import SliderDisplay from "../components/SliderDisplay";
import Navigation from "../components/Navigation";
import MainClothesDisplay from "../components/MainClothesDisplay";
import Footer from "../components/Footer";
import CartModule from "../components/CartModule";
import { manClothes, womanClothes } from "../data";
import shuffleArray from "../utils/shuffleArray";

const MainViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainView = ({
  location,
  sortParameters,
  getParameters,
  handleNavItemClick,
  resetParameters,
  cart,
  cartIsVisible,
  toggleCartIsVisible,
  handleRemoveFromCart,
}) => {
  // true is men, false is women
  const [genderChoise, setGenderChoise] = useState(
    location.pathname === "/men" ? true : false
  );

  const [clothesData, setClothesData] = useState(
    genderChoise
      ? [...manClothes.tshirts, ...manClothes.pants, ...manClothes.shoes]
      : [...womanClothes.tshirts, ...womanClothes.pants, ...womanClothes.shoes]
  );

  const [onSaleItems, setOnSaleItems] = useState([]);

  useEffect(() => {
    const unsorted = genderChoise ? manClothes : womanClothes;

    const sortedByType =
      !sortParameters.Item || sortParameters.Item === "all"
        ? [...unsorted.tshirts, ...unsorted.pants, ...unsorted.shoes]
        : unsorted[sortParameters.Item.toLowerCase()];

    const sortedByBrand = sortedByType.filter((item) => {
      return !sortParameters.Brand || sortParameters.Brand === "all"
        ? true
        : item.brand === sortParameters.Brand.toLowerCase();
    });

    const sortedByColor = sortedByBrand.filter((item) => {
      return !sortParameters.Color || sortParameters.Color === "all"
        ? true
        : item.color === sortParameters.Color.toLowerCase();
    });

    const sortedByPrice = sortedByColor.sort((a, b) => {
      if (!sortParameters.Sort || sortParameters.Sort === "New") return 0;

      if (sortParameters.Sort === "lowest price") {
        return a.price === b.price ? 0 : a.price > b.price ? 1 : -1;
      } else {
        return a.price === b.price ? 0 : a.price > b.price ? -1 : 1;
      }
    });

    setClothesData(sortedByPrice);
  }, [sortParameters, genderChoise]);

  useEffect(() => {
    let allItemsArray = genderChoise
      ? [...manClothes.tshirts, ...manClothes.pants, ...manClothes.shoes]
      : [...womanClothes.tshirts, ...womanClothes.pants, ...womanClothes.shoes];

    let filteredOnSaleItems = allItemsArray.filter((item) => item.onSale);

    shuffleArray(filteredOnSaleItems);

    setOnSaleItems(filteredOnSaleItems);
  }, [genderChoise]);

  const handleGenderChange = () => {
    setGenderChoise(!genderChoise);
    resetParameters();
  };

  return (
    <ThemeProvider theme={genderChoise ? menTheme : womenTheme}>
      <CartModule
        cart={cart}
        toggleCartIsVisible={toggleCartIsVisible}
        cartIsVisible={cartIsVisible}
        handleRemoveFromCart={handleRemoveFromCart}
      />

      <MainViewWrapper>
        <Navigation
          isMen={genderChoise}
          toggleGender={handleGenderChange}
          handleNavItemClick={handleNavItemClick}
          cart={cart}
          toggleCartIsVisible={toggleCartIsVisible}
          resetParameters={resetParameters}
        />
        <SliderDisplay onSaleItems={onSaleItems} isMen={genderChoise} />
        <MainClothesDisplay
          isMen={genderChoise}
          getParameters={getParameters}
          clothesData={clothesData}
          sortParameters={sortParameters}
        />
        <Footer />
      </MainViewWrapper>
    </ThemeProvider>
  );
};

export default MainView;
