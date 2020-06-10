import styled from "styled-components";

export interface Props {
  width?: string;
}

export const Container = styled.div<Props>`
  max-width: ${({ width }) => width || "1200"}px;
  margin: ${({ width }) => (width ? 0 : "0 auto")};
`;
