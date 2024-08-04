import { Outlet } from "react-router-dom";
import { Box, Center } from "@chakra-ui/react";

import { Header } from "widgets";

export const Layout = () => {
  return (
    <>
      <Header />
      <Center as="main" mt="4rem">
        <Box w="80%">
          <Outlet />
        </Box>
      </Center>
    </>
  );
};
