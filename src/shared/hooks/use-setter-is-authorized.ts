import { useContext } from "react";
import { SetterIsAuthorizedContext } from "contexts";

export const useSetterIsAuthorized = () => {
  return useContext(SetterIsAuthorizedContext);
};
