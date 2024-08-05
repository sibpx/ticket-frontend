import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Portal,
} from "@chakra-ui/react";
import { ModalProps } from "./types";

interface DeleteTicketModalProps extends ModalProps{}

export const DeleteTicketModal = ({
  isOpen,
  onClose,
}: DeleteTicketModalProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);
  return (
    <Portal>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered={true}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Удалить тикет
            </AlertDialogHeader>

            <AlertDialogBody>
              Вы уверены? Это действие невозможно отменить
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Отмена
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Удалить
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Portal>
  );
};
