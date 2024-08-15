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

interface Ticket {
  _id: string;
  description: string;
  status: TicketStatus;
  creator: string;
  resolveText: string;
  createdAt: string;
  updatedAt: string;
}

type TicketStatus = "pending" | "resolved" | "rejected";
