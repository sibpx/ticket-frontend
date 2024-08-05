import { z } from "zod";

export const createTicketFormSchema = z.object({
  description: z.string().min(1, { message: "Обязательное поле" }),
});

export type CreateTicketFormSchema = z.infer<typeof createTicketFormSchema>;
