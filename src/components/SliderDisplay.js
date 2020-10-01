import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import SliderTile from "./SliderTile";
import Button from "./Button";

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
  bottom: 50%;
  transform: translateY(50%);
  border-radius: 10%;
  height: 15vh;
  width: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  outline: none;
  background-color: ${({ theme }) => theme.secondaryThemeColor};
  transition: transform 0.1s ease-in-out;

  :active {
    transform: translateX(-20%) translateY(50%);
  }

  @media screen and (max-width: 768px) {
    width: 10vh;
    height: 10vh;
    left: 5%;
  }
`;

const NextButton = styled(PrevButton)`
  left: auto;
  right: 10%;

  @media screen and (max-width: 768px) {
    width: 10vh;
    height: 10vh;
    right: 5%;
  }

  :active {
    transform: translateX(20%) translateY(50%);
  }
`;

const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 1.6em solid transparent;
  border-bottom: 1.6em solid transparent;

  border-left: 1.6em solid black;

  @media screen and (max-width: 768px) {
    border-width: 1.2em;
  }
`;

const ArrowLeft = styled(ArrowRight)`
  border-left: none;
  border-right: 1.6em solid black;

  @media screen and (max-width: 768px) {
    border-width: 1.2em;
  }
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
      slideIndex: (state.slideIndex + 1) % action.arrLength,
    };
  }
  if (action.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? action.arrLength : state.slideIndex - 1,
    };
  }
  if (action.type === "GOTO") {
    return {
      ...state,
      slideIndex: action.slide,
    };
  }
};

const SliderDisplay = ({ onSaleItems, isMen }) => {
  const initialState = {
    slideIndex: Math.floor(onSaleItems.length / 2),
  };

  const [slide, dispatch] = useReducer(sliderReducer, initialState);

  useEffect(() => {
    dispatch({ type: "GOTO", slide: Math.floor(onSaleItems.length / 2) });
  }, [onSaleItems]);

  return (
    <>
      <StyledItemsWrapper>
        {onSaleItems.map((item, i, arr) => {
          let offset = onSaleItems.length - 1 - slide.slideIndex - i;

          let invertedI = arr.length - 1 - i;
          return (
            <SliderTile
              {...item}
              key={i}
              i={i}
              offset={offset}
              isMen={isMen}
              handleTileClick={() =>
                dispatch({ type: "GOTO", slide: invertedI })
              }
            />
          );
        })}
      </StyledItemsWrapper>
      <PrevButton
        handleClick={() =>
          dispatch({ type: "PREV", arrLength: onSaleItems.length })
        }
      >
        <ArrowLeft />
      </PrevButton>
      <NextButton
        handleClick={() =>
          dispatch({ type: "NEXT", arrLength: onSaleItems.length })
        }
      >
        <ArrowRight />
      </NextButton>
      <SeeMoreButton
        handleClick={() =>
          window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: "smooth",
          })
        }
      >
        See more
      </SeeMoreButton>
    </>
  );
};

export default SliderDisplay;
