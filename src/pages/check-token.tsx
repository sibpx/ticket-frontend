import { Center, Spinner } from "@chakra-ui/react";
import { ReactNode, useLayoutEffect, useState } from "react";
import {
  queryClient,
  CURRENT_USER,
  getCurrentUser,
  useSetterIsAuthorized,
} from "shared";

interface CheckTokenProps {
  children: ReactNode;
}
export const CheckToken = ({ children }: CheckTokenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const setIsAuthorized = useSetterIsAuthorized();

  useLayoutEffect(() => {
    queryClient
      .fetchQuery({
        queryKey: [CURRENT_USER],
        queryFn: getCurrentUser,
      })
      .then(() => {
        setIsAuthorized && setIsAuthorized(true);
      })
      .catch(() => console.log("error"))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <Center h="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  return <>{children}</>;
};
