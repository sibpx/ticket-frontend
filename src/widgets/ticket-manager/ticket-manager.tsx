import { Content } from "shared";
import { TicketTable, TicketRow } from "./ui";

export const TicketManager = () => {
  return (
    <Content>
      <TicketTable>
        <TicketRow
          ticketId="662238273881a4d9df6ea26b"
          userId="661fb2d613a5b4cc1f400513"
          createdAt="07.07.2024 в 16.00"
          updatedAt="07.07.2024 в 16.00"
          status="pending"
        />
      </TicketTable>
    </Content>
  );
};
