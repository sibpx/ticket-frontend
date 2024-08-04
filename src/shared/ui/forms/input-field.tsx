import { FormLabel, Input, InputProps } from "@chakra-ui/react";
import { ForwardedRef, forwardRef, ReactNode } from "react";

interface InputFieldProps extends InputProps {
  children: ReactNode;
  type: string;
  id: string;
}

export const InputField = forwardRef(
  (
    { id, children, type, ...props }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <>
        <FormLabel htmlFor={id} fontSize="sm">
          {children}
        </FormLabel>
        <Input id={id} type={type} {...props} ref={ref} />
      </>
    );
  },
);
