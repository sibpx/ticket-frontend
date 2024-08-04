import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";

import { authUser, routes, storage, useSetterIsAuthorized } from "shared";

import { loginFormSchema, type LoginFormSchema } from "./login-form-schema";
import { useNavigate } from "react-router-dom";

export const useLoginForm = () => {
  const { handleSubmit, formState, register, setError } =
    useForm<LoginFormSchema>({
      resolver: zodResolver(loginFormSchema),
      mode: "all",
    });

  const setIsAuthorized = useSetterIsAuthorized();
  const navigate = useNavigate();

  const onLogin: SubmitHandler<LoginFormSchema> = async ({
    memorization,
    ...userDto
  }) => {
    try {
      const { data } = await authUser(userDto);
      storage.setToken(data.token, memorization);
      if (setIsAuthorized) {
        setIsAuthorized(true);
        navigate(routes.base);
      } else {
        throw new Error("is authorized setter is null");
      }
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

  const onSubmit = handleSubmit(onLogin);

  return { formState, onSubmit, register };
};
