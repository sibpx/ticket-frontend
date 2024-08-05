import { NavLink } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";

import { CreateTicket } from "features";
import { routes } from "shared";

export const AuthNavbar = () => {
  return (
    <Flex gap="0.5rem">
      <CreateTicket />

      <NavLink to={routes.base}>
        {({ isActive }) => <Button isDisabled={isActive}>Тикеты</Button>}
      </NavLink>
      <NavLink to={routes.account}>
        {({ isActive }) => (
          <Button isDisabled={isActive} colorScheme="teal">
            Аккаунт
          </Button>
        )}
      </NavLink>
    </Flex>
  );
};
