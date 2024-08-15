import { createBrowserRouter } from "react-router-dom";
import { routes } from "shared";

import { Layout, Login, Register, Account, Main, NotFound } from "./ui";
import { AuthGuard, GuestGuard } from "./guards";

import { CheckToken } from "./check-token";
import { EditTicketModal } from "features";

export const router = createBrowserRouter([
  {
    path: routes.base,
    element: (
      <CheckToken>
        <Layout />
      </CheckToken>
    ),
    errorElement: <NotFound />,
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
            <Main />
          </GuestGuard>
        ),
        children: [
          {
            path: routes.ticket,
            element: (
              <GuestGuard>
                <EditTicketModal />
              </GuestGuard>
            ),
          },
        ],
      },
      {
        path: routes.account,
        element: (
          <GuestGuard>
            <Account />
          </GuestGuard>
        ),
      },
    ],
  },
]);
