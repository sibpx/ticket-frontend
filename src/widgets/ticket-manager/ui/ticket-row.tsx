import { Tr, Td, Center, HStack, Text } from "@chakra-ui/react";
import { DeleteTicket, EditTicket, ResolveTicket } from "features";

interface TicketRowProps {
  ticketId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  status: "rejected" | "pending" | "resolved";
}

export const TicketRow = (props: TicketRowProps) => {
  const isAdmin = false;

  return (
    <Tr>
      <Td textAlign="center">{props.ticketId}</Td>
      {isAdmin && <Td textAlign="center">{props.userId}</Td>}
      <Td textAlign="center">{props.createdAt}</Td>
      <Td textAlign="center">{props.updatedAt}</Td>
      <Td textAlign="center">
        <Text color="teal" fontWeight="bold">
          На рассмотрении
        </Text>
      </Td>
      <Td>
        <Center>
          <HStack spacing="0.5rem">
            {!isAdmin && <EditTicket />}

            {isAdmin && <ResolveTicket />}
            <DeleteTicket />
          </HStack>
        </Center>
      </Td>
    </Tr>
  );
};
