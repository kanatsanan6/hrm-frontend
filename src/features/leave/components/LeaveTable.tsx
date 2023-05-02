import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { StatusBadge } from "./StatusBadge";

export const LeaveTable = () => {
  const COLUMNS = [
    "Leave Type",
    "Description",
    "Period",
    "Status",
    "Created at",
  ];

  return (
    <TableContainer marginTop="30px">
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {COLUMNS.map((column, idx) => (
              <Th key={idx}>{column}</Th>
            ))}
          </Tr>
          <Tr />
        </Thead>
        <Tbody>
          <Tr>
            <Td>Vacation</Td>
            <Td>Go To Phuket</Td>
            <Td>17 Jan (2nd-half) - 20 Jan (Full)</Td>
            <Td>
              <StatusBadge status="approved" />
            </Td>
            <Td>25-11-2566 14:35</Td>
          </Tr>
          <Tr>
            <Td>Vacation</Td>
            <Td>Go To Phuket</Td>
            <Td>17 Jan (2nd-half) - 20 Jan (Full)</Td>
            <Td>
              <StatusBadge status="rejected" />
            </Td>
            <Td>25-11-2566 14:35</Td>
          </Tr>
          <Tr>
            <Td>Vacation</Td>
            <Td>Go To Phuket</Td>
            <Td>17 Jan (2nd-half) - 20 Jan (Full)</Td>
            <Td>
              <StatusBadge status="pending" />
            </Td>
            <Td>25-11-2566 14:35</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
