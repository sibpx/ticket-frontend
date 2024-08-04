import { Heading, HeadingProps } from "@chakra-ui/react";

export const PageHeader = (props: HeadingProps) => {
  return (
    <Heading as="h2" size="xl">
      {props.children}
    </Heading>
  );
};
