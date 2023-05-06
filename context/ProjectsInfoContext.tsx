import React, { createContext, ReactNode, useState } from "react";

interface UserNameProviderProps {
  children: ReactNode;
}

interface UserNameInterface {
  userName: string;
  setUserName: (name: string) => void;
}

export const UserNameContext = React.createContext<UserNameInterface>({
  userName: "",
  setUserName: function (userName: string) {
    return userName;
  },
});

export function UserNameProvider({ children }: UserNameProviderProps) {
  const [userName, setUserName] = useState("");

  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
}
