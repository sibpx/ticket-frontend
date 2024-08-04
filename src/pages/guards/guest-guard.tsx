import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { routes, useIsAuthorized } from "shared";

interface GuestGuardProps {
  children: ReactNode;
}

export const GuestGuard = ({ children }: GuestGuardProps) => {
  const isAuthorized = useIsAuthorized();
  console.log("guest guard");
  if (isAuthorized) {
    return <>{children}</>;
  }
  return <Navigate to={routes.login} />;
};
