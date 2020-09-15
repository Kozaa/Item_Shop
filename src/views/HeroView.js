import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const StyledHeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-image: ${({ type }) =>
    type === "male" ? "url('/assets/male.jpg')" : "url('/assets/female.jpg')"};
  background-size: cover;

  :after {
    content: "";
    display: block;
    height: 100vh;
    width: 100%;

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

    background-position-x: center;

    :after {
      width: 100%;
      height: 50vh;
    }
  }
`;

const StyledLink = styled(Link)`
  width: 50%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const HeroView = () => {
  return (
    <>
      <Title>ItemShop</Title>
      <StyledLink to="men">
        <StyledHeroImage type="male"></StyledHeroImage>
      </StyledLink>
      <StyledLink to="/women">
        <StyledHeroImage type="female"></StyledHeroImage>
      </StyledLink>
    </>
  );
};

export default HeroView;
