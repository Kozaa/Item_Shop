import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 0.8em;
`;

const Footer = () => <StyledFooter>Copyright 2020</StyledFooter>;

export default Footer;
