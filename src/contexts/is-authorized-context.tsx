import { createContext, Dispatch, ReactNode, useState } from "react";

export const IsAuthorizedContext = createContext(false);

export const SetterIsAuthorizedContext =
  createContext<Dispatch<boolean> | null>(null);

interface IsAuthorizedProviderProps {
  children: ReactNode;
}

export const IsAuthorizedProvider = ({
  children,
}: IsAuthorizedProviderProps) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <IsAuthorizedContext.Provider value={isAuthorized}>
      <SetterIsAuthorizedContext.Provider value={setIsAuthorized}>
        {children}
      </SetterIsAuthorizedContext.Provider>
    </IsAuthorizedContext.Provider>
  );
};
