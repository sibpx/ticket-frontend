import { useContext } from "react";
import { IsCreatedContext } from "../create-ticket-context";

export const useIsCreated = () => {
  return useContext(IsCreatedContext);
};
