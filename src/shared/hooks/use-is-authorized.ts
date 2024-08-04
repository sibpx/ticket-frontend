import { useContext } from "react";
import { IsAuthorizedContext } from "contexts";

export const useIsAuthorized = () => {
  return useContext(IsAuthorizedContext);
};
