import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";

import { editTicket, TICKETS } from "shared";

import {
  editTicketFormSchema,
  type EditTicketFormSchema,
} from "./edit-ticket-form-schema";

export const useEditTicketForm = (id: string) => {
  const { handleSubmit, formState, register, setError } =
    useForm<EditTicketFormSchema>({
      resolver: zodResolver(editTicketFormSchema),
      mode: "all",
    });

  const queryClient = useQueryClient();

  //@ts-ignore
  const { tickets } = queryClient.getQueryData([TICKETS]);

  let defaultDescription = "";

  if (tickets instanceof Array) {
    defaultDescription = tickets.filter((item) => item._id === id)[0]
      .description;
  }

  const submit: SubmitHandler<EditTicketFormSchema> = async (ticketDto) => {
    try {
      await editTicket({ ...ticketDto, id });
      queryClient.invalidateQueries({ queryKey: [TICKETS] });
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

  return { formState, onSubmit, register, defaultDescription };
};
