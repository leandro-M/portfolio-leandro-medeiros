import React from "react";

import { Container, Right, Left } from "./styles";

import { Text } from "components";

const Header: React.FC = () => {
  return (
    <Container>
      <Right>
        <Text type="logo">Leandro Medeiros</Text>
      </Right>
      <Left></Left>
    </Container>
  );
};

export default Header;
