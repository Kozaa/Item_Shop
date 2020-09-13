import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-family: "Rochester", cursive;
  font-size: 2em;
  color: black;
`;

const StyledHeroTitle = styled(StyledTitle)`
  font-size: 4em;
  color: white;

  position: absolute;
  top: 20;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media screen and (max-width: 768px) {
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`;

const Title = ({ children, location }) =>
  location === "mainView" ? (
    <StyledTitle>{children}</StyledTitle>
  ) : (
    <StyledHeroTitle>{children}</StyledHeroTitle>
  );

export default Title;
