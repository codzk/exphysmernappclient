import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/admin-login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
