import { AxiosResponse } from "axios";
import { baseApi } from "shared";

export interface DeleteTicketResponse extends AxiosResponse {}

export const deleteTicket = async (id: string) => {
  const res = await baseApi.delete<DeleteTicketResponse>(`/ticket/${id}`);
  return res;
};
