import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpParams } from "../types";
import { signUpFormSchema } from "../schema";
import FormControl from "@/components/forms/FormControl";
import PasswordForm from "@/components/forms/PasswordForm";
import PasswordValidatorForm from "@/components/forms/PasswordValidatorForm";

type SignUpFormProps = {
  onSubmit: (data: SignUpParams) => void;
  isLoading: boolean;
};

export const SignUpForm = (props: SignUpFormProps) => {
  const { onSubmit, isLoading } = props;

  const [password, setPassword] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpParams>({
    resolver: zodResolver(signUpFormSchema),
  });

  return (
    <Box width="100%">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <VStack width="100%" spacing="10px" alignItems="start">
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

          <FormControl
            label="First Name"
            isRequired={true}
            errorMsg={errors.first_name?.message}
          >
            <Input {...register("first_name")} type="text" placeholder="John" />
          </FormControl>

          <FormControl
            label="Last Name"
            isRequired={true}
            errorMsg={errors.last_name?.message}
          >
            <Input {...register("last_name")} type="text" placeholder="Doe" />
          </FormControl>

          <FormControl
            label="Company Name"
            isRequired={true}
            errorMsg={errors.company_name?.message}
          >
            <Input
              {...register("company_name")}
              type="text"
              placeholder="Company Co., Ltd."
            />
          </FormControl>

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

          <Box width="100%">
            <Button
              type="submit"
              colorScheme="blue"
              marginTop="6px"
              width="100%"
              isLoading={isLoading}
            >
              Sign Up
            </Button>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};
