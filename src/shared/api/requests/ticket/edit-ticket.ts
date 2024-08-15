import { AxiosResponse } from "axios";
import { baseApi } from "shared";

export interface EditTicketResponse extends AxiosResponse {}
export interface EditTicketData {
  id: string;
  description: string;
}

export const editTicket = async ({ id, description }: EditTicketData) => {
  const res = await baseApi.patch<EditTicketResponse>(`/ticket/${id}`, {
    description,
  });
  return res;
};
