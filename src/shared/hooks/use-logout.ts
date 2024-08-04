import { useNavigate } from "react-router-dom";
import { routes, storage } from "shared";

import { useSetterIsAuthorized } from "./use-setter-is-authorized";

export const useLogout = () => {
  const setIsAuthorized = useSetterIsAuthorized();
  const navigate = useNavigate();

  return () => {
    setIsAuthorized && setIsAuthorized(false);
    storage.removeToken();
    navigate(routes.login);
  };
};
