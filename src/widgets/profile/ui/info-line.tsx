import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";

interface InfoLineProps {
  label: string;
  data: string;
}

export const InfoLine = (props: InfoLineProps) => {
  return (
    <Flex p="1rem">
      <Heading as="h3" size="sm">
        {props.label}
      </Heading>
      <Spacer />
      <Text size="md">{props.data}</Text>
    </Flex>
  );
};
