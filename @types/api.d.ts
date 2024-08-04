interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

enum UserRole {
  admin = "ADMIN",
  user = "USER",
}

interface UserCredentials extends Pick<User, "email"> {
  password: string;
}

interface GetCurrentUserResponse {
  user: User;
}
