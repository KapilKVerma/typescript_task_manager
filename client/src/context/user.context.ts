import React from "react";

interface UserContextType {
  value: boolean;
  updateValue: (newValue: string) => void;
}

type UserContextProviderProps = {
  children: React.ReactNode;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};
