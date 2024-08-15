import { Box } from "@chakra-ui/react";

import { TicketManager } from "widgets";
import { PageHeader } from "shared";

export const Main = () => {
  console.log("main page");
  return (
    <Box>
      <PageHeader>Мои тикеты</PageHeader>
      <TicketManager />
    </Box>
  );
};
