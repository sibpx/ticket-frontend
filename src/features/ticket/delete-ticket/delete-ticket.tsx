import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { DeleteTicketModal } from "shared";

export const DeleteTicket = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="red"
        aria-label="Удалить тикет"
        fontSize="20px"
        icon={<DeleteIcon />}
        onClick={onOpen}
      />
      <DeleteTicketModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
