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
