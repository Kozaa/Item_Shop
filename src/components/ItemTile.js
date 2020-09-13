import React from "react";
import styled from "styled-components";

const windowWidth = window.innerWidth;

const StyledTile = styled.div`
  width: 300px;
  height: 400px;

  grid-area: 1 / -1;

  position: relative;

  border: 1px black solid;
  background-image: ${({ photo }) => `url('assets/clothes/${photo}.png')`};
  background-size: cover;

  transform-style: preserve-3d;
  transform: ${({ offset }) =>
    `perspective(1000px) 
    translateX(calc(70% * ${offset}))
    translateZ(${-4 * Math.abs(offset)}em)`};

  -webkit-backface-visibility: hidden;

  z-index: ${({ offset }) => -1 * Math.abs(offset)};
  will-change: transform, z-index;

  transition: transform 0.5s ease-in-out;

  :after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: ${({ offset }) =>
      offset === 0 ? 0 : (Math.abs(offset) / 100) * 8};
    transition: opacity 0.5s ease-in-out;
    will-change: opacity;
  }
`;

const ItemDetails = styled.div`
  width: 100%;
  height: auto;

  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 10px;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 70px rgba(0, 0, 0, 0.2) inset;

  font-size: 0.7em;
  color: white;
`;

const Detail = styled.div``;

const Price = styled.div`
  background-color: ${({ theme }) => theme.secondaryThemeColor};
  height: 100%;
  padding: 8px;
`;

const ItemTile = ({ item, offset, handleTileClick }) => {
  return (
    <StyledTile photo={item.photo} offset={offset} onClick={handleTileClick}>
      <ItemDetails>
        <Detail>{item.title}</Detail>
        <Price>${item.price}</Price>
      </ItemDetails>
    </StyledTile>
  );
};

export default ItemTile;
