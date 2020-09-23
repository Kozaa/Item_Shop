import React from "react";
import styled from "styled-components";
import CartItemDisplay from "./CartItemDisplay";
import Button from "./Button";

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
  background-color: ${({ theme }) => theme.primaryThemeColor};
  padding-bottom: 10px;

  transform: ${({ cartIsVisible }) =>
    cartIsVisible ? "translateX(0)" : "translateX(100%)"};
  transition: transform 1s ease-in-out;
`;

const StyledH1 = styled.h1`
  font-size: 1.5em;
  color: ${({ theme }) => theme.primaryTextColor};
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

const CartModule = ({
  cart,
  toggleCartIsVisible,
  cartIsVisible,
  handleRemoveFromCart,
}) => {
  const getTotalCost = () => {
    if (cart.length > 1) {
      const price = cart.reduce((acc, item) => {
        let newAcc = acc + item.price;

        newAcc = newAcc.toFixed(2);
        newAcc = Number(newAcc);

        return newAcc;
      }, 0);

      return (Math.round(price * 100) / 100).toFixed(2);
    } else if (cart.length === 1) {
      return cart[0].price;
    } else return 0;
  };

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
      {/* {cart.length === 0 ? <StyledH1>Empty</StyledH1> : null} */}
      <StyledH1>Total: ${getTotalCost()}</StyledH1>
      <Button>Checkout</Button>
    </StyledCartModule>
  );
};
export default CartModule;
