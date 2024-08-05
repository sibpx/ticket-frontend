import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Portal,
  Spacer,
  Textarea,
} from "@chakra-ui/react";

import { ModalProps } from "./types";

interface ResolveTicketModalProps extends ModalProps {}

export const ResolveTicketModal = (props: ResolveTicketModalProps) => {
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
          <ModalHeader>Ответ на тикет 51352532532532</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Textarea resize="vertical" />
            </form>
          </ModalBody>

          <ModalFooter>
            <Flex>
              <Button colorScheme="red" mr={3} onClick={props.onClose}>
                Отклонить
              </Button>
              <Spacer />
              <Button colorScheme="green">Одобрить</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Portal>
  );
};
