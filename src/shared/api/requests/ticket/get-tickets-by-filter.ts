import { AxiosResponse } from "axios";
import { baseApi } from "shared";

export interface GetTicketsByFilterResponse extends AxiosResponse<Ticket[]> {}

export const getTicketsByFilter = async (queryParams?: string) => {
  const res = await baseApi.get<GetTicketsByFilterResponse>(
    `/ticket/filter?${queryParams}`,
  );
  return res.data;
};
