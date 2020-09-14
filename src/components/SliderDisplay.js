import React, { useReducer } from "react";
import styled from "styled-components";
import SliderTile from "./SliderTile";
import Button from "./Button";
import { manClothes, womanClothes } from "../data";

const StyledItemsWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.backgroundColor};
  overflow-x: hidden;
  z-index: 0;
`;

const PrevButton = styled(Button)`
  position: absolute;
  left: 10%;
  bottom: 10%;
  border-radius: 50%;
  height: 20vh;
  width: 20vh;
  font-size: 1em;

  @media screen and (max-width: 768px) {
    width: 10vh;
    height: 10vh;
    bottom: auto;
    top: 20vh;
  }
`;

const NextButton = styled(PrevButton)`
  left: auto;
  right: 10%;
`;

const SeeMoreButton = styled(Button)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 40px;
  border-radius: 5px;
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

const SliderDisplay = ({ isMen }) => {
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
            <SliderTile
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
      <PrevButton handleClick={() => dispatch({ type: "PREV" })}>
        prev
      </PrevButton>
      <NextButton handleClick={() => dispatch({ type: "NEXT" })}>
        next
      </NextButton>
      <SeeMoreButton>See more</SeeMoreButton>
    </>
  );
};

export default SliderDisplay;
