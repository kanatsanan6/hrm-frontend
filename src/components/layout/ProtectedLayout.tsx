import { useAuthContext } from "@/features/auth/context/authContext";
import { useMe } from "@/services/me";
import { useRouter } from "next/router";
import { Loading } from "../Loading";
import { Box } from "@chakra-ui/react";
import { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

export const ProtectedLayout = (props: Props) => {
  const { isLoading, isAuthenticated } = useAuthContext();
  const { push } = useRouter();

  useMe({ enabled: isAuthenticated });

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    push("/sign-in");

    return <Loading />;
  }

  return <Fragment>{props.children}</Fragment>;
};
