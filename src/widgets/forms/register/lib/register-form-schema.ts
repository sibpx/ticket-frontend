import { z } from "zod";

export const registerFormSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Минимальная длина имени пользователя 4 символа" }),
  email: z.string().min(1, { message: "Обязательное поле" }).email({
    message: "Невалидный адрес электронной почты",
  }),
  password: z
    .string()
    .min(5, { message: "Минимальная длина пароля 5 символов" }),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
