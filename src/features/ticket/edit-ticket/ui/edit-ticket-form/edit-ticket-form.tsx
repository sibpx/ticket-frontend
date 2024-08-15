import { FormHTMLAttributes } from "react";
import { Button, Flex, Textarea } from "@chakra-ui/react";

import { ErrorMessage } from "shared";

import { useEditTicketForm } from "./lib";

interface EditTicketFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onClose: () => void;
  id: string;
}

export const EditTicketForm = (props: EditTicketFormProps) => {
  const { register, onSubmit, formState, defaultDescription } =
    useEditTicketForm(props.id);

  return (
    <form onSubmit={onSubmit}>
      <Textarea
        resize="vertical"
        {...register("description")}
        isInvalid={!!formState.errors.description}
        defaultValue={defaultDescription}
      />
      <ErrorMessage>{formState.errors.root?.message || ""}</ErrorMessage>
      <Flex py="1rem" justifyContent="end">
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
