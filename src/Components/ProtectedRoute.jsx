// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// ProtectedRoute component checks if the user is logged in
const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    // If no user is logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
