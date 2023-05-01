import {
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export type PasswordInputProps = InputProps & {};

// eslint-disable-next-line react/display-name
const PasswordForm = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow((show) => !show);

    return (
      <InputGroup size={props.size}>
        <Input
          pr="3rem"
          type={show ? "text" : "password"}
          {...props}
          ref={ref}
        />
        <InputRightElement width="2rem">
          <IconButton
            aria-label="toggle view password"
            onClick={handleClick}
            variant="unstyled"
            colorScheme="gray"
            icon={show ? <FiEyeOff /> : <FiEye />}
            size="sm"
            tabIndex={-1}
            sx={{
              color: "gray.400",
              fontSize: "20px",
              justifyContent: "center",
              d: "inline-flex",
              mr: 4,
              _focus: {
                boxShadow: "none",
              },
            }}
          />
        </InputRightElement>
      </InputGroup>
    );
  }
);

export default PasswordForm;
