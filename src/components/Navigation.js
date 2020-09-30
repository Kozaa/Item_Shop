import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/Title";
import Cart from "../components/Cart";
import MobileNavigation from "../components/MobileNavigation";

const StyledNavigation = styled.header`
  position: fixed;
  z-index: 5;

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

const HamburgerMenu = styled.div`
  width: 2em;
  height: 1.2em;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  position: relative;

  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 3px;
    background-color: black;
  }
`;

const deviceWidth = window.innerWidth;

const Navigation = ({
  isMen,
  toggleGender,
  handleNavItemClick,
  resetParameters,
  cart,
  toggleCartIsVisible,
}) => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const toggleNavIsVisible = () => {
    setNavIsVisible(!navIsVisible);
  };

  return (
    <>
      {window.innerWidth < 768 ? (
        <MobileNavigation
          navIsVisible={navIsVisible}
          handleNavItemClick={handleNavItemClick}
          isMen={isMen}
          toggleGender={toggleGender}
          resetParameters={resetParameters}
          toggleNavIsVisible={toggleNavIsVisible}
        />
      ) : null}
      <StyledNavigation>
        <StyledLink to="/" onClick={resetParameters}>
          <Title location="mainView">ItemShop</Title>
        </StyledLink>
        {deviceWidth > 768 ? (
          <>
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
          </>
        ) : (
          <HamburgerMenu onClick={toggleNavIsVisible} />
        )}

        <Cart toggleCartIsVisible={toggleCartIsVisible} cart={cart} />
      </StyledNavigation>
    </>
  );
};

Navigation.defaultProps = {
  toggleGender: function () {
    return;
  },
  resetParameters: function () {
    return;
  },
};

export default Navigation;
