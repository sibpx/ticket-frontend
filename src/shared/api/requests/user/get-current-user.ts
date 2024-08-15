import { baseApi } from "shared";

interface GetCurrentUserResponse {
  user: User;
}

export const getCurrentUser = async () => {
  const res = await baseApi.get<GetCurrentUserResponse>("/users/me");
  return res.data.user;
};
