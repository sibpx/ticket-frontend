import { ChatIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { ResolveTicketModal } from "shared";

export const ResolveTicket = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="teal"
        aria-label="Ответить на тикет"
        fontSize="20px"
        icon={<ChatIcon />}
        onClick={onOpen}
      />
      <ResolveTicketModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
