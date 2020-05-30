import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const blog = () => {
  return (
    <Container>
      this is a blog page <Link to="/">home page</Link>
    </Container>
  );
};

blog.router = {
  key: "blog-page",
  path: "/blog",
  exact: true,
};

export default blog;
