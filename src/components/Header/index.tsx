import React from "react";

import { Text } from "components";

import { Container, Right } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Right>
        <Text type="logo">Leandro Medeiros</Text>
      </Right>
    </Container>
  );
};

export default Header;
