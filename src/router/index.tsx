import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Footer } from "components";

import { routes } from "./routes";

const router: React.FC = () => {
  return (
    <BrowserRouter>
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
