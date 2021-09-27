import styled from "styled-components";
import { mapToTheme as theme } from "styled-map";

import { colors, fontTypes } from "styles/theme";

export interface Props {
  color?: keyof typeof colors;
  type?: keyof typeof fontTypes;
  uppercase?: boolean;
  onClick?: any;
}

export const Container = styled.span<Props>`
  ${theme("fontTypes", "type")};
  color: ${theme("colors", "color")};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
`;
