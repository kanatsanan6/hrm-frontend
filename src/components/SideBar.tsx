import { Dispatch, SetStateAction, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { RxExit } from "react-icons/rx";
import { FaUser, FaCalendar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FcOrganization } from "react-icons/fc";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { useAuthContext } from "@/features/auth/context/authContext";
import { useRouter } from "next/router";

type Props = {
  isDisplay: boolean;
  setIsDisplay: Dispatch<SetStateAction<boolean>>;
};

export const SideBar = (props: Props) => {
  const { isDisplay, setIsDisplay } = props;
  const { setSignOut } = useAuthContext();

  const onSignOut = () => {
    setSignOut();
  };

  const handleOnClose = () => {
    setIsDisplay((prev) => !prev);
  };

  const SIDEBAR_ROUTES = [
    {
      url: "/user-management",
      name: "User Management",
      icon: FaUser,
    },
    {
      url: "/leaves",
      name: "Leaves",
      icon: FaCalendar,
    },
    {
      url: "/settings",
      name: "Settings",
      icon: IoMdSettings,
    },
  ];

  return (
    <Flex
      zIndex="100"
      direction="column"
      width="350px"
      height="100vh"
      padding="20px 10px"
      justifyContent="space-between"
      transition="1s"
      position="absolute"
      bgColor="white"
      transform={isDisplay ? "" : "translateX(-100%)"}
    >
      <Box>
        <HStack alignItems="center">
          <Icon as={FcOrganization} fontSize="40px" />
          <Text fontSize="16px" fontWeight="bold">
            Human Resource Managment
          </Text>
          <Box
            onClick={handleOnClose}
            cursor="pointer"
            position="relative"
            left="42px"
          >
            <Icon
              fontSize="28px"
              transform={isDisplay ? "" : "rotate(180deg)"}
              transition="0.5s"
              as={BsFillArrowLeftCircleFill}
              sx={{
                _hover: {
                  color: "blue.500",
                },
              }}
              color="blue.300"
            />
          </Box>
        </HStack>

        <VStack alignItems="start" marginTop="20px" spacing="6px">
          {SIDEBAR_ROUTES.map((elem, idx) => (
            <Menu
              key={idx}
              route={elem.url}
              icon={elem.icon}
              label={elem.name}
            />
          ))}
        </VStack>
      </Box>

      <Popover placement="top-start">
        <PopoverTrigger>
          <HStack cursor="pointer">
            <Avatar name="Kanatsanan Janpakdee" size="sm" />
            <Text fontSize="14px">Kanatsanan Janpakdee</Text>
          </HStack>
        </PopoverTrigger>
        <PopoverContent
          width="fit-content"
          border="none"
          sx={{ _focus: { boxShadow: "none" } }}
        >
          <HStack width="fit-content">
            <Button
              onClick={onSignOut}
              fontSize="12px"
              leftIcon={<RxExit />}
              sx={{ _focus: { boxShadow: "none" } }}
            >
              Sign Out
            </Button>
          </HStack>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

type MenuProps = {
  route: string;
  label: string;
  icon: IconType;
};

const Menu = (props: MenuProps) => {
  const { route, label, icon } = props;

  const router = useRouter();
  const matchRoute = router.pathname === route;

  return (
    <HStack
      alignItems="center"
      spacing="14px"
      width="100%"
      paddingY="8px"
      paddingLeft="8px"
      paddingRight="14px"
      cursor="pointer"
      bgColor={matchRoute ? "gray.100" : "white"}
      rounded="10px"
      sx={{
        _hover: {
          bgColor: "gray.100",
        },
      }}
    >
      <Icon
        as={icon}
        fontSize="18px"
        color={matchRoute ? "gray.500" : "gray.400"}
      />
      <Link
        fontSize="15px"
        fontWeight={matchRoute ? "bold" : "normal"}
        color="gray.600"
        href={route}
        sx={{
          _hover: {
            textDecoration: "none",
          },
        }}
      >
        {label}
      </Link>
    </HStack>
  );
};
