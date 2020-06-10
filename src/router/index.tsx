import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header, Footer } from "components";

import { routes } from "./routes";

const router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        {routes.map((item) => (
          <Route {...item} />
        ))}
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default router;
