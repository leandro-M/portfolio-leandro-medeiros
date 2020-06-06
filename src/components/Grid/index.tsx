﻿import React from "react";

import { Container } from "./styles";

interface Props {
  children?: React.Component;
}

const Grid: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Grid;
