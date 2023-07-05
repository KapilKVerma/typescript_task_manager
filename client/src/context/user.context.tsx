import React, { useState } from "react";

export type UserContextType = {
  signedIn: boolean;
  signIn: () => void;
  logOut: () => void;
};

export const UserContext = React.createContext<UserContextType>({
  signedIn: true,
  signIn: () => {},
  logOut: () => {},
});

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [signedIn, setSignedIn] = useState(true);

  const signIn = (): void => {
    setSignedIn(true);
  };

  const logOut = (): void => {
    setSignedIn(false);
  };

  return (
    <UserContext.Provider value={{ signedIn, signIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
