import React, { useReducer } from "react";
import styled from "styled-components";
import ItemTile from "./ItemTile";
import { manClothes } from "../data";

const StyledItemsWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.backgroundColor};
  overflow-x: hidden;
  z-index: -100;
`;

const Button = styled.button`
  position: fixed;
  padding: 20px;
`;

const Button2 = styled(Button)`
  right: 0;
`;

const initialState = {
  slideIndex: 7,
};

const sliderReducer = (state, action) => {
  if (action.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % saleItems.length,
    };
  }
  if (action.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? saleItems.length - 1 : state.slideIndex - 1,
    };
  }
};

const saleItems = manClothes.tshirts.slice(0, 15);

const Slider = ({ theme }) => {
  const [slide, dispatch] = useReducer(sliderReducer, initialState);

  return (
    <>
      <StyledItemsWrapper theme={theme}>
        {saleItems.map((item, i) => {
          let offset = saleItems.length - 1 - slide.slideIndex - i;

          return <ItemTile photo={item.photo} key={i} offset={offset} />;
        })}
      </StyledItemsWrapper>
      <Button onClick={() => dispatch({ type: "PREV" })}>prev</Button>
      <Button2 onClick={() => dispatch({ type: "NEXT" })}>next</Button2>
    </>
  );
};

export default Slider;
