import React, { useState } from "react";
import styled from "styled-components";
import CartItemDisplay from "../components/CartItemDisplay";
import Navigation from "../components/Navigation";
import CartModule from "../components/CartModule";
import getTotalCost from "../utils/getTotalCost";
import CheckoutForm from "../components/CheckoutForm";
import FinishedOrderDisplay from "../components/FinishedOrderDisplay";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  margin-top: 10vh;
  width: 100%;
  min-height: 100vh;
  background-color: #d6d6d6;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const ItemsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  margin-top: 20px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const StyledH1 = styled.h1`
  font-family: Jura, sans-serif;
`;

const ChceckoutView = ({
  cart,
  handleNavItemClick,
  toggleCartIsVisible,
  cartIsVisible,
  handleRemoveFromCart,
}) => {
  const [finished, setFinished] = useState(false);
  const [orderID] = useState(Math.floor(Math.random() * 100000));

  const toggleFinished = () => {
    setFinished(!finished);
  };

  return (
    <>
      <Navigation
        cart={cart}
        handleNavItemClick={handleNavItemClick}
        toggleCartIsVisible={toggleCartIsVisible}
      />
      <CartModule
        cart={cart}
        toggleCartIsVisible={toggleCartIsVisible}
        cartIsVisible={cartIsVisible}
        handleRemoveFromCart={handleRemoveFromCart}
        checkout={true}
      />
      <Wrapper>
        <StyledH1>Cart:</StyledH1>
        <ItemsWrapper>
          {cart.map((item, i) => (
            <CartItemDisplay
              {...item}
              key={i}
              index={i}
              checkout={true}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
          <SummaryWrapper>
            <span>
              {cart.length} {cart.length === 1 ? "Item" : "Items"}
            </span>
            <span>${getTotalCost(cart)}</span>
          </SummaryWrapper>
          {finished ? (
            <FinishedOrderDisplay orderID={orderID} />
          ) : (
            <CheckoutForm
              cart={cart}
              toggleFinished={toggleFinished}
              orderID={orderID}
            />
          )}
        </ItemsWrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default ChceckoutView;
