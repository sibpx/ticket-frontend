import { NavLink, useLocation } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";

import { routes } from "shared";

const NavigateToLoginPageButton = () => {
  return (
    <NavLink to={routes.login}>
      {({ isActive }) => (
        <Button isDisabled={isActive} colorScheme="blue">
          Вход
        </Button>
      )}
    </NavLink>
  );
};

const NavigateToRegisterPageButton = () => {
  return (
    <NavLink to={routes.register}>
      {({ isActive }) => (
        <Button isDisabled={isActive} colorScheme="blue">
          Регистрация
        </Button>
      )}
    </NavLink>
  );
};

export const GuestNavbar = () => {
  const location = useLocation();

  return (
    <Flex gap="0.5rem">
      {location.pathname === routes.login ? (
        <NavigateToRegisterPageButton />
      ) : (
        <NavigateToLoginPageButton />
      )}
    </Flex>
  );
};
