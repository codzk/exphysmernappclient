import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  return token ? <Component {...rest} /> : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
