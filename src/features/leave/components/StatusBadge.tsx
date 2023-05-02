import { Box, ResponsiveValue } from "@chakra-ui/react";

type Props = {
  status: "pending" | "approved" | "rejected";
};

export const StatusBadge = (props: Props) => {
  const { status } = props;
  const bgColor = () => {
    switch (status) {
      case "approved":
        return "green.400";
      case "pending":
        return "orange.400";
      case "rejected":
        return "red.400";
    }
  };

  return (
    <Box
      sx={{
        bgColor: bgColor,
        textTransform: "capitalize",
        width: "fit-content",
        padding: "4px 8px",
        fontSize: "12px",
        color: "white",
        fontWeight: "bold",
        rounded: "10px",
      }}
    >
      {status}
    </Box>
  );
};
