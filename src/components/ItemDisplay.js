import React from "react";
import styled from "styled-components";
import PickSize from "./PickSize";
import Button from "./Button";

const StyledWrapper = styled.div`
  display: flex;
  width: 90vw;
  height: 80vh;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  width: 50vh;
`;

const ItemDescWrapper = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  padding: 0 20px;
`;

const StyledTitle = styled.h1`
  grid-column: 1/4;
`;

const StyledDescription = styled.div`
  grid-column: 1/4;
`;

const StyledPrice = styled.div`
  grid-column: 1/3;
  font-size: 2em;
`;

const ItemDisplay = ({ item }) => (
  <StyledWrapper>
    <StyledImg src={`../assets/clothes/${item.photo}.png`} alt={item.name} />
    <ItemDescWrapper>
      <StyledTitle>{item.title}</StyledTitle>
      <StyledDescription>{item.desc}</StyledDescription>
      <PickSize />
      <StyledPrice>Price: ${item.price}</StyledPrice>
      <Button>Add to cart</Button>
    </ItemDescWrapper>
  </StyledWrapper>
);

export default ItemDisplay;
