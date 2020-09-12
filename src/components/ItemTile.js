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
      offset === 0 ? 0 : (Math.abs(offset) / 100) * 6};
    transition: opacity 0.5s ease-in-out;
    will-change: opacity;
  }
`;

const ItemTile = ({ photo, offset }) => {
  return (
    <StyledTile photo={photo} offset={offset}>
      offset={offset} photo={photo}
    </StyledTile>
  );
};

export default ItemTile;
