import { useQuery } from "@tanstack/react-query";
import { getCurrentUser, CURRENT_USER } from "shared";

export const useGetCurrentUser = () => {
  return {
    ...useQuery({
      queryKey: [CURRENT_USER],
      queryFn: getCurrentUser,
      retry: 0,
      refetchOnWindowFocus: true,
    }),
  };
};
