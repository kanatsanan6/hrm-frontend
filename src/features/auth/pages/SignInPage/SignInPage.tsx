import { Box, Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";

import { SignInForm } from "../../components";
import { useSignIn } from "../../services";

const SignInPage = () => {
  const { mutate: signIn, isLoading } = useSignIn();

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
        width="840px"
        height="500px"
      >
        <Image
          alt="hero"
          src="/images/sign_in_hero.svg"
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
              Sign in
            </Text>
            <Text fontSize="16px" color="gray.500">
              Please sign in to your account.
            </Text>
          </Box>
          <SignInForm
            isLoading={isLoading}
            onSubmit={(data) => signIn({ data })}
          />
          <HStack spacing="4px" fontSize="14px">
            <Text color="gray.500">Don't have an account?&nbsp;</Text>
            <Link color="blue.600" href="/sign-up">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default SignInPage;
