import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledSizeOption = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  background-color: ${({ theme }) => theme.primaryThemeColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PickSize = () => (
  <StyledWrapper>
    <StyledSizeOption>S</StyledSizeOption>
    <StyledSizeOption>M</StyledSizeOption>
    <StyledSizeOption>L</StyledSizeOption>
    <StyledSizeOption>XL</StyledSizeOption>
  </StyledWrapper>
);

export default PickSize;
