import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";

import { createTicket, TICKETS } from "shared";

import {
  createTicketFormSchema,
  type CreateTicketFormSchema,
} from "./create-ticket-form-schema";
import { useSetterIsCreated } from "features/ticket/create-ticket/hooks";

export const useCreateTicketForm = () => {
  const { handleSubmit, formState, register, setError } =
    useForm<CreateTicketFormSchema>({
      resolver: zodResolver(createTicketFormSchema),
      mode: "all",
    });

  const setIsCreated = useSetterIsCreated();

  const queryClient = useQueryClient();

  const submit: SubmitHandler<CreateTicketFormSchema> = async (ticketDto) => {
    try {
      await createTicket(ticketDto);
      queryClient.invalidateQueries({ queryKey: [TICKETS] });
      setIsCreated && setIsCreated(true);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError("root", { message: e.response?.data.message || e.message });
      } else {
        setError("root", {
          message:
            "Произошла ошибка. Перезагрузите страницу и попробуйте еще раз",
        });
      }
    }
  };

  const onSubmit = handleSubmit(submit);

  return { formState, onSubmit, register };
};
