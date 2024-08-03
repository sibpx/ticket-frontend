import { createBrowserRouter } from "react-router-dom";
import { routes } from "shared";

import { Layout, Login, Register } from "./ui";

export const router = createBrowserRouter([
  {
    path: routes.register,
    element: <Register />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.base,
    element: <Layout />,
    children: [
      {
        path: routes.base,
        element: <>main page</>,
      },
      {
        path: routes.current,
        element: <>current</>,
      },
      {
        path: routes.history,
        element: <>history</>,
      },
      {
        path: routes.account,
        element: <>account</>,
      },
    ],
  },
]);
