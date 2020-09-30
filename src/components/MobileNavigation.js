import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  z-index: 4;

  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ navIsVisible }) =>
    navIsVisible ? "translateY(10vh)" : "translateY(-100%)"};

  transition: transform 0.2s ease-in-out;
`;

const StyledLink = styled(Link)`
  font-size: 1em;
  width: 100%;
  text-align: center;
  color: black;
  padding: 10px 20px;
  text-decoration: none;

  :hover {
    background-color: #ddd;
  }
`;

const StyledGenderLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;

  width: 100%;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.genderButton};
  :hover {
    background-color: #ddd;
  }
`;

const MobileNavigation = ({
  navIsVisible,
  handleNavItemClick,
  isMen,
  toggleGender,
  resetParameters,
  toggleNavIsVisible,
}) => (
  <Wrapper navIsVisible={navIsVisible}>
    <StyledLink
      onClick={() => {
        handleNavItemClick("tshirts");
        toggleNavIsVisible();
      }}
      to={isMen ? "/men" : "/women"}
    >
      t-shirts
    </StyledLink>
    <StyledLink
      onClick={() => {
        handleNavItemClick("pants");
        toggleNavIsVisible();
      }}
      to={isMen ? "/men" : "/women"}
    >
      pants
    </StyledLink>
    <StyledLink
      onClick={() => {
        handleNavItemClick("shoes");
        toggleNavIsVisible();
      }}
      to={isMen ? "/men" : "/women"}
    >
      shoes
    </StyledLink>

    <StyledGenderLink
      to={isMen ? "/women" : "/men"}
      onClick={() => {
        toggleGender();
        resetParameters();
        toggleNavIsVisible();
      }}
    >
      {isMen ? "Women" : "Men"}
    </StyledGenderLink>
  </Wrapper>
);

export default MobileNavigation;
