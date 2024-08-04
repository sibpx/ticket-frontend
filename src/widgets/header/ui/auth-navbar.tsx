import { NavLink } from "react-router-dom";

import { Flex, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { routes, useLogout } from "shared";

export const AuthNavbar = () => {
  const onLogout = useLogout();

  return (
    <Flex gap="0.5rem">
      <Button colorScheme="blue" leftIcon={<AddIcon />}>
        Создать тикет
      </Button>

      <NavLink to={routes.current}>
        {({ isActive }) => <Button isDisabled={isActive}>Главная</Button>}
      </NavLink>
      <NavLink to={routes.history}>
        {({ isActive }) => <Button isDisabled={isActive}>История</Button>}
      </NavLink>
      <NavLink to={routes.account}>
        {({ isActive }) => (
          <Button isDisabled={isActive} colorScheme="teal">
            Аккаунт
          </Button>
        )}
      </NavLink>
      <Button colorScheme="red" onClick={onLogout}>
        Выйти
      </Button>
    </Flex>
  );
};
