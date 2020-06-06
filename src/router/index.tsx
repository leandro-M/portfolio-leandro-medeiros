import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "components";

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
    </BrowserRouter>
  );
};

export default router;
