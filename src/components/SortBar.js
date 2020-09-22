import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown";

const StyledSortBar = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryThemeColor};
  padding: 30px 20px;

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
    top: 50%;
    transform: translateX(-50%) translateY(-50%) skewX(-40deg);
    background-color: ${({ theme }) => theme.secondaryThemeColor};
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SortBar = ({ getParameters, sortParameters }) => (
  <StyledSortBar>
    <DropDown
      type="Item"
      value={sortParameters.Item}
      options={["all", "tshirts", "pants", "shoes"]}
      getParameters={getParameters}
    />
    <DropDown
      type="Brand"
      value={sortParameters.Brand}
      options={["all", "nike", "reebok", "puma", "adidas"]}
      getParameters={getParameters}
    />

    <DropDown
      type="Color"
      value={sortParameters.Color}
      options={["all", "red", "green", "blue", "yellow"]}
      getParameters={getParameters}
    />

    <DropDown
      type="Sort"
      value={sortParameters.Sort}
      options={["new", "lowest price", "highest price"]}
      getParameters={getParameters}
    />
  </StyledSortBar>
);

export default SortBar;
