import {
  Tr,
  Td,
  Center,
  HStack,
  Text,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import {
  DeleteTicket,
  EditTicket,
  EditTicketModal,
  ResolveTicket,
} from "features";

import { useCurrentUser } from "shared";

import { statusInfo } from "./statusInfo";

interface TicketProps extends Omit<Ticket, "description" | "resolveText"> {}

export const Ticket = (props: TicketProps) => {
  const { isAdmin } = useCurrentUser();
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Tr>
      <Td textAlign="center">
        <Link as="span" onClick={onOpen} color="blue.200">
          {props._id}
        </Link>
        <EditTicketModal
          isOpen={isOpen}
          onClose={onClose}
          ticketId={props._id}
        />
      </Td>
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
