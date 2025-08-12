import React, { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Ensure correct import

export const AuthContext = createContext({
  user: null,
  handleLogin: (token) => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (token) => {
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

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setUser(null);
    console.log("User logged out, token removed from localStorage");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
