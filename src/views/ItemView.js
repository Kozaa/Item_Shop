import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation";
import { manClothes, womanClothes } from "../data";
import { menTheme, womenTheme } from "../theme";
import ItemDisplay from "../components/ItemDisplay";
import Disclaimer from "../components/Disclaimer";
import Footer from "../components/Footer";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

const ItemView = (routerProps) => {
  console.log(routerProps.match.params.id);

  window.scrollTo(0, 0);

  const itemId = routerProps.match.params.id;
  const isMen = itemId[0] === "m" ? true : false;

  const findItem = () => {
    return clothes.find((item) => item.id === itemId);
  };
  console.log(findItem(), isMen);

  return (
    <ThemeProvider theme={isMen ? menTheme : womenTheme}>
      <Navigation isMen={isMen} />
      <StyledWrapper>
        <ItemDisplay item={findItem()} />
        <Disclaimer />
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  );
};
export default ItemView;
