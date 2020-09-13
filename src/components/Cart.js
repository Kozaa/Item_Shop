import React from "react";
import styled from "styled-components";

const StyledCart = styled.button`
  background: none;
  background-image: url("https://www.flaticon.com/svg/static/icons/svg/833/833314.svg");
  width: 3em;
  height: 3em;
  border: none;
`;

const Cart = () => {
  return <StyledCart />;
};

export default Cart;
