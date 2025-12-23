import type { RouteObject } from "react-router-dom";
import WebsiteLayout from "../layouts/website";
import { Home } from "../pages/home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
