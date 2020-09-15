import React, { useState, useEffect } from "react";
import { menTheme, womenTheme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
import SliderDisplay from "../components/SliderDisplay";
import Navigation from "../components/Navigation";
import MainClothesDisplay from "../components/MainClothesDisplay";

import { manClothes, womanClothes } from "../data"; //for testing delete later

const MainViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainView = ({ location }) => {
  // true is men, false is women
  const [genderChoise, setGenderChoise] = useState(
    location.pathname === "/men" ? true : false
  );

  const [sortParameters, setSortParameters] = useState({
    Item: "",
    Brand: "",
    Color: "",
    Sort: "",
  });

  const [clothesData, setClothesData] = useState(
    genderChoise
      ? [...manClothes.tshirts, ...manClothes.pants, ...manClothes.shoes]
      : [...womanClothes.tshirts, ...womanClothes.pants, ...womanClothes.shoes]
  );

  useEffect(() => {
    sortByParameters();
  }, [sortParameters]);

  const getParameters = (event) => {
    event.persist();

    setSortParameters({
      ...sortParameters,
      [event.target.name]: event.target.value,
    });
  };

  const sortByParameters = () => {
    const sortedByType =
      !sortParameters.Item || sortParameters.Item === "All"
        ? [...manClothes.tshirts, ...manClothes.pants, ...manClothes.shoes]
        : manClothes[sortParameters.Item.toLowerCase()];

    const sortedByBrand = sortedByType.filter((item) => {
      return !sortParameters.Brand || sortParameters.Brand === "All"
        ? true
        : item.brand === sortParameters.Brand.toLowerCase();
    });

    const sortedByColor = sortedByBrand.filter((item) => {
      return !sortParameters.Color || sortParameters.Color === "All"
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
  };

  const handleGenderChange = () => {
    setGenderChoise(!genderChoise);
  };

  return (
    <ThemeProvider theme={genderChoise ? menTheme : womenTheme}>
      <MainViewWrapper>
        <Navigation isMen={genderChoise} toggleGender={handleGenderChange} />
        <SliderDisplay isMen={genderChoise} />
        <MainClothesDisplay
          isMen={genderChoise}
          getParameters={getParameters}
          clothesData={clothesData}
        />
      </MainViewWrapper>
    </ThemeProvider>
  );
};

export default MainView;
