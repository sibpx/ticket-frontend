import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { routes, useIsAuthorized } from "shared";

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthorized = useIsAuthorized();
  if (!isAuthorized) {
    return <>{children}</>;
  }
  return <Navigate to={routes.base} />;
};
