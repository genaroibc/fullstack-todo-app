import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    username: ""
  });

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Auth context is not defined here!!");

  return context;
};
