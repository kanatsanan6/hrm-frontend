import { ProtectedLayout } from "./ProtectedLayout";
import { PremissionContextProvider } from "@/permissions/context";
import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "../SideBar";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  isHideSidebar?: boolean;
};

export const CommonLayout = (props: Props) => {
  const { children, isHideSidebar } = props;
  const [isDisplay, setIsDisplay] = useState(true);

  return (
    <ProtectedLayout>
      <PremissionContextProvider>
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
      </PremissionContextProvider>
    </ProtectedLayout>
  );
};
