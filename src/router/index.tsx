import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { routes } from "./routes";

const router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((item) => (
          <Route {...item} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default router;
