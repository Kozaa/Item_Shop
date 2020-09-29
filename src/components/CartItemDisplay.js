import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  width: auto;
  height: ${({ checkout }) => (checkout ? "130px" : "auto")};
  margin-bottom: 8px;
  display: flex;
  text-align: left;
  text-decoration: none;
  color: black;
  background-color: ${({ checkout, id }) =>
    checkout ? (id[0] === "m" ? "#F1FAEE" : "#FFEEE5") : "none"};
  padding: ${({ checkout }) => (checkout ? "10px" : 0)};
`;

const StyledTextWpapper = styled.div`
  display: grid;
  align-items: center;
  padding: 7px;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 2fr 1fr;
  width: auto;
  background-color: ${({ checkout, id }) =>
    checkout ? (id[0] === "m" ? "#F1FAEE" : "#FFEEE5") : "white"}; ;
`;

const StyledImg = styled.img`
  width: ${({ checkout }) => (checkout ? "90px" : "25%")};
  margin-right: 8px;
`;

const TrashCan = styled.img`
  grid-row: 1/3;
  grid-column: 2/3;
  justify-self: center;
  width: ${({ checkout }) => (checkout ? "50%" : "100%")};
  height: auto;
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
  checkout,
}) => (
  <StyledWrapper checkout={checkout} id={id}>
    <StyledImg src={`../assets/clothes/${photo}.png`} checkout={checkout} />
    <StyledTextWpapper checkout={checkout} id={id}>
      <StyledLink to={`/item/${id}`}>
        {title} ({size})
      </StyledLink>
      <TrashCan
        src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg"
        onClick={() => handleRemoveFromCart(index)}
        checkout={checkout}
      />
      <Price>Price: ${price}</Price>
    </StyledTextWpapper>
  </StyledWrapper>
);

export default CartItemDisplay;
