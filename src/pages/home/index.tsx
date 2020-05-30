import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const home = () => {
  return (
    <Container>
      this is a home page as <Link to="/blog">blog page</Link>
    </Container>
  );
};

home.router = {
  key: "home-page",
  path: "/",
  exact: true,
};

export default home;
