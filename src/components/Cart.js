import React from "react";
import styled, { keyframes } from "styled-components";

const addAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledCart = styled.button`
  background: none;
  background-image: url("https://www.flaticon.com/svg/static/icons/svg/833/833314.svg");
  width: 3em;
  height: 3em;
  border: none;

  position: relative;

  :after {
    content: "${({ cart }) => (cart.length !== 0 ? cart.length : null)}";
    display: ${({ cart }) => (cart.length === 0 ? "none" : "flex")};
    padding: 3px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: red;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -5px;
    right: -10px;
    animation: ${addAnimation} 0.5s ease-in-out;
  }

  :hover {
    cursor: pointer;
  }

  :hover:after {
    transform: scale(1.1);
  }
`;

const Cart = ({ toggleCartIsVisible, cart }) => {
  return (
    <StyledCart onClick={toggleCartIsVisible} cart={cart} key={cart.length} />
  );
};

export default Cart;
