import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  max-height: 50vh;
  margin-bottom: 15px;
  padding: 20px;
  display: grid;

  grid-template-columns: 50% 50%;
  grid-template-rows: 10% 15% 75%;
  background-color: #d6d6d6;
  justify-items: center;
  font-size: 0.7em;

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 10% 15% 30% 15% 30%;
    grid-column-gap: 10px;
  }
`;

const OrderID = styled.div`
  grid-column: 1/3;

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
  }
`;

const Order = styled.div`
  @media screen and (max-width: 768px) {
    grid-row: 4/5;
  }
`;

const UserData = styled.div`
  display: grid;
  width: 100%;
  max-width: 100%;
  padding: 20px;
  column-gap: 20px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(7, 1fr) 3fr;
  border-right: 2px solid black;
  overflow: auto;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    border-right: none;
    border-bottom: 2px solid black;
  }
`;

const OrderedItems = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const OrdersDisplay = ({ orderID, userData, orderedItems }) => (
  <Wrapper>
    <OrderID>Order ID: {orderID}</OrderID>
    <div>User data:</div>
    <Order>Order:</Order>
    <UserData>
      <span>Name:</span> <span>{userData.name}</span>
      <span>Surname:</span> <span>{userData.surname}</span>
      <span>Email:</span> <span>{userData.email}</span>
      <span>City:</span> <span>{userData.city}</span>
      <span>Adress:</span> <span>{userData.adress}</span>
      <span>Post Code:</span> <span>{userData.postCode}</span>
      <span>Delivery Type:</span> <span>{userData.deliveryType}</span>
      <span>Delivery Note:</span>{" "}
      <span style={{ textAlign: "justify" }}>
        {userData.deliveryNote ? userData.deliveryNote : "-"}
      </span>
    </UserData>
    <OrderedItems>
      {orderedItems.map((item, i) => (
        <div>
          {i + 1}. {item.title} size: {item.size}
        </div>
      ))}
    </OrderedItems>
  </Wrapper>
);

export default OrdersDisplay;
