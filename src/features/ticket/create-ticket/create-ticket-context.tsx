import { createContext, Dispatch, ReactNode, useState } from "react";

export const IsCreatedContext = createContext(false);

export const SetterIsCreatedContext = createContext<Dispatch<boolean> | null>(
  null,
);

interface IsCreatedProviderProps {
  children: ReactNode;
}

export const IsCreatedProvider = ({ children }: IsCreatedProviderProps) => {
  const [isCreated, setIsCreated] = useState(false);

  return (
    <IsCreatedContext.Provider value={isCreated}>
      <SetterIsCreatedContext.Provider value={setIsCreated}>
        {children}
      </SetterIsCreatedContext.Provider>
    </IsCreatedContext.Provider>
  );
};
