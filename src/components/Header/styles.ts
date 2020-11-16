import styled from "styled-components";

import { Container as Grid } from "components/Grid/styles";

export const Container = styled(Grid)`
  padding-top: 46px;

  display: flex;
  justify-content: space-between;
`;

export const Right = styled.div`
  flex-basis: 50%;

  ${({theme}) => theme.mediaQueries.sm} {
    display: none;
  }
`;

export const Left = styled.div`
  flex-basis: 50%;

  ${({theme}) => theme.mediaQueries.sm} {
    flex-basis: 100%;
  }

  display: flex;
  justify-content: flex-end;
`;
