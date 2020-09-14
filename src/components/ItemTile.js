import React from "react";
import styled from "styled-components";

const StyledItemTile = styled.div`
  height: 50vh;
  position: relative;

  font-family: "Jura", sans-serif;
  font-weight: 700;

  :after {
    content: "$${({ price }) => price}";
    position: absolute;
    top: 40vh;
    transform: translateY(-100%);
    right: 0;

    padding: 10px;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-top-left-radius: 15px;
  }
`;

const StyledImg = styled.img`
  width: 30vh;
  height: 40vh;
`;

const StyledDescription = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryThemeColor};
  padding: 10px;
`;

const ItemTile = ({ photo, price, title }) => (
  <StyledItemTile price={price}>
    <StyledImg src={`assets/clothes/${photo}.png`} />
    <StyledDescription>{title}</StyledDescription>
  </StyledItemTile>
);

export default ItemTile;
