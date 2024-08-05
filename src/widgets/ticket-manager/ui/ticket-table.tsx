import { ReactNode } from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Input,
} from "@chakra-ui/react";

interface TicketTableProps {
  children: ReactNode;
}

export const TicketTable = (props: TicketTableProps) => {
  const isAdmin = false;
  return (
    <>
      <Input variant="filled" placeholder="Поиск" mb="2rem" size="lg" />
      <TableContainer>
        <Table variant="simple">
          <TableCaption>1 2 3 4 5 6</TableCaption>
          <Thead>
            <Tr>
              <Th textAlign="center">ID тикета</Th>
              {isAdmin && <Th textAlign="center">ID пользователя</Th>}
              <Th textAlign="center">Дата создания</Th>
              <Th textAlign="center">Дата изменения</Th>
              <Th textAlign="center">Статус</Th>
              <Th textAlign="center">Действия</Th>
            </Tr>
          </Thead>
          <Tbody>{props.children}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
