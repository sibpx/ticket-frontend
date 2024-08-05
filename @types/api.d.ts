interface User {
  _id: string;
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

interface Ticket {
  _id: string;
  description: string;
  status: TicketStatus;
  creator: string;
  resolveText: string;
}

enum TicketStatus {
  pending = "pending",
  resolved = "resolved",
  rejected = "rejected",
}
