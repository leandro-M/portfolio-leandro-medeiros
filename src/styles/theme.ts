﻿import "styled-components";
import { DefaultTheme } from "styled-components";
import { rem, rgba } from "polished";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof colors]: string };
    fontTypes: { [key in keyof typeof fontTypes]: any };
    fontFamily: string;
    mediaQueries: { [key in keyof typeof mediaQueries]: string }
  }
}

export const colors = {
  primary: "#2B2B2B",
  secondary: "#747474",
  terciary: "#9CD7F8",
  black: "#000",
};

const fontFamily = "'Ubuntu', sans-serif";

export const fontTypes = {
  title: {
    fontFamily,
    fontSize: 47,
    letterSpacing: 0.25,
    fontWeight: 700,
    lineHeight: "19px",
  },
  body: {
    fontFamily,
    fontSize: rem("12.96px"),
    letterSpacing: rem("2.08px"),
    lineHeight: "150.9%",
  },
  logo: {
    fontFamily,
    color: "#000",
    textTransform: "uppercase",
    letterSpacing: rem("2.08px"),
    fontWeight: "bold",
    fontSize: rem("15px"),
  },
  menuLink: {
    fontFamily,
    color: rgba("#fff", 0.8),
    fontSize: rem("30px"),
  },
  presentationTitle: {
    fontFamily,
    fontWeight: "bold",
    fontSize: rem("200px"),
    lineHeight: "78%",
  },
  presentationSubtitle: {
    fontFamily: "'Lora', serif",
    fontSize: rem("17px"),
    lineHeight: "185%",
  },
  titleSection: {
    fontFamily,
    fontWeight: "bold",
    fontSize: rem("47.34px"),
  },
};

const mediaQueries = {
  sm: "@media screen and (max-width: 768px)",
}

const theme: DefaultTheme = {
  colors,
  fontTypes,
  fontFamily,
  mediaQueries,
};

export default theme;
