import { AxiosResponse } from "axios";
import { baseApi } from "../../baseApi";

export const authUser = (
  dto: UserCredentials,
): Promise<AxiosResponse<{ token: string }>> => baseApi.post("/login", dto);
