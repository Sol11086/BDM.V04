import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [selectedUser, setSelectedUser] = useState(null);
     useEffect(() => {
        // Load user from localStorage on first render
        const storedUser = localStorage.getItem('selectedUser');
        if (storedUser) {
          setSelectedUser(JSON.parse(storedUser));
        }
      }, []); 
    
      useEffect(() => {
        // Save to localStorage when it changes
        if (selectedUser) {
          localStorage.setItem('selectedUser', JSON.stringify(selectedUser));
        } else {
          localStorage.removeItem('selectedUser');
        }
      }, [selectedUser]);

    return (
        <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}