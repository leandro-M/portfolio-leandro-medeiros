import styled from "styled-components";

import { Container as Grid } from "components/Grid/styles";

export const Container = styled.div`
  background-color: #fbfbfb;
  padding: 30px 0;

  ${Grid} {
    display: flex;
    justify-content: space-between;
  }
`;

export const RedFlag = styled.span`
  color: #d43030;
`;

export const Links = styled.div`
  display: flex;
`;

export const Link = styled.a`
  :not(:nth-last-of-type(1)) {
    margin-right: 33px;
  }
`;
