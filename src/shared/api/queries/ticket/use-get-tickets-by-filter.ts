import { useQuery } from "@tanstack/react-query";

import { getTicketsByFilter } from "shared";
import { TICKETS } from "../query-keys";

export const useGetTicketsByFilter = (queryParams: string) => {
  return {
    ...useQuery({
      queryKey: [TICKETS],
      queryFn: () => getTicketsByFilter(queryParams),
      retry: false,
    }),
  };
};
