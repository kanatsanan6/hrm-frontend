import { Box, Collapse, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  errorMsg?: string;
  label?: string;
  isRequired?: boolean;
};

const FormControl = (props: Props) => {
  const { children, errorMsg, label, isRequired } = props;

  const isInvalid = Boolean(errorMsg);

  return (
    <VStack alignItems="start" width="100%">
      {label && (
        <Flex justifyContent="space-between" alignItems="baseline" width="100%">
          <Flex>
            <Text>{label}</Text>
            {isRequired && <Text color="red">*</Text>}
          </Flex>
          <Collapse in={isInvalid}>
            <Text fontSize="14px" color="red.600">
              {errorMsg}
            </Text>
          </Collapse>
        </Flex>
      )}
      {children}
    </VStack>
  );
};

export default FormControl;
