import "styled-components";
import { DefaultTheme, css, FlattenInterpolation } from "styled-components";
import { rem, rgba } from "polished";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof colors]: string };
    fontTypes: { [key in keyof typeof fontTypes]: any };
    fontFamily: string;
    mediaQueries: { [key in keyof typeof mediaQueries]: string }
    waves: FlattenInterpolation<any>
  }
}

export const colors = {
  primary: "#f9f9f9",
  secondary: "#eee",
  terciary: "#9CD7F8",
  black: "#fefefe",
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
    fontWeight: "normal",
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
    fontSize: rem("80px"),
    // lineHeight: "100%",
  },
  presentationSubtitle: {
    // fontFamily: "'Lora', serif",
    fontSize: rem("21px"),
    lineHeight: "130%",
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

const waves = css`
  transition: 0.4s;

  :before {
    content: "";
    width: 150%;
    height: 150%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    z-index: 1;
    transition: 0.9s;
  }

  :after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    z-index: 2;
    transition: 0;
  }

  :active {
    opacity: 0.5;
    transition: 0.4s;
  }

  :hover {
    :before {
      transition: 0.9s;
      background-color: #222;
    }
    
    :after {
      transition: 0.6s;
      opacity: 0;
      width: 250%;
      height: 250%;
      background-color: #9CD7F8;
    }
  }
`;
const theme: DefaultTheme = {
  colors,
  fontTypes,
  fontFamily,
  mediaQueries,
  waves
};


export default theme;
