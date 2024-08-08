import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
