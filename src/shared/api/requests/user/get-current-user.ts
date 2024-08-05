import { baseApi } from "shared";

export const getCurrentUser = async () => {
  const res = await baseApi.get<GetCurrentUserResponse>("/users/me");
  return res.data.user;
};
