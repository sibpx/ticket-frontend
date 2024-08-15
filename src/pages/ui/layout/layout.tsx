import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Box, Center, VStack } from "@chakra-ui/react";

import { Header, Footer } from "widgets";

export const Layout = memo(() => {
  return (
    <VStack h="100%">
      <Header />
      <Center as="main" my="4rem" flexGrow="1" h="100%" w="100%">
        <Box w="80%" h="100%">
          <Outlet />
        </Box>
      </Center>
      <Footer />
    </VStack>
  );
});
