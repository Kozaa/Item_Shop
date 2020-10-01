import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledTileLink = styled(Link)`
  width: 50vh;
  height: 60vh;

  grid-area: 1 / -1;

  position: relative;

  background-image: ${({ photo }) => `url('assets/clothes/${photo}.png')`};
  background-size: cover;

  transform-style: preserve-3d;
  transform: ${({ offset }) =>
    `perspective(1000px) 
    translateX(calc(70% * ${offset}))
    translateZ(${-4 * Math.abs(offset)}em)`};

  z-index: ${({ offset }) => -1 * Math.abs(offset)};

  transition: transform 0.5s ease-in-out;

  -webkit-backface-visibility: hidden;
  will-change: transform, z-index;

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

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 330px;
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

const Price = styled.div`
  color: black;
  background-color: ${({ theme }) => theme.secondaryThemeColor};
  height: 100%;
  padding: 8px;
`;

const ItemTile = ({
  price,
  title,
  photo,
  offset,
  handleTileClick,
  id,
  isMen,
}) => (
  <StyledTileLink
    photo={photo}
    offset={offset}
    onClick={handleTileClick}
    to={offset === 0 ? `/item/${id}` : isMen ? "/men" : "/women"}
  >
    <ItemDetails>
      <div>{title}</div>
      <Price>${price}</Price>
    </ItemDetails>
  </StyledTileLink>
);
export default ItemTile;
