import { RouterProvider } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";

import { IsAuthorizedProvider } from "contexts";
import { router } from "pages";

import { theme } from "./theme";
import { QueryProvider } from "./providers";

export const AppProvider = () => {
  return (
    <QueryProvider>
      <IsAuthorizedProvider>
        <ChakraProvider theme={theme}>
          <Box h="100dvh">
            <RouterProvider router={router} />
          </Box>
        </ChakraProvider>
      </IsAuthorizedProvider>
      ;
    </QueryProvider>
  );
};
