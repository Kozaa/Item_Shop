import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  font-family: inherit;
  font-weight: 700;
  font-size: inherit;
  margin-left: 10px;
`;

const StyledLabel = styled.label`
  z-index: 1;
`;

const DropDown = ({ type, options, selected }) => (
  <>
    <StyledLabel htmlFor={type}>
      {type}:
      <StyledSelect name={type}>
        {options.map((option) => {
          if (
            selected &&
            option[0].toLowerCase() === selected[0].toLowerCase()
          ) {
            return (
              <option key={option} selected={true} value={option}>
                {option}
              </option>
            );
          } else {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          }
        })}
      </StyledSelect>
    </StyledLabel>
  </>
);

export default DropDown;
