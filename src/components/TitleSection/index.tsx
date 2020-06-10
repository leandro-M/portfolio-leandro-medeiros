import React from "react";

import { Text } from "components";
import { Container } from "./styles";

const TitleSection: React.FC = ({ children }) => {
  return (
    <Container>
      <Text type="titleSection" color="primary">
        {children}
      </Text>
    </Container>
  );
};

export default TitleSection;
