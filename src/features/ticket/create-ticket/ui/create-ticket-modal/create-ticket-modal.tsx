import {
  Alert,
  AlertIcon,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Portal,
} from "@chakra-ui/react";
import { CreateTicketForm } from "../create-ticket-form";
import { useIsCreated, useSetterIsCreated } from "../../hooks";

interface CreateTicketModalProps extends Omit<ModalProps, "children"> {}

export const CreateTicketModal = (props: CreateTicketModalProps) => {
  const isCreated = useIsCreated();
  const setIsCreated = useSetterIsCreated();

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
          <ModalHeader>{isCreated ? "" : "Опишите свою проблему"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isCreated ? (
              <Alert status="success">
                <AlertIcon />
                Тикет создан
              </Alert>
            ) : (
              <CreateTicketForm onClose={props.onClose} />
            )}
          </ModalBody>
          {isCreated && (
            <ModalFooter>
              <Button
                mr={3}
                onClick={() => {
                  setIsCreated && setIsCreated(false);
                  props.onClose();
                }}
              >
                Закрыть
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </Portal>
  );
};
