import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/Title";
import Cart from "../components/Cart";

const StyledNavigation = styled.header`
  position: fixed;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10vh;
  min-height: calc(2em + 10px);
  background-color: white;
  padding: 0 20px;
`;

const NavItemsWrapper = styled(StyledNavigation)`
  width: 30vw;
  height: 100%;
  position: relative;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.genderButton};
  text-decoration: none;
`;

const Navigation = ({ isMen, toggleGender }) => (
  <StyledNavigation>
    <Title location="mainView">ItemShop</Title>
    <NavItemsWrapper>
      <h4>t-shirts</h4>
      <h4>pants</h4>
      <h4>shoes</h4>
    </NavItemsWrapper>
    <StyledLink to={isMen ? "/women" : "/men"} onClick={toggleGender}>
      {isMen ? "Women" : "Men"}
    </StyledLink>
    <Cart />
  </StyledNavigation>
);

export default Navigation;
