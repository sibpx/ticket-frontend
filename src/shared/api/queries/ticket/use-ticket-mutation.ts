import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket, TICKETS } from "shared";

export const useTicketMutation = () => {
  const queryClient = useQueryClient();

  return {
    ...useMutation({
      mutationFn: createTicket,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: [TICKETS] }),
    }),
  };
};
