import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTicket, EditTicketData, TICKETS } from "shared";

export const useEditTicket = (data: EditTicketData) => {
  const queryClient = useQueryClient();

  return {
    ...useMutation({
      mutationFn: () => editTicket(data),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: [TICKETS] }),
    }),
  };
};
