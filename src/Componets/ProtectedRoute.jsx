import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const session = JSON.parse(sessionStorage.getItem("login")); // ✅ Use sessionStorage

  const isAuthenticated = session?.isLoggedIn;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
