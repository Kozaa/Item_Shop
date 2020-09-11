import React from "react";
import { menTheme, womenTheme } from "../theme";
import styled, { ThemeProvider } from "styled-components";

{
  /* <div>{props.location.pathname}</div> */
}

const MainView = ({ location }) => {
  const isMen = () => (location.pathname === "/men" ? true : false);

  return (
    <ThemeProvider theme={isMen() ? menTheme : womenTheme}>hello</ThemeProvider>
  );
};

export default MainView;
