import { createBrowserRouter } from "react-router-dom";
import { routes } from "shared";

import { Layout, Login, Register } from "./ui";
import { AuthGuard, GuestGuard } from "./guards";

import { CheckToken } from "./check-token";

export const router = createBrowserRouter([
  {
    path: routes.base,
    element: (
      <CheckToken>
        <Layout />
      </CheckToken>
    ),
    children: [
      {
        path: routes.register,
        element: (
          <AuthGuard>
            <Register />
          </AuthGuard>
        ),
      },
      {
        path: routes.login,
        element: (
          <AuthGuard>
            <Login />
          </AuthGuard>
        ),
      },
      {
        path: routes.base,
        element: (
          <GuestGuard>
            <>main page</>
          </GuestGuard>
        ),
      },
      {
        path: routes.current,
        element: (
          <GuestGuard>
            <>current</>
          </GuestGuard>
        ),
      },
      {
        path: routes.history,
        element: (
          <GuestGuard>
            <>history</>
          </GuestGuard>
        ),
      },
      {
        path: routes.account,
        element: (
          <GuestGuard>
            <>account</>
          </GuestGuard>
        ),
      },
    ],
  },
]);
