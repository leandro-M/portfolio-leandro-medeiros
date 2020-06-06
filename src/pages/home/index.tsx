import React from "react";

import { Header } from "./components";

import { Container } from "./styles";

const home = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

home.router = {
  key: "home-page",
  path: "/",
  exact: true,
};

export default home;
