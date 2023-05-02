import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { MainLayout } from "@/components/layout/MainLayout";
import { NextPageWithLayout } from "@/types/common";
import { LeaveTable } from "../components/LeaveTable";
import { CreateLeaveModal } from "../components/CreateLeaveModal";

const LeavePage: NextPageWithLayout = () => {
  const disclosure = useDisclosure();

  return (
    <Box
      width="100%"
      height="100%"
      bgColor="white"
      rounded="20px"
      padding="35px 30px"
      overflowY="scroll"
    >
      <VStack alignItems="strech" marginBottom="20px">
        <Text fontSize="25px" fontWeight="bold">
          Quota
        </Text>
        <Box padding="20px" bgColor="gray.100" rounded="10px">
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={6}
          >
            <LeaveQuota
              name="Vacation"
              usage={10}
              max={10}
              icon="images/vacation.png"
            />
            <LeaveQuota
              name="Extra Vacation"
              usage={10}
              max={10}
              icon="images/extra.png"
            />
            <LeaveQuota
              name="Sick Leave"
              usage={10}
              max={12}
              icon="images/sick.png"
            />
            <LeaveQuota
              name="Business Leave"
              usage={10}
              max={10}
              icon="images/business.png"
            />
          </Grid>
        </Box>
      </VStack>
      <HStack justifyContent="space-between">
        <Text fontSize="25px" fontWeight="bold">
          Your Leave
        </Text>
        <Button colorScheme="blue" onClick={disclosure.onOpen}>
          Create Leave
        </Button>
      </HStack>
      <LeaveTable />
      <CreateLeaveModal disclosure={disclosure} />
    </Box>
  );
};

export default LeavePage;

type LeaveQuotaType = {
  name: string;
  usage: number;
  max: number;
  icon: string;
};

const LeaveQuota = (props: LeaveQuotaType) => {
  const { name, usage, max, icon } = props;

  return (
    <GridItem w="100%" h="100%" bg="white" rounded="10px">
      <VStack
        direction="column"
        justifyContent="space-between"
        padding="20px"
        width="100%"
        height="100%"
      >
        <Box>
          <Image margin="auto" src={icon} w={{ base: "50px", xl: "100px" }} />
          <Text
            textAlign="center"
            fontSize={{ base: "14px", md: "18px", xl: "22px" }}
          >
            {name}
          </Text>
        </Box>
        <Text
          fontSize={{ base: "18px", md: "22px", xl: "26px" }}
          fontWeight="bold"
        >
          {usage} / {max}
        </Text>
      </VStack>
    </GridItem>
  );
};

LeavePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
