import React, { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Ensure correct import

export const AuthContext = createContext({
  user: null,
  ownerHandleLogin: (token) => {},
  ownerHandleLogout: () => {},
});

export const OwnerAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const ownerHandleLogin = (token) => {
    try {
      const decodedUser = jwtDecode(token);
      localStorage.setItem("userId", decodedUser.sub);
      localStorage.setItem("token", token);
      setUser(decodedUser);
      console.log("User logged in, token stored in localStorage");
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  const ownerHandleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setUser(null);
    console.log("User logged out, token removed from localStorage");
  };

  return (
    <AuthContext.Provider value={{ user, ownerHandleLogin, ownerHandleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useOwnerAuth = () => {
  return useContext(AuthContext);
};
