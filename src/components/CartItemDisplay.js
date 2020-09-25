import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  text-decoration: none;
  color: black;
`;

const StyledTextWpapper = styled.div`
  display: grid;
  align-items: center;
  padding: 7px;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 2fr 1fr;
  width: 75%;
  background-color: white;
`;

const StyledImg = styled.img`
  width: 25%;
  margin-right: 8px;
`;

const TrashCan = styled.img`
  grid-row: 1/3;
  grid-column: 2/3;
  align-self: center;
  width: 100%;
  height: 100%;
`;

const Price = styled.div`
  font-size: 0.7em;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const CartItemDisplay = ({
  title,
  price,
  photo,
  id,
  handleRemoveFromCart,
  index,
  size,
}) => (
  <StyledWrapper>
    <StyledImg src={`../assets/clothes/${photo}.png`} />
    <StyledTextWpapper>
      <StyledLink to={`/item/${id}`}>
        {title} ({size})
      </StyledLink>
      <TrashCan
        src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg"
        onClick={() => handleRemoveFromCart(index)}
      />
      <Price>Price: ${price}</Price>
    </StyledTextWpapper>
  </StyledWrapper>
);

export default CartItemDisplay;
