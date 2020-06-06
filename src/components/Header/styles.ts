import styled from "styled-components";

import { Container as Grid } from "components/Grid/styles";

export const Container = styled(Grid)`
  padding-top: 46px;

  display: flex;
  justify-content: space-between;
`;

export const Right = styled.div`
  flex-basis: 50%;
`;

export const Left = styled.div`
  flex-basis: 50%;

  display: flex;
  justify-content: flex-end;
`;
