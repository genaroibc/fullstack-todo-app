import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    username: ""
  });

  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout", { method: "POST" });
    const json = await response.json();

    setAuth({ isAuth: false, username: "" });
    router.push("/login");
  };

  const handleGetUserProfile = () => {
    fetch("/api/auth/profile")
      .then(res => res.json())
      .then(setUserData);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        handleGetUserProfile,
        handleLogout
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
