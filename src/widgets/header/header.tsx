import { NavLink } from "react-router-dom";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

import { routes, useIsAuthorized } from "shared";

import { AuthNavbar, GuestNavbar } from "./ui";

export const Header = () => {
  const isAuthorized = useIsAuthorized();

  return (
    <Box bgColor="blackAlpha.400" as="header">
      <Flex py="1rem" w="80%" mx="auto">
        <Heading as={NavLink} to={routes.base}>
          Ticket
        </Heading>
        <Spacer />
        {isAuthorized ? <AuthNavbar /> : <GuestNavbar />}
      </Flex>
    </Box>
  );
};
