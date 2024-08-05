import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Portal,
  Textarea,
} from "@chakra-ui/react";
import { ModalProps } from "./types";

interface EditTicketModalProps extends ModalProps {}

export const EditTicketModal = (props: EditTicketModalProps) => {
  return (
    <Portal>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        closeOnOverlayClick={false}
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Изменение тикета 51352532532532</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Textarea resize="vertical" />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={props.onClose}>
              Закрыть
            </Button>
            <Button colorScheme="blue">Отправить</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Portal>
  );
};
