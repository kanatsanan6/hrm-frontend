import FormControl from "@/components/forms/FormControl";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  UseDisclosureReturn,
  VStack,
} from "@chakra-ui/react";
import { Calendar } from "./Calendar";
import { useForm } from "react-hook-form";
import { CreateLeaveParams } from "../types";
import { formatDateTime } from "@/utils/transformDataTime";
import { useCreateLeave } from "../services/createLeave";

type Props = {
  disclosure: UseDisclosureReturn;
};

export const CreateLeaveModal = (props: Props) => {
  const { disclosure } = props;

  const { mutate: createLeave, isLoading } = useCreateLeave();

  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<CreateLeaveParams>({});

  return (
    <Modal isCentered onClose={disclosure.onClose} isOpen={disclosure.isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Leave</ModalHeader>
        <ModalBody>
          <form
            onSubmit={handleSubmit((data) =>
              createLeave({ data }, { onSuccess: disclosure.onClose })
            )}
          >
            <VStack spacing="10px">
              <FormControl label="Leave Type" isRequired={true}>
                <Select placeholder="Select option" {...register("leave_type")}>
                  <option value="vacation_leave">Vacation Leave</option>
                  <option value="sick_leave">Sick Leave</option>
                  <option value="extra_vacation">Extra Leave</option>
                  <option value="business_leave">Business Leave</option>
                </Select>
              </FormControl>

              <FormControl label="Date" isRequired={true}>
                <Calendar
                  onChange={(value) => {
                    setValue(
                      "start_date",
                      formatDateTime(
                        value?.[0] as unknown as string,
                        "YYYY-MM-DD"
                      ) as string
                    );
                    setValue(
                      "end_date",
                      formatDateTime(
                        value?.[1] as unknown as string,
                        "YYYY-MM-DD"
                      ) as string
                    );
                  }}
                />
              </FormControl>

              <FormControl label="Desecription" isRequired={true}>
                <Input
                  placeholder="Go to phuket"
                  {...register("description")}
                />
              </FormControl>

              <Flex paddingY="13px" width="100%" justifyContent="space-between">
                <Button onClick={disclosure.onClose} width="48%">
                  Cancel
                </Button>
                <Button
                  isLoading={isLoading}
                  type="submit"
                  width="48%"
                  colorScheme="blue"
                >
                  Submit
                </Button>
              </Flex>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
