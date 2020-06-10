import React from "react";

import { Header, Experiences } from "./components";

import { Container } from "./styles";

const home = () => {
  return (
    <Container>
      <Header />
      <Experiences />
    </Container>
  );
};

home.router = {
  key: "home-page",
  path: "/",
  exact: true,
};

export default home;
