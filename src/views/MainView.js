import React, { useState } from "react";
import { menTheme, womenTheme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
import Slider from "../components/Slider";
import Navigation from "../components/Navigation";
{
  /* <div>{props.location.pathname}</div> */
}

const MainView = ({ location }) => {
  // true is men, false is women
  const [genderChoise, setGenderChoise] = useState(
    location.pathname === "/men" ? true : false
  );

  const handleGenderChange = () => {
    setGenderChoise(!genderChoise);
    console.log(genderChoise);
  };

  return (
    <ThemeProvider theme={genderChoise ? menTheme : womenTheme}>
      <Navigation isMen={genderChoise} toggleGender={handleGenderChange} />
      <Slider isMen={genderChoise} />
    </ThemeProvider>
  );
};

export default MainView;
