import { baseApi } from "shared";

export const createTicket = (dto: Pick<Ticket, "description">) =>
  baseApi.post("/ticket", dto);
