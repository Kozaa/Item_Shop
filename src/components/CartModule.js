import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartItemDisplay from "./CartItemDisplay";
import Button from "./Button";
import getTotalCost from "../utils/getTotalCost";

const StyledCartModule = styled.div`
  width: 400px;
  height: 80vh;

  position: fixed;
  right: 0;
  top: 10vh;
  z-index: 5;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.primaryThemeColor ? theme.primaryThemeColor : "#434343"};
  padding-bottom: 10px;

  transform: ${({ cartIsVisible }) =>
    cartIsVisible ? "translateX(0)" : "translateX(100%)"};
  transition: transform 1s ease-in-out;
`;

const StyledH1 = styled.h1`
  font-size: 1.5em;
  color: ${({ theme }) =>
    theme.primaryTextColor ? theme.primaryTextColor : "white"};
  font-family: "Jura", sans-serif;
`;

const ItemWrapper = styled.div`
  width: 90%;
  height: 60%;
  overflow: auto;
  text-align: center;
`;

const CloseButton = styled(Button)`
  position: absolute;
  left: 10px;
  top: 10px;
`;

const StyledLink = styled(Link)`
  min-height: 0.7em;

  font-family: "Roboto", sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.secondaryTextColor} !important ;
  background-color: ${({ theme }) => theme.secondaryThemeColor};

  padding: 10px 20px;

  :hover {
    cursor: pointer;
  }

  :visited {
    color: inherit;
  }
`;

const CartModule = ({
  cart,
  toggleCartIsVisible,
  cartIsVisible,
  handleRemoveFromCart,
  checkout,
}) => {
  return (
    <StyledCartModule cartIsVisible={cartIsVisible}>
      <CloseButton handleClick={toggleCartIsVisible}>X</CloseButton>
      <StyledH1>Your cart:</StyledH1>
      <ItemWrapper>
        {cart.length !== 0 ? (
          cart.map((item, i) => (
            <CartItemDisplay
              key={i}
              index={i}
              {...item}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))
        ) : (
          <StyledH1>Empty</StyledH1>
        )}
      </ItemWrapper>
      <StyledH1>Total: ${getTotalCost(cart)}</StyledH1>
      {checkout ? null : (
        <StyledLink to="/checkout" onClick={toggleCartIsVisible}>
          Checkout
        </StyledLink>
      )}
    </StyledCartModule>
  );
};
export default CartModule;
