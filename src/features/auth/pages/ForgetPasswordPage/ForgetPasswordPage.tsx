import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import FormControl from "@/components/forms/FormControl";
import { useForm } from "react-hook-form";

import { resetPasswordSchema } from "../../schema";
import { ForgetPasswordParams } from "../../types";
import { useForgetPassword } from "../../services";
import { zodResolver } from "@hookform/resolvers/zod";

const ForgetPasswordPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ForgetPasswordParams>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate: resetPassword, isLoading } = useForgetPassword();

  return (
    <Flex
      height="100vh"
      width="100vw"
      bgColor="gray.100"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        rounded="10px"
        width="400px"
        bgColor="white"
        padding="30px"
        alignItems="start"
      >
        <Text fontSize="22px" fontWeight="bold">
          Forget Password
        </Text>
        <Box width="100%">
          <form
            onSubmit={handleSubmit((data) => {
              resetPassword({ data });
              reset();
            })}
          >
            <FormControl
              label="Email"
              isRequired={true}
              errorMsg={errors.email?.message}
            >
              <Input
                {...register("email")}
                placeholder="name@mail.com"
                type="text"
                width="100%"
              />
            </FormControl>

            <Button
              colorScheme="blue"
              marginTop="12px"
              type="submit"
              width="100%"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </form>
        </Box>

        <HStack spacing="2px" fontSize="14px">
          <Text color="gray.500">Back to&nbsp;</Text>
          <Link color="blue.600" href="/sign-in">
            Sign In?
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default ForgetPasswordPage;
