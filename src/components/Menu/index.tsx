import React, { useState } from "react";

import { Text } from "components";

import {
  Container,
  Button,
  MenuPage,
  Wrap,
  Overlay,
  Item,
  Close,
  RouteItem,
} from "./styles";

function Menu() {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  const routes: RouteItem[] = [
    {
      id: "experience-link",
      title: "Experience",
      anchor: "/",
    },
    {
      id: "works-link",
      title: "Works",
      anchor: "/",
    },
    {
      id: "blog-link",
      title: "Blog",
      anchor: "/",
    },
  ];

  return (
    <Container>
      <MenuPage open={open}>
        <Overlay onClick={handleToggle} />
        <Close onClick={handleToggle} />

        <Wrap>
          {routes.map((link) => (
            <Item open={open} items={routes} to={link.anchor} key={link.id}>
              <Text type="menuLink" onClick={handleToggle}>
                {link.title}
              </Text>
            </Item>
          ))}
        </Wrap>
      </MenuPage>

      <Button onClick={handleToggle}>
        <Text uppercase color="primary">
          Menu
        </Text>
      </Button>
    </Container>
  );
}

export default Menu;
