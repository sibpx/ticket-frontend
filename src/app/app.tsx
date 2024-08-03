import { RouterProvider } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";

import { router } from "pages";

export const App = () => {
  return (
    <ChakraProvider>
      <Box h="100dvh">
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
};
