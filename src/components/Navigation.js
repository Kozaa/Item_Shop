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

const StyledGenderLink = styled(Link)`
  color: ${({ theme }) => theme.genderButton};
  text-decoration: none;
  padding: 10px 20px;

  :hover {
    background-color: #ddd;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1em;
  color: black;
  padding: 10px 20px;
  text-decoration: none;

  :hover {
    background-color: #ddd;
  }
`;

const Navigation = ({
  isMen,
  toggleGender,
  handleNavItemClick,
  resetParameters,
  cart,
  toggleCartIsVisible,
}) => (
  <StyledNavigation>
    <StyledLink to="/" onClick={resetParameters}>
      <Title location="mainView">ItemShop</Title>
    </StyledLink>
    <NavItemsWrapper>
      <StyledLink
        onClick={() => handleNavItemClick("tshirts")}
        to={isMen ? "/men" : "/women"}
      >
        t-shirts
      </StyledLink>
      <StyledLink
        onClick={() => handleNavItemClick("pants")}
        to={isMen ? "/men" : "/women"}
      >
        pants
      </StyledLink>
      <StyledLink
        onClick={() => handleNavItemClick("shoes")}
        to={isMen ? "/men" : "/women"}
      >
        shoes
      </StyledLink>
    </NavItemsWrapper>
    <StyledGenderLink
      to={isMen ? "/women" : "/men"}
      onClick={() => {
        toggleGender();
        resetParameters();
      }}
    >
      {isMen ? "Women" : "Men"}
    </StyledGenderLink>
    <Cart toggleCartIsVisible={toggleCartIsVisible} cart={cart} />
  </StyledNavigation>
);

Navigation.defaultProps = {
  toggleGender: function () {
    return;
  },
  resetParameters: function () {
    return;
  },
};

export default Navigation;
