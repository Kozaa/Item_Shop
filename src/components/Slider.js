import React, { useReducer } from "react";
import styled from "styled-components";
import ItemTile from "./ItemTile";
import { manClothes, womanClothes } from "../data";

const StyledItemsWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.backgroundColor};
  overflow-x: hidden;
  z-index: 0;
`;

const Button = styled.button`
  position: fixed;
  padding: 20px;
  z-index: 102;
  top: 50%;
`;

const Button2 = styled(Button)`
  right: 0;
`;

const sliderReducer = (state, action) => {
  if (action.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % 15,
    };
  }
  if (action.type === "PREV") {
    return {
      ...state,
      slideIndex: state.slideIndex === 0 ? 15 : state.slideIndex - 1,
    };
  }
  if (action.type === "GOTO") {
    return {
      ...state,
      slideIndex: action.slide,
    };
  }
};

const initialState = {
  slideIndex: 7,
};

const Slider = ({ isMen }) => {
  const [slide, dispatch] = useReducer(sliderReducer, initialState);
  const saleItems = isMen
    ? manClothes.tshirts.slice(0, 15)
    : womanClothes.tshirts.slice(0, 15);

  return (
    <>
      <StyledItemsWrapper>
        {saleItems.map((item, i, arr) => {
          let offset = saleItems.length - 1 - slide.slideIndex - i;

          let invertedI = arr.length - 1 - i;
          return (
            <ItemTile
              item={item}
              key={i}
              i={i}
              offset={offset}
              handleTileClick={() =>
                dispatch({ type: "GOTO", slide: invertedI })
              }
            />
          );
        })}
      </StyledItemsWrapper>
      <Button onClick={() => dispatch({ type: "PREV" })}>prev</Button>
      <Button2 onClick={() => dispatch({ type: "NEXT" })}>next</Button2>
    </>
  );
};

export default Slider;
