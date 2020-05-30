import * as Pages from "pages";

interface RouteItem {
  path: string;
  exact: boolean;
  component: React.FC;
  pageName: string;
}

export const routes: RouteItem[] = Object.entries(Pages).map(
  ([pageName, component]) => ({
    ...component.router,
    component,
    pageName,
  })
);
