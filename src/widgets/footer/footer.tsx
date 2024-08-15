import { Box, Flex, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box bgColor="blackAlpha.400" as="footer" w="100%">
      <Flex py="1rem" w="80%" mx="auto">
        <Text mr="0.3rem">by</Text>
        <Link href="https://github.com/sibpx">Andrey Mikulin</Link>
      </Flex>
    </Box>
  );
};
