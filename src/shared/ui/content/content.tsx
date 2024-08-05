import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <Box
      bgColor="blackAlpha.400"
      borderRadius="base"
      mt="2rem"
      p="1rem"
      w="100%"
    >
      {children}
    </Box>
  );
};
