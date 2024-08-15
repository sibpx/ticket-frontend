import { Box } from "@chakra-ui/react";
import { PageHeader } from "shared";
import { Profile } from "widgets";

export const Account = () => {
  return (
    <Box w="100%">
      <PageHeader>Аккаунт</PageHeader>
      <Profile />
    </Box>
  );
};
