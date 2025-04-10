import React, {createContext, useContext} from 'react';
import { useUsers } from '../hooks/useUsers';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const userHook = useUsers();
  return (
    <UserContext.Provider value={userHook}>
    {children}
      </UserContext.Provider>
  );
};
export const useUsersContext = () => useContext(UserContext);