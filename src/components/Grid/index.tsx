import React from "react";

import { Container, Props } from "./styles";

const Grid: React.FC<Props> = ({ width, children }) => {
  return <Container width={width}>{children}</Container>;
};

export default Grid;
