import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof colors]: string };
    fontTypes: { [key in keyof typeof fontTypes]: any };
    fontFamily: string;
  }
}

export const colors = {
  primary: "2B2B2B",
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
  body: {
    fontFamily,
    fontSize: 15,
    letterSpacing: "0.08em",
    lineHeight: "35px",
  },
  logo: {
    fontFamily,
    color: "#000",
    textTransform: "uppercase",
    letterSpacing: "0.13em",
    fontWeight: "bold",
  },
};

const theme: DefaultTheme = {
  colors,
  fontTypes,
  fontFamily,
};

export default theme;
