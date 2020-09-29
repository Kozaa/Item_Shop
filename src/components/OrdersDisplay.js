import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin-bottom: 15px;
  padding: 20px;
  display: grid;

  grid-template-columns: 50% 50%;
  grid-template-rows: 10% 15% 75%;
  background-color: #d6d6d6;
  justify-items: center;
  font-size: 0.7em;
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
    <div style={{ gridColumn: "1/3" }}>Order ID: {orderID}</div>
    <div>User data:</div>
    <div>Order:</div>
    <UserData>
      <span>Name:</span> <span>{userData.name}</span>
      <span>Surname:</span> <span>{userData.surname}</span>
      <span>Email:</span> <span>{userData.email}</span>
      <span>City:</span> <span>{userData.city}</span>
      <span>Adress:</span> <span>{userData.adress}</span>
      <span>Post Code:</span> <span>{userData.postCode}</span>
      <span>Delivery Type:</span> <span>{userData.deliveryType}</span>
      <span>Delivery Note:</span>{" "}
      <span>{userData.deliveryNote ? userData.deliveryNote : "-"}</span>
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
