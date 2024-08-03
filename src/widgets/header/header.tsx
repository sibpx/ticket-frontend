import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { routes } from "shared";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bgColor="blackAlpha.400" as="header">
      <Flex py="1rem" w="80%" mx="auto">
        <Heading as={NavLink} to={routes.base}>
          Ticket
        </Heading>
        <Spacer />

        <Flex gap="0.5rem">
          <Button colorScheme="blue" size="md">
            Новый тикет
          </Button>
          <NavLink to={routes.current}>
            {({ isActive }) => (
              <Button isDisabled={isActive}>Текущие тикеты</Button>
            )}
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
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            aria-label="Сменить тему"
          />
        </Flex>
      </Flex>
    </Box>
  );
};
