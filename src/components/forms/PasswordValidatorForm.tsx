import { Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";

type Props = {
  children: ReactNode;
  value: string;
};

const PasswordValidatorForm = (props: Props) => {
  const { children, value } = props;
  const [show, setShow] = useState(false);

  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const specialRegex = /[^a-zA-Z0-9]/;

  const isAtLeast8Char = value.length >= 8;
  const isContainLowerCase = lowercaseRegex.test(value);
  const isContainUpperCase = uppercaseRegex.test(value);
  const isContainNumber = numberRegex.test(value);
  const isContainSpecial = specialRegex.test(value);

  return (
    <Flex
      direction="column"
      alignItems="end"
      zIndex="50"
      width="100%"
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <Flex
          border="1px solid"
          borderColor="gray.200"
          rounded="10px"
          marginBottom="-155px"
          bgColor="white"
          padding="6px"
          width="fit-content"
          marginTop="4px"
        >
          <VStack alignItems="start">
            <PasswordHint
              text="At least 8 characters"
              passed={isAtLeast8Char}
            />
            <PasswordHint
              text="Must contain at least 1 lowercase (a-z)"
              passed={isContainLowerCase}
            />
            <PasswordHint
              text="Must contain at least 1 uppercase (A-Z)"
              passed={isContainUpperCase}
            />
            <PasswordHint
              text="Must contain at least 1 number (0-9)"
              passed={isContainNumber}
            />
            <PasswordHint
              text="Must contain at least 1 special character"
              passed={isContainSpecial}
            />
          </VStack>
        </Flex>
      )}
    </Flex>
  );
};

type PasswordHintProps = {
  text: string;
  passed: boolean;
};

const PasswordHint = (passwordHintProps: PasswordHintProps) => {
  const { text, passed } = passwordHintProps;

  return (
    <HStack alignItems="center">
      {passed ? (
        <Icon as={BsCheckCircleFill} color="#00C4A8" />
      ) : (
        <Icon as={BsCircle} color="#C4C4C4" />
      )}
      <Text fontSize="14px">{text}</Text>
    </HStack>
  );
};

export default PasswordValidatorForm;
