import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.secondaryTextColor};
  background-color: ${({ theme }) => theme.secondaryThemeColor};
  border: none;

  min-height: 0.7em;

  font-family: "Roboto", sans-serif;
  font-size: 0.7em;

  padding: 10px 20px;
`;

const Button = ({ children, handleClick, className }) => (
  <StyledButton className={className} onClick={handleClick}>
    {children}
  </StyledButton>
);

export default Button;
