import FormControl from "@/components/forms/FormControl";
import PasswordForm from "@/components/forms/PasswordForm";
import { useForm } from "react-hook-form";

import { SignInParams } from "../types";
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

type SignInFormProps = {
  onSubmit: (data: SignInParams) => void;
  isLoading: boolean;
};

export const SignInForm = (props: SignInFormProps) => {
  const { onSubmit, isLoading } = props;

  const { handleSubmit, register } = useForm<SignInParams>();

  return (
    <Box width="100%">
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <VStack width="100%" spacing="16px" alignItems="start">
          <FormControl label="Email" isRequired={true}>
            <Input
              {...register("email")}
              type="email"
              placeholder="name@mail.com"
            />
          </FormControl>

          <FormControl label="Password" isRequired={true}>
            <PasswordForm {...register("password")} placeholder="••••••••" />
          </FormControl>

          <VStack width="100%">
            <HStack justifyContent="space-between" width="100%">
              <HStack>
                <Checkbox />
                <Text fontSize="14px">Remember me</Text>
              </HStack>
              <Link color="blue.600" fontSize="14px" href="/forget-password">
                Forget password?
              </Link>
            </HStack>
            <Button
              type="submit"
              colorScheme="blue"
              width="100%"
              marginTop="200px"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </VStack>
        </VStack>
      </form>
    </Box>
  );
};
