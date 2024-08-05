import { Box } from "@chakra-ui/react";
import { PageHeader } from "shared";
import { Profile } from "widgets";

export const Account = () => {
  return (
    <Box>
      <PageHeader>Аккаунт</PageHeader>
      <Profile />
    </Box>
  );
};
