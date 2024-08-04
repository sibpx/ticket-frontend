import { baseApi } from "shared";

interface UserDto extends Omit<User, "role" | "id"> {
  password: string;
}

export const registerUser = (dto: UserDto) => baseApi.post("/register", dto);
