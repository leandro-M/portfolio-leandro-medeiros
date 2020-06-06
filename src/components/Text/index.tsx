import React, { FunctionComponent } from "react";

import { Container, Props } from "./styles";

const Text: FunctionComponent<Props> = ({ type, children, ...rest }) => (
  <Container type={type} {...rest}>
    {children}
  </Container>
);

Text.defaultProps = {
  type: "body",
} as Partial<Props>;

export default Text;
