import React, { FunctionComponent } from "react";

import { Container, Props } from "./styles";

const Text: FunctionComponent<Props> = ({ type, children, ...rest }) => (
  <Container type={type} {...rest}>
    {children}
  </Container>
);

export default Text;
