import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Portal,
  ModalProps,
} from "@chakra-ui/react";
import { EditTicketForm } from "../edit-ticket-form";

interface EditTicketModalProps extends Omit<ModalProps, "children"> {
  ticketId: string;
}

export const EditTicketModal = ({
  ticketId,
  ...props
}: EditTicketModalProps) => {
  return (
    <Portal>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        closeOnOverlayClick={false}
        isCentered={true}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Тикет {`${ticketId}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditTicketForm onClose={props.onClose} id={ticketId} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Portal>
  );
};
