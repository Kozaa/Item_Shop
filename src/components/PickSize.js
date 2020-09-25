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
  background-color: ${({ theme, selectedSize, id }) =>
    id === selectedSize ? theme.secondaryThemeColor : theme.primaryThemeColor};
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

let sizeHelperArray = ["S", "M", "L", "XL"];

const PickSize = ({ handleSizeChange, selectedSize }) => (
  <StyledWrapper>
    {sizeHelperArray.map((item) => (
      <StyledSizeOption
        id={item}
        key={item}
        selectedSize={selectedSize}
        onClick={handleSizeChange}
      >
        {item}
      </StyledSizeOption>
    ))}
  </StyledWrapper>
);

export default PickSize;
