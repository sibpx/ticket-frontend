import { Tr, Td, Center, HStack, Text } from "@chakra-ui/react";
import { DeleteTicket, EditTicket, ResolveTicket } from "features";

import { useCurrentUser } from "shared";

import { statusInfo } from "./statusInfo";

interface TicketProps extends Omit<Ticket, "description" | "resolveText"> {}

export const Ticket = (props: TicketProps) => {
  const { isAdmin } = useCurrentUser();

  return (
    <Tr>
      <Td textAlign="center">{props._id}</Td>
      {isAdmin && <Td textAlign="center">{props.creator}</Td>}
      <Td textAlign="center">
        {new Date(props.createdAt).toLocaleDateString()}
      </Td>
      <Td textAlign="center">
        {new Date(props.updatedAt).toLocaleDateString()}
      </Td>
      <Td textAlign="center">
        <Text fontWeight="bold" color={statusInfo[props.status].color}>
          {statusInfo[props.status].label}
        </Text>
      </Td>
      <Td>
        <Center>
          <HStack spacing="0.5rem">
            {!isAdmin && props.status === "pending" && (
              <EditTicket id={props._id} />
            )}

            {isAdmin && <ResolveTicket />}
            <DeleteTicket id={props._id} />
          </HStack>
        </Center>
      </Td>
    </Tr>
  );
};
