import React from "react";
import styled from "styled-components";

const StyledSortBar = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.primaryThemeColor};
  padding: 10px 20px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  font-family: "Jura", sans-serif;
  font-weight: 700;

  :after {
    content: "";
    height: 150%;
    width: 40%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) skewX(-40deg);
    background-color: ${({ theme }) => theme.secondaryThemeColor};
  }
`;

const Div = styled.div`
  z-index: 1;
`;

const SortBar = () => (
  <StyledSortBar>
    <Div>brand: nike</Div>
    <Div>color: blue</Div>
    <Div>items: t-shirts</Div>
    <Div>sort by: lowest price</Div>
  </StyledSortBar>
);

export default SortBar;
