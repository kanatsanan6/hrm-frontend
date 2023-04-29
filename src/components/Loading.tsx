import { Box, CircularProgress } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Box minH="75vh" display="flex" alignItems="center" justifyContent="center">
      <CircularProgress isIndeterminate color="blue.400" />
    </Box>
  );
};
