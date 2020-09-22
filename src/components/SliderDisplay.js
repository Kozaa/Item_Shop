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
  bottom: 10%;
  border-radius: 50%;
  height: 20vh;
  width: 20vh;
  font-size: 1em;
  outline: none;
  transition: transform 0.1s ease-in-out;

  :active {
    transform: scale(1.05);
  }

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
    slideIndex: Math.floor(onSaleItems.length / 2), // <-- its always 0 because usestate is set to [], need fix
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
        prev
      </PrevButton>
      <NextButton
        handleClick={() =>
          dispatch({ type: "NEXT", arrLength: onSaleItems.length })
        }
      >
        next
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
