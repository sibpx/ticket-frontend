import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: "Обязательное поле" }).email({
    message: "Невалидный адрес электронной почты",
  }),
  password: z
    .string()
    .min(5, { message: "Минимальная длина пароля 5 символов" }),
  memorization: z.boolean(),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
