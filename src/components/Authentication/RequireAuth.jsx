import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider"; // Ensure correct import path
import { useOwnerAuth } from "./OwnerAuthProvider"; // Ensure correct import path

const RequireAuth = ({ children, forOwner = false, forUser = false }) => {
  const { user: userAuth } = useAuth();
  const { user: ownerAuth } = useOwnerAuth();

  if (forUser && !userAuth) {
    return <Navigate to="/user-login" replace />;
  }

  if (forOwner && !ownerAuth) {
    return <Navigate to="/owner-login" replace />;
  }

  if (!forOwner && !forUser && !userAuth && !ownerAuth) {
    return <Navigate to="/user-login" replace />;
  }

  return children;
};

export default RequireAuth;
