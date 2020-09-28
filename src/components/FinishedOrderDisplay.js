import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FinishedOrderDisplay = () => (
  <Wrapper>
    <h1>Thanks for making an order!</h1>
    <h3>Your order number is 123434213.</h3>
    <h4>You can check all orders at url/orders</h4>
    <h5>
      Remember, this is just a practice website and no actual orders were made.
    </h5>
  </Wrapper>
);

export default FinishedOrderDisplay;
