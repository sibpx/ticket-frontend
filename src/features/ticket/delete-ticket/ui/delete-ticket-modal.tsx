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
  ModalProps,
} from "@chakra-ui/react";
import { useDeleteTicket } from "shared";

interface DeleteTicketModalProps extends Omit<ModalProps, "children"> {
  id: string;
}

export const DeleteTicketModal = ({
  isOpen,
  onClose,
  id,
}: DeleteTicketModalProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { mutate, isPending } = useDeleteTicket(id);

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
              <Button ref={cancelRef} onClick={onClose} isDisabled={isPending}>
                Отмена
              </Button>
              <Button
                colorScheme="red"
                onClick={() => mutate()}
                ml={3}
                isDisabled={isPending}
              >
                Удалить
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Portal>
  );
};
