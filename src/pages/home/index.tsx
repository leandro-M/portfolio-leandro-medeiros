import React from "react";

import { Header, Experiences } from "./components";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <Experiences />
    </Container>
  );
};

Home.router = {
  key: "home-page",
  path: "/",
  exact: true,
};

export default Home;
