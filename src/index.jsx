import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Router from "router";
import GlobalStyle from "styles";

import theme from "styles/theme";

import { Header } from "components";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
