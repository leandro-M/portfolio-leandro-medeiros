import "styled-components";
import { DefaultTheme } from "styled-components";
import { rem, rgba } from "polished";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof colors]: string };
    fontTypes: { [key in keyof typeof fontTypes]: any };
    fontFamily: string;
  }
}

export const colors = {
  primary: "#2B2B2B",
  secondary: "#747474",
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
  subtitle: {
    fontFamily: "'Lora', serif",
    fontSize: rem("20.96px"),
    lineHeight: "185%",
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
};

const theme: DefaultTheme = {
  colors,
  fontTypes,
  fontFamily,
};

export default theme;
