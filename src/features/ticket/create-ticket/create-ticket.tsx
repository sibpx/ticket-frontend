import { Button, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { CreateTicketModal } from "./ui";
import { IsCreatedProvider } from "./create-ticket-context";

export const CreateTicket = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <IsCreatedProvider>
      <Button colorScheme="blue" leftIcon={<AddIcon />} onClick={onOpen}>
        Создать тикет
      </Button>
      <CreateTicketModal isOpen={isOpen} onClose={onClose} />
    </IsCreatedProvider>
  );
};
