import { useNavigate } from "react-router-dom";
import { routes, storage } from "shared";

import { useSetterIsAuthorized } from "./use-setter-is-authorized";
import { QueryCache } from "@tanstack/react-query";

export const useLogout = () => {
  const setIsAuthorized = useSetterIsAuthorized();
  const navigate = useNavigate();
  const queryCache = new QueryCache();

  return () => {
    setIsAuthorized && setIsAuthorized(false);
    storage.removeToken();
    queryCache.clear();
    navigate(routes.login);
  };
};
