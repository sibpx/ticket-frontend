import { baseApi } from "shared";

interface UserDto extends Omit<User, "role" | "_id"> {
  password: string;
}

export const registerUser = (dto: UserDto) => baseApi.post("/register", dto);
