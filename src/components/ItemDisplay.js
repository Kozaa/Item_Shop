import React, { useState } from "react";
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
    height: auto;
  }
`;

const StyledImg = styled.img`
  width: 50vh;
  max-width: 100%;
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

const ItemDisplay = ({ item, handleAddToCart }) => {
  const [size, setSize] = useState("");

  const handleSizeChange = (event) => {
    setSize(event.target.id);
  };

  return (
    <StyledWrapper>
      <StyledImg src={`../assets/clothes/${item.photo}.png`} alt={item.title} />
      <ItemDescWrapper>
        <StyledTitle>{item.title}</StyledTitle>
        <StyledDescription>{item.desc}</StyledDescription>
        <PickSize handleSizeChange={handleSizeChange} selectedSize={size} />
        <StyledPrice>Price: ${item.price}</StyledPrice>
        <Button
          handleClick={() =>
            size
              ? handleAddToCart(item, size)
              : alert("Choose a size in order to add this item.")
          }
        >
          Add to cart
        </Button>
      </ItemDescWrapper>
    </StyledWrapper>
  );
};

export default ItemDisplay;
