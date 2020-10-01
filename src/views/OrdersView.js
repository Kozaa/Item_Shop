import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import OrdersDisplay from "../components/OrdersDisplay";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrdersView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .onSnapshot((snapshot) => {
        const dataBaseOrders = snapshot.docs.map((doc) => doc.data());

        setOrders(dataBaseOrders);
      });
  }, []);

  return (
    <Wrapper>
      <h1>Orders:</h1>
      {orders.map((order, i) => (
        <OrdersDisplay key={i} {...order} />
      ))}
    </Wrapper>
  );
};

export default OrdersView;
