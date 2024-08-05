import { useContext } from "react";
import { SetterIsCreatedContext } from "../create-ticket-context";

export const useSetterIsCreated = () => {
  return useContext(SetterIsCreatedContext);
};
