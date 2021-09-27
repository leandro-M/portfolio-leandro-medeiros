import styled from "styled-components";

import { Container as Grid } from "components/Grid/styles";
import { Container as Text } from "components/Text/styles";

export const Container = styled.div`
  padding: 30px 0;

  ${Grid} {
    display: flex;
    justify-content: space-between;

    ${({theme}) => theme.mediaQueries.sm} {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
    }
  }
`;

export const RedFlag = styled.span`
  color: #d43030;
`;

export const Links = styled.div`
  display: flex;

  ${({theme}) => theme.mediaQueries.sm} {
    flex-basis: 100%;
    width: 100%;
    margin-bottom: 25px;
    justify-content: space-between;
  }

`;

export const Link = styled.a`
  ${({theme}) => theme.mediaQueries.sm} {
    ${Text} {
      font-size: 10px;
    }
  }
  :not(:nth-last-of-type(1)) {
    margin-right: 33px;

    ${({theme}) => theme.mediaQueries.sm} {
      margin-right: 0;
    }
  }
`;
