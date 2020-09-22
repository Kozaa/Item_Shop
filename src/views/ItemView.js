import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation";
import { manClothes, womanClothes } from "../data";
import { menTheme, womenTheme } from "../theme";
import ItemDisplay from "../components/ItemDisplay";
import Disclaimer from "../components/Disclaimer";
import SimilarItems from "../components/SimilarItems";
import Footer from "../components/Footer";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const clothes = [
  ...manClothes.tshirts,
  ...manClothes.pants,
  ...manClothes.shoes,
  ...womanClothes.tshirts,
  ...womanClothes.pants,
  ...womanClothes.shoes,
];

const ItemView = ({ match, handleNavItemClick }) => {
  console.log(match.params.id);

  window.scrollTo(0, 0);

  const itemId = match.params.id;
  const isMen = itemId[0] === "m" ? true : false;

  const findItem = () => {
    return clothes.find((item) => item.id === itemId);
  };

  const getSimilarItems = () => {
    const mainItem = findItem();

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
      <Navigation isMen={isMen} handleNavItemClick={handleNavItemClick} />
      <StyledWrapper>
        <ItemDisplay item={findItem()} />
        <Disclaimer />
        <SimilarItems similarItems={getSimilarItems()} />
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  );
};
export default ItemView;
