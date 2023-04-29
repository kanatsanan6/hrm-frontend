import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { User } from "@/types";
import { formatDate } from "@/utils/transformDataTime";

type Props = {
  data: User[];
};
export const UserManagementTable = (props: Props) => {
  const { data } = props;
  const COLUMNS = ["Email", "First Name", "Last Name", "Invited At"];

  return (
    <TableContainer marginTop="30px">
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {COLUMNS.map((column, idx) => (
              <Th key={idx}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((user) => (
            <Tr key={user.id}>
              <Td>{user.email}</Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{formatDate(user.createdAt)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
