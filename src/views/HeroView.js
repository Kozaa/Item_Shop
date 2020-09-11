import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import femaleHero from "../assets/female.jpg";
import maleHero from "../assets/male.jpg";
import Title from "../components/Title";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
} 

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: calc(1vw + 1vh + 2px);

}

#root {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

@media screen and (max-width: 768px) {
    #root {
      flex-direction: column;
    }
  }

`;

const StyledHeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-image: url(${({ type }) =>
    type === "male" ? maleHero : femaleHero});
  background-size: cover;

  :after {
    content: "";
    display: block;
    height: 100vh;
    width: 50vw;

    background-color: black;
    opacity: 0.7;

    transition: opacity 0.2s ease-in;
  }

  :before {
    font-family: "Jura", sans-serif;
    font-size: 4em;
    color: white;
    content: "${({ type }) => type}";

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-80%);
    z-index: 1;
  }

  :hover {
    cursor: pointer;

    :after {
      opacity: 0.3;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;

    background-background-position-x: center;

    :after {
      width: 100%;
      height: 100%;
    }
  }
`;

const HeroView = () => {
  return (
    <>
      <GlobalStyle />
      <Title>ItemShop</Title>
      <Link to="men">
        <StyledHeroImage type="male"></StyledHeroImage>
      </Link>
      <Link to="/women">
        <StyledHeroImage type="female"></StyledHeroImage>
      </Link>
    </>
  );
};

export default HeroView;
