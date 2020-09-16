import React from "react";
import styled from "styled-components";
import SortBar from "./SortBar";
import ItemTile from "./ItemTile";

const DisplayWrapper = styled.main`
  width: 100%;
  padding: 20px 0;
  position: relative;

  display: grid;
  grid-gap: 50px 10px;
  grid-template-columns: repeat(auto-fill, 30vh);
  justify-content: space-around;

  background-color: ${({ theme }) => theme.backgroundColor};
`;

const StyledApology = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  height: 50vh;
  width: 100%;
  text-align: center;
  background-color: inherit;
`;

const MainClothesDisplay = ({ getParameters, clothesData }) => (
  <>
    <SortBar getParameters={getParameters}></SortBar>
    <DisplayWrapper>
      {console.log("clothesData from display", clothesData)}
      {clothesData.length !== 0 ? (
        clothesData.map((item, i) => <ItemTile key={i} {...item} />)
      ) : (
        <StyledApology>Sorry no matching items :(</StyledApology>
      )}
    </DisplayWrapper>
  </>
);

export default MainClothesDisplay;
