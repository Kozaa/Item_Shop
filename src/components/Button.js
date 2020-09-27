import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  color: ${({ theme }) =>
    theme.secondaryTextColor ? theme.secondaryTextColor : "white"};
  background-color: ${({ theme }) =>
    theme.secondaryThemeColor ? theme.secondaryThemeColor : "black"};
  border: none;

  min-height: 0.7em;

  font-family: "Roboto", sans-serif;
  font-size: 0.7em;

  padding: 10px 20px;

  :hover {
    cursor: pointer;
  }
`;

const Button = ({ children, handleClick, className }) => (
  <StyledButton className={className} onClick={handleClick}>
    {children}
  </StyledButton>
);

export default Button;
