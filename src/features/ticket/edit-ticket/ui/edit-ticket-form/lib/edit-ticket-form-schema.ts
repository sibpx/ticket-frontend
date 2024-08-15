import { z } from "zod";

export const editTicketFormSchema = z.object({
  description: z.string().min(1, { message: "Обязательное поле" }),
});

export type EditTicketFormSchema = z.infer<typeof editTicketFormSchema>;
