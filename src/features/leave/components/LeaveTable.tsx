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
import { useLeaves } from "../services/getLeaves";
import { formatDateTime } from "@/utils/transformDataTime";
import { DISPLAY_FORMAT_DATE } from "../constant";

export const LeaveTable = () => {
  const COLUMNS = [
    "Leave Type",
    "Description",
    "Period",
    "Status",
    "Created at",
  ];

  const { data } = useLeaves();

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
          {data?.map((leave) => (
            <Tr key={leave.id}>
              <Td textTransform="capitalize">
                {leave.leaveType.name.split("_").join(" ")}
              </Td>
              <Td>{leave.description}</Td>
              <Td>
                {formatDateTime(leave.startDate, DISPLAY_FORMAT_DATE)} -{" "}
                {formatDateTime(leave.endDate, DISPLAY_FORMAT_DATE)}
              </Td>
              <Td>
                <StatusBadge status={leave.status} />
              </Td>
              <Td>{formatDateTime(leave.createdAt)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
