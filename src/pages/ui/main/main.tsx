import { Box } from "@chakra-ui/react";

import { TicketManager } from "widgets";
import { PageHeader } from "shared";

export const Main = () => {
  return (
    <Box>
      <PageHeader>Мои тикеты</PageHeader>
      <TicketManager />
    </Box>
  );
};
