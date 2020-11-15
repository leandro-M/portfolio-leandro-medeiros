import styled from "styled-components";

import { Container as Text } from "components/Text/styles";

interface Props {
  width?: string;
}

export const Container = styled.div<Props>`
  position: relative;
  display: inline-block;

  ${Text} {
    position: relative;
    z-index: 1;

    ${({theme}) => theme.mediaQueries.sm} {
      font-size: 25px;
    }
  }

  :after {
    content: "";
    width: ${({ width }) => width || "290"}px;
    height: 28px;

    position: absolute;
    bottom: 9px;
    right: -22px;

    background-color: ${({ theme }) => theme.colors.terciary};

    ${({theme}) => theme.mediaQueries.sm} {
      display: none;
    }
  }
`;
