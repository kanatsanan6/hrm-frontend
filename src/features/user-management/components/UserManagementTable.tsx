import {
  Box,
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import { User } from "@/types";
import { formatDateTime } from "@/utils/transformDataTime";
import { useMe } from "@/services/me";
import { Can } from "@/permissions/Can";
import { useDeleteUser } from "../services/deleteUser";
import { Fragment, useState } from "react";

type Props = {
  data: User[];
};
export const UserManagementTable = (props: Props) => {
  const { data } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState<number>();

  const { data: meData } = useMe();
  const { mutate: deleteUser, isLoading } = useDeleteUser();

  const COLUMNS = ["Email", "First Name", "Last Name", "Role", "Invited At"];

  return (
    <Fragment>
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
            {data.map((user) => (
              <Tr key={user.id}>
                <Td>
                  {user.email} {user.id === meData?.user.id && "(You)"}
                </Td>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>
                  <Text textTransform="capitalize">{user.role}</Text>
                </Td>
                <Td>{formatDateTime(user.createdAt)}</Td>
                <Td>
                  <Can I="delete" a="user_management">
                    <Button
                      colorScheme="red"
                      isDisabled={meData?.user.role === user.role}
                      variant="ghost"
                      type="submit"
                      onClick={() => {
                        onOpen();
                        setId(user.id);
                      }}
                    >
                      Delete
                    </Button>
                  </Can>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <Box paddingBottom="20px" paddingX="22px">
            <Text>Are you sure to delete a user?</Text>
            <Flex paddingTop="10px" width="100%" justifyContent="space-between">
              <Button onClick={onClose} width="48%">
                Cancel
              </Button>
              <Button
                type="submit"
                isLoading={isLoading}
                width="48%"
                colorScheme="red"
                onClick={() => {
                  deleteUser({ id: id as number }, { onSuccess: onClose });
                }}
              >
                Delete
              </Button>
            </Flex>
          </Box>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

const DeleteUserModal = () => {};
