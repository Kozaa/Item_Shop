import React from "react";
import styled from "styled-components";
import SortBar from "./SortBar";
import { manClothes } from "../data";
import ItemTile from "./ItemTile";

const DisplayWrapper = styled.main`
  width: 100%;
  padding: 20px 0;

  display: grid;
  grid-gap: 50px 10px;
  grid-template-columns: repeat(auto-fill, 30vh);
  justify-content: space-around;

  background-color: ${({ theme }) => theme.backgroundColor};
`;

const MainClothesDisplay = () => (
  <>
    <SortBar></SortBar>
    <DisplayWrapper>
      {manClothes.pants.map((item, i) => (
        <ItemTile key={i} {...item} />
      ))}
    </DisplayWrapper>
  </>
);

export default MainClothesDisplay;
