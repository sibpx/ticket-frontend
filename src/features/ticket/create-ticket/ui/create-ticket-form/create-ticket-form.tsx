import { FormHTMLAttributes } from "react";
import { Button, Flex, Textarea } from "@chakra-ui/react";

import { ErrorMessage } from "shared";

import { useCreateTicketForm } from "./lib";

interface CreateTicketFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onClose: () => void;
}

export const CreateTicketForm = (props: CreateTicketFormProps) => {
  const { register, onSubmit, formState } = useCreateTicketForm();
  return (
    <form onSubmit={onSubmit}>
      <Textarea
        resize="vertical"
        {...register("description")}
        isInvalid={!!formState.errors.description}
      />
      <Flex py="1rem" justifyContent="end">
        <ErrorMessage>{formState.errors.root?.message || ""}</ErrorMessage>
        <Button
          colorScheme="red"
          mr={3}
          onClick={props.onClose}
          isLoading={formState.isLoading}
        >
          Отмена
        </Button>
        <Button
          colorScheme="blue"
          type="submit"
          isLoading={formState.isLoading}
          isDisabled={!formState.isValid}
        >
          Отправить
        </Button>
      </Flex>
    </form>
  );
};
