import { EditIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { EditTicketModal } from "shared";

export const EditTicket = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="blue"
        aria-label="Изменить тикет"
        fontSize="20px"
        icon={<EditIcon />}
        onClick={onOpen}
      />
      <EditTicketModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
