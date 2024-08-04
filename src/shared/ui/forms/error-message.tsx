import { Text, TextProps } from "@chakra-ui/react";

export const ErrorMessage = ({ children = "", ...props }: TextProps) => {
  return (
    <Text
      fontSize="xs"
      as="span"
      height="1rem"
      display="block"
      mt="0.25rem"
      color="red.300"
      {...props}
    >
      {children}
    </Text>
  );
};
