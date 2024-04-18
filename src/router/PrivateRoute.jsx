// src/router/PrivateRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // Asegúrate de que la ruta es correcta

export const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    // Redirecciona a login si no hay usuario autenticado
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};
