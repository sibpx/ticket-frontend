import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useState,
} from "react";

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
  const setter = useCallback(setIsAuthorized, []);

  return (
    <IsAuthorizedContext.Provider value={isAuthorized}>
      <SetterIsAuthorizedContext.Provider value={setter}>
        {children}
      </SetterIsAuthorizedContext.Provider>
    </IsAuthorizedContext.Provider>
  );
};
