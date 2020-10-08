import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdfdfd;
  text-align: center;
`;

const StyledTitle = styled.h1`
  color: red;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const NotFoundView = () => (
  <Wrapper>
    <Title location="mainView">ItemShop</Title>
    <StyledTitle>404</StyledTitle>
    <div>
      Sorry, we couldn't find what you are looking for.
      <br />
      You can go back to the main page by clicking this button:{" "}
    </div>
    <Link to="/">
      <StyledButton>Main Page</StyledButton>
    </Link>
  </Wrapper>
);

export default NotFoundView;
