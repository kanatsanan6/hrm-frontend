import { Box, Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";

import { useSignUp } from "../../services";
import { SignUpForm } from "../../components";

const SignUpPage = () => {
  const { mutate: signUp, isLoading } = useSignUp();

  return (
    <Flex
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      bgColor="gray.100"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        width="1100px"
        height="700px"
      >
        <Image
          alt="hero"
          src="/images/sign_up_hero.svg"
          height="100%"
          display={{ base: "none", md: "block" }}
        />
        <VStack
          alignItems="start"
          justifyContent="center"
          width="50%"
          height="100%"
          minWidth="400px"
          bgColor="white"
          padding="30px"
        >
          <Box>
            <Text fontSize="32px" fontWeight="bold">
              Sign Up
            </Text>
            <Text fontSize="16px" color="gray.500">
              Sign up to enjoy our application
            </Text>
          </Box>

          <SignUpForm
            isLoading={isLoading}
            onSubmit={(data) => signUp({ data })}
          />

          <HStack spacing="4px" fontSize="14px">
            <Text color="gray.500">Already have an account?&nbsp;</Text>
            <Link color="blue.600" href="/sign-in">
              Sign In
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default SignUpPage;
