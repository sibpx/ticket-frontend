import { Center, CenterProps } from "@chakra-ui/react";

export const FormLayout = ({ children, ...props }: CenterProps) => {
  return (
    <Center
      p="2rem"
      as="form"
      flexDirection="column"
      bgColor="layout.300"
      w="26rem"
      borderRadius="0.25rem"
      {...props}
    >
      {children}
    </Center>
  );
};
