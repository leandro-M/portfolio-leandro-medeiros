import React from "react";

import me from "assets/images/me.png";

import { Text } from "components";

import { Wrapper, Container, Left, Right, Image } from "./styles";

const Header: React.FC = () => {
  const presentation = "Hello";

  return (
    <Wrapper content={presentation}>
      <Container>
        <Left>
          <Text type="presentationTitle" color="primary">
            {presentation}
          </Text>
          <Text type="presentationSubtitle" color="secondary">
            My name is Leandro Medeiros, I’m a software developer. Here you find
            a part of my life, Travels, Skills, Blog and multiples moments of
            me.
          </Text>
        </Left>

        <Right>
          <Image src={me} />
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Header;
