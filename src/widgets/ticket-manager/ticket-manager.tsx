import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { Content, TICKETS, useGetTicketsByFilter } from "shared";
import { TicketTable, Ticket, SearchForm } from "./ui";
import { Td, Text, Tr } from "@chakra-ui/react";

export const TicketManager = () => {
  const [params] = useSearchParams();
  const { isLoading, isError } = useGetTicketsByFilter(
    new URLSearchParams(params).toString(),
  );
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData([TICKETS]) as { tickets: Ticket[] };

  useEffect(() => {
    console.log("invalidate ticket query");
    queryClient.invalidateQueries({ queryKey: [TICKETS] });
  }, [params]);

  console.log("ticket manager");

  return (
    <Content>
      <SearchForm />
      <TicketTable>
        {!isLoading &&
          !isError &&
          data.tickets &&
          data.tickets.length > 0 &&
          data.tickets.map((item) => <Ticket {...item} key={item._id} />)}
        {isError && (
          <Tr>
            <Td colSpan={6}>
              <Text textAlign="center">Тикеты не найдены</Text>
            </Td>
          </Tr>
        )}
      </TicketTable>
    </Content>
  );
};
