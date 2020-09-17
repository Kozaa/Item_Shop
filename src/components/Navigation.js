import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/Title";
import Cart from "../components/Cart";
import Button from "../components/Button";
const StyledNavigation = styled.header`
  position: fixed;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10vh;

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
  padding: 10px 20px;

  :hover {
    background-color: #ddd;
  }
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  font-size: 1em;
  color: black;

  :hover {
    background-color: #ddd;
  }
`;

const Navigation = ({ isMen, toggleGender, handleNavItemClick }) => (
  <StyledNavigation>
    <Title location="mainView">ItemShop</Title>
    <NavItemsWrapper>
      <StyledButton handleClick={() => handleNavItemClick("tshirts")}>
        t-shirts
      </StyledButton>
      <StyledButton handleClick={() => handleNavItemClick("pants")}>
        pants
      </StyledButton>
      <StyledButton handleClick={() => handleNavItemClick("shoes")}>
        shoes
      </StyledButton>
    </NavItemsWrapper>
    <StyledLink to={isMen ? "/women" : "/men"} onClick={toggleGender}>
      {isMen ? "Women" : "Men"}
    </StyledLink>
    <Cart />
  </StyledNavigation>
);

export default Navigation;
