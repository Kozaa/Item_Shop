import React from "react";
import { menTheme, womenTheme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
import Slider from "../components/Slider";
{
  /* <div>{props.location.pathname}</div> */
}

const MainView = ({ location }) => {
  const isMen = () => (location.pathname === "/men" ? true : false);

  return (
    <ThemeProvider theme={isMen() ? menTheme : womenTheme}>
      <Slider />
    </ThemeProvider>
  );
};

export default MainView;
