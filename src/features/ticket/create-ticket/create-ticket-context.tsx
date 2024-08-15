import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useState,
} from "react";

export const IsCreatedContext = createContext(false);

export const SetterIsCreatedContext = createContext<Dispatch<boolean> | null>(
  null,
);

interface IsCreatedProviderProps {
  children: ReactNode;
}

export const IsCreatedProvider = ({ children }: IsCreatedProviderProps) => {
  const [isCreated, setIsCreated] = useState(false);
  const setter = useCallback(setIsCreated, []);

  return (
    <IsCreatedContext.Provider value={isCreated}>
      <SetterIsCreatedContext.Provider value={setter}>
        {children}
      </SetterIsCreatedContext.Provider>
    </IsCreatedContext.Provider>
  );
};
