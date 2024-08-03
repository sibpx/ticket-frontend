import { Heading, HeadingProps } from "@chakra-ui/react";

export const FormHeading = ({children, ...props}: HeadingProps) => {
  return (
    <Heading as="h1" size="lg" mb="2rem" {...props}>
      {children}
    </Heading>
  );
};
