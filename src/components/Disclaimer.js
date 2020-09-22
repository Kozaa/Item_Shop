import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.primaryThemeColor};
`;

const H2 = styled.h2`
  margin-top: 5px;
  margin-bottom: 0;
`;

const Disclaimer = () => (
  <StyledDiv>
    <H2>Disclaimer:</H2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu velit,
    venenatis et est non, porttitor maximus diam. In bibendum ac nunc non
    pharetra. Proin dapibus nec ipsum eget scelerisque. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit. Sed arcu velit, venenatis et est non,
    porttitor maximus diam. In bibendum ac nunc non pharetra. Proin dapibus nec
    ipsum eget scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Sed arcu velit, venenatis et est non, porttitor maximus diam. In
    bibendum ac nunc non pharetra. Proin dapibus nec ipsum eget scelerisque.
  </StyledDiv>
);

export default Disclaimer;
