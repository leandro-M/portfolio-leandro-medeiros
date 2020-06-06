import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Open Sans', sans-serif;

  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    overflow-x: hidden;
  }
  body {
    scroll-behavior: smooth;
  }

  html, body {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    font-weight: 400;
  }
`;
