import { RouterProvider } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";

import { router } from "pages";
import { theme } from "./theme";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box h="100dvh">
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
};
