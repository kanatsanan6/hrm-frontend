import FormControl from "@/components/forms/FormControl";
import PasswordForm from "@/components/forms/PasswordForm";
import PasswordValidatorForm from "@/components/forms/PasswordValidatorForm";
import { useResetPassword } from "@/features/auth/services/resetPassword";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ResetPasswordPayload } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "../../schema";

export type ResetPasswordPageProps = {
  token: string;
};

const ResetPasswordPage = (props: ResetPasswordPageProps) => {
  const { token } = props;
  const [password, setPassword] = useState<string>("");

  const { mutate: resetPassword, isLoading } = useResetPassword();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordPayload>({
    resolver: zodResolver(resetPasswordSchema),
  });

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
        spacing="12px"
      >
        <Text fontSize="22px" fontWeight="bold">
          Reset Password
        </Text>
        <Box width="100%">
          <form
            onSubmit={handleSubmit((data) => resetPassword({ data, token }))}
          >
            <FormControl
              label="Password"
              isRequired={true}
              errorMsg={errors.password?.message}
            >
              <PasswordValidatorForm value={password}>
                <PasswordForm
                  {...register("password")}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  marginBottom="10px"
                />
              </PasswordValidatorForm>
            </FormControl>

            <FormControl
              label="Password Confirmation"
              isRequired={true}
              errorMsg={errors.password_confirmation?.message}
            >
              <PasswordForm
                {...register("password_confirmation")}
                placeholder="••••••••"
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
      </VStack>
    </Flex>
  );
};

export default ResetPasswordPage;
