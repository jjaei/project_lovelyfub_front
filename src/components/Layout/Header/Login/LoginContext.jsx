// LoginContext.js
import { createContext, useState, useContext } from 'react';

export const LoginContext = createContext(); // Export the context directly

export function useLoginContext() {
  return useContext(LoginContext);
}

export function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); 

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}>
      {children}
    </LoginContext.Provider>
  );
}
