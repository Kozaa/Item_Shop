import React, { useState } from "react";
import { menTheme, womenTheme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
import SliderDisplay from "../components/SliderDisplay";
import Navigation from "../components/Navigation";
import MainClothesDisplay from "../components/MainClothesDisplay";

const MainView = ({ location }) => {
  // true is men, false is women
  const [genderChoise, setGenderChoise] = useState(
    location.pathname === "/men" ? true : false
  );

  const handleGenderChange = () => {
    setGenderChoise(!genderChoise);
  };

  return (
    <ThemeProvider theme={genderChoise ? menTheme : womenTheme}>
      <Navigation isMen={genderChoise} toggleGender={handleGenderChange} />
      <SliderDisplay isMen={genderChoise} />
      <MainClothesDisplay isMen={genderChoise} />
    </ThemeProvider>
  );
};

export default MainView;
