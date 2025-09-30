

import React, { createContext } from "react";
import useUsers from "../hooks/useUsers";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { users, loading, error } = useUsers();

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
