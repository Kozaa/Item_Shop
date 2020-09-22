import React from "react";
import styled from "styled-components";
import ItemTile from "./ItemTile";

const StyledWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryThemeColor};
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto;
  align-items: center;
  padding: 20px;
  gap: 30px;
  overflow-x: scroll;
`;

const SimilarItems = ({ similarItems }) => {
  return (
    <StyledWrapper>
      {similarItems.map((item) => (
        <ItemTile {...item} key={item.id} />
      ))}
    </StyledWrapper>
  );
};

export default SimilarItems;
