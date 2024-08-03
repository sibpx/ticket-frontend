import { useState } from "react";
import { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { registerUser } from "shared";

import {
  type RegisterFormSchema,
  registerFormSchema,
} from "./registerFormSchema";

export const useRegisterForm = () => {
  const { handleSubmit, formState, register, setError } =
    useForm<RegisterFormSchema>({
      resolver: zodResolver(registerFormSchema),
      mode: "all",
    });

  const [isRegistered, setIsRegistered] = useState(false);

  const onRegister: SubmitHandler<RegisterFormSchema> = async (userDto) => {
    try {
      await registerUser(userDto);
      setIsRegistered(true);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e);
        setError("root", { message: e.response?.data.message || e.message });
      } else {
        setError("root", {
          message:
            "Произошла ошибка. Перезагрузите страницу и попробуйте еще раз",
        });
      }
    }
  };

  const onSubmit = handleSubmit(onRegister);

  return { formState, onSubmit, register, isRegistered };
};
