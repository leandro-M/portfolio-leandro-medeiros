import React from "react";

import { Text, Menu } from "components";

import { Container, Right, Left } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Right>
        <Text type="logo">Leandro Medeiros</Text>
      </Right>

      <Left>
        <Menu />
      </Left>
    </Container>
  );
};

export default Header;
