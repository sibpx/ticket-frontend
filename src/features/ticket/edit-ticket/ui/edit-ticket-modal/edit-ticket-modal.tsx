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
import { useParams } from "react-router-dom";

interface EditTicketModalProps extends Omit<ModalProps, "children"> {}

export const EditTicketModal = (props: EditTicketModalProps) => {
  const id = useParams();
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
          <ModalHeader>Тикет {`${id}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditTicketForm onClose={props.onClose} id={id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Portal>
  );
};
