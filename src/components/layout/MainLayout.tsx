import { useAuthContext } from "@/features/auth/context/authContext";
import { useRouter } from "next/router";
import { Box, Flex } from "@chakra-ui/react";
import { Loading } from "../Loading";
import { SideBar } from "../SideBar";
import { useState } from "react";

type MainLayoutProps = {
  children: React.ReactNode;
  isHideSidebar?: boolean;
};
export const MainLayout = (props: MainLayoutProps) => {
  const { children, isHideSidebar } = props;
  const { isLoading, isAuthenticated } = useAuthContext();
  const [isDisplay, setIsDisplay] = useState(true);
  const { push } = useRouter();

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    push("/sign-in");

    return <Loading />;
  }

  return (
    <Flex width="100vw" height="100vh">
      {!isHideSidebar && (
        <SideBar isDisplay={isDisplay} setIsDisplay={setIsDisplay} />
      )}
      <Box
        position="absolute"
        transition="1s"
        left={isDisplay ? "350px" : "0px"}
        flexGrow="1"
        width={isDisplay ? "calc(100% - 350px)" : "100%"}
        height="100vh"
        bgColor="gray.50"
        padding="10px 24px"
      >
        {children}
      </Box>
    </Flex>
  );
};
