import { useMemo } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import FormControl from "@/components/forms/FormControl";
import { MainLayout } from "@/components/layout/MainLayout";
import { NextPageWithLayout } from "@/types/common";
import { useUsers } from "../services/getUsers";
import { UserManagementTable } from "../components/UserManagementTable";
import { useInviteUser } from "../services";
import { useForm } from "react-hook-form";
import { InviteUserPayload } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { inviteUserSchema } from "../schema";

const UserManagementPage: NextPageWithLayout = () => {
  const { data } = useUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate: inviteUser, isLoading } = useInviteUser();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InviteUserPayload>({
    resolver: zodResolver(inviteUserSchema),
  });

  const userData = useMemo(() => {
    return data || [];
  }, [JSON.stringify(data)]);

  return (
    <Box
      width="100%"
      height="100%"
      bgColor="white"
      rounded="20px"
      padding="35px 30px"
    >
      <HStack justifyContent="space-between">
        <Text fontSize="25px" fontWeight="bold">
          User Management
        </Text>
        <Button onClick={onOpen} colorScheme="blue">
          Invite User
        </Button>
      </HStack>
      <UserManagementTable data={userData} />

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent width="100%">
          <ModalHeader>Invite User</ModalHeader>
          <form
            onSubmit={handleSubmit((data) => {
              inviteUser({ data }, { onSuccess: onClose });
            })}
          >
            <VStack paddingX="30px" paddingBottom="30px" alignItems="start">
              <FormControl
                label="First Name"
                isRequired={true}
                errorMsg={errors.first_name?.message}
              >
                <Input
                  {...register("first_name")}
                  type="text"
                  placeholder="John"
                />
              </FormControl>
              <FormControl
                label="Last Name"
                isRequired={true}
                errorMsg={errors.last_name?.message}
              >
                <Input
                  {...register("last_name")}
                  type="text"
                  placeholder="Doe"
                />
              </FormControl>
              <FormControl
                label="Email"
                isRequired={true}
                errorMsg={errors.email?.message}
              >
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="name@mail.com"
                />
              </FormControl>
              <Flex width="100%" justifyContent="space-between">
                <Button onClick={onClose} width="48%">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  isLoading={isLoading}
                  width="48%"
                  colorScheme="blue"
                >
                  Invite
                </Button>
              </Flex>
            </VStack>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default UserManagementPage;

UserManagementPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
