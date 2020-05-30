import styled from "styled-components";
import { mapToTheme as theme } from "styled-map";

import { colors, fontTypes } from "styles/theme";

export interface Props {
  color?: keyof typeof colors;
  type?: keyof typeof fontTypes;
}

export const Container = styled.p<Props>`
  ${theme("fontTypes", "type")};
`;
