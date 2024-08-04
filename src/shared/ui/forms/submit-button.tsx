import { Button, ButtonProps } from "@chakra-ui/react";

export const SubmitButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      colorScheme="blue"
      spinnerPlacement="end"
      type="submit"
      w="100%"
      {...props}
    >
      {children}
    </Button>
  );
};
