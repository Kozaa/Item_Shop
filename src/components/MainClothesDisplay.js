import React from "react";
import styled from "styled-components";
import SortBar from "./SortBar";
import ItemTile from "./ItemTile";

const DisplayWrapper = styled.main`
  min-height: calc(90vh - 100px);
  width: 100%;
  padding-top: 20px;
  padding-bottom: 60px;
  position: relative;

  display: grid;
  grid-gap: 50px 10px;
  grid-template-columns: repeat(auto-fill, 30vh);
  justify-content: space-around;

  background-color: ${({ theme }) => theme.backgroundColor};
`;

const StyledApology = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  width: 100%;
  text-align: center;
  background-color: inherit;
`;

const MainClothesDisplay = ({ getParameters, clothesData, sortParameters }) => (
  <>
    <SortBar getParameters={getParameters} sortParameters={sortParameters} />
    <DisplayWrapper>
      {clothesData.length !== 0 ? (
        clothesData.map((item, i) => <ItemTile key={i} {...item} />)
      ) : (
        <StyledApology>Sorry no matching items :(</StyledApology>
      )}
    </DisplayWrapper>
  </>
);

export default MainClothesDisplay;
