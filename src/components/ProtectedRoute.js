import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token'); 

  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
