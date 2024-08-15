import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTicket, TICKETS } from "shared";

export const useDeleteTicket = (id: string) => {
  const queryClient = useQueryClient();

  return {
    ...useMutation({
      mutationFn: () => deleteTicket(id),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: [TICKETS] }),
    }),
  };
};
