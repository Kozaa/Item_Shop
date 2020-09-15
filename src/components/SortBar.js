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

const SortBar = ({ getParameters }) => (
  <StyledSortBar onChange={getParameters}>
    <DropDown type="Item" options={["All", "Tshirts", "Pants", "Shoes"]} />
    <DropDown
      type="Brand"
      options={["All", "Nike", "Reebok", "Puma", "Adidas"]}
    />

    <DropDown
      type="Color"
      options={["All", "Red", "Green", "Blue", "Yellow"]}
    />

    <DropDown type="Sort" options={["New", "lowest price", "highest price"]} />
  </StyledSortBar>
);

export default SortBar;
