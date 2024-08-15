import { useQueryClient } from "@tanstack/react-query";
import { CURRENT_USER } from "shared";

export const useCurrentUser = () => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData([CURRENT_USER]) as User;

  const isAdmin = user && user.role === "ADMIN";

  return { user, isAdmin };
};
