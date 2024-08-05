import { Box, Button, Spinner, VStack } from "@chakra-ui/react";
import { Content, useGetCurrentUser, useLogout } from "shared";

import { InfoLine, LineDivider } from "./ui";

export const Profile = () => {
  const { data, isPending } = useGetCurrentUser();
  const onLogout = useLogout();

  if (isPending || !data) {
    return <Spinner size="xl" />;
  }
  return (
    <VStack>
      <Content>
        <InfoLine label="ID профиля" data={data._id} />
        <LineDivider />
        <InfoLine label="Имя профиля" data={data.name} />
        <LineDivider />
        <InfoLine label="Эл. почта" data={data.email} />
        <LineDivider />
        <InfoLine label="Роль" data={data.role} />
      </Content>
      <Button
        size="lg"
        colorScheme="red"
        mt="1rem"
        mx="auto"
        w="15%"
        onClick={onLogout}
      >
        Выход
      </Button>
    </VStack>
  );
};
