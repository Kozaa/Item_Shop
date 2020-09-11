import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 4em;
  font-family: "Rochester", cursive;
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

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
